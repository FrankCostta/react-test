import './App.css';
import Catalogo from './components/Catalogo';

function App() {
  return (
    <div className="App">
      <header>
        <h2 className='titulo'>TITULO</h2>
      </header>
      <hr></hr>
      <nav className='navigator'>
        <Catalogo />
        <Catalogo />
        <Catalogo />
      </nav>
    </div>
  );
}

export default App;
