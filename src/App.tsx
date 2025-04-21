// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Row } from './components/Row'
import { requests } from './request'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='App'>
    <Row
      title="NETFLIX ORIGINALS"
      fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow
    />
    <Row
      title="Top Rated"
      fetchUrl={requests.fetchTopRated}
    />
    <Row
      title="Action Movies"
      fetchUrl={requests.fetchActionMovies}
    />
    <Row
      title="News Movies"
      fetchUrl={requests.fetchNewsMovies}
    />
  </div>
  );
}

export default App

