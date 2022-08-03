
import './App.css';
import  Profile  from './component/Profile';
import  Photo  from './image/photodaly.jpg'
import Myphoto from './component/MyPhoto';
import Particle from './component/Particle';

function App() {
  const myprofil=[
    {
     
name: "Mohamed Ali Affes",
adresse : "Route Manzel chaker",
profession:" web developer"




    },
  
  
  
  ];
  return (
    <div className="App">
     
         <Myphoto myphoto={Photo}/>
         <Particle/>
     <Profile myprofil1={myprofil}  />
 
    </div>
  );
}

export default App;
