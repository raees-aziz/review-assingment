function opcal(){
  

var operator = parseInt(document.getElementById('Opt').value) ;
// alert(operator)
var a = parseInt(document.getElementById('A').value)
var b = parseInt(document.getElementById('B').value)

 if (operator == " + "){
    document(a + b); 
} else if (operator == " - "){
    console.log (a - b) ;
} else if ( operator == " * "){
    console.log (a * b) ;
} else if (operator == " / "){
    console.log (a / b) ;
}     
else {
    "Wrong Answer" 
}

   


   console.log( parseInt(a) ,parseInt(operator ), parseInt(b) );


} 




// var result = document.getElementById('result').innerHTML=result