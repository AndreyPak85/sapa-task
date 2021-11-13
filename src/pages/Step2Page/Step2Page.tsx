import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { setStep } from '../../store/ValuesSlice/ValuesSlice';

export const Step2Page = () => {
  const values = useSelector((state: RootStateOrAny) => state.values);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      inputD: values.sumABC,
    },
    onSubmit: (values) => {
      dispatch(setStep(3));
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
              <br />
              <span>Initial value from API - {values.inputD}</span>
              <hr />
              <span>Input D</span>
              <input type='number' disabled={true} value={values.sumABC} />
            </div>
            <button type='button' onClick={() => dispatch(setStep(1))}>
              Back
            </button>
            <button type='submit'>Next</button>
          </form>
        </div>
      </div>
    </>
  );
};
