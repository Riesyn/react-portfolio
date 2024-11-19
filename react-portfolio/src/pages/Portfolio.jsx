import Project from '../components/Project';

const Portfolio = () => {
    const projects = [
        {
            image: 'project1.jpg',
            title: 'Project One',
            appLink: 'https://liveapp.com',
            repoLink: 'https://github.com/repo',
        },
        {
            image: 'project2.jpg',
            title: 'Project Two',
            appLink: 'https://liveapp.com',
            repoLink: 'https://github.com/repo',
        },
    ];

    return (
        <div className="container py-5">
            <h2>Portfolio</h2>
            <div className="row">
                {projects.map((project, idx) => (
                    <Project key={idx} {...project} />
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
