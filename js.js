let weather = {
    apiKey: "ee894f7deb37a153aef6be49fd558158",
    fetchWeather: function (city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid="+this.apiKey
    )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
},
    displayWeather: function(data){
        const { name }=data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name,icon,description,temp,humidity,speed);
        document.querySelector(".city_name").innerText = name;
        document.querySelector("#tempa").innerText = Math.floor(temp)+"°C";
        document.querySelector("#humd").innerText = humidity+"%";
        document.querySelector("#wspeed").innerText = Math.floor(speed)+"km/h";
    },
    search: function(){
    this.fetchWeather(document.querySelector("#search-bar").value);
    console.log(document.querySelector("#search-bar").value);
    }
};

document.querySelector("#searchbtn").addEventListener("click", function(){
    weather.search();
    console.log("work");
});

document.querySelector("#search-bar").addEventListener("keyUp",function(){
    if(event.key == "Enter"){
        weather.search();
    }
})