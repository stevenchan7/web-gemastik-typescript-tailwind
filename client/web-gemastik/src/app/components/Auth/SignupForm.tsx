'use client'
import * as Form from '@radix-ui/react-form';
import { useState } from 'react';

export default function SignupForm({ setSuccessAlert, setErrorAlert }: {setSuccessAlert: () => void, setErrorAlert: (msg: string) => void}) {
  type SignupForm = {
    username: string,
    email: string,
    password: string,
    role: string
  }

  const initialForm = {
    username: '',
    email: '',
    password: '',
    role: 'volunteer'
  }

  const [form, setForm] = useState<SignupForm>(initialForm)
  
  const handleInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const {name, value} = e.target
    setForm({ ...form, [name]: value })
    console.log(form);
  }
  
  // POST form
  const handleFormSubmit: React.FormEventHandler<HTMLFormElement> = async(e) => {
    try {
      e.preventDefault()
      const requestOptions: RequestInit = {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(form)
      }
      const res = await fetch('http://localhost:5000/register', requestOptions)
      const data = await res.json()
      console.log(data);
      const isSuccess = data.success  
      if(isSuccess) {
        setSuccessAlert()
      } else {
        const msg: string = data.msg
        setErrorAlert(msg)
      }
      setForm(initialForm)
      window.scrollTo(0, -200)
    } catch (error) {
      console.log(error);
    }
  }

  return(
    <Form.Root onSubmit={handleFormSubmit}>
      <Form.Field className='mb-4' name='username'>
        <Form.Control asChild>
          <input className='w-full h-[44px] bg-primary-bg rounded-lg px-4 outline-none focus:border-2 focus:border-[#D6925C]' required type="text" placeholder='username' value={form.username} onChange={e => handleInput(e)}/>
        </Form.Control>
        <div className='text-end'>
          <Form.Message className='text-sm' match='valueMissing'>Please provide a username</Form.Message>
        </div>
      </Form.Field>
      <Form.Field className='mb-4' name='email'>
        <Form.Control asChild>
          <input className='w-full h-[44px] bg-primary-bg rounded-lg px-4 outline-none focus:border-2 focus:border-[#D6925C]' required type="email" placeholder='email' value={form.email} onChange={e => handleInput(e)}/>
        </Form.Control>
        <div className='text-end'>
          <Form.Message className='text-sm ' match='typeMismatch'>Please enter a valid email</Form.Message>
          <Form.Message className='text-sm ' match='valueMissing'>Please provide an email</Form.Message>
        </div>
      </Form.Field>
      <Form.Field className='mb-4' name='password'>
        <Form.Control asChild>
          <input className='w-full h-[44px] bg-primary-bg rounded-lg px-4 outline-none focus:border-2 focus:border-[#D6925C]' required type="password" placeholder='password' value={form.password} onChange={e => handleInput(e)}/>
        </Form.Control>
        <div className='text-end'>
          <Form.Message className='text-sm ' match='valueMissing'>Please provide a password</Form.Message>
        </div>
      </Form.Field>
      <div className='text-lg font-bold text-primary-text-black/60 mb-8'>
        <div className='flex items-center gap-2'>
          <input className='appearance-none inline-flex justify-center items-center w-[1rem] h-[1rem] border-2 rounded-full border-[#D6925C] before:w-[0.5rem] before:h-[0.5rem] before:rounded-full before:bg-[#D6925C] before:scale-0 checked:before:scale-100 before:transition-transform' type="radio" id='relawan' name='role' value='volunteer' onChange={e => handleInput(e)} checked={form.role === 'volunteer'}/>
          <label htmlFor="relawan">Relawan</label>
        </div>
        <div className='flex items-center gap-2'>
          <input className='appearance-none inline-flex justify-center items-center w-[1rem] h-[1rem] border-2 rounded-full border-[#D6925C] before:w-[0.5rem] before:h-[0.5rem] before:rounded-full before:bg-[#D6925C] before:scale-0 checked:before:scale-100 before:transition-transform' type="radio" id='komunitas' name='role' value='community' onChange={e => handleInput(e)} checked={form.role === 'community'}/>
          <label htmlFor="komunitas">Komunitas</label>
        </div>
      </div>
      <Form.Submit asChild>
        <button className='w-full h-[56px] rounded-lg bg-[#D6925C] hover:bg-[#D6925C]/80 active:scale-90 text-lg text-primary-bg font-bold'>Daftar</button>
      </Form.Submit>
    </Form.Root>
  )
}