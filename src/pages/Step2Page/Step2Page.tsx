import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useSelector, RootStateOrAny } from 'react-redux';
import { useFormik } from 'formik';

export const Step2Page = () => {
  const history = useHistory();
  const values = useSelector((state: RootStateOrAny) => state.values);

  const formik = useFormik({
    initialValues: {
      inputD: values.sumABC,
    },
    onSubmit: (values) => {
      history.push('/step-3');
    },
  });

  return (
    <>
      <div className='step2-page'>
        <div className='container'>
          <form className='step2-page__form' onSubmit={formik.handleSubmit}>
            <div className='step2-page__form__input'>
              <span>
                Sum(inputA, inputB, inputC) from step #1 - {values.sumABC}
              </span>
              <div className=''></div>
              <span>Initial value from API - {values.inputD}</span>
              <hr />
              <span>Input D</span>
              <input type='number' disabled={true} value={values.sumABC} />
            </div>
            <button type='button' onClick={() => history.goBack()}>
              Back
            </button>
            <button type='submit'>Next</button>
          </form>
        </div>
      </div>
    </>
  );
};
