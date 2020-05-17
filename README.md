# 06 Server-Side APIs: Weather Dashboard


# Live Site
https://iescandon.github.io/weather-dashboard/


## Description 

This website is designed to function as an interactive weather dashboard. It allows the user to view a city's current weather and 5 day forecast. User can view the weather information simply by typing the city's name in the form. After form is submitted, the page will render the weather information for that specific city. Search history gets saved as buttons with the city's name on them underneath the search form. User can go back to a previously searched city by simply clicking on the button in the search history. Current weather provides the user with current temperature, humidity, wind speed, weather icon (representing current weather) and UV index. UV index changes color depending on where the number falls in the exposure category (green-low, yellow-moderate, orange-high, red-very high, purple-extreme). 5 day forecast provides the user with forecasted temp, weather icon, and humidity for the correlating day. The most recent search gets saved in local storage so that upon refreshing the page, the most recently searched page is rendered. If local storage is empty, the city of Houston will be rendered. To make things more readable moment.js was used to provide current day and dates of the forescast. CSS and HTML are designed to make the application user friendly and mobile responsive.

## Table of Contents (Optional)

If your README is very long, add a table of contents to make it easy for users to find what they need.

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)


## Installation

In order to install this project, you must login to GitHub and go to github.com/iescandon/weather-dashboard. Once there you will click on the green button that says clone or download. You will be given choices on how to download: using the ssh/html key or downloading the zip file.

Using SSH/HTML Key:
You will copy the link shown and open up either terminal (mac: pre-installed) or gitbash (pc: must be installed). Once the application is open, you will type git clone _paste url here_. Once you have cloned the git weather-dashboard repo, cd into the repo and type "open ." to open the folder which contains all files used for the website. Once inside the folder, click on index.html to open the website in the browser.

Using Download ZIP:
Click on Download Zip. Locate the file and double click it to unzip the file. Locate the unzipped folder and and open it. All the files for the website will be within this folder. Click on index.html to open the website in the browser.


## Usage 

Website functions as a normal website. Once on the website simply type in the form or click on the buttons to get weather information.


## Credits

Worked with my tutor Ivan Popov for help with media queries.

Worked with Peter Winston for help with chrome suggestions and datalist issues.

Dark Sky Image
Photo by Patrick Tomasso on Unsplash
https://unsplash.com/photos/biRNA1Nb9OM

Drizzle, Partly Cloudy, Rainy, Snowy, Sunny, Thunderstorm, Windy Icons
Icons made by Flat Icons
https://www.flaticon.com/authors/flat-icons

Cloudy Icon
Icons made by Alfredo Hernandez
https://www.flaticon.com/authors/alfredo-hernandez

Moon Icon
Icons made by Good Ware
https://www.flaticon.com/authors/good-ware

Earth Icon
Icons made by Turkkub
https://www.flaticon.com/authors/turkkub


## License

MIT License

Copyright (c) [2020] [inezescandon]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.