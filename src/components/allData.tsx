

import { FaCreativeCommonsSamplingPlus, FaDochub, FaHome } from "react-icons/fa"
import { FaBridgeLock, FaChartSimple } from "react-icons/fa6"
import { HiOutlineMenuAlt4 } from "react-icons/hi"
import { IoCreate } from "react-icons/io5"
import { MdFormatTextdirectionLToR } from "react-icons/md"
import { SiLucide } from "react-icons/si"
import { VscCircleLargeFilled } from "react-icons/vsc"
import { TbRadiusTopRight } from "react-icons/tb";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { CgMenuGridO } from "react-icons/cg";
import { LuRectangleHorizontal } from "react-icons/lu";


export const navLinks = [
        {
            id:1,
            title:"Home",
            icon: <FaHome/>
        },
        {
            id:2,
            title:"Docs",
            icon: <FaDochub/>
        },
        {
            id:3,
            title:"Components",
            icon: <FaCreativeCommonsSamplingPlus/>
        },
        {
            id:4,
            title:"Blocks",
            icon: <FaBridgeLock/>
        },
        {
            id:5,
            title:"Charts",
            icon: <FaChartSimple/>
        },
        {
            id:6,
            title:"Directory",
            icon: <MdFormatTextdirectionLToR/>
        },
        {
            id:7,
            title:"Create",
            icon: <IoCreate/>
        }
    ]

export const sideBarData = [
    {
        id:1,
        paraTitle:"Style",
        title:"Nova",
        icon:<LuRectangleHorizontal />
    },
    {
        id:2,
        paraTitle:"Base Color",
        title:"Neutral",
        icon:<VscCircleLargeFilled />
    },
    {
        id:3,
        paraTitle:"Theme",
        title:"Neutral",
        icon:<VscCircleLargeFilled />
    },
    {
        id:4,
        paraTitle:"Chart Color",
        title:"Neutral",
        icon:<VscCircleLargeFilled />
    },
    
    {
        id:5,
        paraTitle:"Heading",
        title:"Inter",
        icon: "Aa"
    },
    {
        id:6,
        paraTitle:"Font",
        title:"Inter",
        icon: "Aa"
    },
    {
        id:7,
        paraTitle:"Icon Library",
        title:"Lucide",
        icon: <SiLucide/>
    },
    {
        id:8,
        paraTitle:"Radius",
        title:"Default",
        icon: <TbRadiusTopRight/>
    },
    {
        id:9,
        paraTitle:"Menu",
        title:"Default/Solid",
        icon: <HiOutlineMenuAlt1/>
    },
    {
        id:10,
        paraTitle:"Menu Accent",
        title:"Subtle",
        icon: <CgMenuGridO/>
    },
    
    
]