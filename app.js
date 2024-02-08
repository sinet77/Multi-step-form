(function () {

    let bar1 = document.querySelector('#bar1');
    let bar2 = document.querySelector('#bar2');
    let bar3 = document.querySelector('#bar3');
    let nameLabel = document.querySelector('#nameLabel');
    let emailLabel = document.querySelector('#emailLabel');
    let phoneLabel = document.querySelector('#phoneLabel');
    const text1 = document.querySelector('.text1')
    const text2 = document.querySelector('.text2')
    const nameError = document.querySelector('#nameError')
    const emailError = document.querySelector('#emailError')
    const phoneError = document.querySelector('#phoneError')
    const form = document.querySelector('#form');
    let arcadeButton = document.querySelector(".arcade-button")
    let advancedButton = document.querySelector(".advanced-button")
    let proButton = document.querySelector(".pro-button")



    function checkIfBarsFilled() {
        let isFilled = true;

        if (bar1.value.trim() === "") {
            nameError.textContent = "This field is required" //błąd pojawi sie w tej samej linii, zamiast zajmowac całą jedną jak w "block"
            nameError.style.display = "block";
            bar1.style.borderColor = "red";
            isFilled = false;

        } if (bar2.value.trim() === "") {
            emailError.textContent = "This field is required"
            emailError.style.display = "block";
            bar2.style.borderColor = "red";
            isFilled = false;

        } if (bar3.value.trim() === "") {
            phoneError.textContent = "This field is required"
            phoneError.style.display = "block";
            bar3.style.borderColor = "red";
            isFilled = false;
        }

        return isFilled;
    }

    function step2() {
        text1.textContent = "Select your plan"
        text2.textContent = "You have the option of monthly or yearly billing."
        form.style.display = "none";
        arcadeButton.style.display="block";
        advancedButton.style.display="block"
        proButton.style.display="block"
    }

    text1.textContent = "Personal info";
    text2.textContent = "Please provide your name, email address, and phone number."

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        checkIfBarsFilled()
        step2()

    })



})();