import React from "react";
import "../../Pages/dashboard/dash-style.css";

const ActivityCard = () => {
  return (
    <div className="activity-card">
      <div className="Activities">Activities</div>
      <div className="activity-date-range">May - June 2021</div>
      <div className="activity-eclipse-1"></div>
      <div className="activity-guest">Guest</div>
      <div className="activity-eclipse-2"></div>
      <div className="activity-user">User</div>
      <div className="activity-chart">
        <div className="activity-group-8">
          <div className="activity-group-8-500">500</div>
          <div className="activity-group-8-500-line"></div>
        </div>
        <div className="activity-group-9">
          <div className="activity-group-9-400">400</div>
          <div className="activity-group-9-400-line"></div>
        </div>
        <div className="activity-group-10">
          <div className="activity-group-10-300">300</div>
          <div className="activity-group-10-300-line"></div>
        </div>
        <div className="activity-group-11">
          <div className="activity-group-11-200">200</div>
          <div className="activity-group-11-200-line"></div>
        </div>
        <div className="activity-group-12">
          <div className="activity-group-12-100">100</div>
          <div className="activity-group-12-100-line"></div>
        </div>
        <div className="activity-group-13">
          <div className="activity-group-13-0">0</div>
          <div className="activity-group-13-0-line"></div>
        </div>
      </div>
      <div className="bar_1_1"></div>
      <div className="bar_1_2"></div>
      <div className="bar_2_1"></div>
      <div className="bar_2_2"></div>
      <div className="bar_3_1"></div>
      <div className="bar_3_2"></div>
      <div className="bar_4_1"></div>
      <div className="bar_4_2"></div>
      <div className="chart_weeks">
        <div className="week-1">Week 1</div>
        <div className="week-2">Week 2</div>
        <div className="week-3">Week 3</div>
        <div className="week-4">Week 4</div>
      </div>
    </div>
  );
};

export default ActivityCard;
