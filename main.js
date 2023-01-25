// `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`
// api.openweathermap.org/data/2.5/weather?q=tehran&appid=edc228562ac0a8aa3116d41c0687cf56&units=metric

const input = document.querySelector(".top-banner input")
const form = document.querySelector(".top-banner form")
const msg = document.querySelector(".msg")
const list = document.querySelector(".ajax-section .cities")

const apiKey = "edc228562ac0a8aa3116d41c0687cf56";

form.addEventListener("submit" , (a) => {
    a.preventDefault();
    let inputValue = input.value ;
    const url = `Https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKey}&units=metric`
    
    fetch(url)
     .then(response => response.json())
       .then(data => {
        const {name,main,sys,weather} =data ;
        const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`
        const newCity = document.createElement("li");
      
        newCity.classList.add("city")
        const cardDesign = `
        <h2 class="city-name"> 
        <span>${name}</span>
        <span>${sys.country}</span>
        </h2>
        <div class="city-temp">
        ${Math.round(main.temp)}<sup>°</sup>
        <div>
        <figure>
        <img src="${icon}" class="city-icon" alt="icon">
        <figurecaption>${weather[0]["description"]}</figurecaption>
        </figure>
        
        `

        newCity.innerHTML = cardDesign;
        list.appendChild(newCity);

        

       })

       .catch(() => {
        msg.innerHTML = "<p>❌❌PLEASE ENTER A VALID CITY ❌❌</p>";
        const documentp =document.querySelector(".msg p")
        setTimeout(()=> {
            documentp.classList.add("stylemsg");
        },4000)
        console.clear();
       })

       input.value ="";
    
})