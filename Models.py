import sqlite3
import bcrypt
from flask_login import login_user,UserMixin
class Connect:
    def __init__(self):
        self.conn = sqlite3.connect('Recco4U.db')
        self.conn.row_factory = sqlite3.Row
        self.cursor = self.conn.cursor()

    def getcursor(self):
        return self.cursor
    def commit(self):
        self.conn.commit()

    def __del__(self):
        self.conn.close()
class User(UserMixin):
    def __init__(self,username):
        self.username= username
    def get_id(self):
        return self.username
    @staticmethod
    def login_user_from_db(username_from_user, password_from_user):
        conn = Connect()
        cursor = conn.getcursor()
        query = 'SELECT IFNULL(password,"None") from users where username=? '
        cursor.execute(query,(username_from_user,))
        res = dict(cursor.fetchone())
        del conn
        if(bcrypt.checkpw(password_from_user.encode('utf-8'),res['password'])):
            login_user(User(username_from_user))
            return 200
        else:

            return 400

    @staticmethod
    def signup_user_from_db(username,password):
        conn = Connect()
        cursor = conn.getcursor()
        query = 'INSERT INTO USERS(username,password) values(?,?)'
        try:
            cursor.execute(query,(username,password))
            login_user(User(username))
            conn.commit()
            retvalue = 200
        except (sqlite3.OperationalError,sqlite3.IntegrityError) as e:
            print(e)
            retvalue = 500
        finally:
            return retvalue
            del conn


    @staticmethod
    def getuserbyid(self,username):
        conn = Connect()
        cursor = conn.getcursor()
        query = 'SELECT IFNULL(username,"None") from username where username=?'
        res = dict(cursor.execute(query,(username,)).fetchone())
        return User(res['username'])



