import React from 'react'

import { Route, Routes } from 'react-router-dom'
import NavBar from './components/navBar'
import Iteration from './pages/Iteration'
import Mutator from './pages/Mutator'
import Searching from './pages/Searching'
import Accessor from './pages/Accessor'
import NonMutating from './pages/NonMutating'
import Static from './pages/Static'

const App = () => {
  return (
    <>
    <NavBar/>
    <Routes>
        <Route path='/' element={<Iteration/>}/>
        <Route path='/mutator' element={<Mutator/>}/>
        <Route path='/searching' element={<Searching/>}/>
        <Route path='/accessor' element={<Accessor/>}/>
        <Route path='/nonmutating' element={<NonMutating/>}/>
        <Route path='/static' element={<Static/>}/>
    </Routes>
    
    </>
  )
}

export default App
