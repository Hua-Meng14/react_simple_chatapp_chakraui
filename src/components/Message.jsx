import React, { useRef, useEffect } from "react";
import { Avatar, Flex, Text } from "@chakra-ui/react";

const Messages = ({ messages }) => {
  const AlwaysScrollToBottom = () => {
    const elemenRef = useRef();
    useEffect(() => elemenRef.current.scrollToVuew());
    return <div ref={elemenRef} />;
  };

  return (
    <Flex w="100%" h="80%" overFolowY="scroll" flexDirection="column" p="3">
      {messages.map((item, index) => {
        if (item.from === "me") {
          return (
            <Flex key={index} w="100%" justify="flex-end">
              <Flex
                bg="black"
                color="white"
                minW="100px"
                maxW="350px"
                my="1"
                p="3"
              >
                <Text>{item.text}</Text>
              </Flex>
            </Flex>
          );
        } else {
          return (
            <Flex key={index} w="100%">
              <Avatar
                name="Computer"
                src="https://lh3.googleusercontent.com/a/AGNmyxYtc_o9veUk5W8V67OX3nXbh_CfYjarD93Htl8FFQ=s288"
                bg="blue.300"
              ></Avatar>
              <Flex
                bg="gray.100"
                color="black"
                minW="100px"
                maxW="350px"
                myy="1"
                p="3"
              >
                <Text>{item.text}</Text>
              </Flex>
            </Flex>
          );
        }
      })}
      <AlwaysScrollToBottom />
    </Flex>
  );
};

export default Messages;
