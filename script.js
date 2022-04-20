const circleButton = document.querySelector('.circle');
const cardShare = document.querySelector('.card-share'); 
const activeShare = document.querySelector('.active-share');
const pointer = document.querySelector('.pointer');
const shareCircle = document.querySelector('.share-circle');
const arrow = document.getElementById('share');
const mediaQuery = window.matchMedia('(max-width: 375px)')
const desktopQuery = window.matchMedia('(min-width: 1200px)')

if (mediaQuery.matches) {
    
    circleButton.addEventListener('click', function() {
    cardShare.classList.toggle('hidden');
    activeShare.classList.toggle('hidden');
    })

    shareCircle.addEventListener('click', function() {
    cardShare.classList.toggle('hidden');
    activeShare.classList.toggle('hidden');
    })
}

if (desktopQuery.matches) {
    circleButton.addEventListener('click', function() {
        activeShare.classList.toggle('hidden');
        pointer.classList.toggle('hidden');
        circleButton.classList.toggle('active-circle');
        arrow.classList.toggle('active-arrow');
        })
}
//after click event
//for desktop circle to change, need to add the 'active-circle' to the 'circle' div and 'active-arrow' class to share id