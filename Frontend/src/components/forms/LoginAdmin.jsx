import React , {useState} from 'react'
import './loginAdmin.css'
import zigzag  from '../../img/icons/zigzag.png';
import {Link} from 'react-router-dom';

export default function LoginAdmin(){

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [error, setError] = useState('')


    const handleSubmit = async (e) =>{
        
        e.preventDefault()
        const loginAdmin = {email , password}

        const response = await fetch("/auth/login", {
            method: 'POST',
            body: JSON.stringify(loginAdmin),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        console.log("aw mcha login",loginAdmin)

        const json = await response.json()

        if(!response.ok){
            setError(json.error)
        }
        if(response.ok){
            setemail('')
            setpassword('')
            setError(null)
            console.log("user loged in successfully", json)
        }
    }

  return (
    <div className='container felx items-center justify-center bg-[#FBFBFF] h-screen'>
        <div className='p-10 flex flex-col items-center justify-center  '>
            <div className='flex items-center justify-center py-5 w-full diag-div-lign relative'>
                <div className='h-fit text-center rounded-[26px] w-[60%] border-[#F75C03] border-[6px] border-solid relative circle-div-title circle-div'>
                    <h1 className='text-[#0A1682] uppercase py-4 text-[30px] font-bold'>welcome back</h1>
                </div>
            </div>
            <div className='flex items-center justify-center py-10 px-4  w-full ver-line-div relative'>
                {/* this part is decoration part */}
                <img src={zigzag} alt="" className='absolute right-0 bg-[#fbfbff] translate-x-[15.5px] translate-y-[-30px] z-10'/>
                <img src={zigzag} alt="" className='absolute left-0 bg-[#fbfbff] translate-x-[-12.5px] translate-y-[-30px] z-10'/>
                {/* this part is decoration part */}
                <form className='w-full py-5 px-10 ' onSubmit={handleSubmit}>
                    <h5 className='uppercase text-[#0A1682] text-[30px] font-bold'>enter your information</h5>
                    {error && <p>{error}</p>}
                    <div className='w-full flex items-center justify-center flex-col px-6 py-10'>
                        {/* <label>Email</label> */}
                        <input className='w-full py-6  text-[#838383] text-[22px] px-4 border-[#0A1682] border-[4px] border-solid outline-none bg-[#fff] rounded-[26px] mb-10' type="text"  placeholder='EMAIL' onChange={(e) => setemail(e.target.value)}/>
                        <input className='w-full py-6  text-[#838383] text-[22px] px-4 border-[#0A1682] border-[4px] border-solid outline-none bg-[#fff] rounded-[26px]' type="password"  placeholder='PASSWORD' onChange={(e) => setpassword(e.target.value)}/>
                    </div>
                    <div className='w-full flex items-center justify-center pt-6 diag-div relative'>
                        <button className='bg-[#F75C03] font-bold text-white uppercase text-[30px] w-[50%] py-6 rounded-[26px] circle-div-btn circle-div relative' type='submit'>Login</button>
                    </div>
                </form>
            </div>
            <div>
                <p className='uppercase text-[#838383] text-[20px] font-bold'>you don't have an account?  <span className='text-[#F75C03]'><Link to="/"> sign up</Link></span></p>
            </div>
        </div>
    </div>
  )
}
