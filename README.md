# Frontend Take-home Prompt

In this repository is pipeline data (`pipes.json`) in the form of geojson. Please display that data on a map with the following features:
- A button that when pressed will update the colors of the pipes based on their “year” property
- A button that when pressed will update the colors of the pipes based on their “diameter” property
- A button that when pressed will update the colors of the pipes based on their “material” property
- A button that when pressed will update a random pipe’s year to a random number between 1960 and 2020.

Requirements:
- Use vanilla Vue.js or Nuxt.js as the frontend framework
- Use mapbox for the map software. API Key: _pk.eyJ1IjoiZnJhY3RhdGVzdHMiLCJhIjoiY2tnaWd3NW10MDAzNDJzcnJuNzVrNGd5cSJ9.6pV_QFxNJE22pj4-uKCjpQ_
- Handle the data and organize your app as you see fit, but keep the following in mind: _This provided geojson data is small, but your application should accommodate geojson up to 50MB in size AND the Mapbox object should be accessible by any component_

We will be assessing your work based on how you structure this assignment, what techniques you use, and how you handle the requirements described above. When you complete the assignment, please respond with a public link to your repository (don't submit it as a PR to this repository).