import { AnimateSharedLayout } from 'framer-motion';
import '../styles/global.scss';

export default function App({ Component, pageProps }) {
  return (
    <AnimateSharedLayout>
      <Component {...pageProps} />
    </AnimateSharedLayout>
  );
}
