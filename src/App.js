import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.js';
import ItemList from './components/ItemListContainer.js'
import IconCart from './components/CartWidget.js'
import Milogo from './Img/milogo.jpg';




function App() {
  
  return <>
  <div className="NavBar">
  <NavBar />
  </div>
  <h2>Esta es una venta de garage </h2>
  <ItemList />
  
  
  
  
  </>
}

export default App;
