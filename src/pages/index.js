import { Header, Main} from "../components/Layout";
import Countries from "../components/Countries";
import Wrapper from "../components/Layout/Wrapper";

const Homepage = () => {
    return <>
    <Header />
    <Main>
        <Wrapper>
          <Countries />
        </Wrapper>
    </Main>
  </>
}
export default Homepage;