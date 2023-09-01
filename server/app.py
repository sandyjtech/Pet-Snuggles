#!/usr/bin/env python3
# app.py
# Remote library imports
from flask import abort, request, session
from sqlite3 import IntegrityError
from flask import Flask, make_response, jsonify, request, session
from sqlalchemy.exc import IntegrityError

# Local imports
from config import app, db, Resource, api  # Import the Flask app and SQLAlchemy instance
from models import User, Pet, Favorite, Schedule

      
##############Authenticated User (Protected Routes) #################
# @app.before_request
# def check_if_user_logged_in():
#     open_access_list = ['pets', 'signup', 'login', 'logout', 'authorized']
#     if request.endpoint not in open_access_list and not session.get("user_id"):
#         return {'error': 'Not logged in'}, 401
        
# Home Component is available to unauthorized
class Pets(Resource):
    def get(self):
        pets = [pet.to_dict() for pet in Pet.query.all()]
        return make_response(pets, 200)
class PetsById(Resource):
    def get(self, id):
        pet = Pet.query.filter_by(id=id).first()
        if not pet:
            raise ValueError("Could not find pet")
        return make_response(pet.to_dict(), 200)
            
class UserDetailsById(Resource):
    def get(self, id):
        user = User.query.filter_by(id=id).first()
        if not user:
            raise ValueError("User not found")        
        return make_response(user.to_dict(), 200)
##Favorite Component####
class Favorites(Resource):    
   
    def post(self):
        data = request.get_json()
        try:
            new_favorite = Favorite(**data)
        except:
            return make_response({"errors": ["validation errors"]}, 400)
        db.session.add(new_favorite)
        db.session.commit()
        return make_response(new_favorite.to_dict(), 200)
    
##Favorite Component#### DELETE AND POST   
class FavoritesById(Resource):
        
    def delete(self, id):
        favorite = Favorite.query.filter_by(pet_id=id).first()
        if favorite:
            db.session.delete(favorite)
            db.session.commit()
            return {'message': 'Favorite deleted successfully'}, 200
        return {'error': 'Favorite not found'}, 404              
  
class FavoritesByUser(Resource):
    def get(self, user_id):
        user = User.query.get(user_id)
        if user:
            favorite_pets = [f.pet.to_dict() for f in user.favorites]
            return make_response(favorite_pets, 200)
        else:
            return make_response({"error": "User not found"}, 404)
        
api.add_resource(FavoritesByUser, '/users/<int:user_id>/favorites')      
class Schedules(Resource):
    def get(self, id):
        schedules = [s.to_dict() for s in Schedule.query.all()]
        return make_response(schedules, 200)
    ##Schedule Component#### DELETE AND POST, PATCH  
class ScheduleById(Resource):
    def delete(self, id):
        schedule = Schedule.query.get(id)
        if schedule:
            db.session.delete(schedule)
            db.session.commit()
            return {'message': 'Schedule deleted successfully'}, 200
        return {'error': 'Schedule not found'}, 404

    def post(self, id):
        req_json = request.get_json()
        pet_id = req_json.get('pet_id')
        user_id = id  # Get user_id from the URL parameter
        date_time = req_json.get('date_time')

        if not pet_id or not date_time:
            return {'error': 'Missing pet_id or date_time'}, 400

        # Check if the user and pet exist
        user = User.query.get(user_id)
        pet = Pet.query.get(pet_id)

        if not user:
            return {'error': 'User not found'}, 404
        if not pet:
            return {'error': 'Pet not found'}, 404

        new_schedule = Schedule(pet=pet, user=user, date_time=date_time)
        db.session.add(new_schedule)
        db.session.commit()

        return {'message': 'Schedule added successfully'}, 201

    def patch(self, id):
        schedule = Schedule.query.get(id)
        if not schedule:
            return {'error': 'Schedule not found'}, 404

        req_json = request.get_json()
        new_date_time = req_json.get('date_time')

        if not new_date_time:
            return {'error': 'Missing new date_time'}, 400

        schedule.date_time = new_date_time
        db.session.commit()

        return {'message': 'Schedule updated successfully'}, 200

####### Handling Authorization #####
class Signup(Resource):
    def post(self):
        req_json = request.get_json()
        try:
            new_user = User(
                username=req_json["username"],
                password=req_json["password"],
                address=req_json["address"],                
                small_kids=req_json["small_kids"],
                own_pets=req_json["own_pets"],
                space=req_json["space"],
            )
        except:
            abort(422, "Invalid user data")
        db.session.add(new_user)
        db.session.commit()
        session["user_id"] = new_user.id
        return make_response(new_user.to_dict(), 201)   
    
class Login(Resource):
    def post(self):
        req_json = request.get_json()
        username = req_json['username']
        password = req_json['password']

        # Retrieve the user instance using the provided username
        user = User.query.filter_by(username=username).first()

        if user and user.check_password(password):
            session['user_id'] = user.id
            return user.to_dict(), 200
        return {'error': 'Invalid username or password'}, 401

class Logout(Resource):

    def delete(self): # just add this line!
        session['user_id'] = None
        return {'message': '204: No Content'}, 204

class Authorized(Resource):
    def get(self):
        user = User.query.filter(User.id == session.get('user_id')).first()
        if user:
            return make_response(user.to_dict(), 200)
        else:
            return make_response({"Error": "User not found"}, 401)
        
api.add_resource(Authorized, '/authorized')   
api.add_resource(Signup, "/signup")
api.add_resource(Login, "/login")
api.add_resource(Logout, '/logout')

# Add the resources to the API
api.add_resource(Favorites, '/favorites')
api.add_resource(FavoritesById, '/favorites/<int:id>')
api.add_resource(Pets, '/pets', endpoint='pets')
api.add_resource(PetsById, '/pets/<int:id>', endpoint='/pets/<int:id>')
api.add_resource(UserDetailsById, '/users/<int:id>')
api.add_resource(Schedules, '/schedules', endpoint='schedules')
api.add_resource(ScheduleById, '/schedules/<int:id>', endpoint="schedule")
# Run the app if executed directly
if __name__ == '__main__':
    app.run(port=5555, debug=True)
