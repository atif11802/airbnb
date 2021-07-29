import React from "react";
import "../styles/Footer.css";
import LanguageIcon from "@material-ui/icons/Language";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer__top">
				<div className="footer__topAbout">
					<h3>About</h3>
					<p>How AIrbnb Works</p>
					<p>Newsroom</p>
					<p>airbnb 2021</p>
					<p>investor</p>
					<p>Airbnb Plus</p>
					<p>Airbnb Luxe</p>
					<p>HotelTonight</p>
					<p>Airbnb for work</p>
					<p>Careers</p>
					<p>Founder's Letter</p>
				</div>
				<div className="footer__topCommunity">
					<h3>Community</h3>
					<p>Diversty & Belonging</p>
					<p>Against Discrimination</p>
					<p>Accessibility</p>
					<p>Airbnb Associates</p>
					<p>Frontline Stays</p>
					<p>Guest Referrals</p>
					<p>Gift cards</p>
					<p>Airbnb.org</p>
				</div>
				<div className="footer__topHost">
					<h3>Host</h3>
					<p>Host your home</p>
					<p>host an Online Experience</p>
					<p>Host an experience</p>
					<p>Responsible hosting</p>
					<p>Resource Center</p>
					<p>Community Center</p>
				</div>
				<div className="footer__topSupport">
					<h3>Support</h3>
					<p>Our Covid-19 Response</p>
					<p>Help Center</p>
					<p>Cancellation Options</p>
					<p>Neighberhood support</p>
					<p>Trust & safety</p>
				</div>
			</div>
			<div className="footer__bottom">
				<div className="footer__bottomLeft">
					<p>© 2021 Airbnb, Inc</p>
					<p>Privacy</p>
					<p>Terms</p>
					<p>Sitemap</p>
				</div>
				<div className="footer__bootomRight">
					<p>
						<LanguageIcon /> English Us
					</p>
					<p>$ USD</p>
					<p>
						<FacebookIcon />
					</p>
					<p>
						<TwitterIcon />
					</p>
					<p>
						<InstagramIcon />
					</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
