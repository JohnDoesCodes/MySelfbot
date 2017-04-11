@echo off

:START
@echo STARTING LOGS
@heroku logs --tail
goto :START

goto :START
