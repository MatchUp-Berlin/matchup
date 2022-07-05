import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useMutation, useQuery } from 'react-query';
import Header from '../../components/misc/Header';
import HeaderButton from '../../components/misc/HeaderButton';
import { useTheme } from '../../contexts/Theme';
import { getMatchUpById } from '../../utils/Query/getMatchUpById.util';
import { initializeMap } from '../../utils/Maps/initializeMap.util';

import styles from './styles/MatchUpId.module.scss';
import { User } from '../../utils/types/User.Type';
import { ParticipantsPreviewCard, SkillsCard, SlotsCard } from '../../components/cards';
import OrganizerCard from '../../components/cards/Organizer.Card';
import UpdatesPreviewCard from '../../components/cards/UpdatesPreview.Card';
import { Button, Footer } from '../../components/misc';
import LoadingSpinner from '../../components/misc/LoadingSpinner';
import MainInfo from '../../components/misc/MainInfo';
import { TCity, TSportCategories } from '../../utils/types/MatchUp.Type';
import ConfirmJoinModal from '../../components/modals/ConfirmJoin.Modal';
import { ReactNode, useEffect, useState } from 'react';
import ParticipantsModal from '../../components/modals/Participants.Modal';
import UpdatesModal from '../../components/modals/Updates.Modal';
import ConfirmAttendanceModal from '../../components/modals/ConfirmAttendance.Modal';
import { createNewWatchList } from '../../utils/Mutation/createWatchList.util';
import { edit, share, watchList } from '../../components/icons';
import { useAuth } from '../../contexts/Auth';
import RateMatchUpModal from '../../components/modals/RateMatchUp.Modal';
import DescriptionModal from '../../components/modals/Description.Modal';

const ms = 24 * 60 * 60 * 1000;

const MatchUpDetail: NextPage = () => {
  const { colors, darkMode } = useTheme();
  const router = useRouter();
  const { MatchUpId } = router.query;

  /* -----FETCHING----- */
  const {
    isLoading,
    isSuccess,
    isError,
    data: matchUp,
  } = useQuery(['matchup', MatchUpId], () => getMatchUpById(MatchUpId as string), { enabled: !!MatchUpId });

  /* -----USER ROLE----- */
  const { currentUserId } = useAuth();
  const [isSignedUp, setIsSignedUp] = useState<boolean>(false);
  const [isOrganizer, setIsOrganizer] = useState<boolean>(false);

  /* -----WATCHLIST----- */
  const mutation = useMutation(['watchlist', currentUserId], createNewWatchList);

  useEffect(() => {
    if (matchUp && currentUserId) {
      setIsSignedUp(matchUp.signups.items.some((participant) => participant.userId === currentUserId));
      setIsOrganizer(currentUserId === matchUp.organizerId);
    }
  }, [matchUp, currentUserId]);

  /* -----EVENT STATE----- */
  const [isWithin24h, setIsWithin24h] = useState<boolean>(false);
  const [hasFinished, setHasFinished] = useState<boolean>(false);

  useEffect(() => {
    if (matchUp && currentUserId) {
      setHasFinished(Date.parse(matchUp?.date) < Date.parse(new Date().toISOString()));
      setIsWithin24h(Date.parse(matchUp?.date) - ms < Date.parse(new Date().toISOString()));
    }
  }, [matchUp, currentUserId]);

  useEffect(() => {
    if (matchUp && currentUserId) {
      initializeMap(matchUp?.address, true);
    }
  }, [matchUp, currentUserId]);

  useEffect(() => {
    if (matchUp && currentUserId) {
      initializeMap(matchUp?.address, true);
    }
  }, [matchUp, currentUserId]);

  /* -------RENDER CORRECT HEADER BUTTONS------- */
  const [headerButtons, setHeaderButtons] = useState<ReactNode[]>([]);
  useEffect(() => {
    if (matchUp && currentUserId) {
      if (isOrganizer)
        setHeaderButtons([
          <HeaderButton
            stayLight
            key={1}
            viewBox={share.viewBox}
            callback={() =>
              navigator.share &&
              navigator.share({
                url: window.location.href,
                title: matchUp.title,
                text: matchUp.description,
              })
            }
            icon={share.path}
          />,
          <HeaderButton stayLight key={2} viewBox={edit.viewBox} callback={() => {}} icon={edit.path} />,
        ]);
      else
        setHeaderButtons([
          <HeaderButton
            stayLight
            key={1}
            viewBox={watchList.viewBox}
            callback={() =>
              mutation.mutate({
                userId: currentUserId as string,
                matchUpId: matchUp.id as string,
              })
            }
            icon={watchList.path}
          />,
          <HeaderButton stayLight key={2} viewBox={share.viewBox} callback={() => {}} icon={share.path} />,
        ]);
    }
  }, [isSignedUp, isOrganizer, matchUp, currentUserId]);

  /* -------MODAL STATE------- */
  const [showSignUpModal, setShowSignUpModal] = useState<boolean>(false);
  const [showDescriptionModal, setShowDescriptionModal] = useState<boolean>(false);
  const [showParticipantsModal, setShowParticipantsModal] = useState<boolean>(false);
  const [showUpdatesModal, setShowUpdatesModal] = useState<boolean>(false);
  const [showRateEventModal, setShowRateEventModal] = useState<boolean>(false);
  const [showConfirmAttendanceModal, setShowConfirmAttendanceModal] = useState<boolean>(false);

  return (
    <>
      <div style={{ backgroundColor: colors.background[100] }} className={styles.page}>
        {/*  ------------MODALS------------  */}
        {showSignUpModal && matchUp && (
          <>
            <div className={styles.overlay} style={{ backgroundColor: colors.overlay[100] }}></div>
            <ConfirmJoinModal
              matchUp={matchUp}
              isSignedUp={isSignedUp}
              isWithin24Hours={isWithin24h}
              setShowModal={setShowSignUpModal}
            ></ConfirmJoinModal>
          </>
        )}

        {showDescriptionModal && matchUp && (
          <>
            <div className={styles.overlay} style={{ backgroundColor: colors.overlay[100] }}></div>
            <DescriptionModal
              description={matchUp.description}
              close={() => setShowDescriptionModal(false)}
            ></DescriptionModal>
          </>
        )}

        {showParticipantsModal && matchUp && (
          <>
            <div className={styles.overlay} style={{ backgroundColor: colors.overlay[60] }}></div>
            <ParticipantsModal
              hasFinished={hasFinished}
              isOrganizer={isOrganizer}
              close={() => setShowParticipantsModal(false)}
              participants={
                matchUp.signups.items.map((signup) => {
                  return { ...signup.user, signup: signup };
                }) as User[]
              }
            />
          </>
        )}

        {showUpdatesModal && matchUp && (
          <>
            <div className={styles.overlay} style={{ backgroundColor: colors.overlay[60] }}></div>
            <UpdatesModal
              close={() => setShowUpdatesModal(false)}
              updates={matchUp.updates}
              matchUpId={matchUp.id}
              organizer={matchUp.organizer as User}
              isSignedUp={isSignedUp}
            />
          </>
        )}

        {showRateEventModal && matchUp && (
          <>
            <div className={styles.overlay} style={{ backgroundColor: colors.overlay[60] }}></div>
            <RateMatchUpModal close={() => setShowRateEventModal(false)} matchUp={matchUp} />
          </>
        )}

        {showConfirmAttendanceModal && matchUp && (
          <>
            <div className={styles.overlay} style={{ backgroundColor: colors.overlay[60] }}></div>
            <ConfirmAttendanceModal
              isOrganizer={isOrganizer}
              close={() => setShowConfirmAttendanceModal(false)}
              participants={
                matchUp.signups.items.map((signup) => {
                  return { ...signup.user, signup: signup };
                }) as User[]
              }
            />
          </>
        )}

        {/*  ------------HEADER------------  */}
        <Header
          imageUrl={matchUp && matchUp.image}
          sportCategory={matchUp?.sportCategory}
          leftButton={
            <HeaderButton
              stayLight
              viewBox="0 0 10 10"
              callback={() => router.back()}
              icon={
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  d="M5.96126 5L8.89307 2.075C9.02146 1.94661 9.09359 1.77248 9.09359 1.59091C9.09359 1.40934 9.02146 1.23521 8.89307 1.10682C8.76468 0.978432 8.59055 0.906303 8.40898 0.906303C8.22741 0.906303 8.05328 0.978432 7.92489 1.10682L4.99989 4.03864L2.07489 1.10682C1.9465 0.978432 1.77237 0.906303 1.5908 0.906303C1.40923 0.906303 1.2351 0.978432 1.10671 1.10682C0.978321 1.23521 0.906193 1.40934 0.906193 1.59091C0.906193 1.77248 0.978321 1.94661 1.10671 2.075L4.03853 5L1.10671 7.925C1.0428 7.98839 0.992081 8.0638 0.957466 8.14688C0.922851 8.22997 0.905029 8.31908 0.905029 8.40909C0.905029 8.4991 0.922851 8.58822 0.957466 8.6713C0.992081 8.75439 1.0428 8.8298 1.10671 8.89318C1.17009 8.95709 1.2455 9.00781 1.32859 9.04243C1.41168 9.07704 1.50079 9.09486 1.5908 9.09486C1.68081 9.09486 1.76993 9.07704 1.85301 9.04243C1.9361 9.00781 2.01151 8.95709 2.07489 8.89318L4.99989 5.96137L7.92489 8.89318C7.98828 8.95709 8.06369 9.00781 8.14677 9.04243C8.22986 9.07704 8.31897 9.09486 8.40898 9.09486C8.49899 9.09486 8.58811 9.07704 8.67119 9.04243C8.75428 9.00781 8.82969 8.95709 8.89307 8.89318C8.95698 8.8298 9.0077 8.75439 9.04232 8.6713C9.07693 8.58822 9.09475 8.4991 9.09475 8.40909C9.09475 8.31908 9.07693 8.22997 9.04232 8.14688C9.0077 8.0638 8.95698 7.98839 8.89307 7.925L5.96126 5Z"
                />
              }
            />
          }
          rightButtons={headerButtons}
        ></Header>

        {isLoading ? (
          <div className={styles.loadingWrapper}>
            <LoadingSpinner></LoadingSpinner>
          </div>
        ) : isError ? (
          <div className={styles.errorWrapper}>
            <p>Oopsie, something went wront</p>
          </div>
        ) : (
          isSuccess &&
          matchUp && (
            <div className={styles.contentWrapper}>
              <MainInfo
                title={matchUp.title}
                sport={matchUp.sportCategory as TSportCategories}
                timestamp={matchUp.date}
                city={matchUp.location as TCity}
                costs={matchUp.totalCost}
                indoor={matchUp.indoor}
              />

              {/*  ------------BIG PILLS------------  */}
              <div className={styles.bigPills}>
                <SkillsCard skillLevel={matchUp.skillLevel}></SkillsCard>
                <SlotsCard slots={matchUp.attendanceMax} attending={matchUp.signups.items.length}></SlotsCard>
              </div>

              <div
                className={styles.divider}
                style={{
                  borderColor: darkMode ? colors.background[60] : '#DDDDDD',
                }}
              ></div>

              {/*  ------------ORGANIZER------------  */}
              <OrganizerCard organizer={matchUp.organizer as User}></OrganizerCard>

              <div
                className={styles.divider}
                style={{
                  borderColor: darkMode ? colors.background[60] : '#DDDDDD',
                }}
              ></div>

              {/*  ------------PARTICIPATING PREVIEW------------  */}
              <ParticipantsPreviewCard
                callback={() => setShowParticipantsModal(true)}
                users={
                  matchUp.signups.items.map((signup) => {
                    return { ...signup.user, attended: signup.attended };
                  }) as User[]
                }
                hasFinished={hasFinished}
                isOrganizer={isOrganizer}
              ></ParticipantsPreviewCard>
              <div
                className={styles.divider}
                style={{
                  borderColor: darkMode ? colors.background[60] : '#DDDDDD',
                }}
              ></div>

              {/*  ------DESCRIPTION PREVIEW------  */}
              <div className={styles.description}>
                <p style={{ color: colors.text[80] }} className="highlight-1">
                  Description
                </p>
                <p style={{ color: colors.text[60] }}>
                  {matchUp.description.slice(0, 180)}
                  {matchUp.description.length > 180 && '...'}
                  {matchUp.description.length > 180 && (
                    <span
                      onClick={() => setShowDescriptionModal(true)}
                      style={{ color: colors.primary[100] }}
                    >
                      {' '}
                      Read more
                    </span>
                  )}
                </p>
              </div>

              <div
                className={styles.divider}
                style={{
                  borderColor: darkMode ? colors.background[60] : '#DDDDDD',
                }}
              ></div>

              {isSignedUp && (
                <UpdatesPreviewCard
                  updates={matchUp.updates}
                  organizer={matchUp.organizer as User}
                  callback={() => setShowUpdatesModal(true)}
                ></UpdatesPreviewCard>
              )}
              {isSignedUp && (
                <div
                  className={styles.divider}
                  style={{
                    borderColor: darkMode ? colors.background[60] : '#DDDDDD',
                  }}
                ></div>
              )}

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${matchUp.address.geometry?.point[1]}%2C${matchUp.address.geometry?.point[0]}`}
              >
                <div id="map" className={styles.map}></div>
              </a>
            </div>
          )
        )}
        <div id="map" className={styles.nodisplaymap}></div>
        <Footer
          leftSide={
            <div className={styles.footerInfo}>
              <p className="fat" style={{ color: colors.text[100] }}>
                {matchUp?.signups.items.length} / {matchUp?.attendanceMax} players joined
              </p>
              <p className="small" style={{ color: colors.text[100] }}>
                {matchUp?.totalCost > 0 ? matchUp?.totalCost + '.00€' : 'Free'} + 5€ deposit{' '}
                {
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 20 20"
                      fill={colors.text[60]}
                    >
                      <path d="M9.29 13.29C9.247 13.3375 9.20693 13.3876 9.17 13.44C9.13216 13.4957 9.10189 13.5563 9.08 13.62C9.05117 13.6767 9.03095 13.7374 9.02001 13.8C9.0151 13.8666 9.0151 13.9334 9.02001 14C9.01663 14.1312 9.04402 14.2613 9.10001 14.38C9.14492 14.5041 9.21657 14.6168 9.30989 14.7101C9.40321 14.8034 9.51591 14.8751 9.64001 14.92C9.75971 14.9729 9.88913 15.0002 10.02 15.0002C10.1509 15.0002 10.2803 14.9729 10.4 14.92C10.5241 14.8751 10.6368 14.8034 10.7301 14.7101C10.8234 14.6168 10.8951 14.5041 10.94 14.38C10.9844 14.2584 11.0048 14.1294 11 14C11.0008 13.8684 10.9755 13.7379 10.9258 13.6161C10.876 13.4943 10.8027 13.3834 10.71 13.29C10.617 13.1963 10.5064 13.1219 10.3846 13.0711C10.2627 13.0203 10.132 12.9942 10 12.9942C9.86799 12.9942 9.73729 13.0203 9.61543 13.0711C9.49357 13.1219 9.38297 13.1963 9.29 13.29ZM10 0C8.02219 0 6.08879 0.58649 4.4443 1.6853C2.79981 2.78412 1.51809 4.3459 0.761209 6.17317C0.00433284 8.00043 -0.193701 10.0111 0.192152 11.9509C0.578004 13.8907 1.53041 15.6725 2.92894 17.0711C4.32746 18.4696 6.10929 19.422 8.0491 19.8079C9.98891 20.1937 11.9996 19.9957 13.8268 19.2388C15.6541 18.4819 17.2159 17.2002 18.3147 15.5557C19.4135 13.9112 20 11.9778 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7363 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0ZM10 18C8.41775 18 6.87104 17.5308 5.55544 16.6518C4.23985 15.7727 3.21447 14.5233 2.60897 13.0615C2.00347 11.5997 1.84504 9.99113 2.15372 8.43928C2.4624 6.88743 3.22433 5.46197 4.34315 4.34315C5.46197 3.22433 6.88743 2.4624 8.43928 2.15372C9.99113 1.84504 11.5997 2.00346 13.0615 2.60896C14.5233 3.21447 15.7727 4.23984 16.6518 5.55544C17.5308 6.87103 18 8.41775 18 10C18 12.1217 17.1572 14.1566 15.6569 15.6569C14.1566 17.1571 12.1217 18 10 18ZM10 5C9.47307 4.99966 8.95534 5.13812 8.49891 5.40144C8.04249 5.66476 7.66347 6.04366 7.4 6.5C7.32765 6.61382 7.27907 6.7411 7.25718 6.87418C7.23529 7.00726 7.24055 7.14339 7.27263 7.27439C7.30472 7.40538 7.36297 7.52854 7.44389 7.63643C7.52481 7.74433 7.62671 7.83475 7.74348 7.90224C7.86024 7.96974 7.98945 8.01292 8.12334 8.02918C8.25722 8.04544 8.39301 8.03445 8.52254 7.99688C8.65207 7.9593 8.77266 7.89591 8.87705 7.81052C8.98145 7.72513 9.06749 7.6195 9.13 7.5C9.21811 7.3474 9.34497 7.22078 9.49775 7.13298C9.65053 7.04518 9.82379 6.9993 10 7C10.2652 7 10.5196 7.10536 10.7071 7.29289C10.8946 7.48043 11 7.73478 11 8C11 8.26522 10.8946 8.51957 10.7071 8.70711C10.5196 8.89464 10.2652 9 10 9C9.73479 9 9.48043 9.10536 9.2929 9.29289C9.10536 9.48043 9 9.73478 9 10V11C9 11.2652 9.10536 11.5196 9.2929 11.7071C9.48043 11.8946 9.73479 12 10 12C10.2652 12 10.5196 11.8946 10.7071 11.7071C10.8946 11.5196 11 11.2652 11 11V10.82C11.6614 10.58 12.2174 10.1152 12.5708 9.50687C12.9242 8.89851 13.0525 8.18529 12.9334 7.49189C12.8143 6.79849 12.4552 6.16902 11.919 5.71352C11.3828 5.25801 10.7035 5.00546 10 5Z" />
                    </svg>
                  </span>
                }
              </p>
            </div>
          }
          rightButton={
            matchUp && matchUp?.attendanceMax - matchUp?.signups.items.length == 0 && !hasFinished ? (
              <Button
                variant="secondary"
                text={'FULL'}
                disabled={matchUp?.completed}
                callback={() => setShowConfirmAttendanceModal(true)}
              ></Button>
            ) : !hasFinished ? (
              <Button
                variant="primary"
                text={isSignedUp ? 'Cancel' : 'Join'}
                callback={() => setShowSignUpModal(true)}
              ></Button>
            ) : !isOrganizer ? (
              <Button
                variant="primary"
                text={isSignedUp ? 'Rate' : 'Finished'}
                disabled={!isSignedUp}
                callback={() => setShowRateEventModal(true)}
              ></Button>
            ) : (
              <Button
                variant="primary"
                text={'Review'}
                disabled={matchUp?.completed}
                callback={() => setShowConfirmAttendanceModal(true)}
              ></Button>
            )
          }
        ></Footer>
      </div>
    </>
  );
};
export default MatchUpDetail;
