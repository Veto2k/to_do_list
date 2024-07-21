const Header = ({title}) => {
    return (
        <header style={{margin: "25px"}}>
            <h1>{title}</h1>
        </header>
    );
}

Header.defaultProps = {
    title: 'Default Title'
}

export default Header;