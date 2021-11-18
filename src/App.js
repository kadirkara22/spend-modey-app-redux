import './App.css';
import Content from './components/content';
import Header from './components/header';
import Receipt from './components/receipt';

import TotalMoney from './components/totalMoney';




function App() {
  return (
    <div className="container">
      <Header />
      <TotalMoney />
      <Content />
      <Receipt />
    </div>
  );
}

export default App;
