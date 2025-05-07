import './App.css'
import { useState, useEffect} from 'react'


function Form(){
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [pass,setPass] = useState('')
    const [conPass,setCon] = useState('')
    const [errorName,setErrorName] = useState('')
    const [errorEmail,setErrorEmail] = useState('')
    const [errorPass,setErrorPass] = useState('')
    const [errorCon,setErrorCon] = useState('')
    const [errorNameText,setErrorNameText] = useState('hide')
    const [errorEmailText,setErrorEmailText] = useState('hide')
    const [errorPassText,setErrorPassText] = useState('hide')
    const [errorConText,setErrorConText] = useState('hide')
    
    useEffect(()=>{
        name.length 
        ? name.length < 8 
            ? (setErrorName('wrong') , setErrorNameText('show'))
            : (setErrorName('correct') , setErrorNameText('hide')) 
        : null
        email.length 
        ? (!email.includes('@gmail.com')) 
            ? (setErrorEmail('wrong') , setErrorEmailText('show')) 
            : (setErrorEmail('correct') , setErrorEmailText('hide')) 
        : null
        pass.length 
        ? pass.length < 8 
            ? (setErrorPass('wrong') , setErrorPassText('show')) 
            : (setErrorPass('correct') , setErrorPassText('hide')) 
        : null
        conPass.length 
        ? conPass !== pass 
            ? (setErrorCon('wrong') , setErrorConText('show')) 
            : (setErrorCon('correct') , setErrorConText('hide')) 
        : null
    },[name,email,pass,conPass])
    return(
        <div className='form-container'>
            <form onSubmit={saveInfo}>
                <label>ชื่อผู้ใช้</label>
                <input type='text' className={errorName} placeholder='กรอกชื่อผู้ใช้' onInput={inputName}></input>
                <p className={errorNameText}>ชื่อผู้ใช้ต้องมีมากกว่า 8 อักษร</p>
                <label>ชื่ออีเมล</label>
                <input type='text' className={errorEmail}  placeholder='กรอกชื่ออีเมล' onInput={inputEmail}></input>
                <p className={errorEmailText}>ชื่ออีเมลไม่ถูกต้อง</p>
                <label>รหัสผ่าน</label>
                <input type='password' className={errorPass} placeholder='กรอกรหัสผ่าน' onInput={inputPass}></input>
                <p className={errorPassText}>รหัสผ่านต้องมีมากกว่า 8 อักษร</p>
                <label>ยืนยันรหัสผ่าน</label>
                <input type='password' className={errorCon}  placeholder='ยืนยันรหัสผ่าน' onInput={inputCon}></input>
                <p className={errorConText}>รหัสผ่านไม่ถูกต้อง</p>
                <button type='submit'>ส่งแบบฟอร์ม</button>
            </form>
        </div>
    )
    function inputName(e){
        setName(e.target.value)
    }
    function inputEmail(e){
        setEmail(e.target.value)
    }
    function inputPass(e){
        setPass(e.target.value)
    }
    function inputCon(e){
        setCon(e.target.value)
    }
    function saveInfo(e){
        e.preventDefault()
    }
    
}

export default Form