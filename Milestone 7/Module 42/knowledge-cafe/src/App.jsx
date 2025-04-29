import './App.css'
import Blogs from './components/Blogs';
import Header from './components/Header';

function App() {
  return (
    <div className='mx-24 lg:mx-64 mt-12'>
      <Header></Header>
      <Blogs></Blogs>
    </div>
  )
}

export default App
