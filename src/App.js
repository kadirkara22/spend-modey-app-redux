import './App.css';
import Content from './components/content';
import Header from './components/header';
import Receipt from './components/receipt';




function App() {
  return (
    <div className="container">
      <Header />
      <Content />
      <Receipt />
    </div>
  );
}

export default App;
