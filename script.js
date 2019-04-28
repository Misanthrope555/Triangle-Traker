function Triangle(){
    var base = parseFloat(prompt("Enter the base length of the triangle"));
    var height = parseFloat(prompt("Enter the height lenght of the triangle"));
    var hypotenus = parseFloat(prompt("Enter the hypotenus length of the triangle"));

    if(base===height && height===hypotenus && hypotenus === base){
        alert("NICE!! based on the the infomation you have given us, that should form an equilateral triangle");
           
    }
    else if(base===height && height === hypotenus || hypotenus===base){
        alert("NICE!! based on the the infomation you have given us,that should form an  isosceles triangle");
    }
    else if((base + height) <= hypotenus||(height+hypotenus)<=base||(hypotenus+base)<= height){
        alert("Unfortunately,that will not a triangle");

    }
    else if(base <= height <= hypotenus){
        alert("NICE!! based on the the infomation you have given us,that should forma scalene triangle")
    }
}

function createTriangle(x1,y1,x2,y2,x3,y3,){
    var trianglee = new Object();
    trianglee.x1 = x1;
    trianglee.x2 = x2;
    trianglee.x3 = x3;
    trianglee.y1 = y1;
    trianglee.y2 = y2;
    trianglee.y3 = y3;

    trianglee.draw = function() {
        draw.trianglee(this.x1, this.y1,this.x2,this.y2,this.x3,this.y3);
    }
    return trianglee;
}
var trianglee = createTriangle(100,100,300,120,280,350);
        trianglee.draw();
        