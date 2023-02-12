import './App.css';
import Add from './components/Add';
import Edit from './components/Edit';
import Home from './components/Home';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">Instant Galaxy <i class="fa-brands fa-free-code-camp"></i></Navbar.Brand>
        </Container>
      </Navbar>
      
      <BrowserRouter>

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/edit' element={<Edit></Edit>} />
        <Route path='/add' element={<Add></Add>} />
      
      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
