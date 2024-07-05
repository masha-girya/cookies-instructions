import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <main className="App-main">
        <embed src={`${process.env.PUBLIC_URL}/combinepdf.pdf`} width="100%" height="100%" type="application/pdf"></embed>
      </main>
    </div>
  );
}

export default App;
