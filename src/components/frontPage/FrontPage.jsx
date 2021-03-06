import { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { ProjectsGrid } from "../projectsGrid/ProjectsGrid";

export const FrontPage = () => {

  const [languageEn, setLanguageEn] = useState(true);

  const handleOnClickFlags = (flagClicked)=>{

    if(flagClicked === 'spanish-flag' && languageEn){
      setLanguageEn(false);
    }
    if(flagClicked === 'english-flag' && !languageEn){
      setLanguageEn(true);
    }

  }

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
        id="sideNav"
      >
        {/* <!--Mini Flags --> */}
        <section id="mini-flag" className="d-inline">
          <img
            className={`mini-flag ${languageEn ? 'image-mini-flag-current' : 'image-mini-flag'}`}
            src="./assets/img/england-flag.png"
            alt={languageEn ? 'Go site in English' : 'Ir al sitio en inglés' }
            title={languageEn ? 'Go site in English' : 'Ir al sitio en inglés' }
            onClick={() => handleOnClickFlags('english-flag')}

          />

          <img
            className={`mini-flag ${languageEn ? 'image-mini-flag' : 'image-mini-flag-current'}`}
            src="./assets/img/spain-flag.png"
            alt={languageEn ? 'Go site in Spanish' : 'Ir al sitio en español' }
            title={languageEn ? 'Go site in Spanish' : 'Ir al sitio en español' }
            onClick={() => handleOnClickFlags('spanish-flag')}
          />

        </section>
        <a className="navbar-brand js-scroll-trigger" href="#about">
          <span className="d-none d-lg-block"
          ><img
              className="img-fluid img-profile rounded-circle mx-auto mb-2"
              src="./assets/img/profile.jpeg"
              alt="Esteban Pedraza's profile picture"
            /></span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className="nav-link"
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >{languageEn ? 'About' : 'Acerca de'}</Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}

                duration={500}
              >{languageEn ? 'Projects' : 'Proyectos'}</Link>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#projects">Projects</a>
            </li> */}
            <li className="nav-item">
              <a
                className="btn btn-primary"
                href={`./assets/files/CV_ESTEBAN_PEDRAZA_${languageEn ? 'en': 'es'}.pdf`}
                target="_blank"
              >
                { languageEn ? 'Download my CV!' : '¡Descarga mi CV!'}
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* <!-- Page Content--> */}
      <div className="container-fluid p-0">
        <span className="d-block d-lg-none span-img">
          <img
            className="img-profile rounded-circle"
            src="./assets/img/profile.jpeg"
            alt="Esteban Pedraza's profile picture"
          />
        </span>

        {/* <!-- About--> */}
        <section className="resume-section" id="about">
          <div className="resume-section-content">
            <h1 className="mb-0">
              Esteban Hernando
              <span className="text-primary"> Pedraza Solano</span>
            </h1>
            <div className="subheading text-primary">epedrazasolano@gmail.com</div>
            <div className="subheading mb-2">Bogotá - Colombia</div>
            <div className="social-icons mb-4">
              <a
                className="social-icon"
                target="_blank"
                href="https://www.linkedin.com/in/estebanpedraza/"
              ><i className="fab fa-linkedin-in"></i
              ></a>
              <a
                className="social-icon"
                target="_blank"
                href="https://github.com/MrEstebban"
              ><i className="fab fa-github"></i
              ></a>
            </div>
            <p className="lead mb-4">
              {languageEn ? 'Hi! 👋🏼, I´m passionate about technology, as I see it as a way to support the day-to-day lives of people. I\'m new to blockchain but very aware of the impact that can have and it\'s having nowadays along with AI.' : '¡Hola! 👋🏼, Soy un desarrollador de software apasionado por la tecnología. Soy nuevo en el ecosistema blockchain pero estoy muy al tanto del impacto que puede tener y está teniendo en el mundo junto con la Inteligencia Artificial.'}
               <br /><br />
               {languageEn ? '✔ I´m currently working with back-end (Java, Node, Microservices) but I\'ve also worked with front-end (React, Angular).' : '✔ Actualmente trabajo con tecnologías back-end (Java, Node, Microservicios) pero también he trabajado con tecnologías front-end (React, Angular).'}
              <br />
              {languageEn ?  '✔ I like to explain complex ideas and abstract concepts and translate them into a way that is easy to understand.' : '✔ Me gusta comunicar y aprender ideas complejas y conceptos abstractos de manera fácil de entender.'}
              <br />
              {languageEn ? '✔ I\'m a native Spanish speaker and I speak english.' : '✔ Soy hablante nativo en español, pero también hablo bien el inglés.'}
            </p>
          </div>
        </section>
        <hr className="m-0" />

        {/* <!-- Projects--> */}

        <ProjectsGrid languageEn={languageEn} />

      </div>

    </>
  )
}