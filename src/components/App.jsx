import React, { useState, useEffect } from 'react';
import {I18nextProvider} from "react-i18next";
import { Helmet } from 'react-helmet';
import Footer from './Footer/Footer';
import Head from './Head/Head';
import { listRepos } from '../api/repos';

import i18n from "../i18n";

import { PortfolioProvider } from '../context/context';
import {
  heroData,
  aboutData,
  contactData,
  footerData,
  projectsData
} from '../mock/data';


function App(props) {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});
  const [repos, setRepos] = useState([]);
  const [projects, setProjects] = useState([]);


  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setContact({ ...contactData });
    setFooter({ ...footerData });
    setProjects({...projectsData})
  }, []);

  useEffect(() => {
    listRepos().then((repo) => {
      const filterRepos = repo.filter((rep) => !rep.fork && rep.homepage && (rep.name !== "codersrank-practice" && rep.name !== 'portfolio'));
      setRepos(filterRepos);
    });

  }, []);


  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Reynaldo Cano</title>
        <html lang={'en' || 'en'} />
        <meta name="description" content="Page not found" />
      </Helmet>
      <I18nextProvider i18n={i18n}>
        <PortfolioProvider value={{ hero, about, contact, footer, repos, projects }}>
          <Head />
          <main className='main'>
            {props.children}
          </main>
          <Footer />
        </PortfolioProvider>
      </I18nextProvider>
    </>
  );
}

export default App;
