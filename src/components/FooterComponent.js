import React from 'react'
import { GrFacebook, GrInstagram, GrPhone, GrMailOption } from 'react-icons/gr'
import { ImWrench } from 'react-icons/im'
import { FiMail } from 'react-icons/fi'
import { BiPhone } from 'react-icons/bi'

ImWrench

export default function FooterComponent() {
    return (
        <div className="footer">
            <h2>Kings Tatto Studios</h2>
            <ul>
                <li><BiPhone></BiPhone> +30 2897022406</li>
                <li><a href="https://www.facebook.com/kingstattoogr" target="_blank"><GrFacebook></GrFacebook> Facebook</a></li>
                <li><a href="https://www.instagram.com/kingstattoo.gr/" target="_blank"><GrInstagram></GrInstagram> Instagram</a></li>
                <li><FiMail></FiMail> whatever@whatever.gr</li>
                <li><ImWrench></ImWrench> whatever@support.gr</li>
            </ul>
            <p>Copyright &copy; {(new Date().getFullYear())} Kings Tattoo. All Rights Reserved.</p>
        </div>
    )
}