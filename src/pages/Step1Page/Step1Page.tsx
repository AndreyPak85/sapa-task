export const Step1Page = () => {
  return (
    <>
      <div className='step1-page'>
        <div className='container'>
          <form className='step1-page__form' action=''>
            <div className='step1-page__form__input'>
              <span>Input A</span>
              <input className='' type='text' />
            </div>
            <div className='step1-page__form__input'>
              <span>Input B</span>
              <input type='text' />
            </div>
            <div className='step1-page__form__input'>
              <span>Input C</span>
              <input className='' type='text' />
            </div>
            <button>Next</button>
          </form>
        </div>
      </div>
    </>
  );
};
