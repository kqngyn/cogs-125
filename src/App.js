import './App.css';
import { NavBar } from './components/Navbar';
import { Button } from './components/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <Button/>
      </header>
    </div>
  );
}

export default App;
