import { Flex } from "@chakra-ui/react";
import React, {useState} from "react";
import Divider from "../components/Divider"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Messages from "../components/Message"

const Chat = () => {
    const [messages, setMessages] = useState([
        {from: "computer", text: "Hi, My Name is GMChat."},
        {from: "me", text: "Hey there"},
        {from: "me", text: "Myself Huameng Lim"},
        {from: "computer", text: "Nice to meet you. You cna send me message and I'll reply you with same message."},
    ])

    const [inputMessage,SetInputMessage] = useState("";)
}