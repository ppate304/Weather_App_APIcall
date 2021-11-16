

// async function doAPIcall(City){
//     result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=5afdd11ae9b46fbddbedb86a2dff39e0`)
//         .catch((e)=>{console.error(e);alert("")})
//             .finally(console.log("API request is Over"))
//     console.log(result)

async function doAPICall(City){
    // let city=document.querySelector('#inputvalue').value
    result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${City}&units=imperial&appid=144b7f905c903cea963eded9cd974aa9`)
        .catch((e)=>{console.error(e);alert("Bad city name!!!!!")})
            .finally(console.log("API request is Over"))
        console.log(result)

    // result= result.data
    // console.log(result.data)
temperature=result.main.temp
document.getElementById('temperature').temperature.innterText = result.main.temp

description = document.getElementById('description');
description.innerText = result.weather.main

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