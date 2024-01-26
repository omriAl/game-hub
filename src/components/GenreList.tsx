import {
  Image,
  HStack,
  List,
  ListItem,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGeners";
import getCroppedImageUrl from "../services/image-url";

interface GenreListProps {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectedGenre, selectedGenre }: GenreListProps) => {
  const { data, error, isLoading } = useGenre();
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data.map((genre) => {
          return (
            <ListItem key={genre.id} padding="5px">
              <HStack>
                <Image
                  boxSize="32px"
                  borderRadius={8}
                  objectFit="cover"
                  src={getCroppedImageUrl(genre.image_background)}
                />
                <Button
                  whiteSpace="normal"
                  textAlign="left"
                  onClick={() => onSelectedGenre(genre)}
                  variant="link"
                  fontSize="large"
                  fontWeight={
                    genre.id === selectedGenre?.id ? "bold" : "normal"
                  }
                >
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default GenreList;
