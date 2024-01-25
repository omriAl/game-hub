import { Badge } from "@chakra-ui/react";
import React from "react";

interface CriticScoreProps {
  score: number;
}

const CriticScore = ({ score }: CriticScoreProps) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge colorScheme={color} borderRadius="4px" marginX={2}>
      {score}
    </Badge>
  );
};

export default CriticScore;
