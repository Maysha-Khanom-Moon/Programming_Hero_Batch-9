import './App.css'
import Blogs from './components/Blogs';
import Header from './components/Header';

function App() {
  return (
    <div className='mx-24 lg:mx-64 mb-12'>
      <Header></Header>
      
      <div className='flex flex-col lg:flex-row gap-6'>
        <div className='w-2/3'>
          <Blogs></Blogs>
        </div>
        <div className='w-1/3'>
          
        </div>
      </div>
    </div>
  )
}

export default App
