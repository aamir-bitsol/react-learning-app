import React, { forwardRef } from 'react'

const Span = forwardRef(function Span(props, ref){
    return (
        <span ref={ref} {...props}></span>
    )
})

// const Span = forwardRef((props, ref)=>{
//     return (
//         <input  ref={ref} {...props}></input>
//     )
// })

export default Span;