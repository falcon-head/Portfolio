import React from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
import SkillCard from "./SkillCard/SkillCard"
import "./Details.scss"
import Journey from "./Journey/Journey";

const Detail = (props) => {
  let renderComp;
  if (props.project != null) {
    renderComp = props.project.map((project) => (
      <ProjectCard key={project.name} project={project} />
    ));
  } else {
    renderComp = <div> Loading </div>;
  }

  let renderSkill;
  if (props.skill != null) {
    renderSkill = props.skill.map((skill) => (
      <SkillCard key={skill.skill_name} skill={skill} />
    ));
  } else {
    renderSkill = <div> Loading </div>;
  }

  return (
    <div className="detail" id="detail">
      <div className="container">
        <div className="row">
          <div className="col">
            <div id="project" className="project-card-holder">{renderComp}</div>
          </div>
        </div>
      </div>
      <div className="container skill-top">
        <div className="row gx-2 gy-2 s-body">
            {renderSkill}
        </div>
      </div>
      <div className="container journey-top">
        <div className="row">
          <div className="col">
            <Journey />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
