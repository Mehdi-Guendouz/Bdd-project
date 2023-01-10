import React, {useState} from 'react'
import './signup.css'
import {Link} from 'react-router-dom'

export default function SignupForm() {
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [dateBth, setdateBth] = useState('');
    const [country, setcountry] = useState('');
    const [email, setemail] = useState('');
    const [phoneNmb, setphoneNmb] = useState('');
    const [cmpName, setcmpName] = useState('');
    const [cmpType, setcmpType] = useState('');
    const [nmbDep, setnmbDep] = useState('');
    const [password, setpassword] = useState('');
    const [packe, setpacke] = useState('');
    const [error, setError] = useState('')

    const handelSubmit = async (e) =>{
        e.preventDefault()
        const signupAdmin = {firstName, lastName,email, password, dateBth,phoneNmb,country,cmpType, cmpName, nmbDep, packe}

        const response = await fetch('/auth-admin/register', {
            method: 'POST',
            body: JSON.stringify(signupAdmin),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()

        if(!response.ok){
            setError(json.error)
        }
        if(response.ok){
            setfirstName('')
            setlastName('')
            setdateBth('')
            setcountry('')
            setemail('')
            setphoneNmb('')
            setcmpName('')
            setcmpType('')
            setnmbDep('')
            setpassword('')
            setpacke('')
            setError(null)
            console.log("new workout added successfully", json)
        }
    }

  return (
    <div className='container felx items-center justify-center  h-fit '>
        <div className='py-4 px-10 flex flex-col items-center justify-center  '>
            
            <div className='flex items-center justify-center py-10 px-4  w-full ver-line-div relative'>
                {/* this part is decoration part */}
                {/* <img src={zigzag} alt="" className='absolute right-0 bg-[#fbfbff] translate-x-[15.5px] translate-y-[-30px] z-10'/>
                <img src={zigzag} alt="" className='absolute left-0 bg-[#fbfbff] translate-x-[-12.5px] translate-y-[-30px] z-10'/> */}
                {/* this part is decoration part */}
                <form className='w-full py-5 px-10 ' onSubmit={handelSubmit}>
                    <h5 className='uppercase text-[#0A1682] text-[30px] font-bold'>let's collect your information</h5>
                    {error && <p>{error}</p>}
                    <div className='w-full flex items-center justify-between px-6 py-4 '>
                        <input className='w-[45%] py-6  text-[#838383] text-[22px] px-4 border-[#0A1682] border-[4px] border-solid outline-none bg-[#fff] rounded-[26px] ' type="text" value={firstName}  placeholder='NAME'/>
                        <input className='w-[45%] py-6  text-[#838383] text-[22px] px-4 border-[#0A1682] border-[4px] border-solid outline-none bg-[#fff] rounded-[26px]' type="password"  value={lastName} placeholder='LAST NAME'/>
                    </div>
                    <div className='w-full flex items-center justify-between px-6 py-4 '>
                        <input className='w-[45%] py-6  text-[#838383] text-[22px] px-4 border-[#0A1682] border-[4px] border-solid outline-none bg-[#fff] rounded-[26px] ' type="text" value={dateBth}  placeholder='DATE OF BIRTH'/>
                        <input className='w-[45%] py-6  text-[#838383] text-[22px] px-4 border-[#0A1682] border-[4px] border-solid outline-none bg-[#fff] rounded-[26px]' type="password"  value={country} placeholder='COUNTRY'/>
                    </div>
                    <div className='w-full flex items-center justify-between px-6 py-4 '>
                        <input className='w-[45%] py-6  text-[#838383] text-[22px] px-4 border-[#0A1682] border-[4px] border-solid outline-none bg-[#fff] rounded-[26px] ' type="text"  value={email} placeholder='EMAIL'/>
                        <input className='w-[45%] py-6  text-[#838383] text-[22px] px-4 border-[#0A1682] border-[4px] border-solid outline-none bg-[#fff] rounded-[26px]' type="password" value={phoneNmb} placeholder='PHONE NUMBER'/>
                    </div>
                    <div className='w-full flex items-center justify-center px-6 py-4'>
                        <input className='w-full py-6  text-[#838383] text-[22px] px-4 border-[#0A1682] border-[4px] border-solid outline-none bg-[#fff] rounded-[26px] ' type="text" value={cmpName}  placeholder='COMPANY NAME'/>
                    </div>
                    <div className='w-full flex items-center justify-between px-6 py-4 '>
                        <input className='w-[45%] py-6  text-[#838383] text-[22px] px-4 border-[#0A1682] border-[4px] border-solid outline-none bg-[#fff] rounded-[26px] ' type="text" value={cmpType} placeholder='COMPANY TYPE'/>
                        <input className='w-[45%] py-6  text-[#838383] text-[22px] px-4 border-[#0A1682] border-[4px] border-solid outline-none bg-[#fff] rounded-[26px]' type="password" value={nmbDep}  placeholder='NUMBER OF DEPARTEMENTS'/>
                    </div>
                    <div className='w-full flex items-center justify-center px-6 py-4'>
                        <input className='w-full py-6  text-[#838383] text-[22px] px-4 border-[#0A1682] border-[4px] border-solid outline-none bg-[#fff] rounded-[26px] ' type="text" value={password}  placeholder='PASSWORD'/>
                    </div>
                    <div className='w-full flex items-center justify-center px-6 py-4'>
                        <input className='w-full py-6  text-[#838383] text-[22px] px-4 border-[#0A1682] border-[4px] border-solid outline-none bg-[#fff] rounded-[26px] ' type="text"  value={packe} placeholder='CONFIRM YOUR PACK'/>
                    </div>
                    <div>
                        <label className='uppercase'>check this if you wish to have a free trail</label>
                        <input type="checkbox" />
                    </div>
                    <div className='w-full flex items-center justify-center pt-6 diag-div relative'>
                        <button className='bg-[#F75C03] font-bold text-white uppercase text-[30px] w-[50%] py-6 rounded-[26px] circle-div-btn circle-div relative'>sign up</button>
                    </div>
                </form>
            </div>
            <div>
                <p className='uppercase text-[#838383] text-[20px] font-bold'>already have an account? <span className='text-[#F75C03]'><Link to="/login">login</Link></span></p>
            </div>
        </div>
    </div>
  )
}
