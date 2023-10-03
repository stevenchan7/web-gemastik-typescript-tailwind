'use client'
import * as Form from '@radix-ui/react-form';

export default function SigninForm() {
  return(
    <Form.Root>
      <Form.Field className='mb-4' name='username'>
        <Form.Control asChild>
          <input className='w-full h-[44px] bg-primary-bg rounded-lg px-4 outline-none focus:border-2 focus:border-[#D6925C]' type="text" placeholder='username'/>
        </Form.Control>
      </Form.Field>
      <Form.Field className='mb-4' name='password'>
        <Form.Control asChild>
          <input className='w-full h-[44px] bg-primary-bg rounded-lg px-4 outline-none focus:border-2 focus:border-[#D6925C]' type="text" placeholder='password'/>
        </Form.Control>
      </Form.Field>
      <Form.Submit asChild>
        <button className='w-full h-[56px] rounded-lg bg-[#D6925C] hover:bg-[#D6925C]/80 active:scale-90 text-lg text-primary-bg font-bold'>Masuk</button>
      </Form.Submit>
    </Form.Root>
  )
}