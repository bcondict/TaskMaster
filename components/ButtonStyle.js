import { IconButton } from "@chakra-ui/react";
import styled from "@emotion/styled";

export const AddButton = styled(IconButton)`
  border-radius: 100px;
  position: fixed;
  bottom: 10%;
  right: 10%;
  icon: <AddTaskIcon fillColor={"#102C57"}/>;
  &:hover {
    background-color: red;
    icon: <AddTaskIcon fillColor={"#FFFFFF"}/>;
  }
`
  // onClick={onClic}
  // size={"xl"}
  // bg={"newBeige"}
  // icon={<AddTaskIcon fillColor={"#102C57"}/>}
  // borderRadius={"full"}
  // position={"fixed"}
  // bottom={"10%"}
  // right={"10%"}
