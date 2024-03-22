function validate(e)
{
    let localData=JSON.parse(localStorage.getItem("data")) || []
    console.log(localData)
    let count=0;
    e.preventDefault()
    let firstName=document.getElementById("fname").value
    let lastName=document.getElementById("lname").value
    let emailId=document.getElementById("email").value
    let password=document.getElementById("password").value
    let fname=document.getElementById("error-first-name")
    let lname=document.getElementById("error-last-name")
    let email=document.getElementById("error-email")
    let pass=document.getElementById("error-password")

    if(firstName==="")
    {
        fname.innerText="Enter First Name"
        fname.style.display="block"
        return false
    }

    else if(firstName.length<2 || firstName.length>20)
    {
        fname.style.display="block"
        fname.innerText="First Name must be 2 to 20 char..."
        return false
    }

    else if(!/[A-Za-z]+$/.test(firstName))
    {
        fname.innerText="Enter Valid First Name"
        fname.style.display="block"
        return false
    }
   
    else if(lastName==="")
    {
        lname.innerText="Enter last Name"
        lname.style.display="block"
        return false
    }
    else if(lastName.length<2 || lastName.length>20)
    {
        lname.style.display="block"
        lname.innerText="last Name must be 2 to 20 char..."
        return false
    }

    else if(!/[A-Za-z]+$/.test(lastName))
    {
        lname.innerText="Enter Valid last Name"
        lname.style.display="block"
        return false
    }

    else if(emailId==="")
    {
        email.innerText="Enter Email Id"
        email.style.display="block"
        return false
    }

    else if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailId))
    {
        email.style.display="block"
        email.innerText="Enter Valid Email Id"
        return false
    }

    else if(password==="")
    {
        pass.innerText="Enter Password"
        pass.style.display="block"
        return false
    }

    else if(!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!])(?!.*\s).{8,}$/ .test(password))
    {
        pass.innerText="Enter Strong Passwod including Upercase char,lowercase char,special char and number"
        pass.style.display="block"
        return false
    }

    else
    {
        for (let {Fname,Lname,Email,Pass} of localData)
        {
            if((Fname==firstName || Lname==lastName) && (Email==emailId && Pass==password))
            {
                alert("username or password is already exist")
                count++;
                break;
            }
        }
        if(count===0)
        {
            
            localData.push({Fname:firstName,Lname:lastName,Email:emailId,Pass:password})
            localStorage.setItem('data', JSON.stringify(localData));
            e.preventDefault()
            let fn=document.getElementById("fname")
            let ln=document.getElementById("lname")
            let em=document.getElementById("email")
            let pwd=document.getElementById("password")
            fn.value=""
            ln.value=""
            em.value=""
            pwd.value=""
        }
        return true
    }

}



