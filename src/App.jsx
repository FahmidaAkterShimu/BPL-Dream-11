import './App.css'
import Banner from './components/homepage/banner/Banner'
import Navbar from './components/navbar/Navbar'
import Players from './components/homepage/players/Players'
import { Suspense } from 'react'

const fetchPlayer = async () => {
  const res = await fetch("/data.json");
  const json = res.json();
  return json;
}


function App() {
  const playersPromise = fetchPlayer();

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
        <Players playersPromise={playersPromise}></Players>
      </Suspense>
    </>

  )
}

export default App
