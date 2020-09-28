import React from 'react'
import image1 from '../images/rsz_doing_tattoo.jpg'
import image3 from '../images/rsz_piercing.jpg'
import image4 from '../images/rsz_kids-box-braids.jpg'

export default function Services() {
    return (
        <div className="services-wrapper">
            <div className="services">
                <h1>Our Services</h1>
                <div className="services-container">
                    <div className="services-image-container">
                        <img src={image1}></img>
                        <div className="cropped">
                            <img src={image1}></img>
                            <h2>TATTOO</h2>
                        </div>
                    </div>
                    <div className="services-image-container">
                        <img src="https://i.pinimg.com/originals/2e/55/25/2e552592856ec922783b303eb91caa26.jpg"></img>
                        <div className="cropped">
                            <img src="https://i.pinimg.com/originals/2e/55/25/2e552592856ec922783b303eb91caa26.jpg"></img>
                            <h2>HENNA</h2>
                        </div>
                    </div>
                    <div className="services-image-container">
                        <img src="https://justyoubeautysalon.com.au/wp-content/uploads/2019/10/ear-Piercing-2-1.jpg"></img>
                        <div className="cropped">
                            <img src="https://justyoubeautysalon.com.au/wp-content/uploads/2019/10/ear-Piercing-2-1.jpg"></img>
                            <h2>PIERCING</h2>
                        </div>
                    </div>
                    <div className="services-image-container">
                        <img src={image4}></img>
                        <div className="cropped">
                            <img src={image4}></img>
                            <h2>BRAIDS</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}