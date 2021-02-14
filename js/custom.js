//             a4d2ed67337e5615eca12faa6a95c54f
// fetch("https://api.openweathermap.org/data/2.5/weather?q=london&appid=a4d2ed67337e5615eca12faa6a95c54f")
// .then (res => res.json())
// .then(data => {
//     console.log(data)
// })



fetch("https://api.openweathermap.org/data/2.5/weather?q=london&appid=a4d2ed67337e5615eca12faa6a95c54f")
.then (res => res.json())
.then(data => {
    const location = document.getElementById("location");
    location.innerText = data.name;
    const temperature = document.getElementById('temperature');
    temperature.innerText = data.main.temp;
    const status = document.getElementById('update-status');
    status.innerText = data.weather[0].description;
})

