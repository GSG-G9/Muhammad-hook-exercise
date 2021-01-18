import React, {useState} from 'react';
import './index.css';

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userData, setUserData] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');
    
  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(email === '' || password === '' || confirmPassword === '') {
      setErrorMsg('Can not leave input empty!!!');
    } else if (password !== confirmPassword) {
      setErrorMsg('Password and Confirm Password must be a match!!!');
    } else {
      setUserData({email, password, confirmPassword});
    }
  }

  const handleDeleteTodo = (id) => {
    setUserData(null)
  }

  return (
    <div className="Sighup">
      <h1 className='title'>Signup Form</h1>
      {errorMsg && <p className='error-msg'>{errorMsg}</p>}
      <form className='Sighup-form' onSubmit={handleSubmit}>
        <label htmlFor="email">Email: </label>
        <input className="Sighup-input" id='email' type="email" value={email} onChange={handleEmail}/>
        <label htmlFor="password">Password: </label>
        <input className="Sighup-input" id='password' type="password" value={password} onChange={handlePassword}/>
        <label htmlFor="confirmPassword">Confirm Password: </label>
        <input className="Sighup-input" id='confirmPassword' type="password" value={confirmPassword} onChange={handleConfirmPassword}/>
        <button className="Sighup-btn">add</button>
      </form>
      {
      userData !== null && <div className='show'>
        <button className="delete-btn" onClick={handleDeleteTodo}>Delete data</button>
        <p className="show-user-data">Email: <span>{userData.email}</span></p>
        <p className="show-user-data">Password: <span>{userData.password}</span></p>
      </div>
      }
    </div>
  )
}

export default Signup;
