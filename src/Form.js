import React, { useState } from 'react';
import { IonButton } from '@ionic/react'
import './Form.css';
// import useFetchAppData from './Hooks.js'
import { withRouter } from 'react-router-dom';


function Form(props) {

    const [issue, setIssue] = useState("")
  
    function handleSubmit(event) {
      event.preventDefault()
      props.history.push(`/search/${issue}`)
    }
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={issue}
          onChange= {event => setIssue(event.target.value)}
          placeholder="Enter Search Here"
          required>
        </input>
        <p></p>
        <IonButton class="submit-button" type="submit" onClick={handleSubmit} size="large">Search</IonButton>
      </form>
    )
  }

  export default withRouter(Form)