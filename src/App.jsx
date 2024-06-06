import { useState } from 'react'

import './App.css'

function App() {
const [switch1, setSwitch1] = useState(false);
const [switch2, setSwitch2] = useState(false);
const [switch3, setSwitch3] = useState(false);

  return (
    <>
   <main>
    
      <div className="container">
        <div className="switch">
          <div className="row">
            
          <div onClick={() => setSwitch1(!switch1)} className={switch1 ? "on" : "off"}>ON</div>
          
          <div onClick={() => setSwitch1(!switch1)} className={switch1 ? "off" : "on"}>OFF</div>
          </div>
          
        <div className="row">  <div onClick={() => setSwitch2(!switch2)} className={switch2 ? "on" : "off"}>ON</div>
          <div onClick={() => setSwitch2(!switch2)} className={switch2 ? "off" : "on"}>OFF</div></div>

        <div className="row"><div onClick={() => setSwitch3(!switch3)} className={switch3 ? "on" : "off"}>ON</div>
          <div onClick={() => setSwitch3(!switch3)} className={switch3 ? "off" : "on"}>OFF</div></div>
        </div>


        
        <div className={(switch1 && switch2 && switch3) ? "ready" : "notReady"}>

          <p className="readyText">{(switch1 && switch2 && switch3) ? "GO!" : "NO WAY"} </p>
          
        </div>

        
      </div>
      </main>

    </>
  )
}

export default App
