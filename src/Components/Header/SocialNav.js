import React from "react";
import{AiOutlineWhatsApp} from 'react-icons/ai';
import{TbPhoneCall} from 'react-icons/tb';
import{FaTelegramPlane} from 'react-icons/fa';
import{AiOutlineSkype} from 'react-icons/ai';
import './SocialNav.css'


const SocialNav=()=>{
    return(
    <div className='header_socials'>
    <a href='https://www.linkedin.com' target= '_blank'><TbPhoneCall className="con-icon"/></a>
    <a href='https://web.whatsapp.com' target= '_blank'><AiOutlineWhatsApp className="wap-icon"/></a>
    <a href='https://telegram.com' target='_blank'><FaTelegramPlane className="tele-icon"/></a>
    <a href='https://www.skype.com' target='_blank'><AiOutlineSkype className="skype-icon"/></a>
    
    </div>
    )
}

export default  SocialNav;