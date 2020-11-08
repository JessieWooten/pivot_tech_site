import React from 'react';
import StayInformedForm from '../StayInformedForm/StayInformedForm';
import './MyFooter.scss';

function MyFooter() {
	return (
		<div className="footer-container">
			<div class="form-container">
				<StayInformedForm />
			</div>
			<div class="program-and-involved">
				<div class="programs">
					<p class="footer-header">Programs</p>
					<a href="web-development">
						<p>Web Development</p>
					</a>
					<a href="data-analytics">
						<p>Data Analytics</p>
					</a>
					<a href="cyber-security">
						<p>Cyber Security</p>
					</a>
				</div>
				<div class="get-involved">
					<p class="footer-header">Get Involved</p>
					<a href="pivot-partners">
						<p>Pivot Partners</p>
					</a>
					<a href="mentor-program">
						<p>Mentor Program</p>
					</a>
				</div>
			</div>
			<div class="community">
				<p class="footer-header">Community</p>
				<a href="pivot-team">
					<p>Our Team</p>
				</a>
				<a href="pivot-graduates">
					<p>Alumni</p>
				</a>
			</div>
			<div class="social-media">
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://www.facebook.com/pivottechschool/"
				>
					<img
						classname="social-icon"
						src={require('../../icons/facebook.png')}
						alt="facebook"
					/>
				</a>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://www.instagram.com/pivottechschool/"
				>
					<img
						classname="social-icon"
						src={require('../../icons/instagram.png')}
						alt="instagram"
					/>
				</a>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://www.twitter.com/pivottechschool/"
				>
					<img
						classname="social-icon"
						src={require('../../icons/twitter.png')}
						alt="twitter"
					/>
				</a>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://www.linkedin.com/company/pivot-technology-school/"
				>
					<img
						classname="social-icon"
						src={require('../../icons/linkedin.png')}
						alt="linkedin"
					/>
				</a>
			</div>
		</div>
	);
}

export default MyFooter;
