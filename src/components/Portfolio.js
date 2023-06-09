import { useState } from 'react';
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';

function Portfolio({ projects }) {
    const [arrProjects, SetArrProjects] = useState(projects);

    const onSelectFilter = (filter) => {
        const newArrProjects = projects.filter(el => el.category === filter || filter === "All");
        SetArrProjects(newArrProjects);
    };

    return (
        <div className="Portfolio">
            <Toolbar
                filters={["All", "Websites", "Flayers", "Business Cards"]}
                selected="All"
                onSelectFilter={onSelectFilter} />
            <ProjectList arrProjects={arrProjects} />
        </div>
    )
}

export default Portfolio;