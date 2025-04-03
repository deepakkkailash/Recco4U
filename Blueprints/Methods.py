import flask
from flask import Blueprint,request,jsonify
from flask_login import login_required,current_user
from Models import Question
import json


methods = Blueprint('methods',__name__)


@methods.route('/FindQuestion',methods=['POST'])
def findquestion():
    form = request.form
    print(form)
    whatquestion,wherelocation = form.values()
    result = Question.retrieve_question_answers_from_DB(whatquestion,wherelocation)
    if(result['StatusCode']==200):
        if(result['AnswersFound']==0):
            return jsonify({'status':200,'AnswersAvailable':False,'AskedBy':result['AskedBy']})
        else:
            return jsonify({'status':200,'AnswersAvailable':True,'Answers':result['ANSWERS'],'AskedBy':result['AskedBy']})
    else:
        return jsonify({'status':404})

@methods.route('/addquestion',methods=['POST'])
@login_required
def addquestion():
    form = request.form
    what,where = form.values()
    if(current_user.insertquestion(what,where)==200):
        return jsonify({'status':200})
    else:
        return jsonify({'status':500})

