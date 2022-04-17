import React from 'react'
import { useState, useEffect } from "react";
import './Carousal.css'
const Carousal = () => {
    useEffect(()=>{
            //DOM elements
const coverflowContainer = document.querySelector('.coverflow');
const coverflowImages = [...document.querySelectorAll('.coverflow__image')];
const prevArrow = document.querySelector('.prev-arrow');
const nextArrow = document.querySelector('.next-arrow');

//set indicies and initial position
coverflowImages.forEach(function(coverflowImage, i) {
  coverflowImage.dataset.coverflowIndex = i + 1;
});
let coverflowPosition = Math.floor(coverflowImages.length/2) + 1;
coverflowContainer.dataset.coverflowPosition = coverflowPosition;

//navigation functions
function viewPrevImage() {
  coverflowPosition = Math.max(1, coverflowPosition - 1);
  coverflowContainer.dataset.coverflowPosition = coverflowPosition;
}
function viewNextImage() {
  coverflowPosition = Math.min(coverflowImages.length, coverflowPosition + 1);
  coverflowContainer.dataset.coverflowPosition = coverflowPosition;
}
function jumpToImage(targetImage) {
  coverflowPosition = Math.min(coverflowImages.length, Math.max(1, targetImage.dataset.coverflowIndex));
  coverflowContainer.dataset.coverflowPosition = coverflowPosition;
}

//add event handlers
prevArrow.addEventListener('click', viewPrevImage);
nextArrow.addEventListener('click', viewNextImage);
coverflowImages.forEach(function(image) {
  image.addEventListener('click', evt => jumpToImage(evt.target));
});
window.addEventListener('keyup', (evt) => {
  if (evt.which ===  37) { //left arrow
    viewPrevImage();
  } else if (evt.which === 39) { //right arrow
    viewNextImage();
  }
});
    },[]);
  return (
    <>
    <div class="coverflow">
    <a class="prev-arrow"></a><img class="coverflow__image" src="https://colorlib.com/wp/wp-content/uploads/sites/2/gatcomart-mega-ecommerce-website-template.jpg" /><img class="coverflow__image" src="https://www.templateshub.net/uploads/1537207366electrothumb.jpg" />
    <img class="coverflow__image" src="https://www.pexels.com/photo/computers-cup-desk-gadgets-221011/" /><img class="coverflow__image" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/168886/bob-ross-4.jpg" />
    <img class="coverflow__image" src="https://tse4.mm.bing.net/th?id=OIP.ymiy0ErSX9ZKl3TpBn_pKwHaGC&pid=Api&P=0&w=200&h=163" /><img class="coverflow__image" src="https://uicookies.com/wp-content/uploads/2019/11/Divisima.jpg" />
    <img class="coverflow__image" src="https://colorlib.com/wp/wp-content/uploads/sites/2/gatcomart-mega-ecommerce-website-template.jpg" /><a class="next-arrow"></a>
    </div>
</>
  )
}

export default Carousal