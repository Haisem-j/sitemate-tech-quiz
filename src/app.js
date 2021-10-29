const modal = document.getElementById('modal')
const modalOutcome = document.getElementById('modalOutcome')

/**
 * Function clears previous content in modal outcome & displays the modal
 */
function modalTrigger() {
    modal.style.display = "flex";
    modalOutcome.innerHTML = " ";
}

/**
 * Function responsible for closing the modal and loading the approriate content into modal outcome div
 * userChoice is passed through, determined by which button the user clicks
 */
function userAlert(userChoice) {
    modal.style.display = "none";
    modalOutcome.style.display = "flex";
    modalOutcome.innerHTML = userChoice
}
