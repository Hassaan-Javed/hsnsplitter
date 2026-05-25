//Input elements
var inpBill = document.getElementById("inp-bill");
var inpPersons = document.getElementById("inp-persons");
var inpTip = document.getElementById("inp-tip");

//output elements
var outBill = document.getElementById("out-bill");
var outTip = document.getElementById("out-tip");
var outPerPerson = document.getElementById("out-per-person");

var errBill = document.getElementById("err-bill");
var errPersons = document.getElementById("err-persons");
var errTip = document.getElementById("err-tip");

//reset button after everything is done
//getting the element
var btnReset = document.getElementById("btn-reset");

function formatMoney(amount) {
    return "RS " + amount.toFixed(2);
}


function calculate() {
    var bill = parseFloat(inpBill.value);
    var persons = parseInt(inpPersons.value);
    var tipPercentage = parseFloat(inpTip.value);

    var hasError = false;

    // Validate bill
    if (inpBill.value === "" || isNaN(bill) || bill < 0) {
        inpBill.classList.add("error");
        errBill.textContent = "Please enter a valid bill amount";
        hasError = true;
    } else {
        inpBill.classList.remove("error");
        errBill.textContent = "";
    }

    // Validate persons
    if (isNaN(persons) || persons < 1) {
        inpPersons.classList.add("error");
        errPersons.textContent = "At least 1 person required";
        hasError = true;
    } else {
        inpPersons.classList.remove("error");
        errPersons.textContent = "";
    }

    // Validate tip
    if (isNaN(tipPercentage) || tipPercentage < 0 || tipPercentage > 100) {
        inpTip.classList.add("error");
        errTip.textContent = "Tip must be between 0 and 100";
        hasError = true;
    } else {
        inpTip.classList.remove("error");
        errTip.textContent = "";
    }

    // If any input is invalid then we stop calculation
    if (hasError) return;

    // Do actual calculation
    var tipAmount = bill * (tipPercentage / 100);
    var total = bill + tipAmount;
    var perPerson = total / persons;

    // Update outputs
    outBill.textContent = formatMoney(bill);
    outTip.textContent = formatMoney(tipAmount);
    outPerPerson.textContent = formatMoney(perPerson);
}

// Reset all values
function resetAll() {
    inpBill.value = "";
    inpPersons.value = "1";
    inpTip.value = "0";

    inpBill.classList.remove("error");
    inpPersons.classList.remove("error");
    inpTip.classList.remove("error");

    errBill.textContent = "";
    errPersons.textContent = "";
    errTip.textContent = "";

    outBill.textContent = "RS 0.00";
    outTip.textContent = "RS 0.00";
    outPerPerson.textContent = "RS 0.00";
}

// Event listeners for all elements
inpBill.addEventListener("input", calculate);
inpPersons.addEventListener("input", calculate);
inpTip.addEventListener("input", calculate);


//When reset clicked then reset all
btnReset.addEventListener("click", resetAll);