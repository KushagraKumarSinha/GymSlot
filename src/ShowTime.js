import { useState } from "react";
import './ShowTime.css'
import axios from "axios";

function ShowTime({Slot, CusName, CusNumber, key}) {

    const[name, setName] = useState(CusName); // For storing the name
    const[number, setNumber] = useState(CusNumber); // For storing the mobile number
    const[locked, setLocked] = useState("Book Slot");
    const[newtime, setNewtime] = useState([]);
    const[buttonstyle, setButtonstyle] = useState("button is-info is-small is-light is-rounded is-outlined")

    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handleNumberChange = (event) => {
        setNumber(event.target.value)
    }

    const handleClickChange = async () => {
        setLocked("Slot Booked");
        setButtonstyle("button is-danger is-small");

        //setLink("http://127.0.0.1:8000/UpdateTime/".concat(key.toString()));

        const response = await axios.put("http://127.0.0.1:8000/UpdateTime/2", {

                SlotTime:"Booked"
            });
        
            // const ReturnValue = await axios.get('http://127.0.0.1:8000/times');
            // setNewtime(ReturnValue.data);

    }
    return(
        <div className="DisplayComponent">
            <div class="card">
                <div class="card-content">
                    <div class="content">
                        <center><div className="ShowingSlots">{Slot}</div></center>
                        <div className="TakingName"><input placeholder="Name" onChange={handleNameChange} /></div>
                        <div className="TakingNumber"><input placeholder="Mobile.No" onChange={handleNumberChange} /></div>
                        <center><div className="ButtonComponent"><button class={buttonstyle} onClick={handleClickChange}>{locked}</button></div></center>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ShowTime;