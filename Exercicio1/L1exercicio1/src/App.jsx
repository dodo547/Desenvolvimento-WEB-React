import { useState } from 'react'

import './App.css'
import { ListadeCachorros } from './assets/pages/consumirlista/consumirlista'
import { Relogio } from './assets/pages/relogiolocal/relogioLocal'
import { Forms } from './assets/pages/formulario/formulario1'
import { ListadePesquisa } from './assets/pages/pesquisar/barraPesquisa'

function App() {
  return (
    <>
      <Forms/>
      <Relogio/>
      <ListadeCachorros/>
      <ListadePesquisa/>
      </>
  )
}

export default App
