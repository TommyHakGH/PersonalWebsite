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
        <InstagramIcon cursor= 'pointer' onClick= {event => window.location.href='https://www.instagram.com/tommy_hak/'}/>
        <LinkedInIcon cursor= 'pointer' onClick= {event => window.location.href='https://www.linkedin.com/in/tommy-hak-716619253/'}/>
        <GitHubIcon cursor= 'pointer' onClick= {event => window.location.href='https://github.com/TommyHakGH?tab=repositories'}/>
        <EmailIcon cursor= 'pointer' onClick= {event => window.location.href='https://mail.google.com/mail/?view=cm&fs=1&to=tommys.hak@gmail.com'}/>
        <ContactPhoneIcon /> <p>+1(347)435-9209</p>
    </div>
    <p> &copy; 2023 TommyHak.com </p>
    </div>
  )
}

export default Footer
