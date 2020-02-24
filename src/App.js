import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

//https://material-ui.com/
import Button from '@material-ui/core/Button';

class App extends Component {
  
  //to manage data. Only class based components have state.
  state = {
    persons: [
    { name: 'max', age: 28},
    { name: 'Manu', age: 29},
    { name: 'Stephanie', age: 26}
    ],
    showPersons: false
  }

  switchHandler = (newName) =>{
    console.log("Button clicked")
    //DON't DO THIS this.state.persons[0].name = "maximilian"
    //DO this - setState method is available because we extended Component

    this.setState( {
      persons: [
        {name: newName, age: 28},
        { name: 'Manu', age: 29},
        { name: 'Stephanie', age: 27}
      ]
    })
  }

  nameChangedHandler = (event) => {
    
    
    this.setState( {
      persons: [
        {name: 'max', age: 28},
        { name: event.target.value, age: 29},
        { name: 'Stephanie', age: 27}
      ]
    })
  }

  render() {

    const style = {
      backgroundColor: 'green'
    }

    return (
      <div className="App">
        <h1 style={style}>Hi Im a react app</h1>
        <Button variant="contained" onClick={this.switchHandler.bind(this, 'Max!!!')}>Switch name</Button>
        {
          //Alternative syntax. This syntax can cause issues with rerendering  
          //<button onClick={() => this.switchHandler('Max!!!')}>Switch name</button>

        }
        {
          //conditionally showing elements - wrap in brackets
        }
      
          <div>
            <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>Hobbies: Racing</Person>

            {// Passing in a handler to change the name of the second person
            }
            <Person changed={this.nameChangedHandler} name={this.state.persons[1].name} age={this.state.persons[1].age}></Person>
            {
              //passing a method down to a component - click is passed in as a prop. The click then passes a value up to the switchHandler
            }
            <Person 
            name={this.state.persons[2].name} age={this.state.persons[2].age}
            click={this.switchHandler.bind(this, 'STEPH!')}
            >
            </Person> 

            </div>

       
      </div>
    );
  }
}

export default App;
