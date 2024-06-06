import { useState } from "react";


export function ListadeCachorros() {
    const cachorros = [
        {id: 1, name: 'buldogue'},
        {id: 2, name: 'Pastor-alemão'},
        {id: 3, name: 'Labrador'},
        {id: 4, name: 'Golden'},
        {id: 5, name: 'Poodle'},
    ]

    const [listadeCachorros, setListadeCachorros] = useState(cachorros);
    const [addCachorro, setaddCachorro] = useState('');

    function adicionarCachorro() {
        if (addCachorro.trim() !== '') {
            const AdicionaCachorro = {
                id: listadeCachorros.length + 1,
                name: addCachorro,
            }

            setListadeCachorros([...listadeCachorros, AdicionaCachorro]);
            setaddCachorro('');
        }
    }

    return (
        <>
        <h1>
            Lista de cachorros.
        </h1>
        <div>
        <ol>
            {listadeCachorros.map((cachorros) => (
                <li key={cachorros.id}>{cachorros.name}</li>
            ))}
        </ol>
            <input type="text"
            value={addCachorro}
            onChange={(e)=> setaddCachorro(e.target.value)}
            placeholder="Adicione um novo Cachorro" />
            <button onClick={adicionarCachorro}>Adicionar</button>
            </div>
        </>
    )
}