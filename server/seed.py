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

# No need to load pet data since you're not reseeding pets

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

# No need for the seed_pets function

if __name__ == "__main__":
    with app.app_context():
        print("Starting seed...")

        # Clear existing user data from the database
        print("Clearing user data...")
        User.query.delete()
        db.session.commit()

        # # Seed users
        # num_users = 5
        # seed_users(num_users)

        print("Seed complete!")
