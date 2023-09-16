
const apiKey = "a2615e50c7c9e219a846d7355e107969";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
//we are basically fetching an api from openweathermap.org
// fetching api makes the project online and it fetches the data from openweathermap.org 
// we have learnt this kind of similar thing on send email function on module 2.


const searchBox = document.querySelector(".search input ");

const searchBtn = document.querySelector(".search button ");

const weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city){
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if(response.status == 404){
    document.querySelector(".error").style.display = "block";
    //if the name of the city is invalid it displays the invalid city name card which is hidden.
    document.querySelector(".weather").style.display = "none";
  }else{var data = await response.json();//this has all the information about the weather from the paticular city.
  
  document.querySelector(".city").innerHTML = data.name;//all the data is coming from the api and we are updating it.
//document.queryselector is selecting the city element and innerhtml will update the text written on it.

  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";//data is coming from the api.

  // we are using math.round function to round the value up to the exact number and addinc degree celcius to it.
  //rounding up the data provided to exact number.

  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  // same goes for humidity and adding %
  
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/ph";
  // same goes for wind and adding km/ph on it
  if(data.weather[0].main == "Clouds"){
    weatherIcon.src = "images/clouds.png";


  }
  //getting the images to show according to the weather from image file. 
  else if(data.weather[0].main == "Clear"){
    weatherIcon.src = "images/clear.png";
  }

    else if(data.weather[0].main == "Rain"){
    weatherIcon.src = "images/rain.png";
  }   
  else if(data.weather[0].main == "Drizzle"){
    weatherIcon.src = "images/drizzle.png";
  }   
  else if(data.weather[0].main == "Mist"){
    weatherIcon.src = "images/mist.png";
  }  
  
  document.querySelector(".weather").style.display = "block";
  document.querySelector(".error").style.display = "none";
    
    

  }
  




}
searchBtn.addEventListener("click", ()=>{
  checkWeather(searchBox.value);// whenever the webpage is loaded it will call this function.
})

