import React from 'react'
import { Parallax, Background } from 'react-parallax';

export default function ParallaxComponent() {
    return (
        <>
            {/* -----custom background element-----*/}
            <Parallax bgImage={"https://lh3.googleusercontent.com/hRhEiyjOqABiEsHlNnrArUiFojHmy96mZK3ktSWN0u_K7vJW1Gxp5DT-3gXmgfygxpehITZCJmessiWAUsE=s1600"}
                    strength={500}
                    blur={{min:-3, max:9}}
                >
                {/* <div>Use the background component for custom elements</div> */}
                <div className="parallax-bg">
                    <div className="parallax-quotes">
                        <h1>Express yourself with a Tattoo!</h1>
                    </div>
                </div>
            </Parallax>
        </>
    )
}