import React from "react";

import './footer.css'

import data from '../../data/data-layouts/data-Footer.json'
import {Link} from "react-router-dom"


function Footer(){

  return(
    <footer className="main-footer text-center">
		<div className="widgets-section padding-top-small padding-bottom-small">
		 <div className="container">
		     
		    <div className="row clearfix">
		       
		       <div className="footer-column col-md-6 col-sm-6 col-xs-12">
		          <div className="footer-widget about-widget">
		             <h3 className="has-line-center">About Us</h3>
		             <div className="widget-content">
		                <div className="text text-style-footer">Coast Collectibles is a brand.
						We are a provider of high end collectible items in NFT form. Allowing investors to buy a share of the overall piece without having to buy it entirely. Our products range from Sports memorabilia and coins to trading cards. We will be looking to add more variety of collectibles in the foreseeable future. </div>
		                   <ul className="social-links">
		                   		{data[0].iconsData && data[0].iconsData.map((item , i) => (
		                   			<li><a href={item.link} target="_blank"><span key={i} className={item.icoClass}></span></a></li>		
		                   		))}
		                   </ul>
		                 </div>
		             </div>
		         </div>
		         
		         
		         <div className="footer-column col-md-6 col-sm-6 col-xs-12">
		             <div className="footer-widget contact-widget">
		                 <h3 className="has-line-center">Contact Us</h3>
		                 <div className="widget-content">
		                     <ul className="contact-info">
		                         <li><div className="icon"><span className="flaticon-support"></span></div></li>
		                         {data[1].infoData && data[1].infoData.map((item , i) => (
		                         	<li key={i}>{item.text}</li>
		                         ))}
		                     </ul>
		                 </div>
		             </div>
		         </div>
		         
		         
		         {/* <div className="footer-column col-md-4 col-sm-12 col-xs-12">
		             <div className="footer-widget newsletter-widget">
		                 <h3 className="has-line-center">Newsletter</h3>
		                 <div className="widget-content">
		                   <div className="text">Stay Updated with our latest news. We promise not to spam</div>
		                     <div className="newsletter-form">
		                         <form method="post">
		                             <div className="form-group">
		                                 <input type="email" name="field-name" value="" placeholder="Your Email" required="" />
		                                 <button type="submit" className="send-btn"><span className="fa fa-paper-plane-o"></span></button>
		                             </div>
		                         </form>
		                     </div>
		                 </div>
		             </div>a
		         </div> */}
		         
		     </div>
		 </div>
		</div>
		<div className="footer-bottom">
		 <div className="auto-container">
		    <div className="copyright-text">Copyright ©. All Rights Reserved</div>
		 </div>
		</div>
    </footer>
  )
}

export default Footer