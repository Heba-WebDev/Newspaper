
import './App.css';
import Navbar from './Navbar'
import News from './News'

function App() {
  return (
    <div className="app">
     <Navbar />
     <h1 className='title'>LATEST NEWS</h1>
     <h3>Don't miss a single headline</h3>
     <News />
    </div>
  )
}

export default App;
