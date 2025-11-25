import React, { useState } from 'react';
import './App.css';

function App() {
  const words = [
    { word: "apple", translation: "яблоко" },
    { word: "book", translation: "книга" },
    { word: "computer", translation: "компьютер" },
    { word: "sun", translation: "солнце" },
    { word: "water", translation: "вода" },
    { word: "friend", translation: "друг" },
    { word: "house", translation: "дом" },
    { word: "time", translation: "время" }
  ];

  const [currentWord, setCurrentWord] = useState(words[0]);
  const [showTranslation, setShowTranslation] = useState(false);

  const getRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  };

  const handleNextWord = () => {
    setCurrentWord(getRandomWord());
    setShowTranslation(false);
  };

  const handleShowTranslation = () => {
    setShowTranslation(!showTranslation);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Тренажёр слов</h1>
        
        <div className="word-card">
          <h2>{currentWord.word}</h2>
          {showTranslation && (
            <p className="translation">{currentWord.translation}</p>
          )}
        </div>

        <div className="buttons">
          <button 
            className="btn show-btn" 
            onClick={handleShowTranslation}
          >
            {showTranslation ? "Скрыть перевод" : "Показать перевод"}
          </button>
          
          <button 
            className="btn next-btn" 
            onClick={handleNextWord}
          >
            Следующее слово
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;