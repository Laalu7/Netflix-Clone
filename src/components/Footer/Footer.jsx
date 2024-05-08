import React from 'react'
import './Footer.css'
import you_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import insta_icon from '../../assets/instagram_icon.png'
import face_icon from '../../assets/facebook_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={you_icon} alt=" " />
        <img src={twitter_icon} alt=" " />
        <img src={insta_icon} alt=" " />
        <img src={face_icon} alt=" " />
      </div>
      <ul>
        <li>FAQ</li>
        <li>Help Center</li>
        <li>Account</li>
        <li>Media Center</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Ways to Watch</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
        <li>Speed Test</li>
        <li>Legal Notices</li>
        <li>Only on Netflix</li>
      </ul>
      <p className='copyright-text'>©1997-2024 Netflix, Inc.</p>
    </div>
  )
}

export default Footer