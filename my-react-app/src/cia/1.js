import React from 'react'

export default function list()
{
    const fruits=["Mango","Orange","Apple"];
    const display=fruits.map((name)=>{return <li>{name}</li>});
  return(
    <div>
      <>
      <ul>
        {display}
      </ul>
      </>
    </div>
  )
}
