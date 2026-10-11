import { useState } from 'react'
import { adduser } from '../BackEnd/DbServer.js';
import { useNavigate } from "react-router-dom";
import './LoginPage.css'
export function LoginPage() {
    const nav = useNavigate();
    const [user,setUser] = useState('');
    const [pass,setPassword] = useState('');

    async function verify(){
        console.log(
            'hello'
        );
        const Namepattern = /^[A-Z][a-z]+\s[A-Z][a-z]+$/;
        const PasswordPattern = /^[A-Za-z]+[0-9]{2,}$/;
        let isName = Namepattern.test(user);
        let isPassword = PasswordPattern.test(pass);
        console.log("User:", JSON.stringify(user));
console.log("Password:", JSON.stringify(pass));
console.log("isName:", isName);
console.log("isPassword:", isPassword);
        if(isName && isPassword){
            await adduser(user,pass);
            nav('/');
        }else{
            alert("Name: " + isName + "\nPassword: " + isPassword);
            // alert('Passowrd or Username is incorrect, Username example- Abc Xyz , Password example - abc123 or Abc123')
        }
    }


    return (
        <div id="login-div">
            <form >
                <label className='lable'>
                    <input value={user} placeholder="User name :" className='ip' id='name' onChange={e=>setUser(e.target.value)}/>
                </label>
                <label className='lable'>
                    <p>with atleast 2 numbers</p>
                    <input value={pass} placeholder="Password : " className='ip' id='pass' onChange={e=>setPassword(e.target.value)}/>
                </label>
                <button type='button' id='btn' onClick={verify}>Login</button>
            </form>
        </div>
    )
}