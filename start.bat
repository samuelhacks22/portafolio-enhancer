@echo off
echo Starting DevDash Environment...

echo Building and Starting Containers...
docker-compose up --build -d

echo.
echo Application started!
echo Frontend: http://localhost:80
echo Node API: http://localhost:3000
echo Python Service: http://localhost:5000
echo.
echo To run tests:
echo Node: cd server-node AND npm test
echo Python: cd server-python AND pytest
echo Client: cd client AND npm test
