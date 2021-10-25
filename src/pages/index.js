import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';
import Header from '../components/Hero/Hero';

export default () => {
  const { title, lang, description } = headData;

  return (
    <>
      <App
        title={title}
      >
        <Header />
      </App>
    </>
  );
};
