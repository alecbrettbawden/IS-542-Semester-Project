import React from 'react';
import { IonGrid, IonRow, IonCol } from '@ionic/react';
import Card from './Card'

export default function Cardlist(props) {
    let allCards = []
    let issueString = ""
    
    if (props.cards !== undefined) {
      allCards = props.cards
      issueString = `We found a total of ${props.numberIssues} issues related to "${props.issue}"`
    }

    return (
      <div>
        <p id="result-title">
          {issueString}
        </p>
        <IonGrid>
          <IonRow>
            {allCards.map(card => <IonCol id="flex-col"> <Card {...card} key={card.id} /> </IonCol>)}
          </IonRow>
        </IonGrid>
      </div>
    )
  }