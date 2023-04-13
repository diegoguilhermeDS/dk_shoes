import Link from 'next/link'
import React from 'react'

export default function NotFound() {

  return (
    <>  
        <div className='mx-auto w-[32%] grid grid-cols-1 justify-items-center gap-2 mt-12 bg-white rounded-md p-2'>
            <h1 className='font-bold text-5xl'>404</h1>
            <h1 className='font-semibold text-2xl text-gray-700'>Ops!!! Parece que essa pagina não existe! :(</h1>
            <Link href="/" className="text-xl text-orange-500">Voltar</Link>
        </div>
    </>
  )
}
