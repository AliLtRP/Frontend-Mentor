const btn = document.getElementById('btn').addEventListener('click', function() {
    const valueAttr = document.getElementById('btn').getAttribute('value')
    document.getElementById(`my-element`).classList.toggle('add-height')
    document.getElementById('faq').classList.toggle('change-height')
    document.getElementById('para').classList.toggle('show-para')

    console.log(valueAttr);
});