

export const ProjectsCard = (props) => {

    

    return (
        <div className="card" >
            <img
                src={`./assets/img/projects/screenshot-${props.github_repo}.png`}
                className="card-img-top"
                alt={`screenshot-${props.github_repo}`}
            />
            <div className="card-body">
                <h5 className="card-title">{props.languageEn ? props.title_en : props.title_es}</h5>
                <p className="card-text">
                    {props.languageEn ? props.desc_en : props.desc_es}
                </p>
                <p>
                    <b>{props.languageEn ? 'Tecnologies:' : 'Tecnologías:' }</b> {props.tools}
                </p>
                <a
                    href={props.page_preview === undefined ? `https://mrestebban.github.io/${props.github_repo}` : props.page_preview }
                    className="btn btn-primary"
                    target="_blank"
                >
                    Preview
                </a>
                <a
                    href={`https://github.com/MrEstebban/${props.github_repo}`}
                    className="btn btn-primary"
                    target="_blank"
                >Github Repo</a
                >
            </div>
        </div>
    )
}
