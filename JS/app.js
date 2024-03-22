// let a=1;
// let count=0;
// let i;

// for(i=1; i<=a; i++)
// {
//     if(a%i===0)
//     {
//         count++;
//     }
// }
// if(count===2)
// {
//     console.log(a + " is a prime number")
// }
// else
// {
//     console.log(a + " is not a prime number")
// }

// let a=9;
// let i;
// let fct=1;

// for(i=1; i<=a; i++)
// {
//     fct=fct*i;
//     // console.log(fct)
// }

// console.log(fct)

// for(i=1;i<=120;i++)
// {
//     count=0;
//     if(120%i===0)
//     {
//         for(let j=1;j<=i;j++)
//         {
//             if(i%j===0)
//             {
//                 count++
//             }
//         }
//         if(count===2)
//         {
//             console.log(i)
//         }
//     }
// }


// (function add(a,b){
//     console.log(a)
//     console.log(b)
//     console.log(a+b)
// }
// )(3,5);


// var count = 0;
// while(count<10)
// {
//     console.log(count);
//     count++;
// }

// function add(a=60)
// {
//     console.log(a)
//     return function(b)
//     {
//         console.log(b)
//         return function(c)
//         {
//             console.log(a+b+c)
//         }
//     }
// }

// add()(20)

// let res=(a=30)=>(b)=>(c)=>{console.log(a+b+" hello")}

// res()(4)()


// let s="QSPIDERS JSPIDERS"

// console.log(s.split("S"))

// console.log(s.charCodeAt(5))

// let rev=s.split("")

// console.log(rev)

// console.log(rev.length)
// console.log(rev[rev.length-1]+rev[rev.length-2])

// console.log(s.padEnd(25,"Hello"))

// let a="saishrsee";
// console.log(a.split("s"))



// ! reverse string

// let s="JAVASCRIPT";
// let rev="";

// for(let i=0;i<s.length;i++){
//     rev=s[i]+rev;
// }
// console.log(rev)


// let len=s.length-1;

// for(i=len ;i>=0; i--)
// {
//      rev=rev+s[i]
// }
// console.log(rev)

// if(rev===s)
// {
//     console.log("string is palindrome")
// }
// else
// {
//     console.log("it is not palindrome")
// }

// ! check given string is available in actual string or not

// let s="MALAYALAMYA";
// let fs="LAYA"

// for(let i=0;i<=(s.length-fs.length);i++)
// {
//     var rev="";
//     for(let j=i; j<(fs.length+i);j++)
//     {
//         rev=rev+s[j];
//     }
//     if(rev===fs)
//     {
//         console.log(fs,"is available in",s)
//         break;
//     }
// }
// if(rev!==fs)
// {
//     console.log(fs,"is not available in",s)
// }

// function printNum(s){
//     let a=[];
//     for(let i=0;i<=s.length;i++){
//         s1=s.charCodeAt(i)
//         if(s1>=48&&s1<=57){
//             a.push(s[i])
//         }
//         if(i==s.length-1){
//             if(a.length!=0){
//                 let temp=''
//                 for(let j=0;j<a.length;j++){
//                     temp=a.pop()+temp
//                 }
//                 console.log(temp)
//             }

//         }
//         else{
//             // let temp=''
//             if(a.length!=0){
//                 let temp=''
//                 for(let j=0;j<a.length;j++){
//                     temp=a.pop()+temp
//                 }
//                 console.log(temp)
//             }
//         }
//     }
// }

// let s='he123ll1o23'
// printNum(s)

// ! convert string in to reverse
// let s="JAVASCRIPT"
// let ars=Array.from(s)
// let rev=ars.reverse()
// let revs=rev.join("")

// console.log(revs)

// ! totalOfArray elements

// function totalOfArray(Numbers){
// let sum=0;
// for(let i of Numbers)
// {
//     sum=sum+i
// }
// console.log(sum)
// }
// totalOfArray([9,5])

// ! filter array wich is not starting with m using method

// let products=["mobile","earphone","watch",'iphone']

// let res=products.filter(ele=>{
//     return ele[0]!="m"
// })

// console.log(res)

//! filter array wich is not starting with m without method

// let products=["mobile","earphone","watch",'iphone']

// for(let ele of products)
// {
//     if(ele[0]!="m")
//     {
//         console.log(ele)
//     }
// }

// let i="abc";

// for(let i=1;i<=10;i++)
// {
//     // console.log(i)
//     let i=10;
//     console.log(i)



// let arr1=["mobile","camera","earphone"]

// for(const i=0;i<=arr1.length;i++)
// {
//     console.log(arr1[i])
// }

// for(const ind of arr1)
// {
//     console.log(ind)
// }


// let products=["camera","mobile","earphone"]
// let farr=[]
// for(let ele of products)
// {
//     if(ele.startsWith("m"))
//     {
//         continue;
//     }
//     else
//     {
//         farr.push(ele);
//     }
// }
// console.log(farr)


// let products=["mobile","camera","earphone",["a","b","c",[1,2,3]],"iphone"]

// // let res=products.flatMap(a=>a+2)

// // console.log(res)


// let res=products.flat(function (a)
// {
//    return a.startsWith("m")
// })

// console.log(res)


// let a= ["1ab3","2bc","3cda"]
// var arr=[]

// for (let ele of a)
// {
//     arr.push(ele[0])
// }

// console.log(arr)


let students=[
{   
    sname:"saishree",
    age:19,
    dept:"civil"
},
{   
    sname:"krushit",
    age:21,
    dept:"cse"
},
{   
    sname:"praj",
    age:25,
    dept:"ise"
},
{   
    sname:"huzaif",
    age:23,
    dept:"cse"
},
{   
    sname:"meet",
    age:18,
    dept:"civil"
}
]

// console.log(students)   

//! students of cse

// console.log(students.filter(ele=>ele.dept==="cse"))

//! sname in uppercase

// console.log(students.map(ele=>ele.sname.toUpperCase()))

//! age < 20

// console.log(students.filter(ele=>ele.age<20))

//! remove civil students

// console.log(students.filter(ele=>ele.dept!=="civil"))

// for(let i=0; i<students.length; i++)
// {
// for(let ele of students)
// {
//     if(ele.dept==="civil")
//     {
//     let ind=students.indexOf(ele)
//     students.splice(ind,1)
//     }
// }
// }
// console.log(students)

// let products=["mobile","earphone","camera","iphone","earphone"]

// let res=products.findIndex(a=>a==="earphone")

// console.log(res)


// let a=[1,2,3,4,5,6]

// let res=a.reduce((previous, current) => {
//     console.log(previous)
//     // console.log(current)
//     return "hello"
// })
// console.log(res)


// let student=
// {
//     sname:"krushit",
//     age:21,
//     marks:
//     {
//         maths:95,
//         science:85
//     },
//     address:
//     {
//         home:{city:"banglore",state:"karnataka"},
//         work:{city:["pune","mumbai","heydrabad"]}
//     }
// }

// let {sname,address:{home:{city,state},work:{city:newcity}},marks}=student
// console.log(sname,city,state,newcity,marks)


function getDate1(d)
{
 
   return d.getFullYear()+"-"+((d.getMonth()<9)?"0":"")+(+d.getMonth()+1)+"-"+d.getDate()

}

console.log(getDate1(new Date("2003-09-25")))

function getDate2(d)
{
 
   return d.getFullYear()+"-"+d.toLocaleDateString("en-IN",{month:"short"}).slice(0,-1)+"-"+d.getDate()

}
console.log(getDate2(new Date()))

function getDate3(d)
{
 
   return d.getDate()+"-"+d.toLocaleDateString("en-IN",{month:"short"})+"-"+d.getFullYear()

}
console.log(getDate3(new Date("2003-6-24")))

function getDay(d)
{
 
   return d.toLocaleDateString("en-IN",{weekday:"long"})

}
console.log(getDay(new Date("2023-09-27")))


function bDateYear(d)
{
    console.log((d.getMonth()<new Date().getMonth())?new Date().getFullYear()-d.getFullYear():(new Date().getFullYear()-d.getFullYear())-1)
    console.log((new Date().getMonth>d.getMonth())?(d.getDate()<new Date().getDate())?(new Date().getMonth()-d.getMonth()):(new Date().getMonth()-d.getMonth()-1):(d.getDate()<new Date().getDate())?(d.getMonth()-new Date().getMonth()):(d.getMonth()-new Date().getMonth()))

}


bDateYear(new Date("2003-01-10"))


