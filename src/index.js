const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-msg");
const availableNotes = [2000, 1000, 500, 200, 100, 50, 20, 10, 5, 1];
const noOfNotes = document.querySelectorAll(".no-ofnotes");
checkButton.addEventListener("click", function validateBillAndCashAmount() {
  hideErrorMsg();
  if (billAmount.value > 0) {
    if (cashGiven.value >= billAmount.value) {
      const amountToBeReturned = cashGiven.value - billAmount.value;
      calculateChange(amountToBeReturned);
    } else {
      showErrorMsg("Error!!!please pay cash amount for the bill generated");
    }
  } else {
    showErrorMsg("Error!!!invalid bill amount!");
  }
});
function calculateChange(amountToBeReturned) {
  for (let i = 0; i < availableNotes.length; i++) {
    const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
    amountToBeReturned = amountToBeReturned % availableNotes[i];
    noOfNotes[i].innerText = numberOfNotes;
  }
}
function hideErrorMsg() {
  message.style.display = "none";
}
function showErrorMsg(showMsg) {
  message.style.display = "block";
  message.innerText = showMsg;
}
