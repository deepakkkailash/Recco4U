import json

from flask import Blueprint,request,session
from flask_login import login_required,current_user
from Models import User
auth = Blueprint('auth',__name__)

@auth.route('/Login',methods=['POST'])
def login():

    data = request.form
    status = User.login_user_from_db(data['username'],data['password'])

    if (status == 200):
        return json.dumps({'status': 200})
    else:
        return json.dumps({'status': 500})



@auth.route('/SignUp',methods=['POST'])
def signup():

    data = request.form
    status = User.signup_user_from_db(data['username'],data['password'])

    if(status==200):

        return json.dumps({'status':200})
    else:
        return json.dumps({'status':500})


@auth.route('/everyrequestcheck',methods=['GET'])
def everyrequestcheck():

    if(current_user.is_authenticated):
        print(session.items())
        print('heylll')
        return json.dumps({'status':200})
    else:
        print(session.items())
        return  json.dumps({'status':500})