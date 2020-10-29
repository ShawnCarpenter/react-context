import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { CharacterList } from '../characters/CharacterList';
import Header from '../header/Header';
import styles from './App.css';

export default function App() {
  return (
    <>
      <Header />
      <CharacterList />
    </>
  );
}
