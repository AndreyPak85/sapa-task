import { useSelector, RootStateOrAny } from 'react-redux';
import Modal from 'react-modal';

import { Step1Page } from '../Step1Page';
import { Step2Page } from '../Step2Page';
import { Step3Page } from '../Step3Page';
import { Loader } from '../../components/Loader';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: 'none',
    border: 'none',
    padding: 0,
  },
  overlay: {
    background: 'rgba(0, 0, 0, 0.2)',
  },
};

export const MainPage = () => {
  const step = useSelector((state: RootStateOrAny) => state.values.step);
  const isLoading = useSelector(
    (state: RootStateOrAny) => state.values.isLoading
  );

  return (
    <div className='main-page'>
      <Modal isOpen={isLoading} style={customStyles}>
        <Loader />
      </Modal>
      {step === 1 ? <Step1Page /> : null}
      {step === 2 ? <Step2Page /> : null}
      {step === 3 ? <Step3Page /> : null}
    </div>
  );
};
