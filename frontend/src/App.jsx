import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Sigup';
import Dashboard from './pages/Dashboard';
import TodoPage from './pages/TodoPage';
import SharedPage from './pages/SharedPage';
function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='signup' element={<Signup/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/todo:/id' element={<TodoPage/>}/>
      <Route path='/share/:id' element={<SharedPage/>}/>
    </Routes>
    </BrowserRouter>
  );
}
export default App;