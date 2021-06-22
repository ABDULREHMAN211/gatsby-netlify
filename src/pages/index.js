import React from "react"
import { useState } from "react"
import { useEffect } from "react"

export default function Home () {

  const [data, setdata] = useState("");
  useEffect( () =>{
    (async() =>{
      const response = await fetch (`.netlify/functions/hello`);
      const tempData = await response.json();
      setdata(tempData);
    }
    )();
  },[])


  return (
  <div> 
    Hello World!
    <div>{data.message}</div>
  </div>
  )
}