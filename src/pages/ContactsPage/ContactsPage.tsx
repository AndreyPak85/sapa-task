export const ContactsPage = () => {
  return (
    <div className='contacts-page'>
      <div className='container'>
        <div className='contacts-page__item'>
          Задание выполнил: <strong>Андрей П.</strong>
        </div>
        <div className='contacts-page__item'>
          Моб. телефон: <strong>+77017370818</strong>
        </div>
        <div className='contacts-page__item'>
          <strong>
            <a
              href='https://github.com/AndreyPak85?tab=repositories'
              target='_blank'
            >
              Github
            </a>
          </strong>
        </div>        </div>
        <div className='contacts-page__item'>
          <strong>
            <a
              href=''
              target='_blank'
            >
              Docker hub
            </a>
          </strong>
        </div>
      </div>
    </div>
  );
};
