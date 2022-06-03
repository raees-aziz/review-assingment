// alert ("hello bhai");
function myFunction() {
    var isl = document.getElementById('islamiat').value;
    var mth = document.getElementById('math').value;
    var eng = document.getElementById('english').value;
    var com = document.getElementById('computer').value;
    var urd = document.getElementById('urdu').value;
    var totalMark = 500;
    var obtainMark = (isl + mth + eng + com + urd );
    var percentage = (obtainMark * 100 ) / totalMark;
    console.log(percentage);
var percentage = document.getElementById('percentage').value = percentage

}