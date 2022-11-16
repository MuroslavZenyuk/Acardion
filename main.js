const titles = document.querySelectorAll('[data-name="accordeon-title"]');

titles.forEach(function (item) {

    item.addEventListener('click', function () {
        this.nextElementSibling.classList.toggle('hidden');
    })

})