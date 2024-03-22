"use strict"
// let count=0;
// let cinterval;

// function counter()
// {
//     console.log(++count)
//     if(count==5)
//     {
//         clearInterval(cinterval)
//     }
// }
// cinterval=setInterval(counter,1000)


// let userData=[      
// {username:"krushit",password:1111},
// {username:"huzaif",password:2222},
// {username:"prajju",password:3333},
// {username:"meet",password:4444},
// {username:"sai",password:5555},]

let pass=document.getElementById("password")
let user=document.getElementById("username")
let form=document.querySelector("form")
let loginmsg=document.getElementById("loginmsg")



let getdata=JSON.parse(localStorage.getItem("data"))

function loginSucess()
{

    for(let {Fname,Email,Pass} of getdata)
    {
        if(user.value==Email && pass.value==Pass)
        {
            form.action="./login.html"
            document.body.innerHTML=`<h1>${Fname} sucessfully loged in...</h1>`
        }

        // if(user.value==="" || pass.value==="")
        // {
        //     alert("enter email or password")
        // }


        // else(user.value!=Email || pass.value!=Pass)
        // {
        //     alert("enter valid username or password")
        // }
    }             
}


