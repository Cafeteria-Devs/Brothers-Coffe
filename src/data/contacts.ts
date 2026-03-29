import React from "react";
import { Contacts as ContactChannel } from "../types/Contacts";

const contactData: ContactChannel[] = [
  {
    id: 1,
    title: "Instagram",
    description: React.createElement(React.Fragment, null, "@grouppdev", React.createElement("br"), "Feche projetos conosco"),
    icon: "/essenciais/logo_insta_darkcoffee.png",
    link: "https://www.instagram.com/grouppdev?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    alt: "Instagram",
  },
  {
    id: 2,
    title: "Telefone",
    description: React.createElement(React.Fragment, null, "(81) 99999-9999", React.createElement("br"), "Seg a Sex • 8h às 18h"),
    icon: "/essenciais/fone_darkcoffee.png",
    link: "https://criarmeulink.com.br/u/1769349921",
    alt: "Telefone",
  },
  {
    id: 3,
    title: "Email",
    description: React.createElement(React.Fragment, null, "contato@brotherscoffee.com", React.createElement("br"), "Resposta em até 24h"),
    icon: "/essenciais/email_darkcoffee.png",
    link: "mailto:contato@brotherscoffee.com",
    alt: "Email",
  },
];

export default contactData;

