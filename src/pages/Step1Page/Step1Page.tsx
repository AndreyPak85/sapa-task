import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
//thunks
import { asyncGetValuesThunk } from '../../store/ValuesSlice/ValuesThunk';

export const Step1Page = () => {
  const [sumC, setSumC] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();
  const values = useSelector((state: RootStateOrAny) => state.values);

  const formik = useFormik({
    initialValues: {
      inputA: 0,
      inputB: 0,
      inputC: '',
    },
    validationSchema: Yup.object({
      inputA: Yup.number().required('Required field'),
      inputB: Yup.number().required('Required field'),
      inputC: Yup.string().oneOf([sumC], 'Must be sum InputA and InputB'),
    }),
    onSubmit: (values) => {
      history.push('/step-2');
    },
  });

  useEffect(() => {
    setSumC((formik.values.inputA + formik.values.inputB).toString());
  }, [formik.values.inputA, formik.values.inputB]);

  useEffect(() => {
    dispatch(asyncGetValuesThunk());
    formik.values.inputA = values.inputA;
    formik.values.inputB = values.inputB;
    formik.values.inputC = values.inputC;
  }, []);

  return (
    <>
      <div className='step1-page'>
        <div className='container'>
          <form className='step1-page__form' onSubmit={formik.handleSubmit}>
            <div className='step1-page__form__input'>
              <span>Input A</span>
              <input
                className=''
                name='inputA'
                value={formik.values.inputA}
                type='number'
                onChange={formik.handleChange}
              />
              {formik.touched.inputA && formik.errors.inputA ? (
                <div className='input-error'>{formik.errors.inputA}</div>
              ) : null}
            </div>
            <div className='step1-page__form__input'>
              <span>Input B</span>
              <input
                type='number'
                name='inputB'
                value={formik.values.inputB}
                onChange={formik.handleChange}
              />
              {formik.touched.inputB && formik.errors.inputB ? (
                <div className='input-error'>{formik.errors.inputB}</div>
              ) : null}
            </div>
            <div className='step1-page__form__input'>
              <span>Input C</span>
              <input
                className=''
                name='inputC'
                value={formik.values.inputC}
                type='number'
                onChange={formik.handleChange}
              />
              {formik.errors.inputC && formik.touched.inputC ? (
                <div className='input-error'>{formik.errors.inputC}</div>
              ) : null}
            </div>
            <button type='submit'>Next</button>
          </form>
        </div>
      </div>
    </>
  );
};
