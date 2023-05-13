import { useRouteError } from "react-router-dom";
import { Header, Main } from "../components/Layout";
import Wrapper from "../components/Layout/Wrapper";
import styles from "./error.module.css";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <>
        <Header />
        <Main>
            <Wrapper cssClass={styles.container}>
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
                <p className={styles.vpn}>
                  Attention:
                  If you call the site from countries like Iran, Syria, etc, Please Run a VPN
                </p>
            </Wrapper>
        </Main>
    </>
    
  );
}