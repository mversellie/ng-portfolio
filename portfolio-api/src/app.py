from email.mime.text import MIMEText

from flask import Flask, request
import os
from dotenv import load_dotenv
import smtplib, ssl
import html
from email.utils import parseaddr

load_dotenv()

app = Flask(__name__)

@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    return response

@app.errorhandler(404)
def not_found_error(error):
    return handle_basic_error(404,error)

@app.route('/api/form',methods=['POST'])
def send_email():
    form_data = request.json
    email_address_data = parseaddr(form_data.get("email"))
    is_good_email = ('@' in email_address_data[1])
    if is_good_email:
        send_form_email(html.escape(form_data.get("fullName")),
                        html.escape(form_data.get("email")),
                        html.escape(form_data.get("message")),
                        html.escape(form_data.get("subject")))
        return blank_ok()
    else:
        return handle_basic_error(400,"bad email address")

def handle_basic_error(code:int,error):
    print(error)
    response = app.response_class(status=code)
    return response

def blank_ok():
    response = app.response_class(status=200)
    return response

def send_form_email(full_name,email_from_form,message,subject):
    context = ssl.create_default_context()
    with smtplib.SMTP_SSL(os.getenv("MAIL_SERVER"),os.getenv("MAIL_PORT"), context=context) as server:
        server.login(os.getenv("MAIL_USERNAME"),os.getenv("MAIL_PASSWORD"))

        message = MIMEText(message, "plain")
        message["Subject"] = subject
        message["From"] = "{} <{}>".format(full_name,email_from_form)
        message["To"] = os.getenv("MAIL_RECEIVER")

        server.sendmail(email_from_form,os.getenv("MAIL_RECEIVER"), message.as_string())

if __name__ == '__main__':
    app.run()

