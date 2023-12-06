
import './App.css'
import Base from './Components/Base'
import Books from './Books'
import Sample from './Book'
import Book from './Book'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import { LibraryProvider } from './ContextProvider'
import Author from './Components/Author'
import Home from './Components/Home'

function App() {
  

  return (
    <>
    <Router>
    <LibraryProvider>
<Base>

{/* <Book/> */}
{/* <Author/> */}
<Routes>
  <Route exact path='/' Component={Home}/>
  <Route  path='/book' Component={Book}/>
  <Route  path='/author' Component={Author}/>

</Routes>
</Base>

</LibraryProvider>
</Router>
    </>
  )
}

export default App
