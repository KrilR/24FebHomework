
function showResult2(res1,res2,e){
    var equation;
    equation = e.elements[1].value + "x\262 + " + e.elements[2].value + "x + " + e.elements[3].value + " = 0";
    if ((undefined === res1) || ( isNaN(res1)))
    {
        alert(equation + " No results");
    }
    else{
        var text;
        text = "\n X  = " + res1 +" or X = " + res2;
        alert(equation + " " + text);
    }
}

function showResult1(res2,e){
    var equation;
    equation = e.elements[2].value + "x + " + e.elements[3].value + " = 0";
    if ((undefined === res2) || ( isNaN(res2)))
    {
        alert(equation + " No results");
    }
    else{
        var text;
        text = "\n X  = " + res2;
        alert(equation + " " + text);
    }
}


function showEquation(x){
    var text;
    text = x.elements[1].value + "x<sup>2</sup> + " + x.elements[2].value + "x + " + x.elements[3].value + " = 0";
    document.getElementById("Equation").innerHTML = text;
}

function Calculate(){
    var x = document.getElementById("getequation");
   // showEquation(x);
    var x1,x2;
    var a = x.elements[1].value;
    var b = x.elements[2].value;
    var c = x.elements[3].value;
    if (a==0){
        x1=(-c/b);
        showResult1(x1,x);
    }
    else{
    x1= ( -b + Math.sqrt(b * b - 4 * a * c) )/(2 * a);
    x2= ( -b - Math.sqrt(b * b - 4 * a * c) )/(2 * a);
    showResult2(x1, x2, x);
        
    }
}