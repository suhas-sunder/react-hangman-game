import { useState, useEffect } from "react"

function App() {
  const [finalAnswer, setFinalAnswer] = useState(null);
  const [selectedLetter, setSelectedLetter] = useState([])

  useEffect(() => {
    fetch('https://random-word-api.vercel.app/api?words=1')
    .then(res => {
      return res.json();
    })
    .then(data => {
      console.log(data);
      setFinalAnswer(data);
    })
  }, []);

  return (
    <div className="App">
      <h1>HI!</h1>
    </div>
  );
}

export default App;
