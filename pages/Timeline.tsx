import * as React from "react";
import Header from "../components/Header/Header";
import TimelineComp from "../components/Timeline/TimelineComp";

export interface TimelineProps {}

const Timeline: React.SFC<TimelineProps> = () => {
  return (
    <>
      <Header />
      <TimelineComp />
    </>
  );
};

export default Timeline;
