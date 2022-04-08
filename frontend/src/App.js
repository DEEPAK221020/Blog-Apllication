import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import SectA from './components/SectA';
import Content from './components/Content';
import { Sidebar } from './components/sidebar/Sidebar';
import { Header } from './Header';

function App() {
  return (
    <div className='container-fluid' >
      <div className='row sticky-top '>
    <Navbar/>
    </div>
    <div className='row mt-2'>
    <SectA/>
    </div>
    <div className='row'>
      <div className='col-6 d-flex flex-column align-items-center ' style={{width:'70%'}}>
        <div className='row mt-2'>
          <Header/>
          </div>
        <div className='row mt-2 ms-2 me-1 '>
          <Content/>
          </div>
        </div>
      <div className='col-6 d-flex flex-row justify-content-center border-start border-1 border-success mt-2 mb-2 ' style={{width:'30%'}}><Sidebar/></div>
      </div>
    </div>
    
  );
}

export default App;

