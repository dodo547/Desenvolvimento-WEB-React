import { useEffect, useState } from "react";

export function ListadePesquisa() {

  const lista = [
    { id: 1, nome: "Honda Civic" },
    { id: 2, nome: "Toyota Corolla" },
    { id: 3, nome: "Mazda RX7" },
    { id: 4, nome: "Masserati" },
    { id: 5, nome: "Lamborghini" },
  ];

  const [pesquisa, setPesquisa] = useState('');

  const pesquisar = lista.filter((filtrado) =>
    filtrado.nome.toLowerCase().includes(pesquisa.toLowerCase())
  );


  return (
    <>
      <h1>Escolha seu Carro</h1>
      <input
       type="text"
       value={pesquisa}
       onChange={(e) => setPesquisa(e.target.value)}
       placeholder="Pesqusar"
      />
     <button onClick={() => pesquisar} title={"qualquer coisa"}>
        Pesquisar
      </button>


      <ul>
      {pesquisar.map((i) => (
          <li key={i.id}>{i.nome}</li>
        ))}
      </ul>
    </>
  );
}