from flask import Flask
from flask_cors import CORS
from secrets import token_hex
from Blueprints.Auth import auth
from Blueprints.Methods import methods
from flask_login import LoginManager
from Models import User
app = Flask(__name__)


lm = LoginManager()
lm.init_app(app)

lm.login_view = 'views.index'

CORS(app,supports_credentials=True)


@lm.user_loader
def loaduser(id):
    return User.getuserbyid(id)


app.register_blueprint(auth)
app.register_blueprint(methods)
app.config['SECRET_KEY'] = token_hex(32)
app.config['SESSION_COOKIE_SAMESITE'] = "None"
app.config['SESSION_COOKIE_SECURE'] = True


if(__name__=='__main__'):
    app.run(debug=True)