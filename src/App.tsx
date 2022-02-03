import React from 'react';
import logo from './logo.svg';
import './App.css';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDoc } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyABxIJdFWIMhAvZozs9ty9Sq0MXDwTshPk',
  authDomain: 'platypus-demo.firebaseapp.com',
  projectId: 'platypus-demo',
  storageBucket: 'platypus-demo.appspot.com',
  messagingSenderId: '50858006602',
  appId: '1:50858006602:web:bfefeaa688133898a8aeb3',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React v2 - Hi Omar
        </a>
      </header>
    </div>
  );
}

export default App;
