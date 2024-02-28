import React from 'react'
import Additem from './Additem'
function Todo() {
  return (
    <>
        <div className='flex justify-center h-screen w-full'>
            <div className='grid grid-cols-3 gap-4 w-[80%] mt-24 '>
                {/*to do*/}
                <div className='flex flex-col items-center  bg-slate-500'>
                    <h2 className='py-12'>To Do</h2>
                    <div className='py-4'>
                        items
                    </div>
                    <Additem/>
                </div>
                {/*doing*/}
                <div className='flex justify-center bg-slate-500'>
                    <h2>Doing</h2>
                </div>
                {/*done*/}
                <div className='flex justify-center bg-slate-500'>
                    <h2>Done</h2>
                </div>
            </div>
        </div>
    
    
    
    </>
  )
}

export default Todo