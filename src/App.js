//import logo from './logo.svg';
//import './App.css';
import Home from './Components/Home';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import AddPackages from './Components/AddPackages';
function App() {
  return <BrowserRouter>

  <Routes>
    <Route path='/' element = {<Home/>}/>
    <Route path='/AddPackages' element = {<AddPackages/>}/>
  </Routes>

  </BrowserRouter>
}
;
export default App;
