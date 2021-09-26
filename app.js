const birthDate = document.querySelector("#date-of-birth");
const userNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check");
const messageP = document.querySelector("#message");

function extractDateSum() {
    const dob = birthDate.value
    const bDate = dob.replaceAll("-", "");
    let sum = 0
    for (i = 0; i < bDate.length; i++) {
        sum = sum + Number(bDate.charAt(i));
    }
    return sum
}

function checkLucky() {
    const dateNumber = extractDateSum()
    if (Number(userNumber.value) && dateNumber) {
        if (Number(userNumber.value) < 0) {
            messageP.innerText = "Your Lucky Number can't be negative"
        } else {
            if (dateNumber % Number(userNumber.value) === 0) {
                messageP.innerText = "Your Birthday is Lucky 🥳"
            } else {
                messageP.innerText = "Your Birthday is not Lucky 🙁 "
            }
        }
    } else {
        messageP.innerText = "Please fill in both the fields (Non-zero)"
    }

}
checkButton.addEventListener("click", checkLucky)