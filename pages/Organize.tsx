/* REACT, NEXT */
import type { NextPage } from 'next';
import Router, { useRouter } from 'next/router';
import { useState } from 'react';

/* COMPONENTS */
import Header from '../components/misc/Header';
import HeaderButton from '../components/misc/HeaderButton';
import { Button, Footer } from '../components/misc';
import SportCard from '../components/cards/Sport.Card';
import PrimaryInfoForm from '../components/forms/PrimaryInfo.Form';
import SecondaryInfoForm from '../components/forms/SecondaryInfo.Form';
import OrganizeConfirmationForm from '../components/forms/OrganizeConfirmation.Form';

/* STYLES */
import styles from './styles/Organize.module.scss';
import { useTheme } from '../contexts/Theme';

/* IMAGES */
import football from '../public/football.jpg';
import basketball from '../public/basketball.jpg';
import beachvolleyball from '../public/beachvolleyball.jpg';
import tennis from '../public/tennis.jpg';
import volleyball from '../public/volleyball.jpg';
import frisbee from '../public/frisbee.jpg';

/* UTILS */
import { TCity, TSkillLevels, TSportCategories } from '../utils/types/MatchUp.Type';
import { TAddress } from '../utils/types/Address.Type';
import { cityLatLong } from '../utils/types/Address.Type';
import { Storage } from 'aws-amplify';
import { useAuth } from '../contexts/Auth';
import { useMutation } from 'react-query';
import { createNewMatchUp } from '../utils/Mutation/createMatchUp.util';
import { close } from '../components/icons';

const OrganizePage: NextPage = () => {
  const { currentUserId } = useAuth();
  const { colors } = useTheme();
  const router = useRouter();

  /* ------------ANSWERS */
  const [sportCategory, setSportCategory] = useState<TSportCategories>();
  const [title, setTitle] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [location, setLocation] = useState<TCity>('berlin');
  const [address, SetAddress] = useState<TAddress>(cityLatLong.berlin);
  const [indoor, setIndoor] = useState<boolean>(false);
  const [attendanceMin, setAttendanceMin] = useState<number>(4);
  const [attendanceMax, setAttendanceMax] = useState<number>(8);
  const [skillLevel, setSkillLevel] = useState<TSkillLevels>('intermediate');
  const [reservedCourt, setReservedCourt] = useState<boolean>(false);
  const [totalCost, setTotalCost] = useState<number>(0);
  const [description, setDescription] = useState<string>('');
  const [image, setImage] = useState<File>();

  /* ------------STEPS */
  const [step, setStep] = useState<number>(0);

  const goToNext = () => setStep(step + 1);
  const goBack = () => step > 0 && setStep(step - 1);

  const disableNextStepZero = sportCategory === undefined;
  const disableNextStepOne = title == '' || date == '';
  const disableNextStepTwo = description == '';

  /* ------------SUBMISSION */
  const mutation = useMutation(createNewMatchUp, {
    onSuccess: (data) => {
      Storage.put(data.id, image, { level: 'public' });
      router.push('/');
    },
    onError: () => {
      console.log('failed to submit');
    },
  });

  return (
    <div className={styles.wrapper} style={{ backgroundColor: colors.background[100] }}>
      {step == 0 ? (
        /////-----------> STEP 0: CHOOSE SPORT
        <>
          <Header
            title="Choose a sport you want to play"
            leftButton={
              <HeaderButton callback={() => Router.back()} viewBox={close.viewBox} icon={close.path} />
            }
          ></Header>
          
          <div className={styles.sportCategoriesList}>
            <SportCard
              title="Football (Soccer)"
              subTitle="Start a football match with locals"
              image={football}
              callback={() => {
                setSportCategory('football');
              }}
              active={sportCategory == 'football'}
            ></SportCard>

            <SportCard
              title="Basketball"
              subTitle="Organize a basketball game"
              image={basketball}
              callback={() => {
                setSportCategory('basketball');
              }}
              active={sportCategory == 'basketball'}
            ></SportCard>

            <SportCard
              title="Beach Volleyball"
              subTitle="Step on the warm sand for a round of volleyball"
              image={beachvolleyball}
              callback={() => {
                setSportCategory('beach-volleyball');
              }}
              active={sportCategory == 'beach-volleyball'}
            ></SportCard>

            <SportCard
              title="Tennis"
              subTitle="Challange yourself with new tennis opponents"
              image={tennis}
              callback={() => {
                setSportCategory('tennis');
              }}
              active={sportCategory == 'tennis'}
            ></SportCard>

            <SportCard
              title="Volleyball"
              subTitle="Level up your volley skills?"
              image={volleyball}
              callback={() => {
                setSportCategory('volleyball');
              }}
              active={sportCategory == 'volleyball'}
            ></SportCard>

            <SportCard
              title="Ultimate Frisbee"
              subTitle="I have no ideas for cool prompts?"
              image={frisbee}
              callback={() => {
                setSportCategory('ultimate-frisbee');
              }}
              active={sportCategory == 'ultimate-frisbee'}
            ></SportCard>

            <div className={styles.bottomMargin}></div>
          </div>
          <Footer
            progress={25}
            leftSide={<p onClick={() => Router.back()}>Back</p>}
            rightButton={
              <Button
                variant="primary"
                disabled={disableNextStepZero}
                callback={goToNext}
                text="Next"
              ></Button>
            }
          ></Footer>
        </>
      ) : step == 1 ? (
        /////-----------> STEP 1: GENERAL INFO
        <>
          <Header
            title="Give us some general information"
            leftButton={
              <HeaderButton callback={() => Router.back()} viewBox={close.viewBox} icon={close.path} />
            }
          ></Header>

          <PrimaryInfoForm
            title={title}
            date={date}
            location={location}
            address={address}
            indoor={indoor}
            setTitle={setTitle}
            setDate={setDate}
            setLocation={setLocation}
            setAddress={SetAddress}
            setIndoor={setIndoor}
          />

          <Footer
            progress={50}
            leftSide={<p onClick={() => goBack()}>Back</p>}
            rightButton={
              <Button
                variant="primary"
                disabled={disableNextStepOne}
                callback={goToNext}
                text="Next"
              ></Button>
            }
          ></Footer>
        </>
      ) : step === 2 ? (
        /////-----------> STEP 2: DETAILED INFO
        <>
          <Header
            title="Let's figure out some more information"
            leftButton={
              <HeaderButton callback={() => Router.back()} viewBox={close.viewBox} icon={close.path} />
            }
          ></Header>

          <SecondaryInfoForm
            attendanceMin={attendanceMin}
            attendanceMax={attendanceMax}
            description={description}
            image={image}
            skillLevel={skillLevel}
            reservedCourt={reservedCourt}
            setReservedCourt={setReservedCourt}
            totalCost={totalCost}
            setTotalCost={setTotalCost}
            setAttendanceMin={setAttendanceMin}
            setAttendanceMax={setAttendanceMax}
            setDescription={setDescription}
            setImage={setImage}
            setSkillLevel={setSkillLevel}
          />

          <Footer
            progress={75}
            leftSide={<p onClick={() => goBack()}>Back</p>}
            rightButton={
              <Button
                variant="primary"
                disabled={disableNextStepTwo}
                callback={goToNext}
                text="Next"
              ></Button>
            }
          ></Footer>
        </>
      ) : (
        /////-----------> CONFIRMATION
        <>
          <Header
            imageUrl={image && URL.createObjectURL(image)}
            sportCategory={sportCategory}
            title={'Is everything correct?'}
            leftButton={
              <HeaderButton callback={() => Router.back()} viewBox={close.viewBox} icon={close.path} />
            }
          ></Header>
          <OrganizeConfirmationForm
            title={title}
            sportCategory={sportCategory as TSportCategories}
            timestamp={date}
            location={location}
            address={address}
            totalCost={totalCost}
            skillLevel={skillLevel}
            attendanceMax={attendanceMax}
            description={description}
            indoor={indoor}
          />
          <Footer
            progress={95}
            leftSide={<p onClick={() => goBack()}>Back</p>}
            rightButton={
              <Button
                variant="primary"
                callback={() =>
                  mutation.mutate({
                    sportCategory: sportCategory as TSportCategories,
                    title,
                    date: new Date(date).toISOString(),
                    location,
                    address,
                    indoor,
                    attendanceMin,
                    attendanceMax,
                    skillLevel,
                    reservedCourt,
                    totalCost,
                    description,
                    image,
                    organizerId: currentUserId as string,
                  })
                }
                text="Save"
              ></Button>
            }
          ></Footer>
        </>
      )}
    </div>
  );
};
export default OrganizePage;
