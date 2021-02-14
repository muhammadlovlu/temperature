fetch('https://api.openweathermap.org/data/2.5/weather?q=kolkata&appid=a4d2ed67337e5615eca12faa6a95c54f')
.then (response => response.json())
.then (data => {
    console.log(data)
})

function searchReport(){

}