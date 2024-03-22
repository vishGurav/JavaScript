let body=document.body;

// let form=document.createElement("form")
// form.action="./dommethod.html"

// let user=document.createElement("input")
// user.type="text"
// user.placeholder="username"

// let pass=document.createElement("input")
// pass.type="password"
// pass.placeholder="password"

// let btn=document.createElement("button")
// btn.type="submit"
// btn.innerText="login"

// let hr1=document.createElement("hr")
// let hr2=document.createElement("hr")

// body.prepend(form)
// form.append(user,hr1,pass,hr2,btn)

// console.log(form.firstChild)
// console.log(form.lastChild)
// console.log(form.children[1])



// let students=[
//     {
//         sname:"krushit",
//         age:21,
//         marks:98
//     },
//     {
//         sname:"meet",
//         age:23,
//         marks:86
//     },
//     {
//         sname:"huzaif",
//         age:25,
//         marks:75
//     },
//     {
//         sname:"praj",
//         age:30,
//         marks:55
//     },
// ]

// students.map(({sname,age,marks},index)=>
// {
//     body.innerHTML+=`
//     <h1>${sname}</h1>
//     <h1>${age}</h1>
//     <h1>${marks}</h1>
// `
// })


let products=[
    {
        pid:1,
        pname:"earphone",
        price:200
    },
    {
        pid:2,
        pname:"mobile",
        price:20000
    },
    {
        pid:3,
        pname:"iwatch",
        price:6000
    },
    {
        pid:4,
        pname:"mobile",
        price:40000
    },
    {
        pid:5,
        pname:"speaker",
        price:800
    },
    {
        pid:6,
        pname:"mobile",
        price:700
    },
    {
        pid:9,
        pname:"earphone",
        price:800
    },
]

let detail=document.getElementById('detail')
let tprice=document.getElementById("tprice")


// ! all product displayed

let totalPrice=0;
products.filter(({pid,pname,price})=>
    {  
        totalPrice=totalPrice+price
        tprice.innerText=totalPrice
        return detail.innerHTML+=
        `
        <tr>
            <td>${pid}</td>
            <td>${pname}</td>
            <td>${price}</td>
        </tr>
        
        `
    })

// ! filtered product display

function fetchData()
{
    detail.innerHTML=""
    let totalFilteredPrice=0;
    products.filter(({pid,pname,price})=>
    {
       let prod=document.form.name.value
        if(pname.includes(prod))
        {
            totalFilteredPrice=totalFilteredPrice+price
            tprice.innerText=totalFilteredPrice
        return detail.innerHTML+=
        `
        <tr>
            <td>${pid}</td>
            <td>${pname}</td>
            <td>${price}</td>
        </tr>
        `
        }
    })
}








