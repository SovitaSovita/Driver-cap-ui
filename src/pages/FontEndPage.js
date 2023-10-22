import React from 'react'
import logo from '../assets/images/logo/logo.png'

import '../style/css-style/style.css';

export default function FontEndPage() {
  return (
    <div className='bg-hero-footer'>
      <div id="footer_box" className="mt-5">
        <div className="px-24 footer-cols pt-10">
          <div className="grid grid-cols-3">
            <div className="footer-column col-lg-4 col-sm-6">
              <aside id="text-3" className="widget widget_text">
                <img src={logo} className="img-fluid py-2" width="130px"/>
              </aside>
            </div>
            <div className="col-lg-4 col-sm-6">
              <aside id="nav_menu-3" className="widget widget_nav_menu">
                <span className="h5 text-white fw-bolder p-2">Quick Links</span>
                <div className="menu-footer-services-container mt-3">
                  <ul className="menu list-unstyled">
                    <li className="mb-2"><a href="" className="text-white text-decoration-none">Home</a></li>
                    <li className="mb-2"><a href="" className="text-white text-decoration-none">SpecialOffer</a></li>
                    <li className="mb-2"><a href="" className="text-white text-decoration-none">Service</a></li>
                    <li className="mb-2"><a href="" className="text-white text-decoration-none">Contact</a></li>
                    <li className=""><a href="" className="text-white text-decoration-none">About Us</a></li>
                  </ul>
                </div>
              </aside>
            </div>
          
            <div className="col-lg-4 col-sm-6">
              <div className="ft-right">
                <span className="h5 text-white fw-bolder p-2">Contact Us</span>
                <div className="isocial mt-3">
                  <a href="" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                  <a href="" target="_blank"><i className="fa-brands fa-instagram mx-3"></i></a>
                  <a href="" target="_blank"><i className="fa-brands fa-telegram"></i></a>
                </div>
                <div className="text-white mt-3 ft-txt-contact flex flex-col">
                  <span className="mb-2">Email: </span>
                  <span className="mb-2">Tel: </span>
                  <span className="mb-2">WhatsApp: </span>
                  <span>Line: </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="container">
            <div className="row main_sociobox">
              <div className="text-center">
                <p>Copyright<span className="credit_link"> Design &amp; Developed by </span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
