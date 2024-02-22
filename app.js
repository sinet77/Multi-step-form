(function () {

    let bar1 = document.querySelector('#bar1');
    let bar2 = document.querySelector('#bar2');
    let bar3 = document.querySelector('#bar3');
    let bars = document.querySelector('.bars');
    const text1 = document.querySelector('.text1')
    const text2 = document.querySelector('.text2')
    const nameError = document.querySelector('#nameError')
    const emailError = document.querySelector('#emailError')
    const phoneError = document.querySelector('#phoneError')
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
    let checkboxDisplay = document.querySelector(".only-to-step3")
    const checkBoxes = document.querySelectorAll(".check-box")
    let table = document.querySelector(".table")
    let totalSum = document.querySelector(".total-sum")
    const finish = document.querySelector(".finish")


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





    function handleClick(event) {

        const button = event.currentTarget;

        if (button.style.backgroundColor === "red") {

            button.style.backgroundColor = "";
            isButtonClicked = false;
        }
        else {

            buttons.forEach(btn => btn.style.backgroundColor = "")
            button.style.backgroundColor = "red";
            isButtonClicked = true;

        }

    }


    function step2() {

        circleButton1.className = "circle-button1";
        circleButton3.className = "circle-button3";
        circleButton4.className = "circle-button4";
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
        totalSum.style.display = "none";
        checkboxDisplay.style.display = "none";

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

        });



    }

    let isBoxClicked = false;
    
    const prices = {}

    const isObjectEmpty = (objectName) => {
        return Object.keys(objectName).length === 0  //zwraca true or false
      }

    function step3() {

        finish.style.display = "none"
        circleButton2.className = "circle-button2";
        circleButton4.className = "circle-button4";
        circleButton3.className = 'circle-js';
        backButton.style.display = "block";
        text1.textContent = "Pick add-ons"
        text2.textContent = "Add-ons help enhance your gaming experience."
        checkboxDisplay.style.display = "block";
        arcadeButton.style.display = "none";
        advancedButton.style.display = "none"
        proButton.style.display = "none"
        toggle.style.display = "none";
        totalSum.style.display = "none";
        table.style.display = "none";
        checkBoxes.forEach(checkBox => {
            checkBox.addEventListener("change", function () {
                const upPrice = this.parentElement.querySelector('.up-price').textContent
                const optionTitle = this.parentElement.querySelector('.title').textContent
                console.log(upPrice)
                console.log(optionTitle)
                if (this.checked) {
                    prices[optionTitle] = upPrice
                    isBoxClicked = true;
                }
                else {
                    delete prices[optionTitle]
                    isBoxClicked = false;

                }
                
            })
        })



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
        circleButton3.className = "circle-button3";
        circleButton4.className = "circle-button4";
        checkboxDisplay.style.display = "none";
        toggle.style.display = "none";
        backButton.style.display = "none";
        totalSum.style.display = "none";


    }

    const option2Element = document.querySelector('.option2');
    const price2Element = document.querySelector('.price2');

    function step4() {
        circleButton4.className = 'circle-js';
        circleButton1.className = "circle-button1";
        circleButton2.className = "circle-button2";
        circleButton3.className = "circle-button3";
        checkboxDisplay.style.display = "none";
        text1.textContent = "Finishing up";
        text2.textContent = "Double-check everything looks OK before confirming."
        table.style.display = "block";
        totalSum.style.display = "block";
        finish.style.display = "none"
        if (isObjectEmpty(prices)){
            option2Element.remove()
            price2Element.remove()
        }
        else{

            const togetherElement = document.querySelector('.together');
            togetherElement.classList.add('together')
            
            for (const key in prices) {
                if (prices.hasOwnProperty(key)) {
                    
                    const optionElement = document.createElement('div');
                    const priceElement = document.createElement('div');
    
                    
                    optionElement.classList.add('option2');
                    priceElement.classList.add('price2');
    
                    optionElement.textContent = key;
                    priceElement.textContent = prices[key];
    
                    
                    
                    togetherElement.appendChild(optionElement);
                    togetherElement.appendChild(priceElement);

                    
                }
            }
        }

    }


    function step5() {
        circleButton4.className = 'circle-js';
        circleButton1.className = "circle-button1";
        circleButton2.className = "circle-button2";
        circleButton3.className = "circle-button3";
        checkboxDisplay.style.display = "none";
        text1.textContent = ''
        text2.textContent = ''
        table.style.display = "none";
        totalSum.style.display = "none";
        finish.style.display = "block"
        nextButton.style.display = "none";
    }

    step1()

    let currentStep = 1;


    nextButton.addEventListener('click', function () {


        if (currentStep === 1) {

            const isStep1Valid = true; //checkIfBarsFilled()

            if (isStep1Valid) {
                step2()
                currentStep++;
                return;
            }
        }

        if (currentStep === 2 && isButtonClicked == true) {
            step3()
            currentStep++;
            return
        }
        // else {
        //     alert("Please choose a plan before going to the next step") // dziala dla wszystkich
        // }

        if (currentStep === 3) {                //&& isBoxClicked == true
            step4()
            currentStep++;
            return
        }
        if (currentStep === 4) {
            step5()
            return
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
        if (currentStep === 1) {
            currentStep++;
            return
        }
        if (currentStep === 2) {
            step1()
            currentStep--;
            return
        }
        if (currentStep === 3) {
            currentStep--;
            step2()
            return
        }
        if (currentStep === 4) {
            currentStep--;
            step3()
            return
        }
        if (currentStep === 5) {
            currentStep--;
            step4()
            return
        } if (currentStep === 6) {
            currentStep--;
            step5()
            return
        }

    })

})();