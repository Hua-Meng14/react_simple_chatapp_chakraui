import React from "react";
import { Flex, Avatar, AvatarBadge} from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex w="100%">
      <Avatar size="lg" name="Huameng Lim" src="https://lh3.googleusercontent.com/a/AGNmyxYtc_o9veUk5W8V67OX3nXbh_CfYjarD93Htl8FFQ=s288">
        <AvatarBadge boxSize="1.25em" bg="green.500" />
      </Avatar>
    </Flex>
  );
};

export default Header;
