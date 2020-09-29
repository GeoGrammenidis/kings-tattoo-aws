import React from 'react'
import { FaRegComments } from 'react-icons/fa'
import { ImPencil2 } from 'react-icons/im'
import { BiDollar } from 'react-icons/bi'
/* import { ImPen } from 'react-icons/im' */
import { FaRegGrinStars } from 'react-icons/fa'
import { GiDrop } from 'react-icons/gi'
import { v4 as uuidv4 } from 'uuid';

const uuids = [uuidv4(), uuidv4(), uuidv4(), uuidv4(), uuidv4()]

export default function Process() {
    const [showResults, setShowResults] = React.useState(-1);
    const [curHeight, setCurHeight] = React.useState(0);
    const [animation, setAnimation] = React.useState("opening-animation");
    const onClick = (x) => {
        if(x===showResults){
            setShowResults(-1)
            setAnimation("closing-animation")
            setCurHeight(0);
        }
        else {
            if(showResults===-1){
                setAnimation("opening-animation")
            }else{
                setAnimation("changing-animation")
            }
            setShowResults(x)
            setCurHeight(document.getElementById(uuids[x]).clientHeight)
        }
    }

    return (<>
        <div className="process-wrap"> 
            <h1>Tattoo Process</h1>
            <div className={`whatever-wrap`}>
                <div className={`content-wrap ${showResults!=-1?"active":""}`}>
                    <div className={`icon1-wrap${showResults!=0?"":" active"}`} onClick={()=>onClick(0)}>
                        <FaRegComments className="icon1"></FaRegComments>
                    </div>
                    <div className={`icon1-wrap${showResults!=1?"":" active"}`} onClick={()=>onClick(1)}>
                        <BiDollar className="icon1"></BiDollar>
                    </div>
                    <div className={`icon1-wrap${showResults!=2?"":" active"}`} onClick={()=>onClick(2)}>
                        <ImPencil2 className="icon1"></ImPencil2>
                    </div>
                    <div className={`icon1-wrap${showResults!=3?"":" active"}`} onClick={()=>onClick(3)}>
                        <GiDrop className="icon1"></GiDrop>
                    </div>
                    <div className={`icon1-wrap${showResults!=4?"":" active"}`} onClick={()=>onClick(4)}>
                        <FaRegGrinStars className="icon1"></FaRegGrinStars>
                    </div>
                </div>
                <div className="lalala-whatever">
                    <div className="drop-down-outer">
                        <div className={`drop-down-bg${" "+animation}2 ${showResults!=-1?"active":""}`} style={{height:`${curHeight}px`}}></div>
                        <div id={uuids[0]} className={`drop-down-inner${" "+animation}${showResults!=0?"":" active"}`} >
                            <h2>Share Ideas</h2>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pulvinar ipsum quis metus maximus, sed accumsan dui efficitur. Nunc eget ornare tortor. In in massa feugiat, condimentum diam vitae, eleifend mi. Sed elementum purus et arcu gravida ornare. Pellentesque vitae magna eros. Donec vel sem urna. Fusce sed blandit magna, quis cursus nulla. Phasellus condimentum convallis velit ullamcorper ornare.
                            </p>
                        </div>
                        <div id={uuids[1]} className={`drop-down-inner${" "+animation}${showResults!=1?"":" active"}`} >
                            <h2>Pricing</h2>
                            <p>
                            Lorem2 ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pulvinar ipsum quis metus maximus, sed accumsanus. Donec vel sem urna. Fusce sed blandit magna, quis cursus nulla. Phasellus condimentum convallis velit ullamcorper ornare.
                            </p>
                        </div>
                        <div id={uuids[2]} className={`drop-down-inner${" "+animation}${showResults!=2?"":" active"}`} >
                            <h2>Sketch</h2>
                            <p>
                            Lorem3 ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pulvinar ipsum quis metus maximus, sed accumsan dui efficitur. Nunc eget ornare tortor. In in massa feugiat, condimentum diam vitae, eleifend mi. Sed elementum purus et arcu gravida ornare. Pellentesque vitae magna eros. Donec vel sem urna. Fusce sed blandit magna, quis cursus nulla. Phasellus condimentum convallis velit ullamcorper ornare.
                            </p>
                        </div>
                        <div id={uuids[3]} className={`drop-down-inner${" "+animation}${showResults!=3?"":" active"}`} >
                            <h2>Tattooing</h2>
                            <p>
                            Lorem4 ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pulvinar ipsum quis metus maximus, sed accumsan dui efficitur. Nunc eget ornare tortor. In in massa feugiat, condimentum diam vitae, eleifend mi. Sed elementum purus et arcu gravida ornare. Pellentesque vitae magna eros. Donec vel sem urna. Fusce sed blandit magna, quis cursus nulla. Phasellus condimentum convallis velit ullamcorper ornare.
                            </p>
                        </div>
                        <div id={uuids[4]} className={`drop-down-inner${" "+animation}${showResults!=4?"":" active"}`} >
                            <h2>Review</h2>
                            <p>
                            Lorem5 ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pulvinar ipsum quis metus maximus, sed accumsan dui efficitur. Nunc eget ornare tortor. In in massa feugiat, condimentum diam vitae, eleifend mi. Sed elementum purus et arcu gravida ornare. Pellentesque vitae magna eros. Donec vel sem urna. Fusce sed blandit magna, quis cursus nulla. Phasellus condimentum convallis velit ullamcorper ornare.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
    )
}
