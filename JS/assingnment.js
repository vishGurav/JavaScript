// let userdata=fetch("https://api.github.com/users")
// let parentDiv=document.getElementById("div-parent-user")
// userdata.then((data)=>
// {
//     return data.json()
// }).
// then((d)=>
// {
//     for(let {login,id,avatar_url} of d)
//     {
//         parentDiv.innerHTML+=` 
//         <div id="div-child">
//         <img src="${avatar_url}" alt="">
//         <h1>${id}</h1>
//         <h1>Name: ${login}</h1>
//         </div>`
//     }
// }).
// catch((error)=>
// {
//     return error
// })





let productdata=fetch("https://fakestoreapi.com/products")
let parentDivProd=document.getElementById("div-parent-products")
productdata.then((proddata)=>
{
    return proddata.json()
}).
then((pd)=>
{
    for(let {id,image,title,price,description,rating:{rate,count}} of pd)
    {
        console.log(pd)
        parentDivProd.innerHTML+=`
        <div id="div-child-products">
        <div class="img-parent">
        <img src="${image}" alt="">
        </div>
        <div class="detail-parent">
        <h1>${id}</h1> 
        <h1>${title}</h1>
        <h3>Price: ${price} Rs.</h3>
        <p>${description}</p>
        <h5>Rating: ${rate} (${count})</h5>
        </div>
        </div>`
    }
}).
catch((error)=>
{
    return error
})

let showData=document.getElementById("show")

// ! weather api data
// async function getWeatherData()
// {
//     try
//     {
//         let city=document.getElementById("city").value
//         console.log(city)
//         let api=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=915f6982cce3d5fad2d316c791a023d3`
//         let weatherData=await fetch(api)
//         weatherData=await weatherData.json() 
//         function add(){
//             show.innerHTML=`
//             <h1><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.7639 7C16.3132 6.38625 17.1115 6 18 6C19.6569 6 21 7.34315 21 9C21 10.6569 19.6569 12 18 12H3M8.50926 4.66667C8.87548 4.2575 9.40767 4 10 4C11.1046 4 12 4.89543 12 6C12 7.10457 11.1046 8 10 8H3M11.5093 19.3333C11.8755 19.7425 12.4077 20 13 20C14.1046 20 15 19.1046 15 18C15 16.8954 14.1046 16 13 16H3" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>${weatherData.visibility}</h1><br>
//             <h1><svg viewBox="0 0 24 24" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> .st0{opacity:0.2;fill:none;stroke:#000000;stroke-width:5.000000e-02;stroke-miterlimit:10;} .st1{fill:none;stroke:#000000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;} </style> <g id="Layer_1"></g> <g id="Layer_2"> <path d="M15,16.6V5c0-0.8-0.3-1.6-0.9-2.1C13.6,2.3,12.8,2,12,2c-1.7,0-3,1.3-3,3v11.6c-0.1,0.1-0.2,0.2-0.3,0.4 C8.2,17.5,8,18.2,8,19c0,1.7,1.1,3,2.5,3h3c0.7,0,1.4-0.4,1.8-1c0.4-0.5,0.7-1.3,0.7-2C16,18,15.6,17.2,15,16.6z M12,4 c0.3,0,0.5,0.1,0.7,0.3C12.9,4.5,13,4.7,13,5v11h-2v-1c0.6,0,1-0.4,1-1s-0.4-1-1-1v-2c0.6,0,1-0.4,1-1s-0.4-1-1-1V7 c0.6,0,1-0.4,1-1s-0.4-1-1-1C11,4.4,11.4,4,12,4z M13.8,19.8c0,0-0.1,0.2-0.3,0.2h-3c-0.2,0-0.5-0.4-0.5-1c0-0.3,0.1-0.6,0.3-0.8 c0,0,0.1-0.2,0.3-0.2h3c0.2,0,0.5,0.4,0.5,1C14,19.3,13.9,19.6,13.8,19.8z"></path> </g> </g></svg>${weatherData.main.temp}</h1>
//             <h1><svg viewBox="0 0 24 24" id="rain-alt" xmlns="http://www.w3.org/2000/svg" class="icon multi-color" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title style="stroke-width: 2;">rain alt</title><path id="tertiary-fill" d="M20.7,10.5A4,4,0,0,1,17,13H6a3,3,0,0,1-2.6-1.5,3,3,0,0,1,3.68-1.29,5,5,0,0,1,9-2.09A4.08,4.08,0,0,1,17,8,4,4,0,0,1,20.7,10.5Z" style="fill: #b7b7b7; stroke-width: 2;"></path><path id="primary-stroke" d="M21,9a3.76,3.76,0,0,1-.3,1.5A4,4,0,0,1,17,13H6A3,3,0,1,1,7.08,7.21a5,5,0,0,1,9-2.09A4.08,4.08,0,0,1,17,5,4,4,0,0,1,21,9Z" style="fill: none; stroke: #000000; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path><path id="secondary-stroke" d="M6,17,5,19m5-2L8,21m6-4-1,2m5-2-2,4" style="fill: none; stroke: #2ca9bc; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path></g></svg>${weatherData.main.humidity}</h1>
//             `
//         }
         
//        add()

//     }
//     catch(err)
//     {
//         console.log(err.message)
//     }
// }

// setInterval(getWeatherData,5000)


// ! movie api data

// async function getMovieData()
// {
//     try
//     {
//         let movie=document.getElementById("movie").value
//         let parentmovie=document.getElementById("div-parent-movie")
       
//         let movieData=await fetch(`https://www.omdbapi.com/?s=${movie}&apikey=3d8cb0bc`)
//         movieData=await movieData.json() 
//         if(movieData.Search===undefined)
//         {
//             parentmovie.innerHTML=`<h1>${movieData.Error}</h1>`
//             return false
//         }
//         parentmovie.innerHTML=" "
//         movieData.Search.map(({Title,Year,Poster})=>
//         {
//             parentmovie.innerHTML+=
//             `
//             <div id="div-child-movie">
//             <h3>${Title}</h3>
//             <img src="${Poster}" alt="">      
//             <h3>Name: ${Year}</h3>
//             </div>`  
//         }
//         ) 
//     }
//     catch(err)
//     {
//         console.log(err.message)
//     }
// }



// console.log("Krushit".match(/^[A-Za-z0-9]+$/g))