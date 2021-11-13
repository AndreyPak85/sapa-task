export const TaskPage = () => {
  return (
    <div className='task-page'>
      <div className='container h100'>
        <div className='task-page__info'>
          <h2>Задание:</h2>
          <span>
            Написать мини-приложение на React (можно javascript, но typescript
            будет лучше), реализующий степпер (пример -{' '}
            <a href='https://ant.design/components/steps/' target='_blank'>
              Steps
            </a>
            ) из трёх страниц.
          </span>

          <ul>
            <li>
              Степ 1: Три инпута - inputA, inputB, inputC
              <br />
              Кнопка “Далее”
            </li>
            <li>
              Степ 2: Один инпут - inputD <br />
              Кнопки “Назад”, “Далее”
            </li>
            <li>
              Степ 3: <br /> Кнопка “Назад”, “Отправить” (submit формы).
            </li>
          </ul>
          <h4> Требования</h4>
          <ul>
            <li>
              Значение inputC должно быть равно сумме значений inputA и inputB
            </li>
            <li>
              Значение inputD должно быть равно сумме значений inputA, inputB и
              inputC
            </li>
            <li>inputD должен быть disabled</li>
            <li>inputA, inputB и inputC должны быть required</li>
            <li>
              Первоначальные значения нужно получить запросом GET{' '}
              <a
                href='https://60361aba6496b900174a0050.mockapi.io/api/values/1'
                target='_blank'
              >
                link
              </a>
            </li>
            <li>
              После получения значений их нужно проверить/валидировать:
              отобразить ошибки если не заполнены обязательные поля, суммы
              (пункты 1 и 2) неправильные.
            </li>
            <li>
              Отправка (submit) формы должна обновлять значения. Запрос PUT
              <a
                href='https://60361aba6496b900174a0050.mockapi.io/api/values/1'
                target='_blank'
              >
                link
              </a>
            </li>
            <li>
              Отправка возможна, только если все проверки прошли успешно (пункт
              6), иначе кнопка disabled
            </li>
            <li>
              Степпер должен быть в отдельном компоненте, переключение шагов
              должно быть реализовано с помощью Redux или ContextAPI.{' '}
            </li>
          </ul>
          <h4>Дополнительно:</h4>
          <span>
            Нужно использовать: Redux или ContextAPI, axios или fetch Можно
            использовать: Create React App, любые UI библиотеки (antd,
            bootstrap, material и т.д), любые библиотеки управления формами
            (Formik, React Hook Form и т.д), любые библиотеки для валидации (Yup
            или подобные) К верстке требований нет.
          </span>
        </div>
      </div>
    </div>
  );
};
