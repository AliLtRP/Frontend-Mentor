const buttons = document.querySelectorAll('button')

buttons.forEach(button => {
    button.addEventListener('click', function () {
        const valueAttr = this.getAttribute('value');
        this.classList.toggle('button-click');
        document.getElementById(`my-element${valueAttr}`).classList.toggle('add-height');
        document.getElementById(`faq`).classList.toggle('change-height');
        document.getElementById(`para${valueAttr}`).classList.toggle('show-para');
    });
});