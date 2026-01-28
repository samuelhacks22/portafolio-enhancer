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
echo Node: cd server-node && npm test
echo Python: cd server-python && pytest
echo Client: cd client && npm test
