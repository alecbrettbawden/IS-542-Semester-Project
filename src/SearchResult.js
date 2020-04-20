import React, { useState, useEffect } from 'react';
import Cardlist from './CardList';
import axios from 'axios'
import { IonContent } from '@ionic/react';


export default function SearcResult(props) {
    const [issue, setIssue] = useState("")
    const [responseData, setResponseData] = useState([])

        useEffect(() => {
            let issue = window.location.pathname
            issue = issue.replace(/%20/g,' ').replace('/search/','')
            console.log(issue)
            axios
              .get(`https://api.github.com/search/issues?q=${issue}`, {headers: {"User-Agent":"alecbrettbawden"}})
              .then(response => {
                setResponseData(response.data)
                setIssue(issue)
              })
        }, []);

    return (
        <IonContent>
            <Cardlist cards = {responseData.items} numberIssues={responseData.total_count} issue={issue} />
        </IonContent>
    )
}