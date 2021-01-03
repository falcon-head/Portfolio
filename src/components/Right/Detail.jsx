import React from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
import SkillCard from "./SkillCard/skillCard"
import "./Details.scss"
import Journey from "./Journey/Journey";

const Detail = (props) => {
  let renderComp;
  let renderSkill;
  let renderResume;
  
  if (props.project != null) {
    renderComp = props.project.map((project) => (
      <ProjectCard key={project.name} project={project} />
    ));
  } else {
    renderComp = <div> Loading </div>;
  }

  if (props.skill != null) {
    renderSkill = props.skill.map((skill) => (
      <SkillCard key={skill.skill_name} skill={skill} />
    ));
  } else {
    renderSkill = <div> Loading </div>;
  }

  if (props.resume != null) {
    renderResume = props.resume.map((resume) => (
      <Journey key={resume._id} resume={resume} />
    ));
  } else {
    renderResume = <div> Loading </div>;
  }

  return (
    <div className="detail" id="detail">
      <div id="project-section"className="container">
        <div className="row">
          <div className="col">
            <div id="project" className="project-card-holder">{renderComp}</div>
          </div>
        </div>
      </div>
      <div id="skill-section"className="container skill-top">
        <div className="row gx-2 gy-2 s-body">
            {renderSkill}
        </div>
      </div>
      <div id="resume-section" className="container journey-top">
        <div className="row">
          <div className="col">
            {renderResume}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
