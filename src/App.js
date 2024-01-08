import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import Section_1 from './Section1';
import Section_2 from './Section_2';
import Section_3 from './Section_3';
import Section_4 from './Section_4';
import Section_5 from './Section_5';
function App() {
  return (
    <div className="App duration-200">
       <Nav/>
       <Section_1/>
       <Section_2/>
       <Section_3/>
       <Section_4/>
       <Section_5/>
    </div>
  );
}

export default App;
