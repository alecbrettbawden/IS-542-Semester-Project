import React from 'react';
import { IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonCardSubtitle, IonGrid, IonRow, IonIcon, IonCol } from '@ionic/react';
import { ellipsisVerticalOutline } from 'ionicons/icons'
import './Card.css';

export default function Card(props) {

    let cardLink = props.html_url
    let createdAtDate = new Date(props.created_at)
    const description =(props.body === null) ? '' : (props.body.length > 100) ? `${props.body.slice(0,100)}...` : props.body

    return (
      <IonCard class="custom-card" href={cardLink} mode="ios" color="light" >
      <IonGrid>
          <IonRow>
              <IonCol size="12">
              <div style={{textAlign:"right"}}>
              <IonIcon icon={ellipsisVerticalOutline} class="larger"></IonIcon>
              </div>
              <div style={{textAlign:"center"}}>
              <img alt="avatar" src={props.user.avatar_url} className="avatar-image" />
              </div>
              </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12" >
                <IonCardHeader>
                  <IonCardTitle class="card-title">
                    <div style={{textAlign:"center"}}>
                          {props.title}
                    </div>
                  </IonCardTitle>
                  <IonCardSubtitle>
                    <div style={{textAlign:"center"}}>
                        {description}
                    </div>
                  </IonCardSubtitle>
                </IonCardHeader>
            </IonCol>
          </IonRow>
          <IonCardContent fullscreen>
          <IonRow>
              <IonCol size="4" class="border-column">
                <IonRow>
                    <div style={{textAlign:"center"}}>User</div>
                </IonRow>
                <IonRow>
                    <div style={{textAlign:"center"}}> {props.user.login}</div>
                </IonRow>
              </IonCol>
              <IonCol size="4" class="border-column">
                <div>Issue is {props.state}</div>
              </IonCol>
              <IonCol size="4">
                <div>Created On {createdAtDate.toDateString()}</div>
              </IonCol>
          </IonRow>
        </IonCardContent>
      </IonGrid>
      </IonCard>
    )
  }