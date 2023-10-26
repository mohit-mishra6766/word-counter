import React, { useState } from 'react';
import './App.css'

function App() {
  const [text, setText] = useState('');
  const wordCount = text.trim().split(/\s+/).length;

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div >
      <h1><center>Responsive Paragraph Word Counter</center></h1>
      <textarea
        rows="8"
        cols="50"
        placeholder="Type something..."
        value={text}
        onChange={handleChange}
      />
      <p>Word Count: {wordCount}</p>
    </div>
  );
}

export default App;
