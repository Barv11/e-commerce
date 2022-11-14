import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ChatBot from "react-simple-chatbot";
import s from "./PcChatBot.module.css";
import Help from "./Help/Help";

export default function PcChatBot() {
  const navigate = useNavigate();
  const [chat, setChat] = useState(false);

  const handlerTrigger = ({ value, steps }) => {
    console.log({ steps, value });
    navigate(`/${value}`);
    return "end-chat";
  };

  const steps = [
    {
      id: "1",
      message: "Hola, ¿Necesitas ayuda?",
      trigger: "2",
    },
    {
      id: "2",
      options: [
        { value: "yes", label: "Sí", trigger: "message" },
        { value: "no", label: "No", trigger: "end-chat" },
      ],
    },
    {
      id: "message",
      message:
        "CompuTech es una empresa que se dedica a vender componentes de computadoras.",
      trigger: "message-2",
    },
    {
      id: "message-2",
      message:
        "También podrás armar una computadora según para lo que necesites 😁",
      trigger: "question",
    },
    {
      id: "question",
      message: "¿Qué te gustaría realizar?",
      trigger: "3",
    },
    {
      id: "3",
      options: [
        {
          value: "products",
          label: "Ver Productos",
          trigger: handlerTrigger,
        },
        {
          value: "armado",
          label: "Armar una pc",
          trigger: handlerTrigger,
        },
        {
          value: "profile",
          label: "Visitar mi perfil",
          trigger: handlerTrigger,
        },
        {
          value: "component",
          label: "Soporte Técnico",
          trigger: "4",
        },
      ],
    },
    {
      id: "products",
      message: "Yendo a productos",
      trigger: "end-chat",
    },
    {
      id: "pc",
      message: "Yendo a armar pc",
      trigger: "end-chat",
    },
    {
      id: "profile",
      message: "Yendo a perfil",
      trigger: "end-chat",
    },
    {
      id: "4",
      component: <Help />,
      trigger: "5",
    },
    {
      id: "5",
      message: "¿Te gustaría realizar otra acción?",
      trigger: "6",
    },
    {
      id: "6",
      options: [
        { value: "yes", label: "Sí", trigger: "3" },
        { value: "no", label: "No", trigger: "end-chat" },
      ],
    },
    {
      id: "end-chat",
      message: "Gracias por elegirnos💜.",
      end: true,
    },
  ];

  // const handleEnd = ({ steps, values }) => {
  //   console.log({ steps, values });
  //   navigate(`/${values[1]}`)
  // };

  return (
    // <div className={s.container}>
    //   <div className={chat ? s.cardChatOpen : s.cardChatClosed}>
    //     <ChatBot
    //     headerTitle={'Gamer Tech - Chat'}
    //       bubbleOptionStyle={{ padding: "12px 16px" }}
    //       // bubbleStyle={{ background: "red" }}
    //       steps={steps}
    //       enableMobileAutoFocus={true}
    //       enableSmoothScroll={true}
    //     />
    //     <button onClick={() => setChat(false)} className={s.closed}>
    //       <i class="uil uil-times"></i>
    //     </button>
    //   </div>

    //   <button onClick={() => setChat(true)} className={chat ? s.open2 : s.open}>
    //     <i class="uil uil-comment-alt"></i>
    //   </button>
    // </div>

    <ChatBot
      headerTitle={"Gamer Tech - Chat"}
      bubbleOptionStyle={{ padding: "12px 16px" }}
      floatingStyle={{ backgroundColor: "#3a1a3d" }}
      steps={steps}
      userDelay={500}
      enableMobileAutoFocus={true}
      floating={true}
      enableSmoothScroll={true}
    />
  );
}
