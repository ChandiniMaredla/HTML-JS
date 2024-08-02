var str="";
str=str+document.getElementById("text").value;
function act(arg)
{
    str=str+arg;
    document.getElementById("text").value=str;
}

function clearfield1()
{
    document.getElementById("text").value="";
    str="";
}

function back()
{
    str=str.substring(0,str.length-1);
    document.getElementById("text").value=str;
}

function calculate()
{
    document.getElementById("text").value=eval(str);
    str=eval(str);
}