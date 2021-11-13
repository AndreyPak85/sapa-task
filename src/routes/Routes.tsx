import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Step1Page } from '../pages/Step1Page';
import { Step2Page } from '../pages/Step2Page';

export const Routes = () => {
  return (
    <>
      <Switch>
        <Route path='/' exact component={Step1Page} />
        <Route path='/step-2' exact component={Step2Page} />
      </Switch>
    </>
  );
};
