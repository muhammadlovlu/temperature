//          //  a4d2ed67337e5615eca12faa6a95c54f
// fetch("https://api.openweathermap.org/data/2.5/weather?q=london&units=metric&appid=a4d2ed67337e5615eca12faa6a95c54f")
// .then (res => res.json())
// .then(data => {
//     console.log(data)
// })


document.getElementById("search").addEventListener('click', function(){
    const inputValue = document.getElementById('input-value').value;
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=metric&appid=a4d2ed67337e5615eca12faa6a95c54f`;
    console.log(api)
    fetch(api)
    .then (res => res.json())
    .then(data => {    
        const location = document.getElementById("location");
        location.innerText = data.name;
        const temperature = document.getElementById('temperature');
        temperature.innerText = data.main.temp;
        const status = document.getElementById('update-status');
        status.innerText = data.weather[0].description;
    })
})
           
           
 