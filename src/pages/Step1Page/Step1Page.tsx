import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
//thunks
import { asyncGetValuesThunk } from '../../store/ValuesSlice/ValuesThunk';
import {
  getSumAB,
  getSumABC,
  setInputA,
  setInputB,
  setInputC,
  setIsValide,
  setStep,
} from '../../store/ValuesSlice/ValuesSlice';

export const Step1Page = () => {
  const dispatch = useDispatch();
  const values = useSelector((state: RootStateOrAny) => state.values);

  const formik = useFormik({
    initialValues: {
      inputA: values.inputA,
      inputB: values.inputB,
      inputC: values.inputC,
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      inputA: Yup.number().required('Required field'),
      inputB: Yup.number().required('Required field'),
      inputC: Yup.number()
        .oneOf([values.sumAB], 'Must be sum InputA and InputB')
        .required('Required field'),
    }),
    onSubmit: (values) => {
      dispatch(setIsValide(true));
      dispatch(setStep(2));
    },
  });

  useEffect(() => {
    dispatch(
      getSumAB({ inputA: formik.values.inputA, inputB: formik.values.inputB })
    );
    dispatch(
      getSumABC({
        inputA: formik.values.inputA,
        inputB: formik.values.inputB,
        inputC: formik.values.inputC,
      })
    );
  }, [formik.values.inputA, formik.values.inputB, formik.values.inputC]);

  useEffect(() => {
    dispatch(asyncGetValuesThunk());
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
                onChange={(e) => {
                  dispatch(setInputA(+e.target.value));
                  formik.values.inputA = +e.target.value;
                }}
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
                onChange={(e) => {
                  dispatch(setInputB(+e.target.value));
                  formik.values.inputB = +e.target.value;
                }}
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
                onChange={(e) => {
                  dispatch(setInputC(+e.target.value));
                  formik.values.inputC = +e.target.value;
                }}
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
