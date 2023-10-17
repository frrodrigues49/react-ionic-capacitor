import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>Card Title</IonCardTitle>
        <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>
        Here's a small text description for the card content. Nothing more, nothing less.
      </IonCardContent>
      <IonButton fill="clear">
        <Link to='/home'>Entrar</Link>        
      </IonButton>
    
    </IonCard>   
  )
}

export default Login;