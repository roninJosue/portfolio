import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Head from '../components/Head/Head';


const Routes = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Head />
        <Route path='/' component={Hero} />
        <Route exact path='/about' component={About} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes