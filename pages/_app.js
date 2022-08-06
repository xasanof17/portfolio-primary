import Navbar from '../components/Navbar';
import '../styles/globals.scss';
import '../firebase/firebase'
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
