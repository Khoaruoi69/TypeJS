
import './App.css';
import { Greet } from './Components/Greet';
import {Person} from './Components/Person';
import {PersonList} from './Components/PersonList';
import {Status} from './Components/Status';
import {Heading} from './Components/Heading';
import { Oscart} from './Components/Oscar';
function App() {
  const personName ={
    first: 'John',
    last: 'Doe',
  }
  const nameList =[{
    first: 'John',
    last: 'Doe',
  },{
    first: 'John1',
    last: 'Doe1',
  },{
    first: 'John2',
    last: 'Doe2',
  },{
    first: 'John 3',
    last: 'Doe 3',
  }];
  
  return (
    <div className="App">
      <Greet name='Vishwas'  isLoggedIn={true}/>
      <Person name={personName}/>
      <PersonList names={nameList}/>
      <Status status="success"/>
      <Heading> Phaceholder text</Heading>
      <Oscart>
        <Heading> Super hero asdas </Heading>
      </Oscart>
    </div>
  );
}

export default App;
