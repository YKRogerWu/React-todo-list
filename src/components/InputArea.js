import React from 'react'

export default function InputArea(props) {
  return (
    <div className="form">
        <input type="text" name="input" onChange={()=>{props.onEnter()}} />
        <button onClick={props.clickAdd(props.input)}>
          <span>Add</span>
        </button>
      </div>
  )
}
