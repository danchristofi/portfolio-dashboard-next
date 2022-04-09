import "../styles/css/global.scss";
import GlobalContext from "../contexts/GlobalContext";
import HomepageContext from "../contexts/HomepageContext";
import SiteHeader from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

function MyApp({ Component, pageProps }) {
  return (
    <GlobalContext>
      <HomepageContext>
        <SiteHeader />
        <Component {...pageProps} />
        <SiteFooter />
      </HomepageContext>
    </GlobalContext>
  );
}

export default MyApp;
