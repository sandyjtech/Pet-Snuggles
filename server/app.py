#!/usr/bin/env python3
# app.py
# Remote library imports
from flask import request, session
from sqlite3 import IntegrityError
from flask import Flask, make_response, jsonify, request, session
from sqlalchemy.exc import IntegrityError

# Local imports
from config import app, db, Resource, api  # Import the Flask app and SQLAlchemy instance
from models import User, Pet, Favorite, Schedule

# Check Session
class CheckSession(Resource):
    def get(self):
        if 'user_id' in session:  # Check if 'user_id' exists in session
            user = User.query.get(session['user_id'])  # Use get() for primary key retrieval
            if user:
                return user.to_dict(), 200
        return {'error': '401 Unauthorized'}, 401

# Home Component
class Pets(Resource):
    def get(self):
        pets = [pet.to_dict() for pet in Pet.query.all()]
        return make_response(pets, 200)

# Protected route example using login_required decorator
class Signup(Resource):    
    def post(self):
        request_json = request.get_json()
        username = request_json.get('username')
        password = request_json.get('password')
        address = request_json.get('address')
        small_kids = request_json.get('small_kids')
        own_pets = request_json.get('own_pets')
        space = request_json.get('space')
       
        user = User(
            username=username,
            address=address,
            small_kids=small_kids,
            own_pets=own_pets,
            space=space,
        )
        # the setter will encrypt this
        user.password_hash = password
        print('first')
        try:
            print('here!')
            db.session.add(user)
            db.session.commit()
            session['user_id'] = user.id
            print(user.to_dict())
            return user.to_dict(), 201
        except IntegrityError:

            print('no, here!')          
            return {'error': '422 Unprocessable Entity'}, 422

class Login(Resource):
    def post(self):
        request_json = request.get_json()
        username = request_json.get('username')
        password = request_json.get('password')
        user = User.query.filter(User.username == username).first()
        if user:
            if user.authenticate(password):
                session['user_id'] = user.id
                return user.to_dict(), 200
        return {'error': '401 Unauthorized'}, 401

class Logout(Resource):
    def delete(self):
        if session.get('user_id'):
            session['user_id'] = None
            return {}, 204
        return {'error': '401 Unauthorized'}, 401

# Add the resources to the API
api.add_resource(Pets, '/pets')
api.add_resource(CheckSession, '/check_session', endpoint='check_session')
api.add_resource(Signup, '/signup', endpoint='signup')
api.add_resource(Login, '/login', endpoint='login')
api.add_resource(Logout, '/logout', endpoint='logout')

# Run the app if executed directly
if __name__ == '__main__':
    app.run(port=5555, debug=True)
