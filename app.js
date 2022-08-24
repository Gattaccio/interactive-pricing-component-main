
let price = document.querySelector('#price');
let slider1 = document.querySelector('#slider1');
let pageview = document.querySelector('#pageview');
let selectButton = document.querySelector('.switch-button');
let containerSwitch = document.querySelector('.container-switch');
var annualy = 0;

selectButton.addEventListener('click', () => {
    selectButton.classList.toggle('active');
    if (annualy == 0) {
        containerSwitch.style.backgroundColor ="var(--Strong-Cyan)";
        if (slider1.value < 20) {
            price.innerHTML='$ 6.00<sup> / month</sup>';
            pageview.innerHTML = '10K';
        }
        else if (slider1.value >=20 && slider1.value <40){
            price.innerHTML='$ 9.00<sup> / month</sup>';
            pageview.innerHTML = '50K';
        }
        else if (slider1.value >=40 && slider1.value <60){
            price.innerHTML='$ 12.00<sup> / month</sup>';
            pageview.innerHTML = '100K';
        } 
        else if (slider1.value >=60 && slider1.value <80){
            price.innerHTML='$ 18.00<sup> / month</sup>';
            pageview.innerHTML = '500K';
        }
        else if (slider1.value >=80){
            price.innerHTML='$ 27.00<sup> / month</sup>';
            pageview.innerHTML = '1M';
        }
        annualy = 1;
    } else {
        containerSwitch.removeAttribute('style');
        if (slider1.value < 20) {
            price.innerHTML='$ 8.00<sup> / month</sup>';
            pageview.innerHTML = '10K';
        }
        else if (slider1.value >=20 && slider1.value <40){
            price.innerHTML='$ 12.00<sup> / month</sup>';
            pageview.innerHTML = '50K';
        }
        else if (slider1.value >=40 && slider1.value <60){
            price.innerHTML='$ 16.00<sup> / month</sup>';
            pageview.innerHTML = '100K';
        } 
        else if (slider1.value >=60 && slider1.value <80){
            price.innerHTML='$ 24.00<sup> / month</sup>';
            pageview.innerHTML = '500K';
        }
        else if (slider1.value >=80){
            price.innerHTML='$ 36.00<sup> / month</sup>';
            pageview.innerHTML = '1M';
        }
        annualy = 0;
    }
} )

slider1.addEventListener('input', () => {
    if (annualy == 1) {
        if (slider1.value < 20) {
            price.innerHTML='$ 6.00<sup> / month</sup>';
            pageview.innerHTML = '10K';
        }
        else if (slider1.value >=20 && slider1.value <40){
            price.innerHTML='$ 9.00<sup> / month</sup>';
            pageview.innerHTML = '50K';
        }
        else if (slider1.value >=40 && slider1.value <60){
            price.innerHTML='$ 12.00<sup> / month</sup>';
            pageview.innerHTML = '100K';
        } 
        else if (slider1.value >=60 && slider1.value <80){
            price.innerHTML='$ 18.00<sup> / month</sup>';
            pageview.innerHTML = '500K';
        }
        else if (slider1.value >=80){
            price.innerHTML='$ 27.00<sup> / month</sup>';
            pageview.innerHTML = '1M';
        }
    }
    else {
        if (slider1.value < 20) {
            price.innerHTML='$ 8.00<sup> / month</sup>';
            pageview.innerHTML = '10K';
        }
        else if (slider1.value >=20 && slider1.value <40){
            price.innerHTML='$ 12.00<sup> / month</sup>';
            pageview.innerHTML = '50K';
        }
        else if (slider1.value >=40 && slider1.value <60){
            price.innerHTML='$ 16.00<sup> / month</sup>';
            pageview.innerHTML = '100K';
        } 
        else if (slider1.value >=60 && slider1.value <80){
            price.innerHTML='$ 24.00<sup> / month</sup>';
            pageview.innerHTML = '500K';
        }
        else if (slider1.value >=80){
            price.innerHTML='$ 36.00<sup> / month</sup>';
            pageview.innerHTML = '1M';
        }
    }




    
})
