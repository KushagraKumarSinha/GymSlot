import { useState,useEffect } from "react";
import axios from "axios";
import 'bulma/css/bulma.css'
import ShowTime from './ShowTime'
import './App.css'


function App() {

    const [times, setTime] = useState([]); // For Holding the time slots
    const handleClick = async () => { // This function gets the time from the API
        const ReturnValue = await axios.get('http://127.0.0.1:8000/times');
        setTime(ReturnValue.data);
    }

    const DisplayName = times.map((time) => {
        return <ShowTime Slot={time.slot} CusName={time.CustomerName} CusNumber={time.CustomerNumber} key={time.id}></ShowTime>  
    });


    return(
        <div>
            <center>
                <div className="Title">AVAILABLE TIME SLOTS</div>
                <div className="ClickerButton"><button class="button is-success is-light is-outlined" onClick={handleClick}>Click Here to See Slots</button></div>
                <div>{DisplayName}</div>
            </center>
        </div>
    )
}

export default App;