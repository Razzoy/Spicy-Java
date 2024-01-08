//OPEN & CLOSE MODAL

const openButton = document.getElementById('modalButton');
const myModal = document.getElementById('containerModal');
const cancelButton = document.getElementById('cancel')


openButton.addEventListener('click', function () {
    myModal.classList.toggle('show-modal');
});

cancelButton.addEventListener('click', function () {
    location.reload();
});

//FORM VALIDATION

const formParent = document.getElementById('containerModal');
const myName = document.getElementById('name');
const myEmail = document.getElementById('email');
const myPhone = document.getElementById('phone');

const myButton = document.getElementById('submit');
const errorName = document.getElementById('errorName');
errorName.style.display = 'none';
const errorEmail = document.getElementById('errorEmail');
errorEmail.style.display = 'none';
const errorPhone = document.getElementById('errorPhone');
errorPhone.style.display = 'none';


myButton.addEventListener('click', (event) => {
    event.preventDefault();

    let myTrimmedName = myName.value.trim();
    let myPhoneNumber = myPhone.value;


    if (myTrimmedName.length > 1 && myPhoneNumber.length === 8 && validateEmail(myEmail.value)) {

        console.log('Formen er udfyldt korrekt!');

        formParent.innerHTML = '';

        let myResponseElement = document.createElement('h2');
        myResponseElement.innerText = 'Tak for Tilmeldingen!';
        myResponseElement.classList.add('thanks')
        formParent.appendChild(myResponseElement);

        myResponseElement.addEventListener('click', function () {

            location.reload();
        });

    } else {

        console.log('Formen er ikke ufyldt korrekt..');

        if (myTrimmedName.length <= 1) {
            console.log('Navnet er ikke udfyldt korrekt..');
            myName.classList.add('errorMarking');
            errorName.style.display = 'inline-block';

        } else {
            myName.classList.remove('errorMarking');
            errorName.style.display = 'none';
        }

        if (myPhoneNumber.length !== 8) {

            console.log(myPhone.length);
            console.log('Nummeret er ikke udfyldt korrekt..');
            myPhone.classList.add('errorMarking');
            errorPhone.style.display = 'inline-block';

        } else {
            myPhone.classList.remove('errorMarking');
            errorPhone.style.display = 'none';
        }

        if (validateEmail(myEmail.value)) {
            myEmail.classList.remove('errorMarking');
            errorEmail.style.display = 'none';
        } else {

            console.log('Emailen er ikke udfyldt korrekt..');
            myEmail.classList.add('errorMarking');
            errorEmail.style.display = 'inline-block';

        }
    }
});

function validateEmail(email) {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let isValid = emailRegex.test(email);

    return isValid;
}