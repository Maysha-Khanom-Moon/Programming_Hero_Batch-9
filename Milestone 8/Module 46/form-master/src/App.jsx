import './App.css'
import ReusableForm from './components/ReusableForm/ReusableForm'
// import HookForm from './components/HookForm/HookForm'
// import RefForm from './components/RefForm/RefForm';
// import SimpleForm from './components/SimpleForm/SimpleForm'
// import StatefulForm from './components/StatefulForm/StatefulForm';

function App() {

  return (
    <>
      <h1>Vite + React</h1>
      {/* <SimpleForm /> */}

      {/* <StatefulForm /> */}

      {/* <RefForm /> */}

      {/* <HookForm /> */}

      <ReusableForm formTitle={"Sign Up"} />
      <ReusableForm formTitle={"Profile Update"} submitBtnText={"Update"} />
    </>
  )
}

export default App
