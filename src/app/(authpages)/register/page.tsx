"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Image from 'next/image'
import Link from "next/link"
import React, { useState } from "react"
const Register = () => {
  const [authState, setAuthState] = useState<AuthStateType>({
    name: "",
    userName: "",
    email: "",
    password: "",
    password_confirmation: ""
  })
  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("auth state is ", authState)
  }
  return (
    <div className='bg-background'>
      <div className='h-screen w-screen flex justify-center items-center'>
        <div className='w-full md:w-1/3 mx-2 bg-gray-100 p-6 rounded-lg'>
          <div className='flex justify-center' >
            <Image src="next.svg" alt='logo' width={50} height={50} />
          </div>
          <h1 className='text-2xl font-bold pt-5'>Register</h1>
          <form action="" onSubmit={submit}>
            <div className='mt-5'>
              <Label htmlFor='name'>Name</Label>
              <Input type='text' id='name' placeholder='Enter your name' onChange={(e) => setAuthState({ ...authState, name: e.target.value })} />
            </div>
            <div className='mt-5'>
              <Label htmlFor='username'>Username</Label>
              <Input type='text' id='username' placeholder='Enter your unique username' onChange={(e) => setAuthState({ ...authState, userName: e.target.value })} />
            </div>
            <div className='mt-5'>
              <Label htmlFor='email'>Email</Label>
              <Input type='email' id='email' placeholder='Enter your email' onChange={(e) => setAuthState({ ...authState, email: e.target.value })} />
            </div>
            <div className='mt-5'>
              <Label htmlFor='password'>Password</Label>
              <Input type='password' id='password' placeholder='Enter your password' onChange={(e) => setAuthState({ ...authState, password: e.target.value })} />
            </div>
            <div className='mt-5'>
              <Label htmlFor='cpassword'>Confirm Password</Label>
              <Input type='password' id='cpassword' placeholder='Enter confirm password' onChange={(e) => setAuthState({ ...authState, password_confirmation: e.target.value })} />
            </div>
            <div className='mt-5' >
              <Button type='submit' variant={'ghost'} className='w-full bg-primary' >Register</Button>
            </div>
          </form>
          <div className='mt-5'>
            <span>Already have an account ?</span>
            <Link href="/login" className='text-orange-400 font-bold ml-2' >Login</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register