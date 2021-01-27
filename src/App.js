import UserInputCounter from './components/userInputCounter';
import UserOutput from './components/userOutput';
import ValidationComponent from './components/validationComponent';
import {useState} from 'react';
import CharComponent from './components/charComponent';


function App() {
  const style={
    "textAlign": "center",
    "margin": "3%"
};

  const [currentName, setNames] = useState({name: "bla"});
  const [visibilityState, setVisibility] = useState({visible: true});

  const valueHandler = (event) => {
    setNames({name: event.target.value});
  };
  const visibilityHandler = (event) => {
    setVisibility({visible: !visibilityState.visible});
  }

  let charsList = [...currentName.name]
  return (
    <div className="App">
      <UserInputCounter style={style} changed={valueHandler} setVisibility={visibilityHandler}
      name={currentName.name}></UserInputCounter>
      {visibilityState.visible ? <div style={style}>BlaBla I'm visible</div>: null}
      <ValidationComponent style={style} length={currentName.name.length}></ValidationComponent>
      <UserOutput style={style} name={currentName.name}></UserOutput>
      {charsList.map((char, index) => {return <CharComponent key={index} char={char}></CharComponent>})}

    </div>
  );
}

export default App;
