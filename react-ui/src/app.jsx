import Footer from './sectioning/footer/footer';
import Header from './sectioning/header/header';
import Main from './sectioning/main/main';
import './styles.css';
// import { useGetUserInfoQuery } from './redux/services/cases';
// import { useSelector } from 'react-redux';
// import { userData } from '../src/redux/reducers/user'
// import User from './components/user';


function App() {

  return (
        <>
          <>
            <Header />
            <Main />
            <Footer />
          </>
        </>
  );
}

export default App;