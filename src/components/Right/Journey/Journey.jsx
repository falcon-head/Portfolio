import React from "react";
import { Card } from "antd";
import "./Journey.scss";

const Journey = () => {
  return (
    <Card className="journey-card-body">
      <div className="timeline">
        <ul className="timeline-ul">
          <li className="timeline-li">
            <div className="timeline-content">
              <span className="badge badge-pill timeline-badge">2016-2019</span>
              <h4 className="timeline-heading">Dell Technologies</h4>
              <h6 className="timeline-subheading">Business Analyst</h6>
              <p className="timeline-desc">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
                laboriosam voluptatum sapiente harum ad fuga tenetur eaque.
                Error in officia explicabo dicta, quia expedita culpa autem
                cupiditate iure sit iste!
              </p>
            </div>
          </li>
          <li className="timeline-li">
            <div className="timeline-content">
              <span className="badge badge-pill timeline-badge">2016-2019</span>
              <h4 className="timeline-heading">Testing</h4>
              <h6 className="timeline-subheading">Business Analyst</h6>
              <p className="timeline-desc">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
                laboriosam voluptatum sapiente harum ad fuga tenetur eaque.
                Error in officia explicabo dicta, quia expedita culpa autem
                cupiditate iure sit iste!
              </p>
            </div>
          </li>
        </ul>
      </div>
    </Card>
  );
};

export default Journey;
