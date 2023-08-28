#!/usr/bin/env python3
# seed.py

# Standard library imports
from faker import Faker
import bcrypt

# Local imports
from app import app, db
from models import User, Pet

fake = Faker()

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

def seed_pets(num_pets):
    for _ in range(num_pets):
        pet = Pet(
            name=fake.first_name(),
            age=fake.random_int(min=1, max=15),
            breed=fake.random_element(elements=("Dog", "Cat", "Rabbit")),
            temperament=fake.random_element(elements=("Friendly", "Calm", "Energetic")),
            good_wt_pets=fake.boolean(),
            sex=fake.random_element(elements=("Male", "Female")),
            size=fake.random_element(elements=("small", "medium", "large", "x-large")),  # Use lowercase values
            good_wt_kids=fake.boolean(),
            image=fake.image_url(),
            adoption_link=fake.url()
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
        seed_users(num_users)

        # Seed pets
        num_pets = 5
        seed_pets(num_pets)

        print("Seed complete!")
