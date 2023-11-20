import React from 'react'

function PropsValidation() {
  return (
    <div>
      <h1>My name is{props.student}</h1>
    </div>
  )
}
PropsValidation.PropTypes={student:PropTypes.string}
