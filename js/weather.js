const API_KEY = "2ceec4e9e94e498db9c2b353071efdb6";

function onGeoOk(position){
  const lat= position.coords.latitude;
  const lon =  position.coords.longitude;  
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
  .then((response)=> response.json())
  .then((data)=> {
    const weather = document.querySelector("#weather span:first-child");
    const city = document.querySelector("#weather span:last-child");
    weather.innerText = `${data.main.temp}°C`;
    city.innerText = data.name;

  });




}
function onGeoError(){
  alert("Cant find you. No wearher for you");
}
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError)



