const SearchItem = ({search, setSearch}) => {
    return (
        <form className="searchForm" style={{margin:'20px'}}
        onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="search" style={{margin:"5px"}}>Search: </label>
            <input
                id="search"
                type="text"
                role="searchbox"
                placeholder="Search Items"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </form>
    )
}

export default SearchItem;