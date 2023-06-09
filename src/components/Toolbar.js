
function Toolbar({filters, selected, onSelectFilter}) {
    const buttons = document.querySelectorAll('button');

    return (
        <div className="Toolbar">
            {filters.map((el, index) => {
                return <button key={index} onClick={(e) => {
                    buttons.forEach((btn) => {btn.classList.remove('Selected')});
                    onSelectFilter(el);
                    e.target.classList.add('Selected');
                }}>{el}</button>
            })}
        </div>
    )
}

export default Toolbar;