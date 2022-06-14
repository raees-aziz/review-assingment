// alert ("hello bhai");
function myFunction() {

    var isl = document.getElementById('islamiat').value;

    var mth = document.getElementById('math').value;

    var eng = document.getElementById('english').value;

    var com = document.getElementById('computer').value;


    var urd = document.getElementById('urdu').value;


    var totalMark = 500;
// var p =  ;

    var obtainMark = parseFloat(isl) + parseFloat(mth) + parseFloat(com) + parseFloat(urd) + parseFloat(eng);


    
    
    var percentage = (obtainMark / totalMark) *100  ;
    
    alert(percentage) 

    console.log(percentage);


var percentage = document.getElementById('percentage').value = percentage

}