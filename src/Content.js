import ItemList from "./ItemList";

const Content = ({items ,handleCheck , handleDelete}) => {
    return (
        <main>
            {items.length ?(
                <ItemList
                items ={items}
                handleCheck = {handleCheck}
                handleDelete = {handleDelete}
                />
                ):(
                    <h1>Empty</h1>
                )}
        </main>
    );
}

export default Content;