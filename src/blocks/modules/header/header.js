// window.addEventListener('load', () => {
//    let long;
//    let lat;
//    let currentLocation = document.getElementById('location--js');
//    let temperatureDegree = document.getElementById('temp--js');
//    let realFeel = document.getElementById('realFeel--js');
//    let humidityCount = document.getElementById('humidity--js');
//    let weatherDescription = document.getElementById('weatherDescription--js');
//    let weatherIcon = document.getElementById('weatherIcon--js');
//
//    if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(position => {
//             long = position.coords.longitude;
//             lat = position.coords.latitude;
//
//             const api = `http://api.weatherapi.com/v1/current.json?key=366143488c9b4cb5a23123315200808&q=${lat},${long}`;
//             fetch(api)
//                 .then(response => {
//                     return response.json();
//                 })
//                 .then(data => {
//                     console.log(data);
//                     const { feelslike_c, temp_c, humidity } = data.current;
//                     const { region } = data.location;
//                     const { text, icon } = data.current.condition;
//                     //Set DOM Elements from the API
//                     currentLocation.textContent = region;
//                     temperatureDegree.textContent = temp_c + '℃';
//                     realFeel.textContent = 'Real feel: ' + feelslike_c + '℃';
//                     humidityCount.textContent = 'Humidity: ' + humidity + '%';
//                     weatherDescription.textContent = text;
//                     weatherIcon.src = icon;
//                 })
//         });
//    }
// });