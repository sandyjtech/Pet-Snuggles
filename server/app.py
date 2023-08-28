#!/usr/bin/env python3
#app.py
# Standard library imports

# Remote library imports
from flask import request
from flask_restful import Resource
# Local imports
from config import app, db, api
# Add your model imports
from models import User, Pet, Favorite, Schedule

# Views go here!

@app.route('/')
def index():
    return '<h1>Phase 4 Project Server</h1>'

# @app.route('/pets')
# def pets():
#     return '<h1>Testing Pets</h1>'

if __name__ == '__main__':
    app.run(port=5555, debug=True)


#add comment