import { Header, Main} from "../components/Layout";
import Country from "../components/Countries/Country";
import Wrapper from "../components/Layout/Wrapper";

const Detail = () => {
    return <>
    <Header />
    <Main>
      <Wrapper>
        <Country />
      </Wrapper>
    </Main>
  </>
}
export default Detail;