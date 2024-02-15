(function () {

    let bar1 = document.querySelector('#bar1');
    let bar2 = document.querySelector('#bar2');
    let bar3 = document.querySelector('#bar3');
    let bars = document.querySelector('.bars');
    let nameLabel = document.querySelector('#nameLabel');
    let emailLabel = document.querySelector('#emailLabel');
    let phoneLabel = document.querySelector('#phoneLabel');
    const text1 = document.querySelector('.text1')
    const text2 = document.querySelector('.text2')
    const nameError = document.querySelector('#nameError')
    const emailError = document.querySelector('#emailError')
    const phoneError = document.querySelector('#phoneError')
    const form = document.querySelector('#form');
    let backButton = document.querySelector(".back-button")
    let nextButton = document.querySelector(".next-button")
    let arcadeButton = document.querySelector(".arcade-button")
    let advancedButton = document.querySelector(".advanced-button")
    let proButton = document.querySelector(".pro-button")
    let circleButton1 = document.querySelector(".circle-button1")
    let circleButton2 = document.querySelector(".circle-button2")
    let circleButton3 = document.querySelector(".circle-button3")
    let circleButton4 = document.querySelector(".circle-button4")
    let toggle = document.querySelector(".toggle")
    let toggleCheckbox = document.querySelector('.toggle-checkbox');
    const arcadeMonths = document.querySelector('#arcade-months')
    const advancedMonths = document.querySelector('#advanced-months')
    const proMonths = document.querySelector('#pro-months')
    const arcadePrice = document.querySelector('.arcade-month-price')
    const advancedPrice = document.querySelector('.advanced-month-price')
    const proPrice = document.querySelector('.pro-month-price')
    const buttons = document.querySelectorAll('.arcade-button, .advanced-button, .pro-button');
let isButtonClicked = false;

    function checkIfBarsFilled() {
        let isFilled = true;

        if (bar1.value.trim() === "") {
            nameError.textContent = "This field is required"
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

    let lastClickedButton = true;

    function handleClick(event) {
        const button = event.currentTarget;

        if (lastClickedButton !== true) {
            lastClickedButton.style.backgroundColor = '';
        }

        button.style.backgroundColor = 'red';
        lastClickedButton = button;



    }


    function step2() {

        isButtonClicked = false

        circleButton1.className = "circle-button1";
        circleButton2.className = 'circle-js';
        backButton.style.display = "block";
        nextButton.style.display = "block";
        toggle.style.display = "block";
        text1.textContent = "Select your plan"
        text2.textContent = "You have the option of monthly or yearly billing."
        bars.style.display = "none";
        arcadeButton.style.display = "block";
        advancedButton.style.display = "block"
        proButton.style.display = "block"

        toggleCheckbox.addEventListener('change', function () {
            if (this.checked) {
                arcadeMonths.style.display = "block"
                advancedMonths.style.display = "block"
                proMonths.style.display = "block"
                arcadePrice.textContent = "$90/yr"
                advancedPrice.textContent = "$120/yr"
                proPrice.textContent = "$150/yr"

            } else {
                arcadeMonths.style.display = "none"
                advancedMonths.style.display = "none"
                proMonths.style.display = "none"
                arcadePrice.textContent = "$9/yr"
                advancedPrice.textContent = "$12/yr"
                proPrice.textContent = "$15/yr"
            }
        })

        buttons.forEach(button => {
            button.addEventListener('click', handleClick);
            isButtonClicked = true;
        });


        

    }

    function step3() {
        circleButton2.className = "circle-button2";
        circleButton3.className = 'circle-js';
        backButton.style.display = "block";
        text1.textContent = "Pick add-ons"
        text2.textContent = "Add-ons help enhance your gaming experience."
        form.style.display = "none";
        console.log("hello")
        
    }
    function step1() {
        text1.textContent = "Personal info";
        text2.textContent = "Please provide your name, email address, and phone number."
        bars.style.display = "block";
        arcadeButton.style.display = "none";
        advancedButton.style.display = "none"
        proButton.style.display = "none"
        circleButton1.className = "circle-js";
        circleButton2.className = "circle-button2";
        toggle.style.display = "none";
        backButton.style.display = "none";
        isButtonClicked = true;
    }

    step1()

    let index = 0;
    

    nextButton.addEventListener('click', function () {
        const isValid = true
 
        // checkIfBarsFilled()
        if (isValid && isButtonClicked) {
            step2()
            step3()
        }
          else{
            alert('Please choose a plan before going to the next step');
        }
        
        // if (isButtonClicked == true) {
        //     alert('Please choose a plan you want before going to next step');
        //     return;
        // }
        // else {
        //     step3()
        // }


    })
    backButton.addEventListener('click', function () {
        if (bars.value != '') {
            phoneError.textContent = ''
            nameError.textContent = ''
            emailError.textContent = ''
            bar1.style.borderColor = "hsl(0, 0%, 8%, 0.3)";
            bar2.style.borderColor = "hsl(0, 0%, 8%, 0.3)";
            bar3.style.borderColor = "hsl(0, 0%, 8%, 0.3)";
        }
        if (text1.textContent == "Select your plan") {
            step1();
        }
    })
    // form.addEventListener('submit', function (event) {
    //     event.preventDefault();
    //     const isValid= checkIfBarsFilled()
    //     if(isValid){
    //         step2() // ma byc w srodku, ale po co przeklikiwac za kazdym razem
    //     }

    //     // step3()
    // })



})();