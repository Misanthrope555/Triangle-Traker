function triangle(){
    //convert input to integers
    var sideA = parseInt(document.side.sideA.value);
    var sideB = parseInt(document.side.sideB.value);
    var sideC = parseInt(document.side.sideC.value);

    //squares the sides of the triangle
    var sideAsquared = parseInt(document.side.sideA.value * document.side.sideA.value);
    var sideBsquared = parseInt(document.side.sideB.value * document.side.sideB.value);
    var sideCsquared = parseInt(document.side.sideC.value * document.side.sideC.value );

    //checks two sides of a triangle
    var sideAB = parseInt(document.side.sideA.value) + (document.side.sideB.value);
    var sideAC = parseInt(document.side.sideA.value) + (document.side.sideC.value);
    var sideCB = parseInt(document.side.sideC.value) + (document.side.sideB.value);
    
}