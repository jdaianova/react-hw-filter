const filters = ["All", "Websites", "Flayers", "Business Cards"];

function Toolbar({onSelectFilter}) {
    return (
        <div className="Toolbar">
            {filters.map((el, id) => {
                return <button key={id} onClick={() => {
                    onSelectFilter(el);
                }}>{el}</button>
            })}
        </div>
    )
}

export default Toolbar;