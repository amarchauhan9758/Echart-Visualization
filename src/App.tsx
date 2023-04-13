
import './App.css';
import BarChart from './components/barchart/BarChart';
import LineChart from './components/linechart/LineChart';


//  Define dummy data for  the Bar Chart  and pass data from parent to child components
const  data=[
  { alcohol: 'Red Wine', magnesium: 98 },
  { alcohol: 'White Wine', magnesium: 84 },
  { alcohol: 'Fratelli Sette', magnesium: 106 },
  { alcohol: 'Sparkling Wine', magnesium: 69 },
  { alcohol: 'Yellow Wine', magnesium: 74 },
]

//  Define dummy data for  the ScatterChart   and pass data from parent to child components
const wineData = {
  flavanoids: [1, 2, 3, 4, 5],
  ash: [5, 4, 1, 3, 2]
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