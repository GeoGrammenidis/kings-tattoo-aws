import React from 'react'

function importAll(r) {
    return r.keys().map(r);
}
const images = importAll(require.context('../public/images/carousel', false, /\.(png|jpe?g|svg)$/));

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
        {count}
        <div className="carousel">
            {images.map(x=><div className="carousel-item" key={x.default} style={{backgroundImage: `url("${x.default}")`}}>hey</div>)}
            <button className="carousel-left-button" onClick={()=>dispatch({type:'decrement'})}>left</button>
            <button className="carousel-right-button" onClick={()=>dispatch({type:'increment'})}>right</button>
        </div>
        </>
    )
}