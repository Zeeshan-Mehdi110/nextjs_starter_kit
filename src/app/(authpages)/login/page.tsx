"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Image from 'next/image'
import Link from "next/link"
import React, { useState } from "react"
const Login = () => {
  const [authState, setAuthState] = useState<AuthStateType>({
    email: "",
    password: "",
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
          <h1 className='text-2xl font-bold pt-5'>Login</h1>
          <form action="" onSubmit={submit}>
            <div className='mt-5'>
              <Label htmlFor='email'>Email</Label>
              <Input type='email' id='email' placeholder='Enter your email' onChange={(e) => setAuthState({ ...authState, email: e.target.value })} />
            </div>
            <div className='mt-5'>
              <Label htmlFor='password'>Password</Label>
              <Input type='password' id='password' placeholder='Enter your password' onChange={(e) => setAuthState({ ...authState, password: e.target.value })} />
            </div>
            <div className='mt-5' >
              <Button type='submit' variant={'ghost'} className='w-full' >Login</Button>
            </div>
          </form>
          <div className='mt-5'>
            <span>Don't have account ?</span>
            <Link href="/register" className='text-orange-400 font-bold ml-2' >Register</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login