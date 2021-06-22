import FourthItemCards from "./FourthItemCards";
import Calendar from "react-calendar";
import { useState } from "react";


import "./FourthItem.css";

export default function FourthItem() {
    const [date, setDate] = useState(new Date());

    return(
        <div className="FourthItem">
            <h3>Upcoming Events</h3>
            <hr/>
            <div className="container">
                <Calendar 
                    onChange={setDate}
                    value={date}
                />
            </div>
            <hr/>
            <FourthItemCards/>
        </div>
    )
}