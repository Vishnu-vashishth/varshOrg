import React from 'react'
import './Card.css'
const Card = () => {
  return (
    <div className="container">
  <div className="circle" />
  <div className="card">
    <div className="card__header">
      <div className="card__heading">Hobby</div>
      <div className="card__price">
        $29
        <span className="card__time">/month</span>
      </div>
      <div className="card__btn">
        <button type="button">Get Started</button>
      </div>
    </div>
    <ul className="card__features">
      <li>250 Members</li>
      <li>5 Metrics</li>
      <li>5 Team Members</li>
    </ul>
  </div>
  <div className="card">
    <div className="card__header">
      <div className="card__heading">Startup</div>
      <div className="card__price">
        $99
        <span className="card__time">/month</span>
      </div>
      <div className="card__btn">
        <button type="button">Get Started</button>
      </div>
    </div>
    <ul className="card__features">
      <li>1000 Members</li>
      <li>10 Metrics</li>
      <li>10 Team Members</li>
      <li>Custom CSS</li>
      <li>Team Member SEO</li>
    </ul>
  </div>
  <div className="card">
    <div className="card__header">
      <div className="card__heading">Enterprise</div>
      <div className="card__price">
        $399
        <span className="card__time">/month</span>
      </div>
      <div className="card__btn">
        <button type="button">Get Started</button>
      </div>
    </div>
    <ul className="card__features">
      <li>5000 Members</li>
      <li>25 Metrics</li>
      <li>25 Team Members</li>
      <li>Custom CSS</li>
      <li>Team Member SEO</li>
      <li>Status &amp; Authenticated API</li>
      <li>Component Subscription</li>
    </ul>
  </div>
</div>

  )
}

export default Card