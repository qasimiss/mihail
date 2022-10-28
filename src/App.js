import React from 'react';
import './App.css';
import Form from "./components/Form"
import FormTest from './components/FormTest.jsx';

class App extends React.Component {
  
  render() {

    return (
      <div className='App'>
        {/* <Form /> */}
        <FormTest/>
      </div>
    )
  }
}
export default App;
