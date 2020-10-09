let billingTab = document.getElementById('billingTab');
let shippingTab = document.getElementById('shippingTab');
let paymentTab = document.getElementById('paymentTab');
let tabButtons = document.querySelectorAll('section.tabNames > button');

let hiddenTabClass ='orderDefaultTabs border hidden';
let visibleTabClass = 'orderDefaultTabs border';



let clickedBilling = ()=>{
    billingTab.className=visibleTabClass;
    shippingTab.className=hiddenTabClass;
    paymentTab.className=hiddenTabClass;
}
tabButtons[0].addEventListener('click',clickedBilling)

let clickedShipping = ()=>{
    billingTab.className=hiddenTabClass;
    shippingTab.className=visibleTabClass;
    paymentTab.className=hiddenTabClass;
}
tabButtons[1].addEventListener('click',clickedShipping);

let clickedPayment = ()=>{
    billingTab.className=hiddenTabClass;
    shippingTab.className=hiddenTabClass;
    paymentTab.className=visibleTabClass;
}
tabButtons[2].addEventListener('click',clickedPayment);




