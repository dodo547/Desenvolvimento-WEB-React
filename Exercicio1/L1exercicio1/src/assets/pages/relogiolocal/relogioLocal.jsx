import React, { useState, useEffect } from "react"

const Relogio = () => {
  const [horario, setHorario] = useState(new Date());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHorario(new Date());
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <>
    <div>
      <h1>{horario.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit", second: "2-digit" })}</h1>
      <h2>Hora em ponto.<br/>
      Petrópolis - RJ
    </h2>
      <br/>
    </div>
    </>
  );
};

export default Relogio;