import React from 'react';
import Header from './components/Header';
import RecipesList from './components/RecipesList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <RecipesList />
      </main>
    </div>
  );
}

export default App;
