function ProjectList ({arrProjects}) {

    return (
        <div className="Gallery">
                {arrProjects.map((el, index) => {
                    return (
                        <div key={index}>
                            <img src={el.img}></img>
                        </div>
                    )
                })}
            </div>
    )
}

export default ProjectList;