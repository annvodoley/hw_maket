"use strict";

var burger = document.querySelector('.first-view__burger');
var navigation = document.querySelector('.navigation');
burger.addEventListener('click', function () {
  if (navigation.style.display === 'block') {
    navigation.style.animation = 'animationOut .2s ease-in-out forwards';
    setTimeout(function () {
      navigation.style.display = 'none';
    }, 500);
  } else {
    navigation.style.display = 'block';
    navigation.style.animation = 'animation .2s ease-in-out forwards';
    burger.style.position = 'absolute';
    burger.style.zIndex = '1000';
  }
});