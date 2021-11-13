import { useHistory } from 'react-router';

export const Step2Page = () => {
  const history = useHistory();
  return (
    <>
      <div className='step2-page'>
        <div className='container'>
          <form className='step2-page__form'>
            <div className='step2-page__form__input'>
              <span>Input D</span>
              <input type='text' />
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
