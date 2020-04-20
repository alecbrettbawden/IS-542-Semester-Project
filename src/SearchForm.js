import React from 'react';
import { IonContent, IonGrid, IonRow, IonCol } from '@ionic/react';
import Form from './Form'


export default function SearchForm(props) {

    return (
        <IonContent class="semester-app">
            <IonGrid class="search-grid">
                <IonRow class="search-grid">
                    <IonCol id="flex-col">
                        <IonRow>
                            <IonCol size="12" id="center-search-item" >
                                <img alt="github icon" src={'/images/github-icon.png'} className="github-icon" />
                            </IonCol>
                            <IonCol size="12">
                                <div id="search-title">Search GitHub Issues</div>
                            </IonCol>
                            <IonCol size="12" id="center-search-item">
                                <Form />
                            </IonCol>
                        </IonRow>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonContent>
    );
}