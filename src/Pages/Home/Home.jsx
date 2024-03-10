import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBars } from "react-icons/fa";
import reportWebVitals from "../../reportWebVitals";
import Header from "../../Components/Header/Header";

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.5 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const buttonVariants = {
    rest: { backgroundColor: "#fff", color: "#02081" },
    hover: { backgroundColor: "#02081", color: "#fff" },
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  //   reportWebVitals(console.log);

  return (
    <motion.div className={`landing-page ${isSidebarOpen ? "sidebar-open" : ""}`} variants={containerVariants} initial='hidden' animate='visible'>
      {/* <header>
        <div className='header-content'>
          <div className='hamburger-icon' onClick={toggleSidebar}>
            <FaBars />
          </div>
          <div className='search-input'>
            <input type='text' placeholder='Search stocks...' />
          </div>
        </div>
      </header> */}
      <Header />
      <aside className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className='sidebar-content'>
          <p className='text-white'>Menu Item 1</p>
          <p>Menu Item 2</p>
          <p>Menu Item 3</p>
        </div>
      </aside>
      <main>
        <section>
          <motion.h2 variants={itemVariants}>Key Features</motion.h2>
          <motion.ul variants={itemVariants}>
            <li>Real-time Stock Data</li>
            <li>Advanced Analytics</li>
            <li>Customizable Dashboards</li>
          </motion.ul>
        </section>
        <section>
          <motion.h2 variants={itemVariants}>Get Started</motion.h2>
          <motion.p variants={itemVariants}>Sign up now to start analyzing stocks and making informed investment decisions.</motion.p>
          <motion.button variants={buttonVariants} whileHover='hover' whileTap='hover'>
            Sign Up
          </motion.button>
        </section>
      </main>
      <footer>
        <motion.p variants={itemVariants}>&copy; 2024 Your Stock Analysis App. All rights reserved.</motion.p>
      </footer>
    </motion.div>
  );
};

export default Home;
