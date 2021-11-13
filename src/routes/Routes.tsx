import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
//pages
import { MainPage } from '../pages/MainPage';
import { TaskPage } from '../pages/TaskPage';
import { ContactsPage } from '../pages/ContactsPage';

export const Routes = () => {
  return (
    <>
      <Switch>
        {/* <Route path='/' exact component={Step1Page} />
        <Route path='/step-2' exact component={Step2Page} />
        <Route path='/step-3' exact component={Step3Page} /> */}
        <Route path='/' exact component={MainPage} />
        <Route path='/main' exact render={() => <Redirect to='/' />} />
        <Route path='/task' exact component={TaskPage} />
        <Route path='/contacts' exact component={ContactsPage} />
      </Switch>
    </>
  );
};
