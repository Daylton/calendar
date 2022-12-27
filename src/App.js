import "./App.css";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import React, { useState } from "react";
import DatePiker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"

const locales = {
  "pt-BR": require("date-fns/locale/pt-BR"),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: "Aparelho - Pedro",
    allDay: true,
    start: new Date(2022, 11, 20),
    end: new Date(2022, 11, 20),
  },
  {
    title: "Clareamento - José",
    start: new Date(2022, 11, 1),
    end: new Date(2022, 11, 1),
  },
  {
    title: "Limpeza - Maria",
    start: new Date(),
    end: new Date(),
  },
];

function App() {
  const [newEvent, setNewEvent] = useState({
    title: "",
    start: "",
    end: "",
  });

  const [allEvents, setAllEvents] = useState(events);

  function handleAddEvent() {
    setAllEvents([...allEvents, newEvent]);
  }

  return (
    <div className="App">
      <h1>Calendário</h1>
      <h2>Adicionar nova consulta</h2>
      <div>
        <input
          type="text"
          placeholder="Título"
          style={{ width: "20%", marginRight: "10px" }}
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />
      
      <DatePiker
        placeholderText="Início"
        style={{ marginRight: "10px" }}
        selected={newEvent.start}
        onChange={(start) => setNewEvent({ ...newEvent, start })}
      />
      <DatePiker
        placeholderText="Final"
        selected={newEvent.end}
        onChange={(end) => setNewEvent({ ...newEvent, end })}
      />
      <button style={{marginTop: "10px"}} onClick={handleAddEvent} >Salvar</button>
      </div>
      <Calendar
        localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 600, margin: "50px" }}
      />
    </div>
  );
}

export default App;
