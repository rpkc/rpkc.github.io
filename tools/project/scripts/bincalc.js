


function convert(inputBoxId,inputBaseId,outputBaseId,outputBoxId)
{
    "use strict";
    
    var inputBase=Number(document.getElementById(inputBaseId).value);
    var outputBase=Number(document.getElementById(outputBaseId).value);

    if(document.getElementById(inputBoxId).value===""){   alert("please input a number");
    return;}

    if(inputBase!==0&&outputBase!==0)
    {
        
        var num=new BigNumber(document.getElementById(inputBoxId).value,inputBase);
        if (isNaN(num))
        {
            alert("please check the number");
            return;
        }

        document.getElementById(outputBoxId).innerHTML=num.toString(outputBase);
            return;
        
    }
    alert("please check cause the number are not in base: "+inputBase);
}

function convertV(){
    convert("inputbox","ibase1","obase","outputbox1")
}




function calculate(inputBox1Id,inputBox2Id,inputBaseId,opBoxId,outputBoxId)
{ "use strict";

    var base=Number(document.getElementById(inputBaseId).value);

    if(base===0)
    {
        alert("please select base");
        return;
    }

    if(document.getElementById(inputBox1Id).value===""||document.getElementById(inputBox2Id).value=="")
    {
        alert("please input the numbers");
    return;
    }

    var num1= new BigNumber(document.getElementById(inputBox1Id).value,base);
    var num2= new BigNumber(document.getElementById(inputBox2Id).value,base);



    if(isNaN(num1)||isNaN(num2))
     {
        alert("please check cause the numbers are not in base: "+base);
        return;
    }
    num1=Number(num1);
    num2=Number(num2);

    if(document.getElementById(opBoxId).value=="")
    {
        alert("please select an operation")
        return;
    }

    var result;
//opret
    var ch=document.getElementById(opBoxId).value;
    switch(ch)
    {
        case '+':
            result=(num1+num2).toString(base);
        break;
        
        case '-':
            result=(num1-num2).toString(base);
        break;
        
        case '*':
            result=(num1*num2).toString(base);
        break;
        
        case '/':
            result=(num1/num2).toString(base);
        break;
        
        default:
            result= 0;
        break;                    
    }

    document.getElementById(outputBoxId).value=result;
}
function calculateV(){calculate("inputbox1","inputbox2","ibase2","opsel","outputbox2")}