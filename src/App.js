import { Button } from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>UI Component Library</h1>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Button variant="primary" size="small">
            Small Primary
          </Button>
          <Button variant="primary" size="medium">
            Medium Primary
          </Button>
          <Button variant="primary" size="large">
            Large Primary
          </Button>
          <Button variant="secondary" size="medium">
            Secondary
          </Button>
          <Button variant="primary" size="medium" disabled>
            Disabled
          </Button>
        </div>
      </header>
    </div>
  );
}

export default App;
