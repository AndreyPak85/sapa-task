import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Step1Page } from '../pages/Step1Page';

export const Routes = () => {
  return (
    <>
      <Switch>
        <Route path='/' exact component={Step1Page} />
      </Switch>
    </>
  );
};
