import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const products=[
    {name:'photoshop', price:'$90.99'},
    {name:' illustrator', price:'$29.98'},
    {name:' PDF reader', price:'53.937'}
  ]
  const friends =['tamim','fahim','nayeem']
  const birds =['doyal','koyel','kak']
  return (
    <div className="App">
      <header className="App-header">
         
        <p>My first react paragraph</p>
          <Bappa></Bappa>
        <Counter></Counter>
        <Users></Users>
        {
          birds.map(br => <Bird bird={br}></Bird>)
        }

        {
          friends.map(fd => <Friend friend={fd}></Friend>)
        }
        {
          products.map(pd => <Product product={pd}></Product>)
        }
      </header>
    </div>
  );
}
function Bappa(){
    const [bap , setCount] = useState(2);
  return(
    <div>
      <h1> hehehe : {bap}</h1>
      <button onClick={() => setCount(bap+1)}>Increase</button>
      <button onClick ={() => setCount(bap-1)}>Decrease</button>
    </div>
  )

}
function Counter(){
  const[count , setCount] = useState(10);
  const handleIncrease = () => {setCount (count+1);};
  
  return(
    <div>
      <h1>count:  {count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}
function Users(){
  const [users, setUsers]= useState([]);
  useEffect(() =>{
    fetch ('https://jsonplaceholder.typicode.com/users')
    .then (res => res.json())
    .then(data => setUsers(data));
  })
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}
function Bird(props){
  const birdStyle ={
    border:'2px solid blue',
    borderRadius:'10px',
    backgroundColor:'black',
    height:'200px',width:'200px',
    float: 'left',
    boxShadow: '5px 5px 10px green'
  }
  return(
    <div style={birdStyle}>
      <h5>Name:{props.bird}</h5>

    </div>

  )
}
function Friend(props){
  const friendStyle={
    border: '2px solid red',
    borderRadius:'10px',
    backgroundColor:'black',
    height:'200px',width:'200px',
    float: 'left',
    boxShadow: '5px 5px 10px green'
  }

  return(
    <div style={friendStyle}>
      <h5>name: {props.friend} </h5>

    </div>
  )
}

function Product(props){
  const productStyle={
    border: '2px solid red',
    borderRadius:'10px',
    backgroundColor:'black',
    height:'200px',width:'200px',
    float: 'left',
    boxShadow: '5px 5px 10px green'
  }
  return(
    <div style={productStyle}>
      <h3> {props.product.name} </h3>
      <h5>{props.product.price}</h5>
      <button >Buy Now</button>
    </div>
  )
}

 

export default App;
