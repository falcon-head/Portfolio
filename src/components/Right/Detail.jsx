import React from "react";
import ProjectCard from "./ProjectCard/ProjectCard";

const Detail = (props) => {
  console.log(props)
  let renderComp;
  if (props.project != null) {
    renderComp = props.project.map((project) => (
      <ProjectCard key={project.name} project={project} />
    ));
  } else {
    renderComp = <div> Loading </div>;
  }

  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col">
                {renderComp}
                {renderComp}
            </div>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Detail;
