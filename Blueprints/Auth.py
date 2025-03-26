import json

from flask import Blueprint,request
from flask_login import login_required
from Models import User
auth = Blueprint('auth',__name__)

@auth.route('/login',method=['POST'])
@login_required
def login():
    data = request.form
    status = User.login_user_from_db(data['username'],data['password'])
    print(data)
    if (status == 200):
        return json.dumps({'status': 200})
    else:
        return json.dumps({'status': 500})



@auth.route('/signup',method=['POST'])
@login_required
def signup():
    data = request.form
    status = User.signup_user_from_db(data['username'],data['password'])
    print(data)
    if(status==200):
        return json.dumps({'status':200})
    else:
        return json.dumps({'status':500})