import React from "react";
import { StyledScheduleTitle, StyledStage } from "./styled";
import { Week } from "./Week/index";
import { checkIsPlayoffStage } from "../../../utils/utils";

const Stage = React.memo(({ stage, selectedTeams, setSelectedGameId }) => {
  const isPlayoffStage = checkIsPlayoffStage(stage.name);
  return (
    <StyledStage>
      <StyledScheduleTitle>{stage.name}</StyledScheduleTitle>
      {stage.weeks.map(week => (
        <Week
          key={week.id}
          week={week}
          isPlayoffStage={isPlayoffStage}
          selectedTeams={selectedTeams}
          setSelectedGameId={setSelectedGameId}
        />
      ))}
    </StyledStage>
  );
});

export { Stage };
