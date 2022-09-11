window.onload = function () {
    let icon = document.querySelector('.sidebar__icon');
    let main = document.querySelector('.main');
    let main__content = document.querySelector('.main__content')

    icon.onclick = function () {
        this.classList.toggle('change__icon');
        main.classList.toggle('main__bg')
        main__content.classList.toggle('main__content__bg')
    }
    console.log(box, icon);
};