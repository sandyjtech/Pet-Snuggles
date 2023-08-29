#!/usr/bin/env python3
#app.py
# Remote library imports
from flask import Flask, make_response, jsonify, request, session
from flask_restful import Resource
# Local imports
from config import app, db, api
# Add your model imports
from models import User, Pet, Favorite, Schedule



# Home Component
class Pets(Resource):
    def get(self):
        pets = [pet.to_dict() for pet in Pet.query.all()]
        return make_response(pets, 200)

# Protected route example using login_required decorator
class Profile(Resource):
    @login_required
    def get(self):
        user_id = session.get('user_id')
        user = User.query.get_or_404(user_id)
        return make_response(user.to_dict(), 200)

# Login route
@app.route('/login', methods=['POST'])
def login_route():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    if login(username, password):
        return jsonify({'message': 'Logged in successfully'}), 200
    return jsonify({'message': 'Invalid credentials'}), 401

# Logout route
@app.route('/logout', methods=['POST'])
@login_required
def logout_route():
    logout()
    return jsonify({'message': 'Logged out successfully'}), 200

# Set up routes
api.add_resource(Pets, '/pets')
api.add_resource(Profile, '/profile')

if __name__ == '__main__':
    app.run(port=5555, debug=True)


