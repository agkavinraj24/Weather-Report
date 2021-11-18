function weather()
{
    var DisplayHTML = '';
    var name = document.getElementById('place').value;
    const DisplayWeather = document.getElementById('display');
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ name }&appid=79f5d2d1a89a5f06654603841837cdf8`).then(res => res.json())
        .then(data => 
        {
            if(data && data.main && data.name ) 
            {
              DisplayHTML = `<div><div>
                            <p>${ data.name }</p>
                            <p>${ data.main.temp } C</p>
                            </div>`
            }
            DisplayWeather.innerHTML = DisplayHTML;
        })
}