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
    let circleButton1 = document.querySelector(".circle-button1")
    let circleButton2 = document.querySelector(".circle-button2")
    let circleButton3 = document.querySelector(".circle-button3")
    let circleButton4 = document.querySelector(".circle-button4")
    let toggle = document.querySelector(".toggle")
    let toggleCheckbox = document.querySelector('.toggle-checkbox');
    const toggleMonthly = document.querySelector('#toggle-monthly');
    const toggleYearly = document.querySelector('#toggle-yearly');
    const planButtons = document.querySelector('.buttons')
    let checkboxDisplay = document.querySelector(".only-to-step3")
    const checkBoxes = document.querySelectorAll(".check-box")
    let table = document.querySelector(".table")
    let totalSum = document.querySelector(".total-sum")
    const finish = document.querySelector(".finish")


    let isButtonClicked = false;


    const avaiablePlans = [
        {
            id: "Arcade",
            title: "Arcade",
            icon: "assets/images/icon-arcade.svg",
            price: {
                monthly: 9,
                yearly: 90
            }
        },
        {
            id: 'Advanced',
            title: "Advanced",
            icon: "assets/images/icon-advanced.svg",
            price: {
                monthly: 12,
                yearly: 120
            }
        },
        {
            id: "Pro",
            title: "Pro",
            icon: "assets/images/icon-pro.svg",
            price: {
                monthly: 15,
                yearly: 150
            }
        },
    ]

    const avaiableAddons = [
        {
            id: "Online Service",
            title: "Online Service",
            description: "Access to multiplayer games",
            price: {
                monthly: 1,
                yearly: 10
            }
        },
        {
            id: "Larger storage",
            title: "Larger storage",
            description: "Extra 1TB of cloud space",
            price: {
                monthly: 2,
                yearly: 20
            }
        },
        {
            id: "Customizable profile",
            title: "Customizable profile",
            description: "Custom theme on your profile",
            price: {
                monthly: 2,
                yearly: 20
            }
        },
    ]

    const selected = {
        name: '',
        email: '',
        phone: '',
        selectedPlanId: "",
        selectedPlanVersion: "",
        addons: []
    }

    bar1.addEventListener('input', () => {
        const typedName = bar1.value;
        selected.name = typedName;
    });

    bar2.addEventListener('input', () => {
        const typedEmail = bar2.value;
        selected.email = typedEmail;
    });

    bar3.addEventListener('input', () => {
        const typedPhone = bar3.value;
        selected.phone = typedPhone;
    });

    console.log(selected)



    function makeAPlan() {
        avaiablePlans.forEach(plan => {

            const button = document.createElement('div')
            button.classList.add('arcade-button')
            planButtons.appendChild(button)

            const img = document.createElement('img')
            img.src = plan.icon
            button.appendChild(img)

            const buttonText = document.createElement('div')
            buttonText.classList.add('buttonText')
            buttonText.textContent = plan.title
            button.appendChild(buttonText)

            const buttonPrice = document.createElement('div')
            buttonPrice.classList.add('buttonPrice')
            buttonPrice.textContent = `$${plan.price.monthly}/mo`;
            button.appendChild(buttonPrice)

            const freeMonths = document.createElement('div')
            freeMonths.classList.add('freeMonths')
            freeMonths.classList.add('display-none')
            freeMonths.textContent = '2 months free'
            button.appendChild(freeMonths)

            button.addEventListener('click', function(event){

                const buttonPlan = event.currentTarget;
                const clickedButtonId = plan.id
                selected.selectedPlanId = clickedButtonId
                console.log(selected)

                const isButtonPlanClicked = buttonPlan.classList.contains('clicked')
                const planButtons = document.querySelectorAll('.arcade-button')

                planButtons.forEach(btn => {
                    btn.classList.remove('clicked')
                });

                buttonPlan.classList.add('clicked')
                isButtonClicked = true;

                if(isButtonPlanClicked){
                    buttonPlan.classList.remove('clicked')
                    isButtonClicked = false;
                }

        
            })
                

            

            toggleCheckbox.addEventListener('change', function () {
                if (toggleCheckbox.checked) {
                    toggleMonthly.classList.remove("bold-text")
                    toggleYearly.classList.add("bold-text")
                    buttonPrice.textContent = `$${plan.price.yearly}/yr`;
                    selected.selectedPlanVersion = "yearly";
                    totalSum.textContent = 'Total (per year)';
                    freeMonths.classList.remove('display-none')
                    button.classList.remove('arcade-button')
                    button.classList.add('extension')

                } else {
                    toggleYearly.classList.remove("bold-text")
                    toggleMonthly.classList.add("bold-text")
                    buttonPrice.textContent = `$${plan.price.monthly}/mo`;
                    selected.selectedPlanVersion = "monthly";
                    totalSum.textContent = 'Total (per month)';
                    freeMonths.classList.add('display-none')
                    button.classList.add('arcade-button')
                    button.classList.remove('extension')
                }
            })


        })


    }



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








    function step2() {
        makeAPlan()
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
        totalSum.style.display = "none";
        checkboxDisplay.style.display = "none";


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
        if (isObjectEmpty(prices)) {
            option2Element.remove()
            price2Element.remove()
        }
        else {

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