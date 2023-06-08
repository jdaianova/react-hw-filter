function Portfolio({arrProjects}) {

    return (
        <div className="Gallery">
            {arrProjects.map((el, id) => {
                return (
                    <div key={id}>
                        <img src={el.img}></img>
                    </div>
                )
            })}
        </div>
    )
}

export default Portfolio;