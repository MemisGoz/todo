import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import Modal from './Modal';

function Additem() {
    const [open, setOpen] = useState(false);

    function modalOpen() {
        setOpen(true)
        console.log(open)
    }
    function modalClose() {
        setOpen(false)
        console.log(open)
    }
    

  return (
    <>
    <div className='py-4'>
        <button onClick={modalOpen} >
        <FontAwesomeIcon icon={faSquarePlus} size="3x" />
        </button>
    </div>
    <Modal isOpen={open} onClose={modalClose}>

    <h1>suck it</h1>
             
    </Modal>
    </>
  )
}

export default Additem