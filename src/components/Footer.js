import React from 'react'
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from '@material-ui/icons/Email';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import "../styles/Footer.css"

function Footer() {
  return (
    <div className="footer">
        <div className="SocialMedia/Contact">
        <InstagramIcon />
        <LinkedInIcon  />
        <GitHubIcon />
        <EmailIcon />
        <ContactPhoneIcon />
    </div>
    <p> &copy; 2023 TommyHak.com </p>
    </div>
  )
}

export default Footer
