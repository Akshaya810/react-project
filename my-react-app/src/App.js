import logo from './logo.svg';
import './App.css';
import List1 from './day4/List1';
import PropsValidation from './Day6/PropsValidation';

function App() {
  
  return (
    <div className="App">
        {/* <List1/> */}
        <PropsValidation student={12} />
    </div>
    
  );
}
