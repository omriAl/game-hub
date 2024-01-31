import { Text, Heading, Spinner } from "@chakra-ui/react";
import useGameDetailsStore from "../games/gameDetailsStore";
import useGameDetails from "../hooks/useGameDetails";

const GameDetailPage = () => {
  const gameId = useGameDetailsStore((s) => s.game.id);
  if (!gameId) {
    return <Text>Error</Text>;
  }
  const { data: game, isLoading, error } = useGameDetails(gameId);
  if (isLoading) return <Spinner />;
  if (error || !game) throw error;
  return (
    <>
      <Heading>{game.name}</Heading>
      <Text>{game.description_raw}</Text>
    </>
  );
};

export default GameDetailPage;
