import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import {useState} from 'react';


function App() {
  
  const [valueState, setValue] = useState({name: "bla"});
  
  const ChangeHandler = (event) => {
    setValue({name: event.target.value});
  };

  return (
    <div className="App">
      <UserInput changed={ChangeHandler}></UserInput>
      <UserOutput name={valueState.name}></UserOutput>
    </div>
  );
}

export default App;
