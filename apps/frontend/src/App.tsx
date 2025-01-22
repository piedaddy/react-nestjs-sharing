import { useState } from 'react';
// import "./App.scss";
import Login from './views/Login';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Welcome to the Yayborhood</h1>
      <h3>Where we believe sharing is caring</h3>
      <Login />
    </>
  );
}

export default App;
