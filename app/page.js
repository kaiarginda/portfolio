"use client";
import React, { useEffect, useRef } from "react";
import "./globals.css"; // Import your CSS file
import { useState } from "react";
import { IoCutSharp } from "react-icons/io5";
import { FaRocket } from "react-icons/fa";
import { GiPaperPlane } from "react-icons/gi";
import { MdMoving } from "react-icons/md";

const Home = () => {
  const navbar = useRef(null);
  const navbarOffsetTop = useRef(null);
  const sections = useRef(null);
  const navbarLinks = useRef(null);
  const progress = useRef(null);
  const progressBarPercents = useRef(null);
  const eve = useRef(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    navbar.current = document.querySelector(".navbar");
    navbarOffsetTop.current = navbar.current.offsetTop;
    sections.current = document.querySelectorAll("section");
    navbarLinks.current = document.querySelectorAll(".navbar-link");
    progress.current = document.querySelector(".progress-bars-wrapper");
    progressBarPercents.current = [100, 100, 100, 100, 100, 100, 100, 100, 100];
    eve.current = document.querySelectorAll(".progress-percent");

    const handleScroll = () => {
      mainFn();
    };

    // Attach the event listener to the window
    window.addEventListener("scroll", handleScroll);

    // Cleanup: remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const mainFn = () => {
    if (window.pageYOffset >= navbarOffsetTop.current) {
      navbar.current.classList.add("sticky");
    } else {
      navbar.current.classList.remove("sticky");
    }

    sections.current.forEach((section, i) => {
      if (window.pageYOffset >= section.offsetTop - 10) {
        navbarLinks.current.forEach((navbarLink) => {
          navbarLink.classList.remove("change");
        });
        navbarLinks.current[i].classList.add("change");
      }
    });

    if (window.pageYOffset + window.innerHeight >= progress.current.offsetTop) {
      eve.current.forEach((el, i) => {
        el.style.width = `${progressBarPercents.current[i]}%`;
        el.previousElementSibling.firstElementChild.textContent =
          progressBarPercents.current[i];
      });
    }
  };

  const emailSend = async () => {
    if (!name || !text || !email) alert("Fill in all of the forms");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ name, text, email }),
    });

    if (res.ok) {
      const data = await res.json();
      if (data.status === "success") alert("message send succesfully");
    } else alert("Sending Message Failed");
    setName("");
    setEmail("");
    setText("");
  };

  return (
    <div
      className="container"
      onScroll={() => {
        mainFn();
      }}
    >
      <section className="section-1 center" id="section-1">
        <h1 className="section-1-heading">Web Developer</h1>
        <h3 className="person-name">Tornike Tandashvili</h3>
        <a href="#section-3" className="section-1-btn">
          Projects
        </a>
      </section>

      <nav className="navbar center">
        <a href="#section-1" className="navbar-link">
          Home
        </a>
        <a href="#section-2" className="navbar-link">
          About
        </a>
        <a href="#section-3" className="navbar-link">
          Portfolio
        </a>
        <a href="#section-4" className="navbar-link">
          Contact
        </a>
      </nav>

      <section className="section-2" id="section-2">
        <h1 className="section-heading section-2-heading">About Me</h1>
        <div className="progress-bars-wrapper">
          <div className="progress-bar">
            <p className="progress-text">
              HTML
              <span></span>%
            </p>
            <div className="progress-percent"></div>
          </div>
          <div className="progress-bar">
            <p className="progress-text">
              CSS
              <span></span>%
            </p>
            <div className="progress-percent"></div>
          </div>
          <div className="progress-bar">
            <p className="progress-text">
              JavaScript
              <span></span>%
            </p>
            <div className="progress-percent"></div>
          </div>
          <div className="progress-bar">
            <p className="progress-text">
              SASS
              <span></span>%
            </p>
            <div className="progress-percent"></div>
          </div>
          <div className="progress-bar">
            <p className="progress-text">
              ReactJS
              <span></span>%
            </p>
            <div className="progress-percent"></div>
          </div>
          <div className="progress-bar">
            <p className="progress-text">
              NodeJS
              <span></span>%
            </p>
            <div className="progress-percent"></div>
          </div>
          <div className="progress-bar">
            <p className="progress-text">
              MongoDB
              <span></span>%
            </p>
            <div className="progress-percent"></div>
          </div>
          <div className="progress-bar">
            <p className="progress-text">
              NextJs
              <span></span>%
            </p>
            <div className="progress-percent"></div>
          </div>
          <div className="progress-bar">
            <p className="progress-text">
              Typescript
              <span></span>%
            </p>
            <div className="progress-percent"></div>
          </div>
        </div>
        <div className="services">
          <div className="service">
            <GiPaperPlane className="font-big" />{" "}
            <h2 className="service-heading">Creative</h2>
          </div>
          <div className="service">
            <IoCutSharp className="font-big" />{" "}
            <h2 className="service-heading">Problem Solving</h2>
          </div>
          <div className="service">
            <FaRocket className="font-big" />
            <h2 className="service-heading">Fast</h2>
          </div>
          <div className="service">
            <MdMoving className="font-big" />{" "}
            <h2 className="service-heading">Dynamic</h2>
          </div>
        </div>
      </section>

      <section className="section-3" id="section-3">
        <h1 className="section-heading section-3-heading">My Projects</h1>
        <div className="projects-wrapper center">
          {/* <div className="project">
            <div className="project-text">
              <h2 className="project-name">The Road</h2>
              <h4 className="project-technologies">NextJs</h4>
            </div>
            <img src="https://road-blue.vercel.app/_next/static/media/header-bg.2ed11f7f.jpg" />
            <a
              href="https://road-blue.vercel.app/"
              className="project-link"
              target="_blank"
            >
              View Websiite
            </a>
          </div> */}
          <div className="project">
            <div className="project-text">
              <h2 className="project-name">The Road </h2>
              <h4 className="project-technologies">Nextjs</h4>
            </div>
            <img
              src="https://road-blue.vercel.app/_next/static/media/header-bg.2ed11f7f.jpg"
              className="project-img"
            />
            <a
              href="https://road-blue.vercel.app/"
              className="project-link"
              target="_blank"
            >
              View Website
            </a>
          </div>
          <div className="project">
            <div className="project-text">
              <h2 className="project-name">Wine Website</h2>
              <h4 className="project-technologies">Nextjs</h4>
            </div>
            <img
              src="https://winerestaurant-p9gp.vercel.app/_next/static/media/section-1-bg.64d7356a.jpg"
              className="project-img h-48"
            />
            <a
              href="https://winerestaurant-p9gp.vercel.app/"
              className="project-link"
              target="_blank"
            >
              View Website
            </a>
          </div>
          <div className="project">
            <div className="project-text">
              <h2 className="project-name">Shop Website </h2>
              <h4 className="project-technologies">Nextjs</h4>
            </div>
            <img
              src="https://scontent.xx.fbcdn.net/v/t1.15752-9/403394942_1382829645655115_394241643674106534_n.png?stp=dst-png_p206x206&_nc_cat=110&ccb=1-7&_nc_sid=510075&_nc_ohc=Y_NZ99F4cJYAX-BiHhc&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdS8f_XMJ1MkxO40BXrygRsL0NtJEZR-ITfArDkSWcUyOw&oe=659BBB6E"
              className="project-img"
            />
            <a
              href="https://shop-7l9b.vercel.app/"
              className="project-link"
              target="_blank"
            >
              View Website{" "}
            </a>
          </div>
          <div className="project">
            <div className="project-text">
              <h2 className="project-name">Movie Website </h2>
              <h4 className="project-technologies">MERN</h4>
            </div>
            <img
              src="https://scontent.xx.fbcdn.net/v/t1.15752-9/410491649_702407755327575_8428482639608542065_n.png?stp=dst-png_p206x206&_nc_cat=101&ccb=1-7&_nc_sid=510075&_nc_ohc=OjMrRIAueKAAX8Z8edY&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQh5O61ILmJuVc9rSXU7wfTF3yfWufV2E_1tVd2QPxukA&oe=65A1424D"
              className="project-img"
            />
            <a
              href="https://mov-dv4y.onrender.com/"
              className="project-link"
              target="_blank"
            >
              View Website{" "}
            </a>
          </div>
        </div>
      </section>

      <section className="section-4" id="section-4">
        <h1 className="section-heading section-4-heading">Contact Me</h1>
        <form
          className="contact-form center"
          onSubmit={(e) => {
            e.preventDefault();
            emailSend();
            // reset(); // Assuming reset is a function you've defined
          }}
        >
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <textarea
            placeholder="Message"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          ></textarea>
          <input type="submit" value="Submit" className="contact-form-btn" />
        </form>
      </section>

      <footer className="section-5 center">
        {/* <div className="social-media">
          <a href="#none" className="social-media-link">
            <i className="fab fa-github-square"></i>
          </a>
          <a href="#none" className="social-media-link">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="#none" className="social-media-link">
            <i className="fab fa-facebook-square"></i>
          </a>
          <a href="#none" className="social-media-link">
            <i className="fab fa-instagram-square"></i>
          </a>
        </div> */}
        <p className="copyright">
          {/* Copyright &copy; CodeAndCreate. All Rights Reserved */}
          Thanks For Showing Interest
        </p>
      </footer>
    </div>
  );
};

export default Home;
