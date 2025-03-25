import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex'>
        <div><img src="https://storage.googleapis.com/gweb-workspace-assets/uploads/7uffzv9dk4sn-7kAnuMn2JYM8SouH9sUO1Y-5decaa2561233114d97a43fceaa78f4f-Docs_Full_Logo.svg" alt="not show" />

          <p className='text-5xl mt-4 ml-14 font-bold' >online</p>
          <p className='text-5xl mt-3 ml-14 font-bold'>collaborative</p>
          <p className='text-5xl mt-3 ml-14 font-bold'>Documents</p>
          <p className='mt-3 '>AI-powered documents to help you and your team create and </p>
          <p>   collaborate on content.</p>
          

          <button type="button" class="focus:outline-none text-white ml-24 mt-10  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">SignUp</button>
        </div>



        <div className=' '>
          <img src="https://lh3.googleusercontent.com/Z46v0WUwJTOMu4_KY4Z46AFSfo5C4z3UdTMOsbHKDI4tRRsK3fElJVKzmUapYydds5tifA-XXelhBaNtI0x9Un4DnyN2VPlu_nQv8A=e365-pa-nu-rw-w1416" className='h-110' alt="" />
        </div>
      </div>
          














    </>
  )
}

export default App
