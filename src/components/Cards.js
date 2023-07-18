import React, { useEffect, useState } from 'react'

import axios from 'axios'

import './component-style.css'
import { QUOTES_API } from '../constants'

export default function Cards() {
    const [quote, setQuote] = useState("");
    const [index, setIndex] = useState(0);
  
  useEffect(()=>{
    axios.get(QUOTES_API).then((res) =>{
        setQuote(res.data[index].text);
    }, [index])
  })

  function handleHover(){
    const index = Math.floor(Math.random() * 1000);
    setIndex(index);
  }
    return (
    <div onMouseOver={handleHover} className='card'>
        {quote}
    </div>
  )
}
