## 🌐 Live Demo
https://react-weather-app-psi-lilac-44.vercel.app/
Looking for Erasmus+ Internship – Full-Stack Development


React Weather App

A modern and responsive weather application built using React, OpenWeather API, Axios, and custom hooks.  
It includes geolocation weather detection, dynamic backgrounds, animated UI elements, and a persistent favorites system.

This project demonstrates my ability to build interactive UI components, consume external APIs, manage state, and design a clean user experience with real-time data.

Custom hook (useWeather) — reusable async logic




Features:
- Search weather by city name
- Automatic weather detection via Geolocation API
- Shows temperature, humidity, wind speed, description, and live weather icons
- Dynamic backgrounds (Clear, Clouds, Rain, Snow, Storm)
- Day and night theming
- Smooth animations
- Responsive design
- Favorite cities saved using localStorage

 
Dark/Light Mode — Theme switching for better user experience
Hourly & Weekly Forecast — More detailed weather insights
API Response Caching — Reduces unnecessary API calls and improves performance
Offline Support (Service Workers) — Allow access to last known weather data without internet
TypeScript Migration — Stronger typing and fewer runtime errors
Testing (React Testing Library) — Component-level reliability and regression prevention
Error & Loading UI Enhancements — More polished user feedback
Favorite Cities Sync — Cloud sync instead of only localStorage

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

GitHub: https://github.com/alperbs


