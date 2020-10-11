let billingTab = document.getElementById('billingTab');
let shippingTab = document.getElementById('shippingTab');
let paymentTab = document.getElementById('paymentTab');
let tabButtons = document.querySelectorAll('section.tabNames > button');

let hiddenTabClass ='orderDefaultTabs border hidden';
let visibleTabClass = 'orderDefaultTabs border';


//Tabing Through Order Defaults 
let clickedBilling = ()=>{
    billingTab.className=visibleTabClass;
    shippingTab.className=hiddenTabClass;
    paymentTab.className=hiddenTabClass;
    tabButtons[1].setAttribute('tabindex','-1');
    tabButtons[2].setAttribute('tabindex','-1');
    tabButtons[0].setAttribute('tabindex','0')


}
tabButtons[0].addEventListener('click',clickedBilling)

let clickedShipping = ()=>{
    billingTab.className=hiddenTabClass;
    shippingTab.className=visibleTabClass;
    paymentTab.className=hiddenTabClass;
    tabButtons[0].setAttribute('tabindex','-1');
    tabButtons[2].setAttribute('tabindex','-1');
    tabButtons[1].setAttribute('tabindex','0');
}
tabButtons[1].addEventListener('click',clickedShipping);

let clickedPayment = ()=>{
    billingTab.className=hiddenTabClass;
    shippingTab.className=hiddenTabClass;
    paymentTab.className=visibleTabClass;
    tabButtons[0].setAttribute('tabindex','-1');
    tabButtons[1].setAttribute('tabindex','-1');
    tabButtons[2].setAttribute('tabindex','0');
}
tabButtons[2].addEventListener('click',clickedPayment);


//can do on focus events to trigger events while an item is tab focused
//put required tab on each input. find way to show error message. (if left bank, then show this)

 

 


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

 











// VIP Module
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

    modalLinks[0].focus();
}
//hide the content behind modal by using the aria-hidden attribute
moreDetailsLink.addEventListener('click',showVIPModal);


let closeVIPModal=()=>{
    vipModal[0].className="vipModal border hidden";
    mainContainer[0].setAttribute("aria-hidden",'false');
    headerContainer[0].setAttribute('aria-hidden','false');
    footerContainer[0].setAttribute('aria-hidden','false');
    asideContainer[0].setAttribute('aria-hidden','false');

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


}

closeModalButton.addEventListener('click',closeVIPModal);


