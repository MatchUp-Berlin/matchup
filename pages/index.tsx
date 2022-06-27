import type { NextPage } from 'next';
import { Footer, Button } from '../components/misc';

const Home: NextPage = () => {
  return (
    <div>
      <h1>🐋 blanalala 🐋</h1>;
      <Footer
        leftSide={'suuuuuuuca'}
        progress={25}
        rightButton={
          <Button
            variant={'primary'}
            callback={() => console.log('lajsf')}
            text={'Fuck Me'}
          />
        }
      ></Footer>
    </div>
  );
};

export default Home;
