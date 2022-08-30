import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import Classclick from './components/Classclick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreet from './components/UserGreet';
import NameList from './components/NameList';

function App() { 
  return (
    <div className="App">
      <NameList /> 
      {/* <UserGreet /> */}
      {/* <ParentComponent /> */}
      {/* <EventBind /> */}
      {/* <Counter />
      <Message />
      <FunctionClick />
      <Classclick /> */}
      {/* <Greet name="Ammy" />
      <Greet name="Jhon" />
      <Greet name="Jack" /> */}
 
      {/* <Welcome city="Jaipur"/>
      <Welcome city="Raipur"/>
      <Welcome city="Jodhpur"/> */}
      {/*<Hello /> */}
    </div>
  );
}

export default App;
