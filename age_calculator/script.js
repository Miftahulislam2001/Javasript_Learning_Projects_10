
 const calculatorBtn = () => {
 
const dateField = document.getElementById('date').value;
const monthField = document.getElementById('month').value;
const yearField = document.getElementById('year').value;



let date = new Date();
let d1 = date.getDate();
let m1 = date.getMonth();
let y1 = date.getFullYear();
let month = [31, 28, 30, 31, 30, 31, 30, 31, 30, 31, 30, 31];

if (dateField > d1){
    d1 = d1 + month[m1-1];
    m1 = m1 -1;
};

if (monthField > m1){
    m1 = m1 + 12;
    y1 = y1 - 1;
};

const currentDate = d1 - dateField;
const currentMonth = m1 - monthField;
const currentYear = y1 - yearField;

document.getElementById('current-age').innerHTML = `Your Age is ${currentYear} Year ${currentMonth} Month ${currentDate} Days`


  // Clear input fields
  document.getElementById('date').value = '';
  document.getElementById('month').value = '';
  document.getElementById('year').value = '';
};
