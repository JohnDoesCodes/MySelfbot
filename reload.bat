@echo off
@echo Adding and commiting files
@set /p message="Please enter a commit message: "

@git add * >> nill
@git commit -m "%message%"

@echo Pushing Update to heroku

@git push heroku master >> nill
