import './App.css';
import Card from "./Components/Card";


function App() {

  // Card details
  
  const cardDetails = [
    {
      id: 0,
      title: "Free",
      price: "0",
      users: "singel User",
      storage: "5GB"
    },
    {
      id: 1,
      title: "Plus",
      price: "9",
      users: "5 Users",
      storage: "50GB"
    },
    {
      id: 2,
      title: "Pro",
      price: "49",
      users: "Unlimited Users",
      storage: "150GB"
    }
  ];
  return (
    <div className="App">
      <div className='container'>

        < Card cardDetails={cardDetails} />

      </div>
    </div>
  );
}

export default App;
