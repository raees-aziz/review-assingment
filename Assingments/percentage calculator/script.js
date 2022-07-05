function myFunction() {
  var isl = document.getElementById("islamiat").value;

  var mth = document.getElementById("math").value;

  var eng = document.getElementById("english").value;

  var com = document.getElementById("computer").value;

  var urd = document.getElementById("urdu").value;

  var totalMark = 500;

  var obtainMark =
    parseFloat(isl) +
    parseFloat(mth) +
    parseFloat(com) +
    parseFloat(urd) +
    parseFloat(eng);

  var percentage = (obtainMark / totalMark) * 100;

  alert(percentage);

  console.log(percentage);

  var percentage = (document.getElementById("percentage").value =
    percentage.toFixed(2));

  //GRADE PORTION==>

  var grade = "";

  if (percentage >= 80 && percentage <= 100) {
    grade = "A+";
  } else if (percentage >= 70 && percentage <= 79) {
    grade = "A";
  } else if (percentage >= 60 && percentage <= 69) {
    grade = "B";
  } else if (percentage >= 50 && percentage <= 59) {
    gradE = "C";
  } else {
    grade = "Fail";
  }
  document.getElementById("grade").value = grade;
  console.log(grade);
}
