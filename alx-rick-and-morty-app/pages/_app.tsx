import ErrorBoundary from '@/components/ErrorBoundary';
import type { AppProps } from "next/app";
import ErrorProneComponent from '@/components/ErrorProneComponent';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <Component {...pageProps} />
      <ErrorProneComponent />
    </ErrorBoundary>
  );
}

export default MyApp;

