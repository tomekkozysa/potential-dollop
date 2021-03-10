import Calculator from './components/Calculator';
import ShareBar from './components/ShareBar';
import './App.css';

function App() {
  return (
    <div className="app">
      <h2 className="app-headline">The QuickBooks Calculator</h2>
      <Calculator />
      <ShareBar />
    </div>
  );
}

export default App;
