import { useSelector, RootStateOrAny, useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { useHistory } from 'react-router';
//thunks
import { asyncUpdateValuesThunk } from '../../store/ValuesSlice/ValuesThunk';

export const Step3Page = () => {
  const history = useHistory();
  const values = useSelector((state: RootStateOrAny) => state.values);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      inputA: values.inputA,
      inputB: values.inputB,
      inputC: values.inputC,
      inputD: values.sumABC,
    },
    onSubmit: (values) => {
      dispatch(asyncUpdateValuesThunk(values));
    },
  });
  return (
    <>
      <div className='step3-page'>
        <div className='container'>
          <form className='step3-page__form' onSubmit={formik.handleSubmit}>
            <div className='step3-page__form__input'>
              <span>Input A</span>
              <input type='text' disabled={true} value={formik.values.inputA} />
            </div>
            <div className='step3-page__form__input'>
              <span>Input B</span>
              <input type='text' disabled={true} value={formik.values.inputB} />
            </div>
            <div className='step3-page__form__input'>
              <span>Input C</span>
              <input type='text' disabled={true} value={formik.values.inputC} />
            </div>
            <div className='step3-page__form__input'>
              <span>Input D</span>
              <input type='text' disabled={true} value={formik.values.inputD} />
            </div>
            <button type='button' onClick={() => history.goBack()}>
              Back
            </button>
            <button type='submit'>Send</button>
          </form>
        </div>
      </div>
    </>
  );
};
