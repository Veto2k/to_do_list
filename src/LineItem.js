const LineItem = ({item , handleCheck , handleDelete}) => {
    return (
        <li className='items' style={{margin:"7px"}}>
            <input
            onChange={() => handleCheck(item.id)}
            type="checkbox"
            checked={item.checked}
            />
            <label
            style={(item.checked)?{textDecoration: 'line-through'}:{textDecoration: 'none'}}
            onDoubleClick={() => handleCheck(item.id)}
            >{item.item}</label>
            <button
            onClick={() => handleDelete(item.id)}
            >delete</button>
        </li>
    )
}

export default LineItem;