import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";
import usePlatforms, { Platform } from "../hooks/usePlatforms";
import useGameStore from "../games/store";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  const selectedPlatformId = useGameStore((s) => s.gameQuery.platformId);
  const addPlatformId = useGameStore((s) => s.addPlatformId);
  const selectedPlatform = usePlatform(selectedPlatformId);
  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => addPlatformId(platform.id)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
