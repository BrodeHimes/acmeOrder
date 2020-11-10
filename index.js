//Tabing Through Order Defaults Function
let billingTab = document.getElementById('billingTab');
let shippingTab = document.getElementById('shippingTab');
let paymentTab = document.getElementById('paymentTab');
let tabButtons = document.querySelectorAll('section.tabNames > button');
let hiddenTabClass ='orderDefaultTabs border hidden';
let visibleTabClass = 'orderDefaultTabs border';

var tabClicked;
//for billing, shippinp, payment tabs You could do a loop type thign. use event target to tell which tab to turn to visibileTabClass, then loop the rest and make them have 
//hiddentabclassname. Could do the same for the other attributes you affected. 


let clickedBilling = ()=>{
    billingTab.className=visibleTabClass;
    shippingTab.className=hiddenTabClass;
    paymentTab.className=hiddenTabClass;
    tabButtons[1].setAttribute('tabindex','-1');
    tabButtons[2].setAttribute('tabindex','-1');
    tabButtons[0].setAttribute('tabindex','0');
    tabButtons[0].setAttribute('id','focusedTab');
    tabButtons[1].removeAttribute('id', 'focusedTab');
    tabButtons[2].removeAttribute('id','focusedTab');
    tabClicked = 'billing';
}
tabButtons[0].addEventListener('click',clickedBilling)

let clickedShipping = ()=>{
    billingTab.className=hiddenTabClass;
    shippingTab.className=visibleTabClass;
    paymentTab.className=hiddenTabClass;
    tabButtons[0].setAttribute('tabindex','-1');
    tabButtons[1].setAttribute('tabindex','0');
    tabButtons[2].setAttribute('tabindex','-1');
    tabButtons[0].removeAttribute('id', 'focusedTab');
    tabButtons[1].setAttribute('id','focusedTab');
    tabButtons[2].removeAttribute('id','focusedTab');
    tabClicked = 'shipping';
}
tabButtons[1].addEventListener('click',clickedShipping);

let clickedPayment = ()=>{
    billingTab.className=hiddenTabClass;
    shippingTab.className=hiddenTabClass;
    paymentTab.className=visibleTabClass;
    tabButtons[0].setAttribute('tabindex','-1');
    tabButtons[1].setAttribute('tabindex','-1');
    tabButtons[2].setAttribute('tabindex','0');
    tabButtons[0].removeAttribute('id', 'focusedTab');
    tabButtons[1].removeAttribute('id','focusedTab');
    tabButtons[2].setAttribute('id','focusedTab');
    tabClicked = 'payment';
}
tabButtons[2].addEventListener('click',clickedPayment);

//Switching though tabs via arrow keys
let switchTabsFromBilling=()=>{
    switch (event.key) {
        case "ArrowLeft":
        clickedPayment();
        tabButtons[2].focus();
            break;
        case "ArrowRight":
        clickedShipping()
        tabButtons[1].focus();
        break;
    }
}

let switchTabsFromShipping=()=>{
    switch (event.key) {
        case "ArrowLeft":
        clickedBilling();
        tabButtons[0].focus();
            break;
        case "ArrowRight":
        clickedPayment();
        tabButtons[2].focus();
            break; 
    }
}

let switchTabsFromPayment=()=>{
    switch (event.key) {
        case "ArrowLeft":
        clickedShipping();
        tabButtons[1].focus();
            break;
        case "ArrowRight":
        clickedBilling();
        tabButtons[0].focus();
            break;
    }
}

tabButtons[0].addEventListener('keydown',switchTabsFromBilling)
tabButtons[1].addEventListener('keydown',switchTabsFromShipping)
tabButtons[2].addEventListener('keydown',switchTabsFromPayment)

// VIP Modal
let moreDetailsLink = document.querySelector('aside > a');
let vipModal=document.getElementsByClassName('vipModal');
let closeModalButton=document.getElementById('closeModalButton');
let mainContainer=document.getElementsByTagName('main');
let asideContainer=document.getElementsByTagName('aside');
let headerContainer=document.getElementsByTagName('header');
let footerContainer=document.getElementsByTagName('footer');
let inputs = document.getElementsByTagName('input');
let buttons = document.getElementsByTagName('button');
let links = document.getElementsByTagName('a');
let modalLinks = document.getElementsByClassName('modalLinks');

let showVIPModal=()=>{
    event.preventDefault;
    vipModal[0].className="vipModal border";
    mainContainer[0].setAttribute("aria-hidden",'true');
    headerContainer[0].setAttribute('aria-hidden','true');
    footerContainer[0].setAttribute('aria-hidden','true');
    asideContainer[0].setAttribute('aria-hidden','true');
    for(i=0;i<inputs.length;i++){
      inputs[i].setAttribute('tabindex','-1')
    };
    for(i=0;i<buttons.length;i++){
      buttons[i].setAttribute('tabindex','-1')
    }
    for(i=0;i<links.length;i++){
      links[i].setAttribute('tabindex','-1')
    };
    for(i=0;i<modalLinks.length;i++){
      modalLinks[i].setAttribute('tabindex','0')
    };
    closeModalButton.focus();
    let overlay= document.createElement('div');
    overlay.setAttribute('id','overlay');
    document.body.insertAdjacentElement('afterbegin',overlay);
    document.addEventListener('keydown',escapeClose);
}

moreDetailsLink.addEventListener('click',showVIPModal);
// close modal w/ escape key
let escapeClose =()=>{
    if (event.keyCode===27){
        closeVIPModal();
    }
}

//close modal
let closeVIPModal=()=>{
    vipModal[0].className="vipModal border hidden";
    mainContainer[0].removeAttribute('aria-hidden');
    headerContainer[0].removeAttribute('aria-hidden');
    footerContainer[0].removeAttribute('aria-hidden');
    asideContainer[0].removeAttribute('aria-hidden');
    billingTab.className=visibleTabClass;
    shippingTab.className=hiddenTabClass;
    paymentTab.className=hiddenTabClass;
    for(i=0;i<inputs.length;i++){
        inputs[i].removeAttribute('tabindex')
    };
    for(i=0;i<buttons.length;i++){
        buttons[i].removeAttribute('tabindex')
    }
    for(i=0;i<links.length;i++){
        links[i].removeAttribute('tabindex')
    };
    for(i=0;i<modalLinks.length;i++){
        modalLinks[i].removeAttribute('tabindex')
    };
    keepClickedOrderTabOpen();
    let overlay=document.getElementById('overlay')
    document.body.removeChild(overlay);
    moreDetailsLink.focus();
}

closeModalButton.addEventListener('click',closeVIPModal);
 
// Ensures the previously clicked Order Default tab stays opened when you close vip modal
let keepClickedOrderTabOpen=()=>{
    if (tabClicked=='billing'){
     clickedBilling();
    } else if (tabClicked=='shipping'){
     clickedShipping();
    } else if (tabClicked=='payment'){
     clickedPayment();
    }
}

//FORM VALIDATION 
let billingErrorMessage = document.querySelectorAll('#billingForm .error');
let billingInputBoxes = document.querySelectorAll('section form#billingform input');
let billingForm = document.getElementById('billingForm');
let shippingInputBoxes=document.querySelectorAll('section form#shippingForm input');
let shippingErrorMessage = document.querySelectorAll('#shippingForm .error');
let shippingForm = document.getElementById('shippingForm');
let paymentInputBoxes=document.querySelectorAll('section form#paymentForm input');
let paymentErrorMessage = document.querySelectorAll('#paymentForm .error');
let paymentForm = document.getElementById('paymentForm');

let mainFunction = ()=>{
    if (event.target.id=='billingForm'){
        validationFunction(billingInputBoxes,billingErrorMessage)
    } else if(event.target.id=='shippingForm'){
        validationFunction(shippingInputBoxes,shippingErrorMessage)
    } else if(event.target.id=='paymentForm'){
        validationFunction(paymentInputBoxes,paymentErrorMessage)
    }
};

let validationFunction =(inputBoxesToCheck,errorMessageToShow)=>{
    for (i=0;i<inputBoxesToCheck.length;i++){
        if(!inputBoxesToCheck[i].validity.valid){
            showError(i,inputBoxesToCheck,errorMessageToShow);
            event.preventDefault();
        } else if (inputBoxesToCheck[i].validity.valid){
            stopError(i,inputBoxesToCheck,errorMessageToShow)
            event.preventDefault();
            //Put event.preventDefault() here so that form doesn't submit and take to new page page when valid. Feel free to remove to test form submition on valid inputs.
        }
    }
}; 

let showError = (i,inputBoxesToCheck,errorMessageToShow)=>{
    errorMessageToShow[i].setAttribute('class','error');
    inputBoxesToCheck[i].setAttribute('class','inputError');
};

let stopError = (i,inputBoxesToCheck,errorMessageToShow)=>{
    inputBoxesToCheck[i].removeAttribute('class', 'inputError');
    errorMessageToShow[i].setAttribute('class', 'error hidden');
};

billingForm.addEventListener('submit',mainFunction);
shippingForm.addEventListener('submit',mainFunction);
paymentForm.addEventListener('submit',mainFunction);
