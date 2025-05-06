import './App.css'
import ReusableForm from './components/ReusableForm/ReusableForm'
// import HookForm from './components/HookForm/HookForm'
// import RefForm from './components/RefForm/RefForm';
// import SimpleForm from './components/SimpleForm/SimpleForm'
// import StatefulForm from './components/StatefulForm/StatefulForm';

function App() {

  const handleSignUpSubmit = data => {
    console.log('Sign up data: ', data);
  }
 
  const handleProfileUpdateSubmit = data => {
    console.log('Profile update data: ', data);
  }

  return (
    <>
      <h1>Vite + React</h1>
      {/* <SimpleForm /> */}

      {/* <StatefulForm /> */}

      {/* <RefForm /> */}

      {/* <HookForm /> */}

      <ReusableForm formTitle={"Sign Up"} handleSubmit={handleSignUpSubmit} />
      <ReusableForm formTitle={"Profile Update"} submitBtnText={"Update"} handleSubmit={handleProfileUpdateSubmit} />
    </>
  )
}

export default App
