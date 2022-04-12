import GlobalStyles from "../globalStyles";
import { Container } from "../container";
import { useSelector } from 'react-redux';
import { getBackgroundImage } from "../helpers/getBackgroundImage";


const App = () => {
  const { outside, timeZone } = useSelector(store => store)


  return (
    <>
      <GlobalStyles image={getBackgroundImage(outside, timeZone)}/>
      <Container image={getBackgroundImage(outside, timeZone)}/>
    </>
  );
}

export default App;

