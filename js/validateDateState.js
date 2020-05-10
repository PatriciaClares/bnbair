function dateValidation() {
    checkin = new Date(document.getElementById("checkin").value)
    checkout = new Date(document.getElementById("checkout").value)

    if (isValid(checkin, checkout) && document.getElementById('validationServer04').value != '') { 
        localStorage.setItem('valueState', document.getElementById('validationServer04').value)
        localStorage.setItem('days', calculeDays(checkin, checkout))
        
        window.location = './listCards.html'

    } else {
        document.getElementById('error').style.display = 'block'
    }
}

function isValid(checkin, checkout) {
    return checkin < checkout ? true : false
}

function calculeDays(checkin, checkout) {
    const timeDiff = Math.abs(checkout.getTime() - checkin.getTime());
    return Math.ceil(timeDiff / (1000 * 3600 * 24));
}