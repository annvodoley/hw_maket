const burger = document.querySelector('.first-view__burger')
const navigation = document.querySelector('.navigation')

burger.addEventListener('click', () => {

    if(navigation.style.display === 'block') {
        navigation.style.animation = 'animationOut .2s ease-in-out forwards'
        setTimeout(() => {
            navigation.style.display = 'none'
        }, 500)
        
    } else {
        navigation.style.display = 'block'
        navigation.style.animation = 'animation .2s ease-in-out forwards'
        burger.style.position = 'absolute'
        burger.style.zIndex = '1000'
    }
})
