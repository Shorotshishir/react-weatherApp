import React from 'react'

const Forms = (props) => {
  return (
    <React.Fragment>
      <form onSubmit={props.getWeather}>
              <input type='text' placeholder='City' name='city'/>
              <input type='text' placeholder='Country' name='country'/>
              <button > Get Weather </button>
          </form>
    </React.Fragment>
  )
}

export default Forms
