import React, { Component } from 'react';
import Customer from './components/Customer.js';
import logo from './logo.svg';
import './App.css';
const customers = [
  {
    'id':1,
    'image':'https://placeimg.com/64/64/1',
    'name':'홍길동2',
    'birth':'77105',
    'gender':'남',
    'job':'백수'
  },
  {
    'id':2,
    'image':'https://placeimg.com/64/64/2',
    'name':'가나다',
    'birth':'801111',
    'gender':'여',
    'job':'백조'
  },
  {
    'id':3,
    'image':'https://placeimg.com/64/64/3',
    'name':'아아다',
    'birth':'901111',
    'gender':'여',
    'job':'백조'
  },
]
class App extends Component {
  render() {
    return (
      <div>
      {
        customers.map(c=>{
          return (
            <Customer 
              key={c.id} 
              id={c.id} 
              image={c.image} 
              name={c.name} 
              birth={c.birth} 
              gender={c.gender}  
              job={c.job}  />
          )
        })
      }
      </div>
     
    );
  }
}

export default App;
