const pattern=/^[a-zA-Z]+$/;
const numbers=/^[0-9]+$/;
const regex = /[^a-zA-Z0-9]/;
var temp=0;
var c=0;
var gender=document.getElementsByClassName("gender");
// first name validation
console.log(document.getElementById("country").value);
function checkfname() {
    let fname = document.getElementById("fname").value;
   
    console.log("working");
    if (fname.length === 0) {
        document.getElementById("fnamemsg").innerText = "First name should not be empty";
        document.getElementById("fnamemsg").style.display = 'inline'; 
        temp =1;
    }
    else if(fname.length>25)
        {
            document.getElementById("fnamemsg").innerText = "First name should not exceed 25 characters";
            document.getElementById("fnamemsg").style.display = 'inline'; 
            temp =1;
        }
        else if(fname.length<3)
            {
                document.getElementById("fnamemsg").innerText = "First name should not be less than 3 characters";
                document.getElementById("fnamemsg").style.display = 'inline';
                temp =1; 
            }
            else if(!pattern.test(fname))
                {
                    document.getElementById("fnamemsg").innerText = "Enter characters only";
                    document.getElementById("fnamemsg").style.display = 'inline'; 
                    temp =1;
                }
    else {
        document.getElementById("fnamemsg").style.display = 'none'; 
        temp =0;
    }
}

document.getElementById("fname").addEventListener("blur", checkfname);
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// last name validation
function checklname() {
    let lname = document.getElementById("lname").value;
    console.log("working");
    if (lname.length === 0) {
        document.getElementById("lnamemsg").innerText = "First name should not be empty";
        document.getElementById("lnamemsg").style.display = 'inline'; 
        temp =1;
    }
    else if(lname.length>25)
        {
            document.getElementById("lnamemsg").innerText = "First name should not exceed 25 characters";
            document.getElementById("lnamemsg").style.display = 'inline'; 
            temp =1;
        }
        else if(lname.length<3)
            {
                document.getElementById("lnamemsg").innerText = "First name should not be less than 3 characters";
                document.getElementById("lnamemsg").style.display = 'inline'; 
                temp =1;
            }
            else if(!pattern.test(lname))
                {
                    document.getElementById("lnamemsg").innerText = "Enter characters only";
                    document.getElementById("lnamemsg").style.display = 'inline'; 
                    temp =1;
                }
    else {
        document.getElementById("lnamemsg").style.display = 'none'; 
        temp =0;
    }
}
document.getElementById("lname").addEventListener("blur", checklname);
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// email validation
function checkmail()
{
    let email=document.getElementById("email").value;
    let val=""+'@';
    if(email === "")
        {
            document.getElementById("emailmsg").innerText = "Fill this field";
            document.getElementById("emailmsg").style.display = 'inline';  
            temp =1;
        }
    else if(!email.includes(val))
        {
            document.getElementById("emailmsg").innerText = "Enter correct mail";
            document.getElementById("emailmsg").style.display = 'inline'; 
            temp =1;
        }
        else{
            document.getElementById("emailmsg").style.display = 'none'; 
            temp =0;
        }
}
document.getElementById("email").addEventListener("blur", checkmail);

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



// phone number validation

function checkphno()
{
    let phno=document.getElementById("phno").value;
if(phno === "")
    {
        document.getElementById("phnomsg").innerText = "Enter phone number";
        document.getElementById("phnomsg").style.display = 'inline';   
        temp =1;
    }
    else if(!numbers.test(phno))
        {
            document.getElementById("phnomsg").innerText = "Enter phone number";
            document.getElementById("phnomsg").style.display = 'inline';  
            temp =1;
        }
        else if(phno.length<10 || phno.length>10)
            {
                document.getElementById("phnomsg").innerText = "Phone number should contain 10 digits";
                document.getElementById("phnomsg").style.display = 'inline'; 
                temp =1;
            }
            else{
                document.getElementById("phnomsg").style.display = 'none'; 
                temp =0;
            }

}
document.getElementById("phno").addEventListener("blur", checkphno);
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


// password validation
function isFirstCharacterUpperCase(str) {
    let firstChar = str.charAt(0); // Get the first character of the string
    return firstChar === firstChar.toUpperCase() && firstChar !== firstChar.toLowerCase();
}

function checkpasswd(){

    let passwd=document.getElementById("passwd").value;
    if(passwd === "")
        {
            document.getElementById("passwdmsg").innerText = "Password should not be empty";
            document.getElementById("passwdmsg").style.display = 'inline';   
            temp =1;
        }
        else if(passwd.length<5 && passwd.length>13)
            {
                document.getElementById("passwdmsg").innerText = "Password contain 5 to 13 characters";
                document.getElementById("passwdmsg").style.display = 'inline';
                temp =1;
            }
   else if(!isFirstCharacterUpperCase(passwd))
        {
            document.getElementById("passwdmsg").innerText = "1st letter should be uppercase";
                document.getElementById("passwdmsg").style.display = 'inline';  
                temp =1;
        }
    else if(!(/[a-z]/).test(passwd))
        {
            document.getElementById("passwdmsg").innerText = "Password should also contain lowercase letters";
            document.getElementById("passwdmsg").style.display = 'inline'; 
            temp =1; 
        }
        else if(!(/[0-9]/).test(passwd))
            {
                document.getElementById("passwdmsg").innerText = "Password should contain atleast one digit";
                document.getElementById("passwdmsg").style.display = 'inline';  
                temp =1;
            }
            else if(!(regex).test(passwd))
                {
                    document.getElementById("passwdmsg").innerText = "Password should contain atleast one special character";
                document.getElementById("passwdmsg").style.display = 'inline';
                temp =1;
                }

                else{
                    document.getElementById("passwdmsg").style.display = 'none'; 
                    temp =0;
                }
}
document.getElementById("passwd").addEventListener("blur", checkpasswd);
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

//confirm password validation
function checkconf(){
    let conf=document.getElementById("confpasswd").value;
    console.log(conf);
    let passwd=document.getElementById("passwd").value;
if(conf === "")
    {
        document.getElementById("confpasswdmsg").innerText = "Confirm password";
        document.getElementById("confpasswdmsg").style.display = 'inline';   
        temp =1;
    }
    else if(conf !== passwd)
        {
            document.getElementById("confpasswdmsg").innerText = "Not same as password";
                document.getElementById("confpasswdmsg").style.display = 'inline'; 
                temp =1;
        }
        else{
            document.getElementById("confpasswdmsg").style.display = 'none'; 
            temp =0;
        }
}
document.getElementById("confpasswd").addEventListener("blur", checkconf);
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


// dob validation
function dob(){
    let dob=document.getElementById("dob").value;
    console.log(dob);
    if(dob==="")
        {
            document.getElementById("dobmsg").innerText = "Select day,month and year";
            document.getElementById("dobmsg").style.display = 'inline'; 
            temp =1;
        }
        else{
            document.getElementById("dobmsg").style.display = 'none'; 
            temp =0;
        }
}
document.getElementById("dob").addEventListener("blur", dob);
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


// gender validation
function gender1(){ 
    console.log("gender");
    let ans=false;
    for(let i=0;i<gender.length;i++)
        {
if(gender[i].checked)
    {
        ans=true;
        break;
    }
        }
        if (!ans) {
            document.getElementById("gendermsg").innerText = "Please select your gender.";
            document.getElementById("gendermsg").style.display = 'inline';
        } else {
            document.getElementById("gendermsg").style.display = 'none';
        
        }
}

function removemsg(){
    document.getElementById("gendermsg").style.display = 'none';  
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


//textarea validation
function textarea()
{
    console.log("textarea");
    let text=document.getElementById("textarea").value;
    if(text === "")
        {
            document.getElementById("textareamsg").innerText = "Enter your address";
            document.getElementById("textareamsg").style.display = 'inline'; 
            temp =1;
        }
        else if(text.length>150)
            {
                document.getElementById("textareamsg").innerText = "You can enter upto 150 characters";
                document.getElementById("textareamsg").style.display = 'inline'; 
                temp =1;
            }
        else{
            document.getElementById("textareamsg").style.display = 'none'; 
            temp =0;
        }
}
document.getElementById("textarea").addEventListener("blur",textarea);

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


//
function uncheckAllRadios(name) {
    let radios = document.getElementsByName(name);
    for (let i = 0; i < radios.length; i++) {
        radios[i].checked = false;
    }
    document.getElementById("gendermsg").style.display = 'none'; 
}



//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// form validation

function submitform()
{
     console.log("submit");
                checkfname();
                checklname();
                checkmail();
                checkpasswd();
                checkconf();
                checkphno();
                dob();
                gender1();
                textarea();
if(temp===0)
{
    window.alert("Form submitted successfully!");
   document.getElementById("fname").value="";
document.getElementById("lname").value="";
    document.getElementById("email").value="";
document.getElementById("phno").value="";
    document.getElementById("passwd").value="";
    document.getElementById("confpasswd").value="";
    document.getElementById("dob").value="";
document.getElementById("textarea").value="";
uncheckAllRadios("gender");
}

}