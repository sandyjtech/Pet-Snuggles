#models.py
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy.orm import validates
from config import db, bcrypt


# Models go here!
class User(db.Model, SerializerMixin):
    __tablename__ = "users"
    
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(15), nullable=False)
    _password = db.Column(db.String(), nullable=False)
    address = db.Column(db.String, nullable=False)
    small_kids = db.Column(db.Boolean, )
    own_pets = db.Column(db.Boolean, )
    space = db.Column(db.String)
    
    favorites = db.relationship("Favorite", backref="user")
    pets = association_proxy("favorites", "pet")
    
    serialize_rules = ("-favorites.user", )
    
    @validates("space")
    def validate_space(self, key, value):
        if value not in ["Owned-Home with no yard",
                     "Owned-Home with yard",
                     "Lease-Home with no yard",
                     "Leased-Home with yard",                         
                     ]:
            raise ValueError("Must choose from list")
        return value
    
    @validates("password")
    def validate_password(self, key, value):
        if len(value) < 6:
            raise ValueError("Password must be at least 6 characters long.")

        if not any(char in "!@#$%^&*()_-+=<>?/~." for char in value):
            raise ValueError("Password must contain at least one special character.")

        if not any(char.isupper() for char in value):
            raise ValueError("Password must contain at least one uppercase letter.")

        if not any(char.isdigit() for char in value):
            raise ValueError("Password must contain at least one digit.")

        return value       
    
    @hybrid_property
    def password(self):
        return self._password

    @password.setter
    def password(self, plaintext_password):
      
        hashed_password = bcrypt.generate_password_hash(plaintext_password.encode("utf-8"))
        self._password = hashed_password.decode('utf-8')

    def check_password(self, plaintext_password):
 
        return bcrypt.check_password_hash(self._password, plaintext_password.encode('utf-8'))

            
    def __repr__(self):
        return f'User (id={self.id}, username={self.username})'
    
class Pet(db.Model, SerializerMixin):
    __tablename__ = "pets"
    
    id = db.Column(db.Integer, primary_key=True)
    animal_type = db.Column(db.String)
    name = db.Column(db.String(15), nullable=False)
    age = db.Column(db.String, nullable=False)
    breed = db.Column(db.String, nullable=False)
    sex = db.Column(db.String , nullable=False)
    size = db.Column(db.String)
    temperament = db.Column(db.String, nullable=False)
    good_wt_kids = db.Column(db.Boolean , nullable=False)
    good_wt_pets = db.Column(db.Boolean, nullable=False) 
    image = db.Column(db.String , nullable=False)
    adoption_link = db.Column(db.String , nullable=False)
    
    schedules = db.relationship("Schedule", backref="pet")
    favorites = db.relationship("Favorite", back_populates="pet")
    
    serialize_rules = ("-schedules", "-favorites",)
      
    
    @validates("sex")
    def validate_sex(self, key, value):
        if value not in ["female", "male"]:
            raise ValueError("Must choose female or male.")
        return value
    
    @validates("size")
    def validate_size(self, key,value):
        if value not in ['small', 'medium', 'large', 'x-large']:
            raise ValueError("Must choose between small, medium, large, x-large")
        return value
    
    def __repr__(self):
        return f'Pet (id={self.id}, name={self.name} breed={self.breed})'

class Favorite(db.Model, SerializerMixin):
    __tablename__ = "favorites"
    id = db.Column(db.Integer, primary_key=True)
    pet_id = db.Column(db.Integer, db.ForeignKey('pets.id'))
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    
    pet = db.relationship("Pet", back_populates="favorites")
    serialize_rules = ('-favorites', '-schedules',)
    
    def __repr__(self):
        return f'Favorite (id={self.id}, pet_id={self.pet_id}, user_id={self.user_id})'
    
class Schedule(db.Model, SerializerMixin):
    __tablename__ = "schedules"
    
    id = db.Column(db.Integer, primary_key=True)
    pet_id = db.Column(db.Integer, db.ForeignKey('pets.id'))  
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))  
    date_time = db.Column(db.DateTime, nullable=False)  # Store date and time explicitly
    
    serialize_rules = ("-favorites", "-schedules",)
    
    def __repr__(self):
        return f'Schedule (user_id={self.user_id}, pet_id={self.pet_id}, Time and Date={self.date_time})'
    
    

    
