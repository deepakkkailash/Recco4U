from flask import Blueprint,request
from flask_login import login_required
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
            return json.dumps({'status':200,'AnswersAvailable':False,'AskedBy':result['AskedBy']})
        else:
            return json.dumps({'status':200,'AnswersAvailable':True,'Answers':result['ANSWERS'],'AskedBy':result['AskedBy']})
    else:
        return json.dumps({'status':404})
