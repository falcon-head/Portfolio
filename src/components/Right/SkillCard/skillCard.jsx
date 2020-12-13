import React from "react";
import "./SkillCard.scss";
import {Card} from "antd"

const SkillCard = (prop) => {
  return (
    <div className="col-md-6">
      <div className="s-card-div" style={{ transform: prop.skill.card_style }}>
        <a href={prop.skill.link} className='skill-a' target="_blank" rel="noopener noreferrer">
          <Card bordered={false} className="s-card-body">
            <div className="s-icon">
              {/* <FontAwesomeIcon icon={prop.skill.logo} /> */}
              <i className={prop.skill.logo}></i>
            </div>
            <h5 className="s-heading">{prop.skill.skill_name}</h5>
            <p className="s-desc">{prop.skill.desc}</p>

            <span class="badge badge-pill">Testing</span>
          </Card>
        </a>
      </div>
    </div>
  );
};

export default SkillCard;
