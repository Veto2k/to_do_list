import { useRef } from "react";

const AddItem = ({newItem , setNewItem , handleSubmit }) => {

    const inputRef = useRef();

    return (
        <form className="addForm" onSubmit={handleSubmit}
        style={{margin:"20px"}}>
            <label htmlFor="addItem" style={{margin:"5px"}}>Add Item:</label>
            <input
                autoFocus
                ref={inputRef}
                id = 'addItem'
                type="text"
                placeholder="Add Items"
                required
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
            />
            <button onClick={() => inputRef.current.focus()} type="submit">
                -+-
            </button>
        </form>
    );
}

export default AddItem;