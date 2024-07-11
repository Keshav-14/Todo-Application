import { useState } from "react";
import "./styles.css"

const NewTodoForm = ({onSubmit}) => {
    const [newItem, setNewItem] = useState("");
    
    function handleClick(e) {
        e.preventDefault();
        if(newItem === "") return 
        
        onSubmit(newItem);

        setNewItem("");
    }

    return (
        <>
            <form onSubmit={handleClick} className='form-container'>
                <label>Enter Todo Task</label>
                <div className='add-items'>
                    <input 
                        value={newItem} 
                        onChange={e => setNewItem(e.target.value)}
                        type='text'
                        id='item'/>
                    <button onClick={handleClick}>Add</button>
                </div>
            </form>
        </>
    );
};

export default NewTodoForm;