import { Button } from './components';
import { Card } from './components';
import { Input } from './components';
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
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            marginTop: '2rem',
          }}
        >
          <Input
            label="Outlined Input"
            placeholder="Enter your name"
            value=""
            onChange={() => {}}
            size="medium"
            variant="outlined"
          />
          <Input
            label="Filled Input"
            placeholder="Enter your email"
            value=""
            onChange={() => {}}
            size="medium"
            variant="filled"
          />
          <Input
            label="Underlined Input"
            placeholder="Enter your password"
            value=""
            onChange={() => {}}
            size="medium"
            variant="underlined"
          />
        </div>
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            marginTop: '2rem',
            justifyContent: 'center',
          }}
        >
          <Card variant="default" elevation="medium" padding="medium">
            <h2>Default Card</h2>
            <p>With medium elevation and padding</p>
          </Card>
          <Card variant="outlined" elevation="low" padding="small">
            <h2 style={{ color: 'black' }}>Outlined Card</h2>
            <p style={{ color: 'black' }}>
              With low elevation and small padding
            </p>
          </Card>
          <Card variant="filled" elevation="high" padding="large">
            <h2>Filled Card</h2>
            <p>With high elevation and large padding</p>
          </Card>
        </div>
      </header>
    </div>
  );
}

export default App;
