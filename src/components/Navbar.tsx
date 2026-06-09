import {useState, useEffect} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {navItems, personal} from "../data/portfolio";
import { useScrollSpy } from "../hooks/useScrollSpy";



export default function Navbar () {

    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);


    // tracker for mobile menu
    const activeSection = useScrollSpy([
        "home", "about", "skills", 'experience', "projects", "contact",
    ])



    //runs after render. adds event listener for scroll.
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        };
        window.addEventListener("scroll", handleScroll)

        //cleanup function.
        return() => window.removeEventListener("scroll", handleScroll);
    },[])

    
    //scroll to section function.
    const scrollToSection = (href: string) => {
    const id = href.replace("#", "")
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({behavior: "smooth"})
        }
    setMenuOpen(false);
    }

    

    return (
        <motion.nav 
        initial={{y: -100, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        transition={{duration: 0.6, ease: "easeOut"}}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration -300 ${scrolled ? "bg-surface/80 backdrop-blur-xl border-b border-surface-border" : "bg-transparent"}`}
        >

        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">


        {/**logo / */}
        <motion.a 
        href="#home"
        onClick={(e) => { e.preventDefault(); scrollToSection("#home"); }}
        className="flex items-center gap-2 group"
        whileHover={{scale: 1.02}}
        >
            <span className="w-8 h-8 rounded-lg bg-green-500 flex items-center justify-center text-black font-display font-bold text-sm">
                R
            </span>
            <span className="font-display font-semibold text-white text-sm tracking-wide" >
                {personal.nickname}
                <span className="text-green-400">.</span>
            </span>
        </motion.a>

        {/**desktop nav links */}
        <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item, i) => {
                const sectionId = item.href.replace("#","");
                const isActive = activeSection === sectionId;

                return (
                    <motion.li
                    key={item.href}
                    initial={{opacity: 0, y: -10}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: 0.1 * i, duration: 0.4}}
                    >
                        <button
                        onClick={() => scrollToSection(item.href)}
                        className={`nav-link ${isActive ? "active" : ""}`}>
                            {item.label}
                        </button>
                    </motion.li>
                )
            })}

        </ul>


        {/** cta button */}
        <motion.button
        onClick={() => scrollToSection('#contact')}
        className="hidden md:flex btn-primary text-xs py-2 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        whileHover={{ scale: 1.05}}
        whileTap={{ scale: 0.95 }}
        >
            Hire Me
        </motion.button>


            <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 group"
            aria-label="Toggle Menu"
            >
                {/**Three lines that animate into an X when open */}

                <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}/>
                <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
        </div>       

        <AnimatePresence>
            {menuOpen && (
                <motion.div
                initial={{ opacity: 0, height: 0}}
                animate={{ opacity: 1, height: "auto"}}
                exit={{ opacity: 0, height: 0}}
                transition={{duration: 0.3, ease: "easeInOut"}}
                className="md:hidden overflow-hidden bg-surface-card border-b border-surface-border"
                >

                    <ul className="px-6 py-4 flex flex-col gap-4">
                        {navItems.map((item) => {
                            const sectionId = item.href.replace("#", "")
                            const isActive = activeSection === sectionId

                            return (
                                <li key={item.href}>
                                    <button onClick={() => scrollToSection(item.href)}
                                    className={`nav-link text-bas ${isActive ? "active" : ""}`}    
                                    >
                                        {item.label}
                                    </button>
                                </li>
                            )
                        })}

                                <li>
                                    <button
                                    onClick={() => scrollToSection('#contact')}
                                    className="btn-primary w-full justify-center mt-2"
                                    >
                                        Hire Me
                                    </button>
                                </li>
                    </ul>
                </motion.div>
            )}
        </AnimatePresence>

        </motion.nav>
    )
}