import React from "react";

import './footer.css'

import data from '../../data/data-layouts/data-Footer.json'
import { Link } from "react-router-dom"


function Footer() {

	return (
		<footer className="main-footer text-center">
			<div className="widgets-section padding-top-small padding-bottom-small">
				<div className="container">

					<div className="row clearfix">

						<div className="footer-column col-md-3 col-sm-3 col-xs-12">
							<div className="footer-widget about-widget">
								<h3 className="has-line-center">Terms and Conditions</h3>
								<div className="widget-content">
									<div className="text text-style-footer">These Digital Collectible Terms (“Terms”) set forth the terms and conditions applicable to certain Digital Collectibles (as defined below) made available By Coast Collectibles Limited (“CCL”).  </div>
									{/* <ul className="social-links">
										{data[0].iconsData && data[0].iconsData.map((item, i) => (
											<li><a href={item.link} target="_blank"><span key={i} className={item.icoClass}></span></a></li>
										))}
									</ul> */}
								</div>
							<Link to="/terms">	<button className=" read-more-inner">Read More</button></Link>

							</div>
						</div>



						<div className="footer-column col-md-3 col-sm-12 col-xs-12">
							<div className="footer-widget newsletter-widget">
								<h3 className="has-line-center">Marketing Policy</h3>
								<div className="widget-content">
									<div className="text text-style-footer">Coast Collectibles Limited (‘CCL’) is committed to the responsible marketing of its products. This policy describes the required marketing practices for holders of any blockchain-based.</div>

								</div>
								<Link to="/marketingpolicy">		<button className=" read-more-inner">Read More</button> </Link>
							</div>
						</div>




						<div className="footer-column col-md-3 col-sm-12 col-xs-12">
							<div className="footer-widget newsletter-widget">
								<h3 className="has-line-center">Privacy Policy</h3>
								<div className="widget-content">
									<div className="text text-style-footer">This Privacy Policy describes how your personal information is collected, used, and shared when you visit www.coastcollectibles.com (the “Site”).We collect Device Information.</div>

								</div>
								<Link to="/privacypolicy">		<button className=" read-more-inner">Read More</button> </Link>
							</div>
						</div>




						<div className="footer-column col-md-3 col-sm-3 col-xs-12">
							<div className="footer-widget contact-widget">
								<h3 className="has-line-center">Contact Us</h3>
								<div className="widget-content">
									<ul className="contact-info">
										<li><div className="icon"><span className="flaticon-support"></span></div></li>
										{data[1].infoData && data[1].infoData.map((item, i) => (
											<li key={i}>{item.text}</li>
										))}
									</ul>
									<ul className="social-links pt-4">
										{data[0].iconsData && data[0].iconsData.map((item, i) => (
											<li><a href={item.link} target="_blank"><span key={i} className={item.icoClass}></span></a></li>
										))}
									</ul>
								</div>
							</div>
						</div>



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