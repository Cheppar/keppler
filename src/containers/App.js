import React, { useEffect, useState} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

import './App.css';


//STATE : describes our application
//STATE >> props


function App() {

    const [robots, setRobots] = useState ([]);
    const [searchfield, setSearchfield] = useState ('');
    const [count, setCount] = useState(0)

    useEffect (()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(users => {setRobots(users )});
          //console.log(count)      
    },[count]) // only run if count changes

    const onSearchChange = (event) => {
        setSearchfield(event.target.value);
        }
 
    const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        });

   

        return !robots.length ? 
            <h1>Loading ...</h1> :
             (
                <div> 
                <h1 className='f2'>Robo Team</h1>
                <button onClick={()=>setCount(count+1)}>Tap Here</button>
                <SearchBox searchChange={onSearchChange} />
                <Scroll> 
                    <ErrorBoundry> 
                        <CardList robots={filteredRobots} />
                    </ErrorBoundry>
                </Scroll>
                
                </div>
            );    
             } 
        
         

export default App; 