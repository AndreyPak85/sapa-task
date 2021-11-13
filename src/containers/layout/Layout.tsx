import { Header } from '../../components/Header';
import { Routes } from '../../routes/Routes';
export const Layout = () => {
  return (
    <div className='layout'>
      <Header />
      <Routes />
    </div>
  );
};
