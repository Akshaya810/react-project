import React from 'react'

export default function Name({StudentName})
{
    if(StudentName==="Harish")
    {
        throw new Error("Harish name is not acceptable")
    }
  return (
    <div>
      <h1>My Name is {StudentName}</h1>
    </div>
  )
}
