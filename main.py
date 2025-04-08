
from flask import Flask
from flask_cors import CORS
import secrets
from Blueprints.Auth import auth
from Blueprints.Methods import methods
from flask_login import LoginManager
from Models import User


app = Flask(__name__)
CORS(app,supports_credentials=True)

lm = LoginManager()
lm.init_app(app)


app.secret_key = secrets.token_hex(32)
app.config['SESSION_COOKIE_SAMESITE'] = 'None'  # Allow cross-site cookies
app.config['SESSION_COOKIE_SECURE'] = True  # Needed for SameSite=None

app.register_blueprint(auth)
app.register_blueprint(methods)
@lm.user_loader
def loaduser(id):

    return User.getuserbyid(id)





if(__name__=='__main__'):
    print('app running')
    app.run(debug=True)