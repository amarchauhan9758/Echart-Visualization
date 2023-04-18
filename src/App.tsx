
import './App.css';
import BarChart from './components/barchart/BarChart';
import LineChart from './components/linechart/LineChart';


//  Define dummy data for  the Bar Chart  and pass data from parent to child components
const  data=[
  {
    "Alcohol": 1,
    "Malic Acid": 14.23,
    "Ash": 13.71,
    "Alcalinity of ash": 2.43,
    "Magnesium": 15.6,
    "Total phenols": 127,
    "Flavanoids": 2.8,
    "Nonflavanoid phenols": 3.06,
    "Proanthocyanins": "12.28",
    "Color intensity": 2.29,
    "Hue": 5.64,
    "OD280/OD315 of diluted wines": 1.04,
    "Unknown": 3.92
  },
  {
    "Alcohol": 2,
    "Malic Acid": 13.2,
    "Ash": 11.78,
    "Alcalinity of ash": 2.14,
    "Magnesium": 11.2,
    "Total phenols": 100,
    "Flavanoids": 2.65,
    "Nonflavanoid phenols": 2.76,
    "Proanthocyanins": "21.26",
    "Color intensity": 1.28,
    "Hue": 4.38,
    "OD280/OD315 of diluted wines": 1.05,
    "Unknown": 3.4
  },
  {
    "Alcohol": 3,
    "Malic Acid": 13.16,
    "Ash": 12.36,
    "Alcalinity of ash": 2.67,
    "Magnesium": 18.6,
    "Total phenols": 101,
    "Flavanoids": 2.8,
    "Nonflavanoid phenols": 3.24,
    "Proanthocyanins": "8.3",
    "Color intensity": 2.81,
    "Hue": 5.68,
    "OD280/OD315 of diluted wines": 1.03,
    "Unknown": 3.17
  }]

//  Define dummy data for  the ScatterChart   and pass data from parent to child components
const wineData = {
  flavanoids: [1, 2, 3,],
  ash: [ 1, 3, 2]
}

function App() {
  return (
    <div className="App">
    <LineChart flavanoids={wineData.flavanoids} ash={wineData.ash} />
    <BarChart data={data} />
    </div>
  );
}
export default App;