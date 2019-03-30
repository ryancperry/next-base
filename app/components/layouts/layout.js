import Footer from '../footer/footer';
import Header from '../header/header';
import css from '../../scss/styles.scss';

const Layout = ({ children, pageName }) => {
  return (
    <div className={`layout ${pageName}`}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
