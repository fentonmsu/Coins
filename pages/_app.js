import "../styles/globals.css";
// entry point for our app, nextjs has routes built in, render a new component and display it
// wrap everything around the layout
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
