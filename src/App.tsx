// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Row } from './components/Row'
import { requests } from './request'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <div className='App'>
      <Row fetchUrl={requests.fetchNetflixOriginals} />
    </div>

    </>
  );
}

export default App

