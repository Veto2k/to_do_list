const Footer = ({length}) => {
    return (
        <footer style={{marginTop:"35px"}}>
            <p>{length} list {length === 1 ? "item" : "items"}</p>
        </footer>
    );
}

export default Footer