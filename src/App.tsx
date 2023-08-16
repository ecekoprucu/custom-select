import React from 'react';
import './App.css';
import { Select } from './components/Select';

function App() {
  const options = [
    { text: 'Option 1', value: 'option1' },
    { text: 'Option 2', value: 'option2' },
    { text: 'Option 3', value: 'option3' },
    { text: 'Option 4', value: 'option4' },
    { text: 'Option 5', value: 'option5' },
    { text: 'Option 6', value: 'option6' },
    { text: 'Option 7', value: 'option7' },
  ]

  return (
    <div className="App">
      <header className="App-header">
        <Select preTags={['Text', 'Test']} options={options}/>
      </header>
    </div>
  );
}

export default App;
