## 🌐 Live Demo
https://react-weather-app-psi-lilac-44.vercel.app/


React Weather App

A modern and responsive weather application built using React, OpenWeather API, Axios, and custom hooks.  
It includes geolocation weather detection, dynamic backgrounds, animated UI elements, and a persistent favorites system.  
This project was created as part of my software engineering portfolio and is used in Erasmus internship applications.

Features:
- Search weather by city name
- Automatic weather detection via Geolocation API
- Shows temperature, humidity, wind speed, description, and live weather icons
- Dynamic backgrounds (Clear, Clouds, Rain, Snow, Storm)
- Day and night theming
- Smooth animations
- Responsive design
- Favorite cities saved using localStorage

Tech Stack:
- React
- Axios
- OpenWeather API
- CSS3 (animations + glassmorphism)
- LocalStorage
- Geolocation API

Installation:
1. Clone the repository:
   git clone https://github.com/alperbs/react-weather-app.git
   cd react-weather-app

2. Install dependencies:
   npm install

3. Create a .env file:
   REACT_APP_WEATHER_API_KEY=your_api_key_here

4. Start the project:
   npm start

Folder Structure:
src/
  components/
    WeatherCard.jsx
  hooks/
    useWeather.js
  styles/
    Weather.css
  App.js
  index.js
public/
.env
package.json

Deployment (optional):
Deploy using Vercel:
- Push project to GitHub
- Go to vercel.com
- New Project → Import your repo
- Deploy

Author:
Polat Alper BAŞ  
Software Engineering Student  
Erasmus Internship Candidate  
GitHub: https://github.com/alperbs

Support:
If you like this project, leaving a star on GitHub is appreciated.
