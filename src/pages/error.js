import { useRouteError } from "react-router-dom";
import { Header, Main } from "../components/Layout";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <>
        <Header />
        <Main>
            <div>
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        </Main>
    </>
    
  );
}