import React, { useState } from "react";
import styles from "./SignUpForm.module.css";
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";


const SignUpForm = () => {
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passWord, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(password!==passWord){
      alert("password don't match. Please try again");
      return;
    }
    const container=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/;
    if(!container.test(password)){
      alert("password must contain at least 6 characters with at least one number and one character");
      return;
    }
    if(!container.test(passWord)){
      alert("password must contain at least 6 characters with at least one number and one character");
      return;
    }
    setText("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    console.log(text,email, password,passWord);
  };
  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.heading}>🔏Sign Up🔏</h1>
        <div className={styles.inputContainer}>
          <PersonIcon className={styles.icon} />
          <input
           type="text" placeholder="Enter FullName" value={text}
            onChange={(e)=>setText(e.target.value)} 
           required/>
        </div>
        <div className={styles.inputContainer}>
          <EmailIcon className={styles.icon} />
          <input
            type="email"
            placeholder="Enter email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required/>
        </div>
        <div className={styles.inputContainer}>
        <LockIcon className={styles.icon}/>
        <input type={showPassword? "password":"text"}
        placeholder="Enter password" 
        className={styles.passwordInput} 
        value={password} onChange={(e)=> setPassword(e.target.value)} required/>
        {showPassword ?(<VisibilityOffIcon className={styles.icon} 
          onClick={()=>setShowPassword(!showPassword)}/>)
           :( <VisibilityIcon className={styles.icon} 
            onClick={()=>setShowPassword(!showPassword)}/>)
        }
        
        </div>
        <div className={styles.inputContainer}>
        <LockIcon className={styles.icon}/>
        <input type={showConfirmPassword?"password":"text"} 
        placeholder="Enter confirm password" className={styles.passwordInput}
        value={passWord}  onChange={(e)=>setConfirmPassword(e.target.value)} required/>
        {!showConfirmPassword?(<VisibilityIcon className={styles.icon} 
        onClick={()=>setShowConfirmPassword(!showConfirmPassword)}/>)
        :(<VisibilityOffIcon className={styles.icon} 
        onClick={()=>setShowConfirmPassword(!showConfirmPassword)}/>)
        }
        
        </div>
        <button className={styles.loginButton} type="submit">
          Sign Up
        </button>
      </form>  
    </>
  );
};

export default SignUpForm;