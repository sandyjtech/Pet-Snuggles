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

# ##Profile Component
# class UserDetail(Resource):
#     def get(self, user_id):
#         user = User.query.get_or_404(user_id)
#         return make_response(user.to_dict(), 200)
##Home Component
class Pets(Resource):
    def get(self):
        pets = [pet.to_dict() for pet in Pet.query.all()]
        return make_response(pets, 200)
##Schedule Component  

# ##Favorites Component
# class Favorites(Resource):
#     def get(self):
#         favorites = [f.to_dict(rules=("-schedules")) for f in Favorites.query.all()]
#         return make_response(favorites, 200)
# ##Home Component
#     ##post favorite
    
# ##Favorites Component
# class FavoriteById(Resource):
#     pass
# ##delete favorite
    
#api.add_resource(UserDetail, "/profile:<int:id>")   
api.add_resource(Pets, "/pets")

############Authorization########
# class CheckSession(Resource):

#     def get(self):
#         user = User.query.filter(User.id == session.get('user_id')).first()
#         if user:
#             return user.to_dict()
#         else:
#             return {'message': '401: Not Authorized'}, 401

# api.add_resource(CheckSession, '/check_session')

if __name__ == '__main__':
    app.run(port=5555, debug=True)


