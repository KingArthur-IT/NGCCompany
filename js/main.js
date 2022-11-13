//calculatot range
const range = document.querySelector('.range__input')
const thumb = document.querySelector('.range__thumb')
const track = document.querySelector('.range__track-inner')
const investmentResume = document.getElementById('investment-value')
const minRange = range.getAttribute('min')
const maxRange = range.getAttribute('max')

const updateSlider = (value) => {
    thumb.style.left = `${value}%`
    thumb.style.transform = `translate(-${value}%, -50%)`
    track.style.width = `${value}%`
}

range.oninput = (e) => {
    updateSlider(100.0 * e.target.value / (maxRange - minRange))
    thumb.setAttribute('data-value', e.target.value)
    investmentResume.innerText = `${e.target.value}$`
}

updateSlider(52) // Init value


//ACCORDEON
var accordeons = document.querySelectorAll(".accordeon__head");

accordeons.forEach((item, index) => {
    item.addEventListener("click", () => {
        item.classList.toggle("active");
        const panel = item.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        };

        //remove from others
        [...accordeons].filter((el, inx) => inx != index).forEach(element => {
            element.classList.remove("active");
            const panel = element.nextElementSibling;
            panel.style.maxHeight = null;
        });
      });
});


//close modal
// const closeVideoModal = () => {
//   document.querySelector('.modal__video')?.pause();
//   document.querySelector('.video-modal').classList.remove('modal-visible');
//   setTimeout(() => {
//     document.querySelector('.video-modal').classList.remove('modal-display');
//   }, 300);
// }
// const close3DModal = (index) => {
//   const modal = document.querySelector(`.modal-bike-${index}`);
//   modal.classList.remove('modal-visible');
//   setTimeout(() => {
//     modal.classList.remove('modal-display');
//     modal.querySelector('iframe').removeAttribute('src');
//   }, 300);
// }
// document.querySelector('.video-modal')?.addEventListener('click', () => closeVideoModal());
// bikesArr.forEach(index => document.querySelector(`.modal-bike-${index}`)?.addEventListener('click', () => close3DModal(index)))
// document.querySelectorAll('.modal__hero').forEach(el => el.addEventListener('click', (e) => e.stopPropagation()));


//menu
// document.querySelector('.header__burger').addEventListener('click', () => {
//   document.querySelector('.menu').classList.add('opened');
// });

// document.querySelector('.menu__close').addEventListener('click', () => {
//   document.querySelector('.menu').classList.remove('opened');
// });

// document.querySelectorAll('.menu__anchor').forEach( (el) => {
//   el.addEventListener('click', () => {
//     document.querySelector('.menu').classList.remove('opened');
//   })
// })
