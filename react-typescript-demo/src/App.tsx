
import './App.css';
import { Greet } from './Components/Greet';
import {Person} from './Components/Person';
import {PersonList} from './Components/PersonList';
import {Status} from './Components/Status';
import {Heading} from './Components/Heading';
import { Oscart} from './Components/Oscar';
import {Button} from './Components/Button';
import {Input} from './Components/Input';
import {User} from './Components/state/User';
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
      {/* <Greet name='Vishwas'  isLoggedIn={true}/>
      <Person name={personName}/>
      <PersonList names={nameList}/>
      <Status status="success"/>
      <Heading> Phaceholder text</Heading>
      <Oscart>
        <Heading> Super hero asdas </Heading>
      </Oscart> */}
      {/* <Button handleClick={(event, id)=>{
        console.log("Button clicked: " ,event, id)
      }}/>
      <Input value='' handleChange={(event)=>console.log(event)}/> */}
      <User/>
    </div>
  );
}

export default App;
