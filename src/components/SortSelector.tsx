import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "../hooks/usePlatform";

interface SortSelectorProps {
  setSortSelector: (selector: string) => void;
  selectedSelector: string | null;
}

const SortSelector = ({
  setSortSelector,
  selectedSelector,
}: SortSelectorProps) => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {`Order By ${selectedSelector && ":" + { selectedSelector }}`}
      </MenuButton>
      <MenuList>
        <MenuItem>Relevance</MenuItem>
        <MenuItem>Date Added</MenuItem>
        <MenuItem>Name</MenuItem>
        <MenuItem>Release date</MenuItem>
        <MenuItem>Popularity</MenuItem>
        <MenuItem>Avergage rating</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
