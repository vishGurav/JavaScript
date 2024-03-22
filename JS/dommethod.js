// ! DOM method to get html element... 

// let res=document.getElementById("heading")
// console.log(res)

// let res1=document.querySelector("#details")
// console.log(res1)

// let res2=document.querySelectorAll("h1")
// console.log(res2)

// let res3=document.getElementsByClassName("h-content")
// console.log(res3)

// let res4=document.getElementsByTagName("div")
// console.log(res4)

// console.log(document)

// console.log(document.body)

// console.log(document.scripts)

// function togglePassword()
// {
//     let pwd=document.getElementById("pwd")

//     if(pwd.type==="password")
//     {
//         pwd.type="text"
//     }
//     else
//     {
//         pwd.type="password"
//     }
// }


// ! img show hidden
// function hide()
// {
//     let img=document.getElementById("c-img")
//     img.style.visibility="hidden"
// }
// function show()
// {
//     let img=document.getElementById("c-img")
//     img.style.visibility="visible"
// }

// function togglebtn()
// {
//     let btn=document.getElementById("btn")
//     let img=document.getElementById("c-img-1")
    
//     if(btn.innerText==="hide")
//     {
//         btn.innerText="show"
//         img.style.visibility="hidden"

//     }
//     else
//     {
//         btn.innerText="hide"
//         img.style.visibility="visible"
//     }
// }

// ! img slider


let imgArr=[
    "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg",  
    "https://cdn.pixabay.com/photo/2018/08/12/16/59/parrot-3601194_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/02/28/23/00/swan-2107052_1280.jpg",
    "https://cdn.pixabay.com/photo/2015/11/16/14/43/cat-1045782_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/07/24/19/57/tiger-2535888_1280.jpg"]

let img=document.getElementById("img")
let i=0;

function imgSliderNext()
{
   i++;
   if(i>=imgArr.length)
   {
        i=0
   }
   img.src=imgArr[i]
}

function imgSliderPre()
{
   i--;
   if(i<0)
   {
        i=4
   }
   img.src=imgArr[i]
}


// ! increment using event listner
let p=document.getElementById("inc")
let count=0;
let btnInc=document.getElementById("btn-inc")
let btnDec=document.getElementById("btn-dec")

btnInc.addEventListener("click",increment)
function increment()
{
    count++;
    inc.innerText=count
    if(count===10)
    {
        btnInc.removeEventListener("click",increment)
    }
}


function decrement()
{
    if(count===0)
    {
        btnDec.removeEventListener("click",decrement)
    }
    else
    {
        count--
        inc.innerText=count  
    }
  
}

btnDec.addEventListener("click",decrement)










