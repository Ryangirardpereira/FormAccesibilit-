document.addEventListener('DOMContentLoaded', function() {
    const ELEMENTS = {
        'cardholder-name': {
            input: document.getElementById('cardholder-name'),
            output: document.getElementById('output-name')
        },
        'card-number': {
            input: document.getElementById('card-number'),
            output: document.getElementById('output-number')
        },
        'exp-date-mm': {
            input: document.getElementById('exp-date-mm'),
            output: document.getElementById('output-date-mm')
        },
        'exp-date-yy': {
            input: document.getElementById('exp-date-yy'),
            output: document.getElementById('output-date-yy')
        },
        'cvc': {
            input: document.getElementById('cvc'),
            output: document.getElementById('output-cvc')
        }
    };
    
    Object.values(ELEMENTS).forEach(field => {
        field.input.addEventListener('input', function(event) {
            field.output.textContent = event.target.value;
        });
    });
});// Liaison entre le form et les cartes afin de voir les information se remplir sur la carte.

document.addEventListener('DOMContentLoaded', function() {
    
    const cardholderNameInput = document.getElementById('cardholder-name');
    
    
    cardholderNameInput.addEventListener('input', function(event) {
        
        this.value = this.value.replace(/[^a-zA-Z\s]/g, '');
        
        
        const maxLength = 50;
        if (this.value.length > maxLength) {
            this.value = this.value.slice(0, maxLength);
        }
        
        
        document.getElementById('output-name').textContent = this.value;
    });// Restriction sur les caractères possible ainsi que suppression de la possiblité de rentré des nombre.
    
    
    const cardNumberInput = document.getElementById('card-number');
    
    
    cardNumberInput.addEventListener('input', function(event) {
        
        this.value = this.value.replace(/\D/g, '');
        
        
        const maxLength = 16;
        if (this.value.length > maxLength) {
            this.value = this.value.slice(0, maxLength);
        }
        
        
        document.getElementById('output-number').textContent = formatCardNumber(this.value);
    });//restriction sur les caracteres possible ainsi que suppression de la possibilité de rentré des caracteres.
    
    
    const expDateInput = document.getElementById('exp-date-mm');
    
    
    expDateInput.addEventListener('input', function(event) {
        
        this.value = this.value.replace(/\D/g, '');
        
        const maxLength = 2;
        if (this.value.length > maxLength) {
            this.value = this.value.slice(0, maxLength);
        }
        
        
        document.getElementById('output-date-mm').textContent = this.value;
    });//restriction sur les caracteres possible ainsi que suppression de la possibilité de rentré des caracteres.
    
    
    const expYearInput = document.getElementById('exp-date-yy');
    
    
    expYearInput.addEventListener('input', function(event) {
        
        this.value = this.value.replace(/\D/g, '');
        
        
        const maxLength = 2;
        if (this.value.length > maxLength) {
            this.value = this.value.slice(0, maxLength);
        }
        
        
        document.getElementById('output-date-yy').textContent = this.value;
    });//restriction sur les caracteres possible ainsi que suppression de la possibilité de rentré des caracteres.
    
    
    const cvcInput = document.getElementById('cvc');
    
    
    cvcInput.addEventListener('input', function(event) {
        
        this.value = this.value.replace(/\D/g, '');
        
        const maxLength = 3;
        if (this.value.length > maxLength) {
            this.value = this.value.slice(0, maxLength);
        }
        
        
        document.getElementById('output-cvc').textContent = this.value;
    });
    
    function formatCardNumber(cardNumber) {
        return cardNumber.replace(/\D/g, '').replace(/(\d{4})(?=\d)/g, '$1 ');
    }
});//restriction sur les caracteres possible ainsi que suppression de la possibilité de rentré des caracteres.

function validateForm() {
    return true;
}
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const successMessage = document.querySelector(".success-message");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        if (validateForm()) {
            form.style.display = "none"; 
            successMessage.style.display = "flex"; 
        }
    });
});//fonction permettent d'afficher un message de réussite lorsque le formulaire est considéré comme valide.