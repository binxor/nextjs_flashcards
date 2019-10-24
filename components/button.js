import React from 'react'

const Button = (props) => (
  <>
    <button className='button' onClick={props.onClick}>{props.label}</button>
    <style jsx>{`
      .button {
        display: inline-block;
        font-weight: 400;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        border: 1px solid transparent;
        padding: .375rem .75rem;
        font-size: 1rem;
        line-height: 1.5;
        border-radius: .25rem;
        transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
        color: #fff;
        background-color: #17a2b8;
        border-color: #17a2b8;
      }
    `}</style>
  </>
)

export default Button