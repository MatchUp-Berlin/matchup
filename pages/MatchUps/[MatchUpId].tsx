import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import Header from '../../components/misc/Header';
import HeaderButton from '../../components/misc/HeaderButton';
import { useTheme } from '../../contexts/Theme';
import { getMatchUpById } from '../../utils/Query/getMatchUpById.util';

import styles from './styles/MatchUpId.module.scss';
import placeholder from '../../public/placeholder-header.jpeg';
import clock from '../../public/clock.svg';
import pin from '../../public/pin.svg';
import euro from '../../public/euro.svg';
import getSportIcon from '../../utils/getSportIcon';
import Image from 'next/image';
import moment from 'moment';
import { ParticipantsPreviewCard, SkillsCard, SlotsCard } from '../../components/cards';
import OrganizerCard from '../../components/cards/Organizer.Card';
import { Divider } from '@aws-amplify/ui-react';
import UpdatesPreviewCard from '../../components/cards/UpdatesPreview.Card';
import StaticMap from '../../components/maps/Static.Map';
import { Button, Footer } from '../../components/misc';

const updates = [
  {
    id: '3234',
    userId: '98736432',
    matchUpId: '87d87ew',
    user: {
      id: '98736432',
      givenName: 'Sam',
      familyName: 'Svelte',
      photo: './path',
    },
    content: 'this is the latest message',
    timestamp: '20:32',
  },
  {
    id: '5467',
    userId: '67523476',
    matchUpId: '87d87ew',
    user: {
      givenName: 'Max',
      familyName: 'Butts',
      photo: './path',
    },
    content: 'this is the second latest message',
    timestamp: '19:43',
  },
  {
    id: '3677',
    userId: '98734986',
    matchUpId: '87d87ew',
    user: {
      givenName: 'Manu',
      familyName: 'Bauer',
      photo: './path',
    },
    content: 'this is the third latest message',
    timestamp: 'Yesterday',
  },
  {
    id: '8576',
    userId: '82764387',
    matchUpId: '87d87ew',
    user: {
      givenName: 'Luca',
      familyName: 'Giordano',
      photo: './path',
    },
    content: 'this is the second latest message',
    timestamp: 'Jun 26',
  },
  {
    id: '7367',
    userId: '8763487',
    matchUpId: '87d87ew',
    user: {
      givenName: 'Mitch',
      familyName: 'Man',
      photo: './path',
    },
    content: 'this is the second latest message',
    timestamp: 'Jun 25',
  },
];

const MatchUpDetail: NextPage = () => {
  const { colors, shadows, darkMode } = useTheme();
  const router = useRouter();
  const { MatchUpId } = router.query;

  const { isLoading, isSuccess, isError, data, refetch } = useQuery(
    ['matchup', MatchUpId],
    () => getMatchUpById(MatchUpId as string),
  );

  return (
    <div style={{ backgroundColor: colors.background[100] }} className={styles.page}>
      {/*  ------HEADER------  */}
      <Header
        imageUrl={placeholder.src} // replace!!
        leftButton={
          <HeaderButton /* Later fix coloring of buttons to always be white! */
            viewBox="0 0 10 10"
            callback={() => {}}
            icon={
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="M5.96126 5L8.89307 2.075C9.02146 1.94661 9.09359 1.77248 9.09359 1.59091C9.09359 1.40934 9.02146 1.23521 8.89307 1.10682C8.76468 0.978432 8.59055 0.906303 8.40898 0.906303C8.22741 0.906303 8.05328 0.978432 7.92489 1.10682L4.99989 4.03864L2.07489 1.10682C1.9465 0.978432 1.77237 0.906303 1.5908 0.906303C1.40923 0.906303 1.2351 0.978432 1.10671 1.10682C0.978321 1.23521 0.906193 1.40934 0.906193 1.59091C0.906193 1.77248 0.978321 1.94661 1.10671 2.075L4.03853 5L1.10671 7.925C1.0428 7.98839 0.992081 8.0638 0.957466 8.14688C0.922851 8.22997 0.905029 8.31908 0.905029 8.40909C0.905029 8.4991 0.922851 8.58822 0.957466 8.6713C0.992081 8.75439 1.0428 8.8298 1.10671 8.89318C1.17009 8.95709 1.2455 9.00781 1.32859 9.04243C1.41168 9.07704 1.50079 9.09486 1.5908 9.09486C1.68081 9.09486 1.76993 9.07704 1.85301 9.04243C1.9361 9.00781 2.01151 8.95709 2.07489 8.89318L4.99989 5.96137L7.92489 8.89318C7.98828 8.95709 8.06369 9.00781 8.14677 9.04243C8.22986 9.07704 8.31897 9.09486 8.40898 9.09486C8.49899 9.09486 8.58811 9.07704 8.67119 9.04243C8.75428 9.00781 8.82969 8.95709 8.89307 8.89318C8.95698 8.8298 9.0077 8.75439 9.04232 8.6713C9.07693 8.58822 9.09475 8.4991 9.09475 8.40909C9.09475 8.31908 9.07693 8.22997 9.04232 8.14688C9.0077 8.0638 8.95698 7.98839 8.89307 7.925L5.96126 5Z"
              />
            }
          />
        }
        rightButtons={[
          <HeaderButton
            key={1}
            viewBox="0 0 14 21"
            callback={() => {}}
            icon={
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="M11 0H3.00001C2.20436 0 1.4413 0.316071 0.878688 0.87868C0.316078 1.44129 7.88292e-06 2.20435 7.88292e-06 3V19C-0.000691685 19.1762 0.0451825 19.3495 0.132986 19.5023C0.220789 19.655 0.347404 19.7819 0.500008 19.87C0.652027 19.9578 0.824471 20.004 1.00001 20.004C1.17554 20.004 1.34799 19.9578 1.50001 19.87L7.00001 16.69L12.5 19.87C12.6524 19.9564 12.8248 20.0012 13 20C13.1752 20.0012 13.3476 19.9564 13.5 19.87C13.6526 19.7819 13.7792 19.655 13.867 19.5023C13.9548 19.3495 14.0007 19.1762 14 19V3C14 2.20435 13.6839 1.44129 13.1213 0.87868C12.5587 0.316071 11.7957 0 11 0ZM12 17.27L7.50001 14.67C7.34799 14.5822 7.17554 14.536 7.00001 14.536C6.82447 14.536 6.65203 14.5822 6.50001 14.67L2.00001 17.27V3C2.00001 2.73478 2.10536 2.48043 2.2929 2.29289C2.48044 2.10536 2.73479 2 3.00001 2H11C11.2652 2 11.5196 2.10536 11.7071 2.29289C11.8947 2.48043 12 2.73478 12 3V17.27Z"
              />
            }
          />,
          <HeaderButton
            key={1}
            viewBox="0 0 21 21"
            callback={() => {}}
            icon={
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="M16.0065 12.0323C15.4157 12.0362 14.833 12.171 14.3005 12.4269C13.768 12.6828 13.2987 13.0535 12.9265 13.5123L7.8265 11.1623C8.06629 10.4281 8.06629 9.63659 7.8265 8.90234L12.9265 6.55234C13.5281 7.27831 14.3668 7.76842 15.2946 7.93618C16.2225 8.10394 17.1797 7.93857 17.9974 7.46924C18.8152 6.99992 19.4409 6.25682 19.764 5.37108C20.0872 4.48535 20.0871 3.51392 19.7638 2.62825C19.4405 1.74257 18.8146 0.999584 17.9968 0.530409C17.179 0.0612344 16.2217 -0.103966 15.2939 0.0639647C14.3662 0.231895 13.5275 0.72216 12.926 1.44824C12.3245 2.17431 11.9989 3.08952 12.0065 4.03234C12.0095 4.27057 12.0329 4.50811 12.0765 4.74234L6.7965 7.17234C6.23358 6.62192 5.52074 6.24986 4.7473 6.10277C3.97386 5.95568 3.17422 6.04011 2.44855 6.34547C1.72288 6.65084 1.10346 7.16356 0.667898 7.8194C0.232336 8.47524 0 9.24504 0 10.0323C0 10.8196 0.232336 11.5894 0.667898 12.2453C1.10346 12.9011 1.72288 13.4138 2.44855 13.7192C3.17422 14.0246 3.97386 14.109 4.7473 13.9619C5.52074 13.8148 6.23358 13.4428 6.7965 12.8923L12.0765 15.3223C12.0329 15.5566 12.0095 15.7941 12.0065 16.0323C12.0065 16.8235 12.2411 17.5968 12.6806 18.2546C13.1201 18.9124 13.7449 19.4251 14.4758 19.7279C15.2067 20.0306 16.0109 20.1098 16.7869 19.9555C17.5628 19.8011 18.2755 19.4202 18.8349 18.8608C19.3943 18.3014 19.7753 17.5886 19.9296 16.8127C20.084 16.0368 20.0048 15.2325 19.702 14.5016C19.3993 13.7707 18.8866 13.146 18.2288 12.7065C17.571 12.2669 16.7976 12.0323 16.0065 12.0323ZM16.0065 2.03234C16.4021 2.03234 16.7887 2.14964 17.1176 2.3694C17.4465 2.58916 17.7029 2.90152 17.8543 3.26697C18.0056 3.63243 18.0452 4.03456 17.9681 4.42252C17.8909 4.81048 17.7004 5.16685 17.4207 5.44655C17.141 5.72626 16.7846 5.91674 16.3967 5.99391C16.0087 6.07108 15.6066 6.03148 15.2411 5.8801C14.8757 5.72872 14.5633 5.47238 14.3436 5.14348C14.1238 4.81458 14.0065 4.4279 14.0065 4.03234C14.0065 3.50191 14.2172 2.9932 14.5923 2.61813C14.9674 2.24305 15.4761 2.03234 16.0065 2.03234V2.03234ZM4.0065 12.0323C3.61094 12.0323 3.22426 11.915 2.89536 11.6953C2.56646 11.4755 2.31011 11.1632 2.15874 10.7977C2.00736 10.4323 1.96776 10.0301 2.04493 9.64216C2.1221 9.2542 2.31258 8.89783 2.59228 8.61813C2.87199 8.33842 3.22836 8.14794 3.61632 8.07077C4.00428 7.9936 4.40641 8.03321 4.77186 8.18458C5.13732 8.33596 5.44967 8.5923 5.66944 8.9212C5.8892 9.2501 6.0065 9.63678 6.0065 10.0323C6.0065 10.5628 5.79578 11.0715 5.42071 11.4466C5.04564 11.8216 4.53693 12.0323 4.0065 12.0323ZM16.0065 18.0323C15.6109 18.0323 15.2243 17.915 14.8954 17.6953C14.5665 17.4755 14.3101 17.1632 14.1587 16.7977C14.0074 16.4323 13.9678 16.0301 14.0449 15.6422C14.1221 15.2542 14.3126 14.8978 14.5923 14.6181C14.872 14.3384 15.2284 14.1479 15.6163 14.0708C16.0043 13.9936 16.4064 14.0332 16.7719 14.1846C17.1373 14.336 17.4497 14.5923 17.6694 14.9212C17.8892 15.2501 18.0065 15.6368 18.0065 16.0323C18.0065 16.5628 17.7958 17.0715 17.4207 17.4466C17.0456 17.8216 16.5369 18.0323 16.0065 18.0323Z"
              />
            }
          />,
          <HeaderButton /* Only show this one if user is organizer!! */
            key={2}
            viewBox="0 0 14 14"
            callback={() => {}}
            icon={
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="M2.91669 10.5H5.39002C5.46679 10.5004 5.54289 10.4857 5.61397 10.4567C5.68504 10.4277 5.74968 10.3849 5.80419 10.3308L9.84085 6.28833L11.4975 4.66667C11.5522 4.61244 11.5956 4.54792 11.6252 4.47684C11.6548 4.40575 11.6701 4.32951 11.6701 4.2525C11.6701 4.17549 11.6548 4.09925 11.6252 4.02816C11.5956 3.95708 11.5522 3.89256 11.4975 3.83833L9.02419 1.33583C8.96996 1.28116 8.90544 1.23776 8.83436 1.20815C8.76327 1.17853 8.68703 1.16328 8.61002 1.16328C8.53301 1.16328 8.45677 1.17853 8.38568 1.20815C8.3146 1.23776 8.25008 1.28116 8.19585 1.33583L6.55085 2.98667L2.50252 7.02917C2.44846 7.08367 2.40568 7.14832 2.37665 7.21939C2.34762 7.29046 2.33291 7.36656 2.33335 7.44333V9.91667C2.33335 10.0714 2.39481 10.2197 2.50421 10.3291C2.6136 10.4385 2.76198 10.5 2.91669 10.5ZM8.61002 2.5725L10.2609 4.22333L9.43252 5.05167L7.78169 3.40083L8.61002 2.5725ZM3.50002 7.6825L6.95919 4.22333L8.61002 5.87417L5.15085 9.33333H3.50002V7.6825ZM12.25 11.6667H1.75002C1.59531 11.6667 1.44694 11.7281 1.33754 11.8375C1.22815 11.9469 1.16669 12.0953 1.16669 12.25C1.16669 12.4047 1.22815 12.5531 1.33754 12.6625C1.44694 12.7719 1.59531 12.8333 1.75002 12.8333H12.25C12.4047 12.8333 12.5531 12.7719 12.6625 12.6625C12.7719 12.5531 12.8334 12.4047 12.8334 12.25C12.8334 12.0953 12.7719 11.9469 12.6625 11.8375C12.5531 11.7281 12.4047 11.6667 12.25 11.6667Z"
              />
            }
          />,
        ]}
      ></Header>

      {/*  ------HEADER------  */}
      <div className={styles.contentWrapper}>
        <div className={styles.info}>
          {/* TITLE */}
          <h1 style={{ color: colors.text[100] }}>
            Arabs vs. Italians Basketball
            <span>
              <Image
                width={'30px'}
                height={'30px'}
                src={getSportIcon('basketball')}
                alt={'basketball'}
              ></Image>
            </span>
          </h1>
          {/* DETAILS */}
          <div className={styles.details}>
            <div className={styles.detail}>
              <Image width={'18em'} height="18em" src={clock} alt="taking place on"></Image>
              <p style={{ color: colors.text[60] }}>
                {moment('2022-06-27T15:33:52.444Z').format('H:m dddd')}
              </p>
            </div>
            <div className={styles.detail}>
              <Image width={'18em'} height="18em" src={pin} alt="taking place at"></Image>
              <p style={{ color: colors.text[60] }}>{'berlin'}</p>
            </div>

            <div className={styles.detail}>
              <Image width={'18em'} height="18em" src={euro} alt="costs"></Image>
              <p style={{ color: colors.text[60] }}>{10 > 0 ? 10 + '.00' : 'Free'}</p>
            </div>
          </div>
        </div>

        {/*  ------BIG PILLS------  */}
        <div className={styles.bigPills}>
          <SkillsCard skillLevel="advanced"></SkillsCard>
          <SlotsCard slots={8} attending={7}></SlotsCard>
        </div>

        <div
          className={styles.divider}
          style={{ borderColor: darkMode ? colors.background[60] : '#DDDDDD' }}
        ></div>

        {/*  ------ORGANIZER------  */}
        <OrganizerCard></OrganizerCard>

        <div
          className={styles.divider}
          style={{ borderColor: darkMode ? colors.background[60] : '#DDDDDD' }}
        ></div>

        {/*  ------PARTICIPATING PREVIEW------  */}
        <ParticipantsPreviewCard
          users={[
            {
              id: 'asfjnadf',
              profileImage:
                'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80',
            },
            {
              id: 'asfjnadf',
              profileImage:
                'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80',
            },
            {
              id: 'asfjnadf',
              profileImage:
                'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80',
            },
            {
              id: 'asfjnadf',
              profileImage:
                'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80',
            },
            {
              id: 'asfjnadf',
              profileImage:
                'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80',
            },
            {
              id: 'asfjnadf',
              profileImage:
                'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80',
            },
            {
              id: 'asfjnadf',
              profileImage:
                'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80',
            },
          ]}
        ></ParticipantsPreviewCard>
        <div
          className={styles.divider}
          style={{ borderColor: darkMode ? colors.background[60] : '#DDDDDD' }}
        ></div>

        {/*  ------DESCRIPTION PREVIEW------  */}
        <div className={styles.description}>
          <p style={{ color: colors.text[80] }}>
            afuheinsufhwn eifuhwoefuh aksdbfoiadf bsoldfzbilsdiladugfliadguf weofuh owefhnowefhmifhen
            owfhhwefmhwpoefhum weofhue nwofhenwfhewnop niweufhnowf henwfnow efhnewoufhenow
            upfhenwfnoefhnweofhenwopfhnwpoefhnopw
          </p>
          <p style={{ color: colors.primary[100] }}>Read more</p>
        </div>

        <div
          className={styles.divider}
          style={{ borderColor: darkMode ? colors.background[60] : '#DDDDDD' }}
        ></div>

        <UpdatesPreviewCard updates={updates} organizerId="98736432"></UpdatesPreviewCard>

        <div
          className={styles.divider}
          style={{ borderColor: darkMode ? colors.background[60] : '#DDDDDD' }}
        ></div>

        <StaticMap longitude={13} latitude={52} zoom={12}></StaticMap>
      </div>

      <Footer
        leftSide={
          <div className={styles.footerInfo}>
            <p className="fat" style={{ color: colors.text[100] }}>
              3/10 players already joined
            </p>
            <p className="small" style={{ color: colors.text[100] }}>
              Free + 5€ deposit
            </p>
          </div>
        }
        rightButton={<Button variant="primary" text="Join" callback={() => console.log('clicked')}></Button>}
      ></Footer>
    </div>
  );
};
export default MatchUpDetail;
