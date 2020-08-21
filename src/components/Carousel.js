import React from 'react'

const toImport = ["carousel1.jpg", "carousel2.jpg"]

const images = toImport.map(x=>require('../public/images/' + x ))

function countReducer (state, action) {
    switch (action.type) {
        case 'increment':
            return state!==images.length-1?state+1:state;
        case 'decrement':
            return state!==0?state-1:state;
        default:
            throw new Error("This action is not supported.")
    }
}

export default function Carousel() {
    const [ count, dispatch ] = React.useReducer(countReducer, 0);
    return (
        <>
        <div className="carousel">
            {images.map((x, i)=>count==i?<div className="carousel-item" key={x.default} style={{backgroundImage: `url("${x.default}")`}}></div>:null)}
            <button className="carousel-left-button" onClick={()=>dispatch({type:'decrement'})} disabled={count===0}>left</button>
            <button className="carousel-right-button" onClick={()=>dispatch({type:'increment'})} disabled={count===images.length-1}>right</button>
        </div>
        </>
    )
}