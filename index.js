
function getDOB() {
    const dateInput = document.getElementById('inputDate').value;
    const currentDateInput = document.getElementById('currentDate').value;

    if (!dateInput || !currentDateInput) {
        alert('Please enter both Date of Birth and Current Date.');
        return;
    }
    const dob = new Date(dateInput);
    const currentDate = new Date(currentDateInput);

    let age = currentDate.getFullYear() - dob.getFullYear();
    const monthDiff = currentDate.getMonth() - dob.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < dob.getDate() )) {
        age--;
    }
    document.getElementById('currentAge').textContent = `You are ${age} years old.`
}