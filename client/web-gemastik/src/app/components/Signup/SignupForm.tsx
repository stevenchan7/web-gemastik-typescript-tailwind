'use client'
import * as Form from '@radix-ui/react-form';

export default function SignupForm() {
  return(
    <Form.Root>
      <Form.Field className='mb-4' name='username'>
        <Form.Control asChild>
          <input className='w-full h-[44px] bg-primary-bg rounded-lg px-4 outline-none focus:border-2 focus:border-[#D6925C]' type="text" placeholder='username'/>
        </Form.Control>
      </Form.Field>
      <Form.Field className='mb-4' name='email'>
        <Form.Control asChild>
          <input className='w-full h-[44px] bg-primary-bg rounded-lg px-4 outline-none focus:border-2 focus:border-[#D6925C]' type="text" placeholder='email'/>
        </Form.Control>
      </Form.Field>
      <Form.Field className='mb-4' name='password'>
        <Form.Control asChild>
          <input className='w-full h-[44px] bg-primary-bg rounded-lg px-4 outline-none focus:border-2 focus:border-[#D6925C]' type="text" placeholder='password'/>
        </Form.Control>
      </Form.Field>
      <div className='text-lg mb-8'>
        <div className='flex items-center gap-2'>
          <input className='appearance-none inline-flex justify-center items-center w-[1rem] h-[1rem] border-2 rounded-full border-[#D6925C] before:w-[0.5rem] before:h-[0.5rem] before:rounded-full before:bg-[#D6925C] before:scale-0 before:checked:scale-100 before:transition-transform' type="radio" id='relawan' name='role' value={1}/>
          <label htmlFor="relawan">Relawan</label>
        </div>
        <div className='flex items-center gap-2'>
          <input className='appearance-none inline-flex justify-center items-center w-[1rem] h-[1rem] border-2 rounded-full border-[#D6925C] before:w-[0.5rem] before:h-[0.5rem] before:rounded-full before:bg-[#D6925C] before:scale-0 before:checked:scale-100 before:transition-transform' type="radio" id='komunitas' name='role' value={2}/>
          <label htmlFor="komunitas">Komunitas</label>
        </div>
      </div>
      <Form.Submit asChild>
        <button className='w-full h-[56px] rounded-lg bg-[#D6925C] text-lg text-primary-bg font-bold'>Daftar</button>
      </Form.Submit>
    </Form.Root>
  )
}