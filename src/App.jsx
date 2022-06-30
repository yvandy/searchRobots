import { useEffect, useState } from 'react';
import './App.css'
import CardList from './cardList';
import { robots } from "./robots";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";
import ErrorBoundary from './ErrorBoundry';

function App(props) {
  const count = undefined;

  const [field, setField] = useState({
    robots: robots,
    searchField: ''
  })

  const searchChangeHandler = (event) => {
    setField({ ...field, searchField: event.target.value });
    // console.log(filteredRobots);
  }

  const filteredRobots = field.robots.filter(robots => {
    return robots.name.toLowerCase().includes(field.searchField.toLowerCase())
  })

  useEffect(() => {
    // console.log(props.store.getState());
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setField({...field, robots: users })
      
      )
  },[])


  return (

    <div className='tc' >
      <div>
        {count && <h1> Messages : {count} </h1>}
      </div>
      <h1 className='f2'>
        RoboFriend
      </h1>
      <SearchBox searchChange={searchChangeHandler} />


      <ErrorBoundary>
        <CardList robots={filteredRobots} className="card" />
      </ErrorBoundary>


    </div>
  )
}

export default App
