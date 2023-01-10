import React, {useState, useEffect} from 'react'
import './signup.css'
import useFetch from 'use-http'
import {Link} from 'react-router-dom'



export default function SignupForm() {

    

 const { get, post, response, loading, error} = useFetch('http://localhost:3000')
   const[Admins,setadmins] =useState([])
    useEffect(async()=> {
         Admins =  await get('/auth')
        setadmins(Admins)
    },[])
        


    const [password, setpassword] = useState('')
    const [nomAdmin, setnom] = useState('')
    const [prenomAdmin, setprenom] = useState('')
    const [email, setemail] = useState('')
    const [dateofbirth, setdateofbirth] = useState('')
    const [country, setcountry] = useState('')
    const [phone, setphone] = useState('')
    const [nomCompany,setnamecompany] = useState('')
    const [typeCompany,settypecompany] = useState('')
    const [nbrDepartments,setdepartmentnb] = useState('')

  return (
    
    <div className='container felx items-center justify-center  h-fit '>
        <div className='py-4 px-10 flex flex-col items-center justify-center  '>
            
            <div className='flex items-center justify-center py-10 px-4  w-full ver-line-div relative'>
                {/* this part is decoration part */}
                {/* <img src={zigzag} alt="" className='absolute right-0 bg-[#fbfbff] translate-x-[15.5px] translate-y-[-30px] z-10'/>
                <img src={zigzag} alt="" className='absolute left-0 bg-[#fbfbff] translate-x-[-12.5px] translate-y-[-30px] z-10'/> */}
                {/* this part is decoration part */}
                <form className='w-full py-5 px-10 ' action="">
                    <h5 className='uppercase text-[#0A1682] text-[30px] font-bold'>let's collect your information</h5>
                    <div className='w-full flex items-center justify-between px-6 py-4 '>
                        <input className='w-[45%] py-6  text-[#838383] text-[22px] px-4 border-[#0A1682] border-[4px] border-solid outline-none bg-[#fff] rounded [26px] ' type="text"  placeholder='NAME' onChange={(e)=>{ setnom (e.target.value) }}/>
                        <input className='w-[45%] py-6  text-[#838383] text-[22px] px-4 border-[#0A1682] border-[4px] border-solid outline-none bg-[#fff] rounded-[26px]' type="password"  placeholder='LAST NAME' onChange={(e)=>{ setprenom (e.target.value)}}  />
                    </div>
                    <div className='w-full flex items-center justify-between px-6 py-4 '>
                        <input className='w-[45%] py-6  text-[#838383] text-[22px] px-4 border-[#0A1682] border-[4px] border-solid outline-none bg-[#fff] rounded-[26px] ' type="text"  placeholder='DATE OF BIRTH' onChange={(e)=>{ setdateofbirth (e.target.value) }}/>
                        <input className='w-[45%] py-6  text-[#838383] text-[22px] px-4 border-[#0A1682] border-[4px] border-solid outline-none bg-[#fff] rounded-[26px]' type="password"  placeholder='COUNTRY'  onChange={(e)=>{ setcountry (e.target.value) }}/>
                    </div>
                    <div className='w-full flex items-center justify-between px-6 py-4 '>
                        <input className='w-[45%] py-6  text-[#838383] text-[22px] px-4 border-[#0A1682] border-[4px] border-solid outline-none bg-[#fff] rounded-[26px] ' type="text"  placeholder='EMAIL'  onChange={(e)=>{ setemail (e.target.value) }}/>
                        <input className='w-[45%] py-6  text-[#838383] text-[22px] px-4 border-[#0A1682] border-[4px] border-solid outline-none bg-[#fff] rounded-[26px]' type="password"  placeholder='PHONE NUMBER' onChange={(e)=>{ setphone (e.target.value) }}/>
                    </div>
                    <div className='w-full flex items-center justify-center px-6 py-4'>
                        <input className='w-full py-6  text-[#838383] text-[22px] px-4 border-[#0A1682] border-[4px] border-solid outline-none bg-[#fff] rounded-[26px] ' type="text"  placeholder='COMPANY NAME'  onChange={(e)=>{ setnamecompany (e.target.value) }}/>
                    </div>
                    <div className='w-full flex items-center justify-between px-6 py-4 '>
                        <input className='w-[45%] py-6  text-[#838383] text-[22px] px-4 border-[#0A1682] border-[4px] border-solid outline-none bg-[#fff] rounded-[26px] ' type="text"  placeholder='COMPANY TYPE'  onChange={(e)=>{ settypecompany (e.target.value) }}/>
                        <input className='w-[45%] py-6  text-[#838383] text-[22px] px-4 border-[#0A1682] border-[4px] border-solid outline-none bg-[#fff] rounded-[26px]' type="password"  placeholder='NUMBER OF DEPARTEMENTS'  onChange={(e)=>{ setdepartmentnb (e.target.value) }}/>
                    </div>
                    <div className='w-full flex items-center justify-center px-6 py-4'>
                        <input className='w-full py-6  text-[#838383] text-[22px] px-4 border-[#0A1682] border-[4px] border-solid outline-none bg-[#fff] rounded-[26px] ' type="text"  placeholder='PASSWORD'  onChange={(e)=>{ setpassword (e.target.value) }}/>
                    </div>
                    <div className='w-full flex items-center justify-center px-6 py-4'>
                        <input className='w-full py-6  text-[#838383] text-[22px] px-4 border-[#0A1682] border-[4px] border-solid outline-none bg-[#fff] rounded-[26px] ' type="text"  placeholder='CONFIRM YOUR PACK'/>
                    </div>
                    <div>
                        <label className='uppercase'>check this if you wish to have a free trail</label>
                        <input type="checkbox" />
                    </div>
                    <div className='w-full flex items-center justify-center pt-6 diag-div relative'>
                        <button className='bg-[#F75C03] font-bold text-white uppercase text-[30px] w-[50%] py-6 rounded-[26px] circle-div-btn circle-div relative' onClick={async()=>{
                            const registration = await post('/register',{
                                password,
                                email,
                                nomAdmin,
                                prenomAdmin,
                                dateofbirth,
                                phone,
                                country,
                                typeCompany,
                                nomCompany,
                                nbrDepartments
                            })
                            console.log(nomAdmin)}}>sign up</button>
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

/*import React from 'react'
import './signup.css'
import {Link} from 'react-router-dom'

export default function SignupForm() {
  return (
    <div className='container felx items-center justify-center  h-fit '>
        <div className='py-4 px-10 flex flex-col items-center justify-center  '>
            
            <div className='flex items-center justify-center py-10 px-4  w-full ver-line-div relative'>
                {/* this part is decoration part */
            /*    {/* <img src={zigzag} alt="" className='absolute right-0 bg-[#fbfbff] translate-x-[15.5px] translate-y-[-30px] z-10'/>
                <img src={zigzag} alt="" className='absolute left-0 bg-[#fbfbff] translate-x-[-12.5px] translate-y-[-30px] z-10'/> }*/
                /*{ this part is decoration part */
            /*    <form className='w-full py-5 px-10 ' action="">
                    <h5 className='uppercase text-[#0A1682] text-[30px] font-bold'>let's collect your information</h5>
                    <div className='w-full flex items-center justify-between px-6 py-4 '>
                        <input className='w-[45%] py-6  text-[#838383] text-[22px] px-4 border-[#0A1682] border-[4px] border-solid outline-none bg-[#fff] rounded-[26px] ' type="text"  placeholder='NAME'/>
                        <input className='w-[45%] py-6  text-[#838383] text-[22px] px-4 border-[#0A1682] border-[4px] border-solid outline-none bg-[#fff] rounded-[26px]' type="password"  placeholder='LAST NAME'/>
                    </div>
                    <div className='w-full flex items-center justify-between px-6 py-4 '>
                        <input className='w-[45%] py-6  text-[#838383] text-[22px] px-4 border-[#0A1682] border-[4px] border-solid outline-none bg-[#fff] rounded-[26px] ' type="text"  placeholder='DATE OF BIRTH'/>
                        <input className='w-[45%] py-6  text-[#838383] text-[22px] px-4 border-[#0A1682] border-[4px] border-solid outline-none bg-[#fff] rounded-[26px]' type="password"  placeholder='COUNTRY'/>
                    </div>
                    <div className='w-full flex items-center justify-between px-6 py-4 '>
                        <input className='w-[45%] py-6  text-[#838383] text-[22px] px-4 border-[#0A1682] border-[4px] border-solid outline-none bg-[#fff] rounded-[26px] ' type="text"  placeholder='EMAIL'/>
                        <input className='w-[45%] py-6  text-[#838383] text-[22px] px-4 border-[#0A1682] border-[4px] border-solid outline-none bg-[#fff] rounded-[26px]' type="password"  placeholder='PHONE NUMBER'/>
                    </div>
                    <div className='w-full flex items-center justify-center px-6 py-4'>
                        <input className='w-full py-6  text-[#838383] text-[22px] px-4 border-[#0A1682] border-[4px] border-solid outline-none bg-[#fff] rounded-[26px] ' type="text"  placeholder='COMPANY NAME'/>
                    </div>
                    <div className='w-full flex items-center justify-between px-6 py-4 '>
                        <input className='w-[45%] py-6  text-[#838383] text-[22px] px-4 border-[#0A1682] border-[4px] border-solid outline-none bg-[#fff] rounded-[26px] ' type="text"  placeholder='COMPANY TYPE'/>
                        <input className='w-[45%] py-6  text-[#838383] text-[22px] px-4 border-[#0A1682] border-[4px] border-solid outline-none bg-[#fff] rounded-[26px]' type="password"  placeholder='NUMBER OF DEPARTEMENTS'/>
                    </div>
                    <div className='w-full flex items-center justify-center px-6 py-4'>
                        <input className='w-full py-6  text-[#838383] text-[22px] px-4 border-[#0A1682] border-[4px] border-solid outline-none bg-[#fff] rounded-[26px] ' type="text"  placeholder='PASSWORD'/>
                    </div>
                    <div className='w-full flex items-center justify-center px-6 py-4'>
                        <input className='w-full py-6  text-[#838383] text-[22px] px-4 border-[#0A1682] border-[4px] border-solid outline-none bg-[#fff] rounded-[26px] ' type="text"  placeholder='CONFIRM YOUR PACK'/>
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
}*/
