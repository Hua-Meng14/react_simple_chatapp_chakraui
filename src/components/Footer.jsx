import React from "react";
import { Flex, Input, Button } from "@chakra-ui/react";

const Footer = (inputMessage, setInputMessage, handleSendMessage) => {
  return (
    <Flex w="100%" mt="5">
      <Input
        placeholder="Type soemthing..."
        border="none"
        borderRadius="none"
        _focus={{ border: "1px solid black" }}
        onKeyPress={(e) => {
          if ((e.key = "Enter")) {
            handleSendMessage();
          }
        }}
        value={inputMessage}
        onChange={(e) => setInputMessage(e.target.value)}
      />
      <Button
        bg="black"
        color="white"
        borderRadius="none"
        hover={{
          bg: "while",
          color: "black",
          border: "1px solid black",
        }}
        disabled={inputMessage.trim().length <= 0}
        onClick={handleSendMessage}
      >
        Send
      </Button>
    </Flex>
  );
};

export default Footer;