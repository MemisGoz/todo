import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import Modal from './Modal';

function Additem({ onAddItem }) {
    const [open, setOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');

    function handleAddItem() {
        onAddItem(inputValue);
        setInputValue('');
        setOpen(false);
    }

    

    return (
        <>
            <div className='py-4'>
                <button onClick={() => setOpen(true)} >
                    <FontAwesomeIcon icon={faSquarePlus} size="3x" />
                </button>
            </div>
            <Modal isOpen={open} onClose={() => setOpen(false)}>
                <h1>Add To Do</h1>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button onClick={handleAddItem}>Add</button>
            </Modal>
        </>
    )
}

export default Additem