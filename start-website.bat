@echo off
echo Starting Dental Clinic Website...
echo Please wait a moment for the server to start.

:: Start the Next.js dev server in a new window
start "Dental Clinic Server" cmd /c "npm run dev"

echo Waiting 8 seconds for server to initialize...
timeout /t 8 /nobreak > nul

echo Opening browser...
start http://localhost:3000
