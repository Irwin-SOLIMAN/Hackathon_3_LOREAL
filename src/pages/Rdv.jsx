import Calendar from 'react-calendar';
import  { useState } from "react";

function RdvDate() {
    const [date, setDate] = useState(new Date());

    const onChange = (date) => {
        setDate(date);
      };

    return (
        <div className="rdvForm">
            <h1 className="titre-rdv"> Guillaume vous pouvez choisir votre date de RDV</h1>
            <Calendar onChange={onChange} value={date} />
            <button className="button-rdv">Valider le RDV</button>
        </div>
    );
}

export default RdvDate;
