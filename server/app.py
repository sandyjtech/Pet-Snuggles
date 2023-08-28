#!/usr/bin/env python3
#app.py
# Standard library imports

# Remote library imports
from flask import Flask, make_response, jsonify, request
from flask_restful import Resource
# Local imports
from config import app, db, api
# Add your model imports
from models import User, Pet, Favorite, Schedule

# Views go here!
class Users(Resource):
    def get(self):
        users = [user.to_dict() for user in User.query.all()]
        return make_response(users, 200)


if __name__ == '__main__':
    app.run(port=5555, debug=True)


