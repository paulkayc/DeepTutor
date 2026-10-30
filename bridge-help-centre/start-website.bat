@echo off
title The Bridge Help Centre website
cd /d "%~dp0"
echo.
echo  Downloading the latest website changes...
git pull
echo.
echo  Checking the website software (first run can take a minute)...
call npm.cmd install --no-audit --no-fund
echo.
echo  Starting the website. Your browser will open at http://localhost:4321/
echo  Keep this window open while you view the site. Close it to stop.
echo.
call npm.cmd run dev -- --open
pause
