---
title: QP Web
slug: QP
stack: Django HTML CSS
date: 2022-01-07T00:00:00+00:00
thumb: ../images/thumbs/skate.png
featured: ../images/featured/skate-banner.png
---

# QP

This is an website to help students get question papers from diffrent boards and universites. Question papers are accepted in pdf format from any authenticated user. Like every other websites this website also includes about and contact pages.

Users can easily signup by verifying their email through OTP and giving some basic informations. all contributions from you by providing question papers are recorded in your profile.

Right now verifications of question papers done manually. Users will get the confirmation email about accepting therir question papers. To avoid multiple instance of same question papers some checks are to be made.

This website is hosted at https://qpweb.herokuapp.com/

__*Setting up in your local system*__

Prerequisites:
* Python-3 https://www.python.org/downloads/
* Postgresql-12 https://www.postgresql.org/download/

Installation Guidelines
* download the source code
```shell
git clone https://github.com/vignesh-cloud-prog/QP.git 
```

_move to the main directory_

* Creating virtual environment
  * Download python virtualenv module if you are not already installed
  ```shell
  pip install virtualenv
  ```
  * Create virtual environment
  ```shell
  virtualenv QP_Env
  ```
  * Activating the virtual environment<br>
  _for Windows users_
  ```shell
  .\QP_Env\Scripts\activate
  ```
  \
  _for Linux/Mac Users_
  ```shell
  source QP_Env/bin/activate
  ```
  * Install all the requirements 
  ```shell
  pip install -r requirements.txt
  ```
 
  
* Setting up database<br>
  You need to create a database named qp using pgAdmin or command and update credentials in settings.py
  * Creating super user(optional)
  ```shell
  python manage.py createsuperuser
  ```
  _go through the process_
  
  * Creating tables
  ```shell
  python manage.py makemigrations
  ```
  
  * Writing tables to the db
  ```shell
  python manage.py migrate
  ```
  
* Running the server
```shell
python manage.py runserver --settings MultipleSettings.development
```

* Visit website here http://127.0.0.1:8000/



