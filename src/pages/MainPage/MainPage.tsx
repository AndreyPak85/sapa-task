import { useState } from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';

import { Step1Page } from '../Step1Page';
import { Step2Page } from '../Step2Page';
import { Step3Page } from '../Step3Page';

export const MainPage = () => {
  const step = useSelector((state: RootStateOrAny) => state.values.step);

  return (
    <div className='main-page'>
      {step === 1 ? <Step1Page /> : null}
      {step === 2 ? <Step2Page /> : null}
      {step === 3 ? <Step3Page /> : null}
    </div>
  );
};
