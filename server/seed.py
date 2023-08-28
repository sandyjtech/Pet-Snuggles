#!/usr/bin/env python3
# seed.py

# Standard library imports
from faker import Faker
import json

# Local imports
from app import app, db
from models import User, Pet

fake = Faker()

with open('db.json', 'r') as json_file:
    data = json.load(json_file)

dogs = data.get('dogs', [])
cats = data.get('cats', [])

def seed_users(num_users):
    for _ in range(num_users):
        user = User(
            username=fake.user_name(),
            password=fake.password(),
            address=fake.address(),
            small_kids=fake.boolean(),
            own_pets=fake.boolean(),
            space=fake.random_element(elements=("Owned-Home with no yard", "Owned-Home with yard", "Lease-Home with no yard", "Leased-Home with yard"))
        )
        db.session.add(user)
    db.session.commit()

def seed_pets(pet_data):
    for animal_type, pet_info_list in pet_data.items():
        for pet_info in pet_info_list:
            pet = Pet(
                animal_type=animal_type,
                name=pet_info['name'],
                age=pet_info['age'],
                breed=pet_info['breed'],
                sex=pet_info['sex'],
                size=pet_info['size'],
                temperament=pet_info['temperament'],
                good_wt_pets=pet_info['good_wt_pets'],
                good_wt_kids=pet_info['good_wt_kids'],
                image=pet_info['image'],
                adoption_link=pet_info['adoption_link']
            )
            db.session.add(pet)
    db.session.commit()

if __name__ == "__main__":
    with app.app_context():
        print("Starting seed...")

        # Clear existing data from the database
        print("Clearing data...")
        db.drop_all()
        db.create_all()

        # Seed users
        num_users = 5
        ##seed_users(num_users)

        # Seed pets
        ##seed_pets({'dog': dogs, 'cat': cats})

        print("Seed complete!")
