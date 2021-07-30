import React, { useState, useCallback, useMemo } from 'react';
import Button      from './components/UI/Button/Button';
import DemoOutput  from './components/Demo/DemoOutput';
import DemoList    from './components/Demo/DemoList';
import './App.css';

function App() {
  console.log("App is running");

  //------------------------------------------------------------------------
  const [listTitle, setListTitle] = useState('My List');
  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title');
  }, []);
  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  //------------------------------------------------------------------------
  const [showText,    setShowText]    = useState(false);
  const [allowToggle, setallowToggle] = useState(false);

  const showButtonClickHandler = useCallback( () => {
    if (allowToggle) {
      setShowText((prevState) => {return !prevState;});
      // setShowText((prevState) => { 
      //   if (prevState) { return false;}
      //   else { return true; }
      //   //return !prevState 
      // });
    }
  }, [allowToggle]);

  const toggleButtonClickHandler = useCallback( () => {
    setallowToggle(true);
  }, []);

  return (
    <div className="app">
      

      <DemoList title={listTitle} items={listItems} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>

      {/* <DemoOutput showText={showText} />
      <Button onClick={toggleButtonClickHandler} disabled={allowToggle} >
        Allow Toggle
      </Button>
      <Button onClick={showButtonClickHandler} disabled={!allowToggle} className={'nextEntry'}>
        Toggle Text
      </Button> */}
      
      {/* <Button onClick={buttonClickHandler}>
        {showText && <p>Hide text!</p>}
        {!showText && <p>Show Text!</p>}
      </Button> */}

    </div>
  );
}

export default App;
