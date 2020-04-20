import React from 'react';
import './Header.css';

import { IonHeader, IonToolbar, IonTitle } from '@ionic/react';

export default function Header(props) {

    return (
        <IonHeader>
            <IonToolbar>
                <IonTitle>
                    Search Github Issues
                </IonTitle>
            </IonToolbar>
        </IonHeader>
    )
}