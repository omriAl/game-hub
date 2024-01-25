import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";

interface GameCardSkeletonProps {
  isLoading: boolean;
}
const GameCardSkeleton = () => {
  return (
    <Card>
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
