import Calendar from "react-calendar";
import { useState, useEffect } from "react";
import Modal from "react-modal";
import { NavLink } from "react-router-dom";

function RdvDate() {
  const [date, setDate] = useState(new Date());
  const [hours, setHours] = useState([]);
  const [minutes, setMinutes] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const onChange = (date) => {
    setDate(date);
  };

  useEffect(() => {
    const hoursArray = Array.from({ length: 11 }, (_, i) =>
      (i + 8).toString().padStart(2, "0")
    );
    setHours(hoursArray);

    const minutesArray = Array.from({ length: 60 }, (_, i) =>
      i % 15 === 0 ? i.toString().padStart(2, "0") : null
    ).filter((minute) => minute !== null);
    setMinutes(minutesArray);
  }, []);

  return (
    <div className="rdvForm">
      <h1 className="titre-rdv">Choisissez votre RDV </h1>
      <Calendar onChange={onChange} value={date} />
      <div className="time-picker">
        <label htmlFor="hour">Heure :</label>
        <select id="hour" className="time-input">
          {hours.map((hour) => (
            <option key={hour} value={hour}>
              {hour}
            </option>
          ))}
        </select>
        <label htmlFor="minute">Minutes :</label>
        <select id="minute" className="time-input">
          {minutes.map((minute) => (
            <option key={minute} value={minute}>
              {minute}
            </option>
          ))}
        </select>
      </div>
      <button onClick={() => setModalIsOpen(true)} className="button-rdv">
        Valider le RDV
      </button>
      <Modal
        className={"modal-rdv"}
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <h2>
          Votre RDV est bien enregistré, vous allez recevoir un mail de
          confirmation.
        </h2>
        <button onClick={() => setModalIsOpen(false)}>
          <NavLink to={"/"}>
            Fermer
          </NavLink>
        </button>
      </Modal>
    </div>
  );
}

export default RdvDate;
