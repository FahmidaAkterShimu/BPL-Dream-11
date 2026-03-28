import './App.css'
import Banner from './components/homepage/banner/Banner'
import Navbar from './components/navbar/Navbar'
import Players from './components/homepage/players/players'
import { Suspense, useState } from 'react'
import { ToastContainer } from 'react-toastify'

const fetchPlayer = async () => {
  const res = await fetch("/data.json");
  const json = res.json();
  return json;
}


function App() {
  const playersPromise = fetchPlayer();

  const [coin, setCoin] = useState(50000);

  return (
    <>
      <Navbar coin={coin}></Navbar>
      <Banner></Banner>
      <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
        <Players playersPromise={playersPromise} coin={coin} setCoin={setCoin}></Players>
      </Suspense>


      {/* react toastify */}
      <ToastContainer />
    </>

  )
}

export default App
