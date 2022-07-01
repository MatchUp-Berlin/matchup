import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import Header from '../../components/misc/Header';
import HeaderButton from '../../components/misc/HeaderButton';
import { useTheme } from '../../contexts/Theme';
import { getMatchUpById } from '../../utils/Query/getMatchUpById.util';

import styles from './styles/MatchUpId.module.scss';
import placeholder from '../../public/placeholder-header.jpeg';
import { User } from '../../utils/types/User.Type';
import {
  ParticipantsPreviewCard,
  SkillsCard,
  SlotsCard,
} from '../../components/cards';
import OrganizerCard from '../../components/cards/Organizer.Card';
import UpdatesPreviewCard from '../../components/cards/UpdatesPreview.Card';
import StaticMap from '../../components/maps/Static.Map';
import { Button, Footer } from '../../components/misc';
import LoadingSpinner from '../../components/misc/LoadingSpinner';
import MainInfo from '../../components/misc/MainInfo';
import getDefaultImage from '../../utils/getDefaultImage';
import { TCity, TSportCategories } from '../../utils/types/MatchUp.Type';
import ConfirmJoinModal from '../../components/modals/ConfirmJoin.Modal';
import { useState } from 'react';
import { useAuthenticator } from '@aws-amplify/ui-react';

const MatchUpDetail: NextPage = () => {
  const { colors, darkMode } = useTheme();
  const router = useRouter();
  const { MatchUpId } = router.query;

  const { isLoading, isSuccess, isError, data } = useQuery(
    ['matchup', MatchUpId],
    () => getMatchUpById(MatchUpId as string)
  );

  const { user } = useAuthenticator((context) => [
    context.authStatus,
    context.user,
  ]);

  const userSignedUp = () =>
    data?.signups.items.some((signup) => signup.userId === user.username);

  const eventHasStarted = () => {
    return (
      data && Date.parse(data?.date) < Date.parse(new Date().toISOString())
    );
  };

  const isWithin24Hours = () => {
    const twentyFourHoursInMilSec = 24 * 60 * 60 * 1000;
    return (
      (data &&
        Date.parse(data?.date) - twentyFourHoursInMilSec <
          Date.parse(new Date().toISOString())) ||
      false
    );
  };

  const [showConfirmJoinModal, setShowConfirmJoinModal] = useState(false);

  const handleJoin = () => {
    // Check here if its possible to sign in. Show different modal then.
    setShowConfirmJoinModal((prev) => !prev);
  };

  const handleCancel = () => {
    // Check here if its possible to sign in. Show different modal then.
    setShowConfirmJoinModal((prev) => !prev);
  };

  return (
    <div
      style={{ backgroundColor: colors.background[100] }}
      className={styles.page}
    >
      {/*  ------Modal------  */}
      {showConfirmJoinModal && data && (
        <ConfirmJoinModal
          join={!userSignedUp()}
          matchUp={data}
          isWithin24Hours={isWithin24Hours()}
        ></ConfirmJoinModal>
      )}
      {/*  ------HEADER------  */}
      <Header
        imageUrl={
          data
            ? data.image || getDefaultImage(data.sportCategory).src
            : placeholder.src
        } // replace!!
        leftButton={
          <HeaderButton /* Later fix coloring of buttons to always be white! */
            viewBox='0 0 10 10'
            callback={() => router.back()}
            icon={
              <path
                xmlns='http://www.w3.org/2000/svg'
                d='M5.96126 5L8.89307 2.075C9.02146 1.94661 9.09359 1.77248 9.09359 1.59091C9.09359 1.40934 9.02146 1.23521 8.89307 1.10682C8.76468 0.978432 8.59055 0.906303 8.40898 0.906303C8.22741 0.906303 8.05328 0.978432 7.92489 1.10682L4.99989 4.03864L2.07489 1.10682C1.9465 0.978432 1.77237 0.906303 1.5908 0.906303C1.40923 0.906303 1.2351 0.978432 1.10671 1.10682C0.978321 1.23521 0.906193 1.40934 0.906193 1.59091C0.906193 1.77248 0.978321 1.94661 1.10671 2.075L4.03853 5L1.10671 7.925C1.0428 7.98839 0.992081 8.0638 0.957466 8.14688C0.922851 8.22997 0.905029 8.31908 0.905029 8.40909C0.905029 8.4991 0.922851 8.58822 0.957466 8.6713C0.992081 8.75439 1.0428 8.8298 1.10671 8.89318C1.17009 8.95709 1.2455 9.00781 1.32859 9.04243C1.41168 9.07704 1.50079 9.09486 1.5908 9.09486C1.68081 9.09486 1.76993 9.07704 1.85301 9.04243C1.9361 9.00781 2.01151 8.95709 2.07489 8.89318L4.99989 5.96137L7.92489 8.89318C7.98828 8.95709 8.06369 9.00781 8.14677 9.04243C8.22986 9.07704 8.31897 9.09486 8.40898 9.09486C8.49899 9.09486 8.58811 9.07704 8.67119 9.04243C8.75428 9.00781 8.82969 8.95709 8.89307 8.89318C8.95698 8.8298 9.0077 8.75439 9.04232 8.6713C9.07693 8.58822 9.09475 8.4991 9.09475 8.40909C9.09475 8.31908 9.07693 8.22997 9.04232 8.14688C9.0077 8.0638 8.95698 7.98839 8.89307 7.925L5.96126 5Z'
              />
            }
          />
        }
        rightButtons={[
          <HeaderButton
            key={1}
            viewBox='0 0 14 21'
            callback={() => {}}
            icon={
              <path
                xmlns='http://www.w3.org/2000/svg'
                d='M11 0H3.00001C2.20436 0 1.4413 0.316071 0.878688 0.87868C0.316078 1.44129 7.88292e-06 2.20435 7.88292e-06 3V19C-0.000691685 19.1762 0.0451825 19.3495 0.132986 19.5023C0.220789 19.655 0.347404 19.7819 0.500008 19.87C0.652027 19.9578 0.824471 20.004 1.00001 20.004C1.17554 20.004 1.34799 19.9578 1.50001 19.87L7.00001 16.69L12.5 19.87C12.6524 19.9564 12.8248 20.0012 13 20C13.1752 20.0012 13.3476 19.9564 13.5 19.87C13.6526 19.7819 13.7792 19.655 13.867 19.5023C13.9548 19.3495 14.0007 19.1762 14 19V3C14 2.20435 13.6839 1.44129 13.1213 0.87868C12.5587 0.316071 11.7957 0 11 0ZM12 17.27L7.50001 14.67C7.34799 14.5822 7.17554 14.536 7.00001 14.536C6.82447 14.536 6.65203 14.5822 6.50001 14.67L2.00001 17.27V3C2.00001 2.73478 2.10536 2.48043 2.2929 2.29289C2.48044 2.10536 2.73479 2 3.00001 2H11C11.2652 2 11.5196 2.10536 11.7071 2.29289C11.8947 2.48043 12 2.73478 12 3V17.27Z'
              />
            }
          />,
          <HeaderButton
            key={1}
            viewBox='0 0 21 21'
            callback={() => {}}
            icon={
              <path
                xmlns='http://www.w3.org/2000/svg'
                d='M16.0065 12.0323C15.4157 12.0362 14.833 12.171 14.3005 12.4269C13.768 12.6828 13.2987 13.0535 12.9265 13.5123L7.8265 11.1623C8.06629 10.4281 8.06629 9.63659 7.8265 8.90234L12.9265 6.55234C13.5281 7.27831 14.3668 7.76842 15.2946 7.93618C16.2225 8.10394 17.1797 7.93857 17.9974 7.46924C18.8152 6.99992 19.4409 6.25682 19.764 5.37108C20.0872 4.48535 20.0871 3.51392 19.7638 2.62825C19.4405 1.74257 18.8146 0.999584 17.9968 0.530409C17.179 0.0612344 16.2217 -0.103966 15.2939 0.0639647C14.3662 0.231895 13.5275 0.72216 12.926 1.44824C12.3245 2.17431 11.9989 3.08952 12.0065 4.03234C12.0095 4.27057 12.0329 4.50811 12.0765 4.74234L6.7965 7.17234C6.23358 6.62192 5.52074 6.24986 4.7473 6.10277C3.97386 5.95568 3.17422 6.04011 2.44855 6.34547C1.72288 6.65084 1.10346 7.16356 0.667898 7.8194C0.232336 8.47524 0 9.24504 0 10.0323C0 10.8196 0.232336 11.5894 0.667898 12.2453C1.10346 12.9011 1.72288 13.4138 2.44855 13.7192C3.17422 14.0246 3.97386 14.109 4.7473 13.9619C5.52074 13.8148 6.23358 13.4428 6.7965 12.8923L12.0765 15.3223C12.0329 15.5566 12.0095 15.7941 12.0065 16.0323C12.0065 16.8235 12.2411 17.5968 12.6806 18.2546C13.1201 18.9124 13.7449 19.4251 14.4758 19.7279C15.2067 20.0306 16.0109 20.1098 16.7869 19.9555C17.5628 19.8011 18.2755 19.4202 18.8349 18.8608C19.3943 18.3014 19.7753 17.5886 19.9296 16.8127C20.084 16.0368 20.0048 15.2325 19.702 14.5016C19.3993 13.7707 18.8866 13.146 18.2288 12.7065C17.571 12.2669 16.7976 12.0323 16.0065 12.0323ZM16.0065 2.03234C16.4021 2.03234 16.7887 2.14964 17.1176 2.3694C17.4465 2.58916 17.7029 2.90152 17.8543 3.26697C18.0056 3.63243 18.0452 4.03456 17.9681 4.42252C17.8909 4.81048 17.7004 5.16685 17.4207 5.44655C17.141 5.72626 16.7846 5.91674 16.3967 5.99391C16.0087 6.07108 15.6066 6.03148 15.2411 5.8801C14.8757 5.72872 14.5633 5.47238 14.3436 5.14348C14.1238 4.81458 14.0065 4.4279 14.0065 4.03234C14.0065 3.50191 14.2172 2.9932 14.5923 2.61813C14.9674 2.24305 15.4761 2.03234 16.0065 2.03234V2.03234ZM4.0065 12.0323C3.61094 12.0323 3.22426 11.915 2.89536 11.6953C2.56646 11.4755 2.31011 11.1632 2.15874 10.7977C2.00736 10.4323 1.96776 10.0301 2.04493 9.64216C2.1221 9.2542 2.31258 8.89783 2.59228 8.61813C2.87199 8.33842 3.22836 8.14794 3.61632 8.07077C4.00428 7.9936 4.40641 8.03321 4.77186 8.18458C5.13732 8.33596 5.44967 8.5923 5.66944 8.9212C5.8892 9.2501 6.0065 9.63678 6.0065 10.0323C6.0065 10.5628 5.79578 11.0715 5.42071 11.4466C5.04564 11.8216 4.53693 12.0323 4.0065 12.0323ZM16.0065 18.0323C15.6109 18.0323 15.2243 17.915 14.8954 17.6953C14.5665 17.4755 14.3101 17.1632 14.1587 16.7977C14.0074 16.4323 13.9678 16.0301 14.0449 15.6422C14.1221 15.2542 14.3126 14.8978 14.5923 14.6181C14.872 14.3384 15.2284 14.1479 15.6163 14.0708C16.0043 13.9936 16.4064 14.0332 16.7719 14.1846C17.1373 14.336 17.4497 14.5923 17.6694 14.9212C17.8892 15.2501 18.0065 15.6368 18.0065 16.0323C18.0065 16.5628 17.7958 17.0715 17.4207 17.4466C17.0456 17.8216 16.5369 18.0323 16.0065 18.0323Z'
              />
            }
          />,
          <HeaderButton /* Only show this one if user is organizer!! */
            key={2}
            viewBox='0 0 14 14'
            callback={() => {}}
            icon={
              <path
                xmlns='http://www.w3.org/2000/svg'
                d='M2.91669 10.5H5.39002C5.46679 10.5004 5.54289 10.4857 5.61397 10.4567C5.68504 10.4277 5.74968 10.3849 5.80419 10.3308L9.84085 6.28833L11.4975 4.66667C11.5522 4.61244 11.5956 4.54792 11.6252 4.47684C11.6548 4.40575 11.6701 4.32951 11.6701 4.2525C11.6701 4.17549 11.6548 4.09925 11.6252 4.02816C11.5956 3.95708 11.5522 3.89256 11.4975 3.83833L9.02419 1.33583C8.96996 1.28116 8.90544 1.23776 8.83436 1.20815C8.76327 1.17853 8.68703 1.16328 8.61002 1.16328C8.53301 1.16328 8.45677 1.17853 8.38568 1.20815C8.3146 1.23776 8.25008 1.28116 8.19585 1.33583L6.55085 2.98667L2.50252 7.02917C2.44846 7.08367 2.40568 7.14832 2.37665 7.21939C2.34762 7.29046 2.33291 7.36656 2.33335 7.44333V9.91667C2.33335 10.0714 2.39481 10.2197 2.50421 10.3291C2.6136 10.4385 2.76198 10.5 2.91669 10.5ZM8.61002 2.5725L10.2609 4.22333L9.43252 5.05167L7.78169 3.40083L8.61002 2.5725ZM3.50002 7.6825L6.95919 4.22333L8.61002 5.87417L5.15085 9.33333H3.50002V7.6825ZM12.25 11.6667H1.75002C1.59531 11.6667 1.44694 11.7281 1.33754 11.8375C1.22815 11.9469 1.16669 12.0953 1.16669 12.25C1.16669 12.4047 1.22815 12.5531 1.33754 12.6625C1.44694 12.7719 1.59531 12.8333 1.75002 12.8333H12.25C12.4047 12.8333 12.5531 12.7719 12.6625 12.6625C12.7719 12.5531 12.8334 12.4047 12.8334 12.25C12.8334 12.0953 12.7719 11.9469 12.6625 11.8375C12.5531 11.7281 12.4047 11.6667 12.25 11.6667Z'
              />
            }
          />,
        ]}
      ></Header>

      {isLoading ? (
        <LoadingSpinner></LoadingSpinner>
      ) : isError ? (
        <>Oopsie, something went wront</>
      ) : (
        isSuccess &&
        data && (
          <div className={styles.contentWrapper}>
            <MainInfo
              title={data.title}
              sport={data.sportCategory as TSportCategories}
              timestamp={data.date}
              city={data.location as TCity}
              costs={data.totalCost}
              indoor={data.indoor}
            />

            {/*  ------BIG PILLS------  */}
            <div className={styles.bigPills}>
              <SkillsCard skillLevel={data.skillLevel}></SkillsCard>
              <SlotsCard
                slots={data.attendanceMax}
                attending={data.signups.items.length}
              ></SlotsCard>
            </div>

            <div
              className={styles.divider}
              style={{
                borderColor: darkMode ? colors.background[60] : '#DDDDDD',
              }}
            ></div>

            {/*  ------ORGANIZER------  */}
            <OrganizerCard organizer={data.organizer as User}></OrganizerCard>

            <div
              className={styles.divider}
              style={{
                borderColor: darkMode ? colors.background[60] : '#DDDDDD',
              }}
            ></div>

            {/*  ------PARTICIPATING PREVIEW------  */}
            <ParticipantsPreviewCard
              users={data.signups.items}
            ></ParticipantsPreviewCard>
            <div
              className={styles.divider}
              style={{
                borderColor: darkMode ? colors.background[60] : '#DDDDDD',
              }}
            ></div>

            {/*  ------DESCRIPTION PREVIEW------  */}
            <div className={styles.description}>
              <p style={{ color: colors.text[80] }} className='highlight-1'>
                Description
              </p>
              <p style={{ color: colors.text[60] }}>
                {data.description}
                {data.description.length > 100 && (
                  <span style={{ color: colors.primary[100] }}> Read more</span>
                )}
              </p>
            </div>

            <div
              className={styles.divider}
              style={{
                borderColor: darkMode ? colors.background[60] : '#DDDDDD',
              }}
            ></div>

            <UpdatesPreviewCard
              updates={data.updates.items}
              organizerId={data.organizer?.id}
            ></UpdatesPreviewCard>

            <div
              className={styles.divider}
              style={{
                borderColor: darkMode ? colors.background[60] : '#DDDDDD',
              }}
            ></div>

            <StaticMap longitude={13} latitude={52} zoom={12}></StaticMap>
          </div>
        )
      )}

      <Footer
        leftSide={
          <div className={styles.footerInfo}>
            <p className='fat' style={{ color: colors.text[100] }}>
              {data?.signups.items.length} / {data?.attendanceMax} players
              already joined
            </p>
            <p className='small' style={{ color: colors.text[100] }}>
              {data?.totalCost > 0
                ? data?.totalCost + '.00 ' + data?.currency
                : 'Free'}{' '}
              + 5€ deposit{' '}
              {
                <span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='1em'
                    height='1em'
                    viewBox='0 0 20 20'
                    fill={colors.text[60]}
                  >
                    <path d='M9.29 13.29C9.247 13.3375 9.20693 13.3876 9.17 13.44C9.13216 13.4957 9.10189 13.5563 9.08 13.62C9.05117 13.6767 9.03095 13.7374 9.02001 13.8C9.0151 13.8666 9.0151 13.9334 9.02001 14C9.01663 14.1312 9.04402 14.2613 9.10001 14.38C9.14492 14.5041 9.21657 14.6168 9.30989 14.7101C9.40321 14.8034 9.51591 14.8751 9.64001 14.92C9.75971 14.9729 9.88913 15.0002 10.02 15.0002C10.1509 15.0002 10.2803 14.9729 10.4 14.92C10.5241 14.8751 10.6368 14.8034 10.7301 14.7101C10.8234 14.6168 10.8951 14.5041 10.94 14.38C10.9844 14.2584 11.0048 14.1294 11 14C11.0008 13.8684 10.9755 13.7379 10.9258 13.6161C10.876 13.4943 10.8027 13.3834 10.71 13.29C10.617 13.1963 10.5064 13.1219 10.3846 13.0711C10.2627 13.0203 10.132 12.9942 10 12.9942C9.86799 12.9942 9.73729 13.0203 9.61543 13.0711C9.49357 13.1219 9.38297 13.1963 9.29 13.29ZM10 0C8.02219 0 6.08879 0.58649 4.4443 1.6853C2.79981 2.78412 1.51809 4.3459 0.761209 6.17317C0.00433284 8.00043 -0.193701 10.0111 0.192152 11.9509C0.578004 13.8907 1.53041 15.6725 2.92894 17.0711C4.32746 18.4696 6.10929 19.422 8.0491 19.8079C9.98891 20.1937 11.9996 19.9957 13.8268 19.2388C15.6541 18.4819 17.2159 17.2002 18.3147 15.5557C19.4135 13.9112 20 11.9778 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7363 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0ZM10 18C8.41775 18 6.87104 17.5308 5.55544 16.6518C4.23985 15.7727 3.21447 14.5233 2.60897 13.0615C2.00347 11.5997 1.84504 9.99113 2.15372 8.43928C2.4624 6.88743 3.22433 5.46197 4.34315 4.34315C5.46197 3.22433 6.88743 2.4624 8.43928 2.15372C9.99113 1.84504 11.5997 2.00346 13.0615 2.60896C14.5233 3.21447 15.7727 4.23984 16.6518 5.55544C17.5308 6.87103 18 8.41775 18 10C18 12.1217 17.1572 14.1566 15.6569 15.6569C14.1566 17.1571 12.1217 18 10 18ZM10 5C9.47307 4.99966 8.95534 5.13812 8.49891 5.40144C8.04249 5.66476 7.66347 6.04366 7.4 6.5C7.32765 6.61382 7.27907 6.7411 7.25718 6.87418C7.23529 7.00726 7.24055 7.14339 7.27263 7.27439C7.30472 7.40538 7.36297 7.52854 7.44389 7.63643C7.52481 7.74433 7.62671 7.83475 7.74348 7.90224C7.86024 7.96974 7.98945 8.01292 8.12334 8.02918C8.25722 8.04544 8.39301 8.03445 8.52254 7.99688C8.65207 7.9593 8.77266 7.89591 8.87705 7.81052C8.98145 7.72513 9.06749 7.6195 9.13 7.5C9.21811 7.3474 9.34497 7.22078 9.49775 7.13298C9.65053 7.04518 9.82379 6.9993 10 7C10.2652 7 10.5196 7.10536 10.7071 7.29289C10.8946 7.48043 11 7.73478 11 8C11 8.26522 10.8946 8.51957 10.7071 8.70711C10.5196 8.89464 10.2652 9 10 9C9.73479 9 9.48043 9.10536 9.2929 9.29289C9.10536 9.48043 9 9.73478 9 10V11C9 11.2652 9.10536 11.5196 9.2929 11.7071C9.48043 11.8946 9.73479 12 10 12C10.2652 12 10.5196 11.8946 10.7071 11.7071C10.8946 11.5196 11 11.2652 11 11V10.82C11.6614 10.58 12.2174 10.1152 12.5708 9.50687C12.9242 8.89851 13.0525 8.18529 12.9334 7.49189C12.8143 6.79849 12.4552 6.16902 11.919 5.71352C11.3828 5.25801 10.7035 5.00546 10 5Z' />
                  </svg>
                </span>
              }
            </p>
          </div>
        }
        rightButton={
          // !eventHasStarted()
          true && (
            <Button
              variant='primary'
              text={userSignedUp() ? 'Cancel' : 'Join'}
              callback={
                userSignedUp() ? () => handleCancel() : () => handleJoin()
              }
            ></Button>
          )
        }
      ></Footer>
    </div>
  );
};
export default MatchUpDetail;
