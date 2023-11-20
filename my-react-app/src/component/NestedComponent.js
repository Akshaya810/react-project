import React from 'react'
function Display()
{
    return (
      <h1>NestedComponent</h1>
    )
}

export default function NestedComponent() {
  return (
    <div>
       <Display/>
    </div>
  )
}
