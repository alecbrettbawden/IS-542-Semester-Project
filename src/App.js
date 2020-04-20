import React from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import { IonApp } from '@ionic/react';
import SearchForm from './SearchForm';
import SearchResult from './SearchResult'

export default function App() {
  
  return (
    <IonApp >
    <Switch>
      <Route path='/search'>
        <SearchResult />
      </Route>
      <Route path='/'>
      <SearchForm />
        </Route>
    </Switch>
    </IonApp> 
    );
}