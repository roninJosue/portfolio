import { nanoid } from "nanoid";

// HEAD DATA
export const headData = {
  title: "Reynaldo Cano | Developer", // e.g: 'Name | Developer'
  lang: "", // e.g: en, es, fr, jp
  description: "Personal Portfolio" // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hola, soy",
  name: "Reynaldo Cano",
  subtitle: "Ing. en Sistemas de Información",
  cta: "Conoce mas"
};

// ABOUT DATA
export const aboutData = {
  img: "me2.png",
  title: "Acerca de mí",
  paragraphOne:
    "Hola, soy Reynaldo Cano, Ing. En Sistemas, me encanta crear aplicaciones web, en base a requerimientos que satisfagan las necesidades del problema. He trabajado tanto en el desarrollo de interfaces de usuario, como en el manejo y guardado de los datos.",
  paragraphTwo:
    " Responsable con muchas ganas de adquirir nuevos conocimientos para mi fortalecimiento personal.",
  paragraphThree: "",
  resume: "https://drive.google.com/file/d/1TIkc_BaRcezV-Eovd5Gz1DCSPVME0UOa/view?usp=sharing", // if no resume, the button will not show up
  resumeLabel: "CURRÍCULO"
};

// PROJECTS DATA
export const projectsData = {
  projectsLabel: "PROYECTOS"
};

// CONTACT DATA
export const contactData = {
  cta: "",
  btn: "",
  email: "cano.barcenas.reynaldo@gmail.com"
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: "instagram",
      url: "https://www.instagram.com/roninjosue/"
    },
    {
      id: nanoid(),
      name: "linkedin",
      url: "https://www.linkedin.com/in/reynaldo-josue-cano-barcenas-430bb8a6/"
    },
    {
      id: nanoid(),
      name: "github",
      url: "https://github.com/roninJosue"
    }
  ]
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false // set to false to disable the GitHub stars/fork buttons
};

export const darkTheme = {
  active: false
};
