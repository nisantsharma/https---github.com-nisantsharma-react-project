import logo from './logo.svg';
import './App.css';
import Item from './components/Item';
import ItemDate from './components/ItemDate';
import card from './components/card';

function App() {
  
  const reaponse= [
    {
      itemName:"Nirma",
      itemDate:"20",
      itemMonth:"june",
      itemYear:"1998",
    },
    {
      itemName:"Nirma2",
      itemDate:"202",
      itemMonth:"june2",
      itemYear:"19982",
    },
    {
      itemName:"Nirma3",
      itemDate:"203",
      itemMonth:"june3",
      itemYear:"19983",
    },
];
  return (
  
    <div>
    <card>
    <Item name={reaponse[0].itemName} ></Item>
    <ItemDate day={reaponse[0].itemDate} month={reaponse[0].itemMonth} year={reaponse[0].itemYear}></ItemDate>
    
    <Item name={reaponse[1].itemName} ></Item>
    <ItemDate day={reaponse[1].itemDate} month={reaponse[1].itemMonth} year={reaponse[1].itemYear}></ItemDate>

    <Item name={reaponse[2].itemName} ></Item>
    <ItemDate day={reaponse[2].itemDate} month={reaponse[2].itemMonth} year={reaponse[2].itemYear}></ItemDate>
    
    <div className="App"> nisant shrma </div>
    </card>
  </div>
    
  );
}

export default App;
