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
        let val = document.querySelector("#search-bar").value;
    this.fetchWeather(val);
    }
};

document.querySelector("#searchbtn").addEventListener("click", function(){
    weather.search();
});


var input = document.getElementById("search-bar");
input.addEventListener("keypress", function(event) {
if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("searchbtn").click();
    }
});
