

async function doAPICall(){
    let City=document.querySelector('#City').value
    result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${City}&units=imperial&appid=ac6d4d801330b08597ceb683818b8fbe`)
       .catch((e)=>{console.error(e);alert("Bad city name!")})
           .finally(console.log("API request is Over"))
       console.log(result)
       console.log(result.data)

   
   temperature=document.getElementById('temperature')
   temperature.innerText = result.data.main.temp

   description = document.getElementById('description');
   description.innerText = result.data.weather[0].description

   temp_min = document.getElementById('temp_min');
   temp_min.innerText = result.data.main.temp_min

   temp_max = document.getElementById('temp_max');
   temp_max.innerText = result.data.main.temp_max


}
// function handleSubmit(){
//     weatherCity=document.getElementsByName('City')[0]
//     console.log(weatherCity)
//     doAPIcall(weatherCity)
// }

// function addSubmitButton(){
//     button = document.createElement('button')
//     button.innerText="Search";
//     button.classList.add('btn', 'btn-primary');
//     button.addEventListener('click',()=>handleSubmit());
//     document.body.appendChild(button);
// }




// description = document.getElementById("description");
// description.innerText = result.
// location = document.getElementById("location");