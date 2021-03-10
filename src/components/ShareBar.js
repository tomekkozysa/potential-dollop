import {  FaLinkedin, FaFacebookF, FaPinterest, FaInstagram, FaYoutube, FaEnvelope, FaLink  } from 'react-icons/fa'
import './ShareBar.css'

const ShareBar = () => {
    return (
        <div className="sharebar">
            <h5 className="sharebar-headline">Share my results</h5>    
            <div className="sharebar-icons">
                <span className="icon-circle"><FaLinkedin className="icon-round"/></span>
                <span className="icon-circle"><FaFacebookF className="icon-round"/></span>
                <span className="icon-circle"><FaPinterest className="icon-round"/></span>
                <span className="icon-circle"><FaInstagram className="icon-round"/></span>
                <span className="icon-circle"><FaYoutube className="icon-round"/></span>
                <span className="icon-circle"><FaEnvelope className="icon-round"/></span>
                <span className="icon-circle"><FaLink className="icon-round"/></span>
            </div>
        </div>
    )
}

export default ShareBar
