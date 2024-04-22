import { Imprima } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";

// framer motion
import { motion } from "framer-motion";

const links = [
    {path: '/', name: 'home'},
    {path: '/projects', name: 'Past Project'},
    {path: '/contact', name: 'contact me'},
    {path: '/resume', name: "Resume"}
]
const Nav = ({containerStyles, linkStyles, underlineStyles}) => {
    const path = usePathname();
  return (
    <nav className={`${containerStyles} `}>
        {links.map((link, index)=>{
            return <Link href ={link.path} key={index} 
            className = {`capitalize ${linkStyles}`}
            >
                {link.path === path && (
                    <motion.span intitial={{y: '-100%'}} 
                    animate={{y:0}}
                    transition={{type: 'tween'}}
                    layoutId='underline'
                    className={`${underlineStyles}`}
                    />
                )}
                 {link.name}</Link>
        })} </nav>
  );
};

export default Nav