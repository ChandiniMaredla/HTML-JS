function calc(opr)
{
    var a=parseInt(document.getElementById("a").value);
var b=parseInt(document.getElementById("b").value);
console.log(a);
console.log(b);
    if(opr=="add")
        {
            window.alert(a+b);
        }
        else if(opr=="sub")
            window.alert(a-b);
        else if(opr=="mul")
            window.alert(a*b);
        else if(opr=="div")
            window.alert(a/b);
}

function clearfields(){
    document.getElementById("a").value="";
    document.getElementById("b").value="";
}