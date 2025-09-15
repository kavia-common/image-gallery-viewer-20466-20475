import React from 'react';

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Image Gallery Viewer</h1>
        <p>App scaffolded successfully. You can now implement the gallery UI.</p>
      </header>
      <main className="main">
        <div className="grid">
          {[1,2,3,4,5,6].map(i => (
            <div key={i} className="card">Item {i}</div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
