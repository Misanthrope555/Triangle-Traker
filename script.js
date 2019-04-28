function Triangle(){
    var base = parseFloat(prompt("Enter the base length of the triangle"));
    var height = parseFloat(prompt("Enter the height lenght of the triangle"));
    var hypotenus = parseFloat(prompt("Enter the hypotenus length of the triangle"));

    if(base===height && height===hypotenus && hypotenus === base){
        alert("This is an equilateral triangle");
    }
    else if(base===height && height === hypotenus || hypotenus===base){
        alert("An isosceles triangle");
    }
    else if((base + height) <= hypotenus||(height+hypotenus)<=base||(hypotenus+base)<= height){
        alert("This is not a triangle");

    }
    else if(base <= height <= hypotenus){
        alert("This is a scalene triangle")
    }
}