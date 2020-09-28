import React from 'react'
import { FaRegComments } from 'react-icons/fa'
import { ImPencil2 } from 'react-icons/im'
import { BiDollar } from 'react-icons/bi'
import { ImPen } from 'react-icons/im'
import { FaRegGrinStars } from 'react-icons/fa'
import { GiDrop } from 'react-icons/gi'




export default function Process() {
    return (
        <div className="process-wrap"> 
            <h1>Tattoo Process</h1>
            <div className="content-wrap">
                <div className="icon1-wrap">
                    <FaRegComments className="icon1"></FaRegComments>
                </div>
                <div className="icon1-wrap">
                    <BiDollar className="icon1"></BiDollar>
                </div>
                <div className="icon1-wrap">
                    <ImPencil2 className="icon1"></ImPencil2>
                </div>
                <div className="icon1-wrap">
                    <GiDrop className="icon1"></GiDrop>
                </div>
                <div className="icon1-wrap">
                    <FaRegGrinStars className="icon1"></FaRegGrinStars>
                </div>
               
            </div>
        </div>
    )
}
