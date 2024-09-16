import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import home from './pages/home'


function App() {

  return (
    <>
    <Router>
<Routes>
  <Route exact path='/'  Component={home}/>
</Routes>
    </Router>
    </>
  )
}

export default App
