@echo off
title The Bridge Help Centre website
cd /d "%~dp0"
node -e "const [a,b,c]=process.versions.node.split('.').map(Number);process.exit(a>22||(a===22&&(b>23||(b===23&&c>=4)))?0:1)"
if errorlevel 1 (
  echo.
  echo  Your Node.js is too old for this website. Please install the LTS version
  echo  from https://nodejs.org , restart your computer, then double-click this file again.
  echo.
  pause
  exit /b
)
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
