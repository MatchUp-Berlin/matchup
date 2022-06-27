import type { NextPage } from 'next';
import { Footer, Button } from '../components/misc';

const Home: NextPage = () => {
  return (
    <div>
      <h1>🐋 blanalala 🐋</h1>
      <div style={{ height: '30vh' }}>arrarrarra</div>
      <div style={{ height: '30vh' }}>arrarrarra</div>
      <div style={{ height: '30vh' }}>arrarrarra</div>
      <div style={{ height: '30vh' }}>arrarrarra</div>
      <div style={{ height: '30vh' }}>arrarrarra</div>
      <div style={{ height: '30vh' }}>arrarrarra</div>
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
