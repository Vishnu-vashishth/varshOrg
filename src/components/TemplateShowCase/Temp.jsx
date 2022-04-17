import React from 'react'
import './Temp.css'
import { useState, useEffect } from "react";

const Temp = () => {
    useEffect(() => {
        "use strict";

var is_chrome = navigator.userAgent.indexOf("Chrome") > -1;
var is_explorer = navigator.userAgent.indexOf("MSIE") > -1;
var is_firefox = navigator.userAgent.indexOf("Firefox") > -1;
var is_safari = navigator.userAgent.indexOf("Safari") > -1;
var is_opera = navigator.userAgent.toLowerCase().indexOf("op") > -1;

if (is_chrome && is_safari) is_safari = false

if (is_chrome && is_opera) is_chrome = false

function nextTick(callback) {
  setTimeout(callback);
}

function CardZoomer({ context, overlay }, target, options) {
  const elements =
    typeof target === `string` ? context.querySelectorAll(target) : target;
  if (elements.length > 1) {
    return [].slice
      .call(elements)
      .map((element) => new CardZoomer({ context, overlay }, element));
  }
  this.context = context;
  this.element = elements[0] || elements;
  /* Fix xs & sm bugs while putting card to position fixed with clones on the top of it and only the clone should move */
  this.clone = this.element.cloneNode(true);
  this.overlay = overlay;
  this.options = Object.assign(
    {
      transitionDuration: 500
    },
    options
  );
  
  this.element.addEventListener("click", e => {
    e.preventDefault();
    e.target.classList.contains("card__close") ? this.zoomOut() : this.zoomIn()
  });
  
  /* TODO: CHANGE THIS to close the clone while zoom in and out */
  this.clone.addEventListener("click", e => {
    e.preventDefault();
    e.target.classList.contains("card__close") ? this.zoomOut() : this.zoomIn()
  });
  
  this.overlay.addEventListener("click", e => {
    e.preventDefault();
    this.zoomOut();
  });
}

CardZoomer.prototype.zoomIn = function () {
  if (this.clone.classList.contains("is-zoomed")) return;
  console.log("zooming in");
  /*document.querySelector('body').appendChild(this.clone);*/
  var elemPos = this.element.getBoundingClientRect();
  console.log("nextTick", elemPos);
  !is_safari && document.querySelector("body").appendChild(this.clone)
  this.clone.style.top = `${elemPos.top}px`;
  this.clone.style.left = `${elemPos.left}px`;
  this.clone.style.width = `${this.element.clientWidth}px`;
  this.clone.style.height = `${this.element.clientHeight}px`;
  this.clone.style.position = "fixed";
  is_safari && document.querySelector("body").appendChild(this.clone)
  document.querySelector("body").style.overflow = "hidden";
  this.overlay.classList.add("is-active");
  nextTick(() => this.clone.classList.add("is-zoomed"));
};

CardZoomer.prototype.zoomOut = function () {
  if (!this.clone.classList.contains("is-zoomed")) return;
  this.clone.classList.remove("is-zoomed");
  /* Fix to auto overflow */
  document.querySelector("body").style.overflow = "auto";
  this.overlay.classList.remove("is-active");
  console.log(this.overlay);
  setTimeout(() => {
    // this.element.style.width = 'auto';
    //     this.element.style.height = 'auto';
    //     this.element.style.top = 'auto';
    //     this.element.style.left = 'auto';
    //     this.element.style.position = 'static';
    document.querySelector("body").removeChild(this.clone);
  }, this.options.transitionDuration);
};
function cardZoomer(target, options) {
  return new CardZoomer(
    {
      context: document,
      overlay: document.querySelector(".zoomer-overlay")
    },
    target,
    options
  );
}
cardZoomer(".card");

      },[])
  return (
    <div className='Temp'>
    <p className="date">Our Templates</p>
    {/* <h1 className="headline">Today</h1> */}
    <div className="grid">
      <div className="width-12/12 width-7/12@m">
        <div className="card" id="thing">
          <div
            className="card__header"
            style={{
              backgroundImage: 'url("https://s.tmimgcdn.com/scr/1600x1000/47600/grocmart-grocery-store-multipage-classic-html-website-template_47684-2-original.jpg")'
            }}
          >
            <div className="card__caption">
              <h2 className="card__title">Golden Gate Bridge</h2>
              <h3 className="card__sub-title">Lorem Ipsum dolor sit.</h3>
            </div>
          </div>
          <div className="card__body">
            <div className="card__text">
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                erat, sed diam voluptua. At vero eos et accusam et justo duo
                dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
                amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                dolor sit amet.
              </p>
              <p>
                Justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor
                sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                dolor sit amet.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                erat, sed diam voluptua. At vero eos et accusam et justo duo
                dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
                amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                dolor sit amet.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                erat, sed diam voluptua. At vero eos et accusam et justo duo
                dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
                amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                dolor sit amet.
              </p>
            </div>
          </div>
          <button className="card__close"></button>
        </div>
      </div>
      <div className="width-12/12 width-5/12@m">
        <div className="card" id="thing">
          <div
            className="card__header"
            style={{
              backgroundImage: 'url("https://colorlib.com/wp/wp-content/uploads/sites/2/ezy-ecommerce-website-template.jpg")'
            }}
          >
            <div className="card__caption">
              <h2 className="card__title">Yeah!</h2>
              <h3 className="card__sub-title">Lorem Ipsum dolor sit.</h3>
            </div>
          </div>
          <div className="card__body">
            <div className="card__text">
              <p>
                Consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
                elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
                magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
              </p>
              <p>
                Justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor
                sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                dolor sit amet.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                erat, sed diam voluptua. At vero eos et accusam et justo duo
                dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
                amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                dolor sit amet.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                erat, sed diam voluptua. At vero eos et accusam et justo duo
                dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
                amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                dolor sit amet.
              </p>
            </div>
          </div>
          <button className="card__close"></button>
        </div>
      </div>
      <div className="width-12/12 width-5/12@m">
        <div className="card" id="thing">
          <div
            className="card__header"
            style={{
              backgroundImage: 'url("https://colorlib.com/wp/wp-content/uploads/sites/2/gatcomart-mega-ecommerce-website-template.jpg")'
            }}
          >
            <div className="card__caption">
              <h2 className="card__title">Lorem Ipsum</h2>
              <h3 className="card__sub-title">Lorem Ipsum dolor sit.</h3>
            </div>
          </div>
          <div className="card__body">
            <div className="card__text">
              <p>
                Diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
                duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor
                sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                dolor sit amet.
              </p>
              <p>
                Justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor
                sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                dolor sit amet.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                erat, sed diam voluptua. At vero eos et accusam et justo duo
                dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
                amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                dolor sit amet.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                erat, sed diam voluptua. At vero eos et accusam et justo duo
                dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
                amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                dolor sit amet.
              </p>
            </div>
          </div>
          <button className="card__close"></button>
        </div>
      </div>
      <div className="width-12/12 width-7/12@m">
        <div className="card" id="thing">
          <div
            className="card__header"
            style={{
              backgroundImage: 'url("https://uicookies.com/wp-content/uploads/2019/11/Divisima.jpg")'
            }}
          >
            <div className="card__caption">
              <h2 className="card__title">Lorem Ipsum</h2>
              <h3 className="card__sub-title">Lorem Ipsum dolor sit.</h3>
            </div>
          </div>
          <div className="card__body">
            <div className="card__text">
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                erat, sed diam voluptua. At vero eos et accusam et justo duo
                dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
                amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                dolor sit amet.
              </p>
              <p>
                Justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor
                sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                dolor sit amet.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                erat, sed diam voluptua. At vero eos et accusam et justo duo
                dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
                amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                dolor sit amet.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                erat, sed diam voluptua. At vero eos et accusam et justo duo
                dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
                amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                dolor sit amet.
              </p>
            </div>
          </div>
          <button className="card__close"></button>
        </div>
      </div>
      <div className="width-12/12 width-7/12@m">
        <div className="card" id="thing">
          <div
            className="card__header"
            style={{
              backgroundImage: 'url("https://www.templateshub.net/uploads/1537207366electrothumb.jpg")'
            }}
          >
            <div className="card__caption">
              <h2 className="card__title">Lorem Ipsum</h2>
              <h3 className="card__sub-title">Lorem Ipsum dolor sit.</h3>
            </div>
          </div>
          <div className="card__body">
            <div className="card__text">
              <p>
                Ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores et
                ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
                et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                accusam et justo duo dolores et ea rebum. Stet clita kasd
                gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
              </p>
              <p>
                Justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor
                sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                dolor sit amet.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                erat, sed diam voluptua. At vero eos et accusam et justo duo
                dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
                amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                dolor sit amet.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                erat, sed diam voluptua. At vero eos et accusam et justo duo
                dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
                amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                dolor sit amet.
              </p>
            </div>
          </div>
          <button className="card__close"></button>
        </div>
      </div>
      <div className="width-12/12 width-5/12@m">
        <div className="card" id="thing">
          <div
            className="card__header"
            style={{
              backgroundImage: 'url("https://uicookies.com/wp-content/uploads/2019/11/Divisima.jpg")'
            }}
          >
            <div className="card__caption">
              <h2 className="card__title">Lorem Ipsum</h2>
              <h3 className="card__sub-title">Lorem Ipsum dolor sit.</h3>
            </div>
          </div>
          <div className="card__body">
            <div className="card__text">
              <p>
                Sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
                elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
                magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
              </p>
              <p>
                Justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor
                sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                dolor sit amet.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                erat, sed diam voluptua. At vero eos et accusam et justo duo
                dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
                amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                dolor sit amet.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                erat, sed diam voluptua. At vero eos et accusam et justo duo
                dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
                amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                dolor sit amet.
              </p>
            </div>
          </div>
          <button className="card__close"></button>
        </div>
      </div>
    </div>
    <div className="zoomer-overlay" />
  </div>
  
  )
}

export default Temp