import datepicker from "js-datepicker";
import { DateTime } from "luxon";

const now = DateTime.now();
let displayYears = document.getElementById("yrs");
let displayMonths = document.getElementById("mnths");
let btn = document.getElementById("btn");
let usrYears;
let usrMonths;

btn.addEventListener("click", calculateAge);

const dp = datepicker('#dp', { 
  onSelect: (instance, userDate) => {
    usrYears = userDate.getFullYear();
    usrMonths = userDate.getMonth() + 1;
  },
});

function calculateAge()
{
  let years = now.year - usrYears;
  let months = now.month - usrMonths;

  if (months < 0) 
  {
    years--;
    months += 12;
  }

  displayYears.innerText = years + " years ";
  displayMonths.innerText = months + " months old!";
}