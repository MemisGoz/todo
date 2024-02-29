import { useState, useEffect } from 'react';
import Additem from './Additem'
import {DndContext} from '@dnd-kit/core';

import {Draggable} from './Draggable';
import {Droppable} from './Droppable';
function Todo() {
    const [items, setItems] = useState([]);
    
    const handleAddItem = (newItem) => {
        setItems(prevItems => [...prevItems, newItem]);
    };

    useEffect(() => {
        const storedItems = localStorage.getItem('item');
        if (storedItems) {
            setItems(JSON.parse(storedItems));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('item', JSON.stringify(items));
    }, [items]);

  return (
    <>
        <div className='flex justify-center h-screen w-full'>
            <div className='grid grid-cols-3 gap-4 w-[80%] mt-24 '>
            <DndContext>
                {/* to do */}
                <div className='flex flex-col items-center bg-slate-500'>
                        <h2 className='py-12'>To Do</h2>
                        <div className='py-4 w-[80%] flex flex-col gap-4'>
                            
                            {items.map((item, index) => (
                                <div className='text-[20px] py-4 bg-white w-full' key={index}>{item}</div>
                            ))}
                        </div>
                    <Additem onAddItem={handleAddItem}/>
                </div>

                {/*doing*/}
                <div className='flex justify-center bg-slate-500'>
                    <h2>Doing</h2>
                </div>

                {/*done*/}
                <div className='flex justify-center bg-slate-500'>
                    <h2>Done</h2>
                </div>
                
                </DndContext>
            </div>
        </div>
    
    
    
    </>
  )
}

export default Todo