 import './App.css';
import Inventory from './Inventory/Inventory';

function App() {
  return (
    <div className="container">
      <h1>Shoes Inventory</h1>
      <Inventory item="Climbing shoes,"  productCode="98765,"  brand="Acopa," count="0," price="$199" />
      <Inventory item="Golf shoes," productCode="19537,"  brand="Nike," count="131.4," price="$79" />
      <Inventory item="Cycling shoes," productCode="83564,"  brand="Shimano," count="21.76," price="$80" />
      <Inventory item="Hiking boots," productCode="72438,"  brand="Adidas," count="167.26," price="$200" />
      <Inventory item="Tennis shoes," productCode="52876,"  brand="Mizano," count="1862," price="$109" />

    </div>
  );
}

export default App;
