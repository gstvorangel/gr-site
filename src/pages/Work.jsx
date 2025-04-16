import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const projects = Array.from({ length: 10 }, (_, i) => ({
  title: `Project ${i + 1}`,
  description: "DIGITAL, ADVERTISING, PRODUCTION",
  images: ["/placeholder.jpg", "/placeholder.jpg", "/placeholder.jpg"]
}));

export default function WorkPage() {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-white text-[#252422] font-roboto-regular">
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -30, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 px-8 py-4 bg-white text-[#252422] text-lg md:text-xl border-b border-gray-300`}
      >
        <div className="flex items-center justify-between w-full">
          <Link to="/" className="text-lg font-black tracking-wide font-neuehaas">G_R</Link>
          <div className="flex gap-x-10 text-sm md:text-base">
            <Link to="/work" className="hover:text-[#17e013] hover:underline transition-all duration-300">WORK</Link>
            <a href="#" className="hover:text-[#17e013] hover:underline transition-all duration-300">LAB</a>
            <a href="#" className="hover:text-[#17e013] hover:underline transition-all duration-300">ABOUT</a>
          </div>
        </div>
      </motion.nav>

      <main className="pt-32 px-4 md:px-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.2 }}
            className="border-t border-gray-300 py-6 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-200 z-0" />
            <div className="relative z-10 text-[#252422] group-hover:text-white transition-colors duration-300">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="text-left text-sm md:text-base">
                  <h3 className="font-bold uppercase text-lg md:text-xl mb-1">{project.title}</h3>
                  <p className="uppercase tracking-wide">{project.description}</p>
                </div>
                <div className="grid grid-cols-3 gap-2 w-full">
                  {project.images.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={project.title}
                      className="w-full h-auto object-cover rounded-sm transition-all duration-300"
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </main>
    </div>
  );
}
