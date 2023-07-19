import React, { useEffect, useState } from "react";

import axios from "axios";

import "./componentStyle.css";
import { QUOTES_API } from "../constants";

export default function Cards() {
     const [quote, setQuote] = useState("");
     const [index, setIndex] = useState(0);

     useEffect(() => {
          axios.get(QUOTES_API).then(
               (res) => {
                    setQuote(res.data[index].text);
               },
               [index]
          );
     });

     function handleHover() {
          const index = Math.floor(Math.random() * 1000);
          setIndex(index);
     }
     return (
          <div onMouseOver={handleHover} className="d-flex justify-content-center text-center align-items-center col-md-4 mt-3">
               <p className="bg-dark text-light w-75 rounded-2 p-2 h-100">{quote}</p>
          </div>
     );
}

