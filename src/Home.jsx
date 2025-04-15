import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Work from "./pages/Work";

const projects = [
  { id: 1, title: "G-DRAGON", video: "https://www.dropbox.com/scl/fi/fjbmzkbnymrsucek19f8j/featured_gdragon.mp4?rlkey=2od2gj3u1e14q43a4zm6lpo88&st=4eq1hik9&raw=1" },
  { id: 2, title: "PHISH", video: "https://www.dropbox.com/scl/fi/4cwumhbn7cu1n4nmzzc1a/featured_phish.mp4?rlkey=6iy3tr95huf9n741oiojwtfee&st=kei75uy3&raw=1" },
  { id: 3, title: "AURA INVALIDES", video: "https://www.dropbox.com/scl/fi/2rhn6dtpu3jv7h1wr4zfe/featured_invalides.mp4?rlkey=99c8b9c7d1vgpny4jolyb7age&st=gplwwxft&raw=1" },
  { id: 4, title: "SOISSON EN LUMIÈRES", video: "https://www.dropbox.com/scl/fi/wl4n68udhavhyyiyromc7/featured_soissons.mp4?rlkey=1ijxzjqme5tq7nm2ppjcbbe8l&st=uc75st0l&raw=1" },
];

function Home() {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-white text-[#252422] font-neuehaas">
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -30, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 px-8 md:px-08 py-4 bg-transparent text-[#252422] text-lg md:text-xl transition-colors duration-300 ${showNav ? 'bg-white text-[#252422]' : ''}`}
      >
        <div className="flex items-center justify-between w-full">
          <a href="/" className="text-lg font-black tracking-wide font-neuehaas">G_R</a>
          <div className="flex gap-x-10 text-sm md:text-base font-roboto-regular">
            <a href="/work" className="hover:text-[#17e013] hover:underline transition-all duration-300">WORK</a>
            <a href="#" className="hover:text-[#17e013] hover:underline transition-all duration-300">LAB</a>
            <a href="#" className="hover:text-[#17e013] hover:underline transition-all duration-300">ABOUT</a>
          </div>
        </div>
      </motion.nav>

      <section className="py-20 px-8 md:px-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-[50px] tracking-[0.05em] font-black leading-[1.1] md:leading-[.8] uppercase"
        >
          GUSTAVO RANGEL<br />
          <span className="block mt-4">MOTION DESIGN · NOTCH · 3D</span>
        </motion.h1>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 w-full">
        {projects.map((project) => (
          <div key={project.id} className="w-full">
            <div className="relative w-full aspect-video overflow-hidden group">
              <video
                src={project.video}
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover transition duration-500 group-hover:filter group-hover:saturate-50"
              />
              <div className="absolute inset-0 flex items-end justify-start opacity-0 group-hover:opacity-100 transition duration-500 p-6">
                <h2 className="text-white text-[8vw] md:text-[3.5vw] font-neuehaas font-black uppercase">
                  {project.title}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mt-0 bg-white text-[#252422] px-8 md:px-20 py-10 text-sm flex flex-col md:flex-row justify-between"
      >
        <div className="md:ml-4">
          <p className="mb-2 uppercase font-neuehaas font-black text-lg md:text-2xl">Contact</p>
          <p className="font-roboto">gustavo.perez.rangel@gmail.com</p>
          <p className="font-roboto">+1 513 776 73 17</p>
        </div>
        <div className="mt-6 md:mt-0 md:flex md:items-end md:mr-4">
          <div className="flex flex-row gap-6 font-roboto">
            <a href="https://x.com/gstvorangel/" target="_blank" rel="noopener noreferrer" className="hover:text-[#17e013] hover:underline transition-all duration-300">X</a>
            <a href="https://www.instagram.com/diewalkure/" target="_blank" rel="noopener noreferrer" className="hover:text-[#17e013] hover:underline transition-all duration-300">instagram</a>
            <a href="https://www.tiktok.com/@gstvorangel" target="_blank" rel="noopener noreferrer" className="hover:text-[#17e013] hover:underline transition-all duration-300">tiktok</a>
            <a href="https://www.youtube.com/@gustavo.rangel" target="_blank" rel="noopener noreferrer" className="hover:text-[#17e013] hover:underline transition-all duration-300">youtube</a>
            <a href="https://www.linkedin.com/in/gustavo-perez-rangel/" target="_blank" rel="noopener noreferrer" className="hover:text-[#17e013] hover:underline transition-all duration-300">linkedin</a>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </Router>
  );
}
