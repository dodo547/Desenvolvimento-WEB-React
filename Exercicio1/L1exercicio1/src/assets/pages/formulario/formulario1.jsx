import { useState } from "react";
import { Botao } from "../../../components/Button/button";
import { Escrever } from "../../../components/Input/input";

export const Forms = () => {
  const [lista, setLista] = useState([]);

  const handleSubmit = (evento) => {
    evento.preventDefault();

    const texto = "algo";
    const form = new FormData(evento.target);
    console.log(form.get("texto"));

    const novo = lista.concat();
    novo.push(texto);
    setLista(novo);
  };

  return (
    <>
      <h1>Adicione um texto para ser exibido no console</h1>
      <form onSubmit={handleSubmit}>
        <Escrever type="text" name="texto" />
        <br />
        <br />
        <Botao type="submit"></Botao>
      </form>
    </>
  );
};

