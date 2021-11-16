import React from "react";

import { FaWineGlassAlt } from "react-icons/fa";
import { IoIosHelpCircle } from "react-icons/io";
import { IoPizza } from "react-icons/io5";
import { GiMeat } from "react-icons/gi";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { RiLineChartFill, RiHome7Fill } from "react-icons/ri";
import { BiCustomize, BiCog, BiLogOut } from "react-icons/bi";

export const SidebarData = [
  {
    title: "Home",
    path: "/home",
    icon: <RiHome7Fill />,
  },
  {
    title: "Produtos",
    path: "/produtos",
    icon: <BiCustomize />,
    iconClosed: <MdKeyboardArrowDown />,
    iconOpened: <MdKeyboardArrowUp />,
    subNav: [
      {
        title: "Pizzas",
        path: "/produtos/pizzas",
      },
      {
        title: "Açougue",
        path: "/produtos/acougue",
      },
      {
        title: "Adega",
        path: "/produtos/adega",
      },
      {
        title: "Config Produtos",
        path: "/produtos/configProd",
      },
    ],
  },
  {
    title: "Pizzas",
    path: "/pizzas",
    icon: <IoPizza />,
    iconClosed: <MdKeyboardArrowDown />,
    iconOpened: <MdKeyboardArrowUp />,
    subNav: [
      {
        title: "Categorias",
        path: "/pizzas/categorias",
      },
      {
        title: "Sabores",
        path: "/pizzas/sabores",
      },
      {
        title: "Ingredientes",
        path: "/pizzas/ingredientes",
      },
      {
        title: "Totens",
        path: "/pizzas/totens",
      },
    ],
  },
  {
    title: "Açougue",
    path: "/acougue",
    icon: <GiMeat />,
    iconClosed: <MdKeyboardArrowDown />,
    iconOpened: <MdKeyboardArrowUp />,
    subNav: [
      {
        title: "Produtos",
        path: "/acougue/produtos",
      },
      {
        title: "Tabela de Preços",
        path: "/acougue/tabelaprecos",
      },
      {
        title: "Paineis/Telas",
        path: "/acougue/paineis&telas",
      },
    ],
  },
  {
    title: "Adega",
    path: "/adega",
    icon: <FaWineGlassAlt />,
    iconClosed: <MdKeyboardArrowDown />,
    iconOpened: <MdKeyboardArrowUp />,
    subNav: [
      {
        title: "Mapa Adega",
        path: "/adega/mapaAdega",
      },
      {
        title: "Totens",
        path: "/adega/totens",
      },
    ],
  },
  {
    title: "Relatórios",
    path: "/relatorios",
    icon: <RiLineChartFill />,
  },
  {
    title: "F.A.Q",
    path: "/help",
    icon: <IoIosHelpCircle />,
  },
  {
    title: "Configurações",
    path: "/config",
    icon: <BiCog />,
    iconClosed: <MdKeyboardArrowDown />,
    iconOpened: <MdKeyboardArrowUp />,
    subNav: [
      {
        title: "Sistema",
        path: "/config/sistema",
      },
      {
        title: "Usuários",
        path: "/config/usuarios",
      },
      {
        title: "Lojas",
        path: "/config/lojas",
      },
    ],
  },
];
