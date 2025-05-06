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

      <ReusableForm formTitle={"Sign Up"} handleSubmit={handleSignUpSubmit} >
        <div>
          <h2>Sign Up</h2>
          <p>Please sign up right now</p>
        </div>
      </ReusableForm>

      <ReusableForm formTitle={"Profile Update"} submitBtnText={"Update"} handleSubmit={handleProfileUpdateSubmit} >
        <div>
          <h2>Update Profile</h2>
          <p>Always keep your profile updated</p>
        </div>
      </ReusableForm>
    </>
  )
}

export default App
