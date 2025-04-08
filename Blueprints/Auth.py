import json

from flask import Blueprint,request,session,jsonify
from flask_login import login_required,current_user
from Models import User
auth = Blueprint('auth',__name__)

@auth.route('/Login',methods=['POST'])
def login():
    print('helloooooo')
    data = request.form
    status = User.login_user_from_db(data['username'],data['password'])

    print(status)
    return jsonify({'LoginStatus': status})




@auth.route('/SignUp',methods=['POST'])
def signup():

    data = request.form
    status = User.signup_user_from_db(data['username'],data['password'])

    return jsonify({'LoginStatus': status})


@auth.route('/everyrequestcheck',methods=['GET'])
def everyrequestcheck():
    if(current_user.is_authenticated):

        return jsonify({'LoginStatus':200})
    else:

        print(session.items())

        return  jsonify ({'LoginStatus':400})