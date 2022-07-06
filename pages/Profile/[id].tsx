import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Navigation from '../../components/misc/Navigation';
import { useTheme } from '../../contexts/Theme';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import styles from './styles/id.module.scss';
import { Avatar, Button, Divider } from '../../components/misc';
import moment from 'moment';

import MatchUpCard from '../../components/cards/MatchUp.Card';
import { getOrganizerMatchUps } from '../../utils/Query/getOrganizerMatchUps.util';
import ThemeButton from '../../components/misc/ThemeButton';
import { useState } from 'react';
import { getNumOrganizerMatchups } from '../../utils/Query/getNumOrganizedMatchUps.util';
import { useAuth } from '../../contexts/Auth';
import Empty from '../../components/misc/Empty';
import { getUserById } from '../../utils/Query/getUserById.util';
import { TSportCategories, TSkillLevels } from '../../utils/types/MatchUp.Type';
import LoadingSpinner from '../../components/misc/LoadingSpinner';
import { Storage } from 'aws-amplify';
import SmallButton from '../../components/misc/SmallButton';
import { blitz, close, cup, star } from '../../components/icons';
import EditBioModal from '../../components/modals/EditAbout.Modal';
import EditAboutModal from '../../components/modals/EditAbout.Modal';
import { updateUser } from '../../utils/Mutation/updateUser.util';

const ProfileDetailPage: NextPage = () => {
  const { colors } = useTheme();
  const router = useRouter();
  const { id } = router.query;
  const queryClient = useQueryClient();

  // getting current user info
  const { currentUserId, currentUser, logout } = useAuth();
  const isCurrentUser = currentUserId === id;

  // if it's not the current user, fetch other user
  const userQuery = useQuery(['user', id], () => getUserById(id as string), {
    enabled: !isCurrentUser,
  });

  // getting organized matchups count
  const { data: organizedCountData, isRefetching: organizedCountIsRefetching } = useQuery(
    ['organizedMatchUpsCount', id],
    () => getNumOrganizerMatchups(id as string),
    { enabled: !!id }
  );

  // getting organized events
  const [organizedEventsToken, setOrganizedEventsToken] = useState<string | null>();
  const organizedQuery = useQuery(
    ['organized', id],
    () => getOrganizerMatchUps(id as string, organizedEventsToken ? organizedEventsToken : undefined),
    {
      enabled: !!id,
      onSuccess: (data) => setOrganizedEventsToken(data.nextToken),
      keepPreviousData: true,
    }
  );

  const [showNextParticipating, setShowNextParticipating] = useState(3);
  function showMoreParticipating() {
    if (isCurrentUser && currentUser) {
      showNextParticipating < currentUser?.signups.items.length + 3 &&
        setShowNextParticipating(showNextParticipating + 3);
      return;
    }

    if (!isCurrentUser && userQuery.data) {
      showNextParticipating < userQuery.data?.signups.items.length + 3 &&
        setShowNextParticipating(showNextParticipating + 3);
      return;
    }
  }

  // mutations
  function uploadAvatar(event: any) {
    currentUserId &&
      Storage.put(currentUserId, event.target.files[0], { level: 'public', contentType: 'image/*' })
        .then(() => queryClient.invalidateQueries(['user', currentUserId]))
        .catch((err) => console.log(err));
  }

  function uploadProfileImage() {
    let input = document.createElement('input');
    input.type = 'file';
    input.setAttribute('multiple', 'false');
    input.setAttribute('accept', 'image/*');
    input.onchange = uploadAvatar;
    input.click();
  }

  const [isEditingAbout, setIsEditingAbout] = useState<boolean>(false);
  const [newAbout, setNewAbout] = useState<string>('');
  const aboutMutation = useMutation(() => updateUser(currentUserId as string, { about: newAbout }), {
    onSuccess: () =>
      queryClient.invalidateQueries(['user', currentUserId]).then(() => setIsEditingAbout(false)),
  });

  if (isCurrentUser && currentUser) {
    return (
      <>
        {/* MODALS */}
        {isEditingAbout && (
          <>
            <EditAboutModal
              newAbout={newAbout}
              setNewAbout={(e) => setNewAbout(e.target.value)}
              save={() => aboutMutation.mutate()}
              close={() => setIsEditingAbout(false)}
              about={currentUser.about}
            ></EditAboutModal>
          </>
        )}

        <div className={styles.pageWrapper} style={{ backgroundColor: colors.background['100'] }}>
          <section className={styles.contentWrapper}>
            <div className={styles.avatarWrapper} onClick={uploadProfileImage}>
              <Avatar size={'large'} image={currentUser.profileImage} />
            </div>
            {/*//////// PROFILE MAIN INFO /////////*/}
            <div className={styles.profileMainInfo}>
              <h1 style={{ color: colors.text['100'] }}>
                {currentUser?.givenName + ' ' + currentUser?.familyName}
              </h1>
              <div className={styles.details} style={{ color: colors.text[80] }}>
                <div className={styles.detail}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="21"
                    viewBox={blitz.viewBox}
                    fill={colors.text['60']}
                  >
                    {blitz.path}
                  </svg>
                  <p style={{ color: colors.text['60'] }}>
                    Joined in {moment(currentUser?.createdAt).format('YYYY')}
                  </p>
                </div>
                <div className={styles.detail}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="20"
                    viewBox={star.viewBox}
                    fill={colors.text['60']}
                  >
                    {star.path}
                  </svg>
                  <p style={{ color: colors.text['60'] }}>Organized {organizedCountData || 0} MatchUps</p>
                </div>
                <div className={styles.detail}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox={cup.viewBox}
                    fill={colors.text['60']}
                  >
                    {cup.path}
                  </svg>
                  <p style={{ color: colors.text['60'] }}>
                    Participated in {currentUser?.signups.items.length || 0} MatchUps
                  </p>
                </div>
              </div>
            </div>
            <Divider />
            {/*//////// ABOUT SECTION /////////*/}
            <div className={styles.aboutWrapper}>
              <p className="highlight-2" style={{ color: colors.text['100'] }}>
                About{' '}
              </p>
              <p style={{ color: colors.text['60'] }}>
                {currentUser?.about ||
                  `Hi, my name is ${currentUser?.givenName + ' ' + currentUser?.familyName}. Let's MatchUp!`}
                <span onClick={() => setIsEditingAbout(true)} style={{ color: colors.primary[100] }}>
                  {' '}
                  Edit
                </span>
              </p>
            </div>
            <Divider />
            {/*/////// PARTICIPATED EVENTS /////////*/}
            <div className={styles.matchupsWrapper}>
              <p className="highlight-2" style={{ color: colors.text['100'] }}>
                Participated in {currentUser?.signups.items.length || 0} MatchUps
              </p>
              <div className={styles.cardsWrapper}>
                {currentUser &&
                  currentUser.signups.items.length != 0 &&
                  currentUser.signups.items
                    .slice(0, showNextParticipating)
                    .map((signup) => (
                      <MatchUpCard
                        key={signup?.matchUp?.id}
                        id={signup?.matchUp?.id as string}
                        variant="small"
                        date={signup?.matchUp?.date as string}
                        indoor={signup.matchUp?.indoor as boolean}
                        title={signup?.matchUp?.title as string}
                        attendanceMax={signup?.matchUp?.attendanceMax as number}
                        participating={signup?.matchUp?.signups?.items?.length || 0}
                        location={signup?.matchUp?.location as string}
                        sportCategory={signup?.matchUp?.sportCategory as TSportCategories}
                        skillLevel={signup?.matchUp?.skillLevel as TSkillLevels}
                        image={signup?.matchUp?.image as string}
                        totalCost={signup?.matchUp?.totalCost as number}
                        reservedCourt={signup?.matchUp?.reservedCourt as boolean}
                      ></MatchUpCard>
                    ))}
              </div>
              {showNextParticipating <= currentUser?.signups.items.length && (
                <Button variant="secondary" callback={showMoreParticipating} text={'Show more'}></Button>
              )}
            </div>
            {/*/////// ORGANIZED EVENTS /////////*/}
            {organizedQuery.isSuccess && organizedQuery.data.items.length > 0 && (
              <>
                <Divider />
                <div className={styles.matchupsWrapper}>
                  <p className="highlight-2" style={{ color: colors.text['100'] }}>
                    Organized {organizedCountData || 0} MatchUps
                  </p>
                  <div className={styles.cardsWrapper}>
                    {organizedCountIsRefetching && (
                      <div className={styles.refetchWrapper}>
                        <LoadingSpinner />
                      </div>
                    )}
                    {organizedQuery.data?.items.map((organized) => (
                      <>
                        <MatchUpCard
                          key={organized.matchUp.id}
                          id={organized.matchUp.id as string}
                          variant="small"
                          date={organized.matchUp.date as string}
                          indoor={organized.matchUp.indoor as boolean}
                          title={organized.matchUp.title as string}
                          attendanceMax={organized.matchUp.attendanceMax as number}
                          participating={organized.matchUp.signups?.items?.length || 0}
                          location={organized.matchUp.location as string}
                          sportCategory={organized.matchUp.sportCategory as TSportCategories}
                          skillLevel={organized.matchUp.skillLevel as TSkillLevels}
                          image={organized.matchUp.image as string}
                          totalCost={organized.matchUp.totalCost as number}
                          reservedCourt={organized.matchUp.reservedCourt as boolean}
                        ></MatchUpCard>
                      </>
                    ))}
                    <Button
                      variant="secondary"
                      callback={() => organizedQuery.refetch()}
                      text={'Show more'}
                    ></Button>
                  </div>
                </div>
              </>
            )}
            <p
              onClick={() => {
                logout().then(() => router.push('/'));
              }}
              className="small"
              style={{ color: colors.primary[100], textAlign: 'center' }}
            >
              Sign out
            </p>
          </section>
          <ThemeButton />
          <Navigation />
        </div>
      </>
    );
  }

  return (
    <div className={styles.pageWrapper} style={{ backgroundColor: colors.background['100'] }}>
      <div className={styles.closeButton}>
        <SmallButton viewBox={close.viewBox} icon={close.path} />
      </div>
      {userQuery.isLoading ? (
        <div className={styles.loadingWrapper}>
          <LoadingSpinner />
        </div>
      ) : userQuery.isError ? (
        <Empty text="Oops. Something went wrong." />
      ) : userQuery.isSuccess && userQuery.data ? (
        <section className={styles.contentWrapper}>
          <div className={styles.avatarWrapper}>
            <Avatar size={'large'} image={userQuery.data.profileImage} />
          </div>
          <div className={styles.profileMainInfo}>
            <h1 style={{ color: colors.text['100'] }}>
              {userQuery.data?.givenName + ' ' + userQuery.data?.familyName}
            </h1>
            <div className={styles.details} style={{ color: colors.text[80] }}>
              <div className={styles.detail}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="21"
                  viewBox={blitz.viewBox}
                  fill={colors.text['60']}
                >
                  {blitz.path}
                </svg>
                <p style={{ color: colors.text['60'] }}>
                  Joined in {moment(userQuery.data?.createdAt).format('YYYY')}
                </p>
              </div>
              <div className={styles.detail}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="20"
                  viewBox={star.viewBox}
                  fill={colors.text['60']}
                >
                  {star.path}
                </svg>
                <p style={{ color: colors.text['60'] }}>Organized {organizedCountData || 0} MatchUps</p>
              </div>
              <div className={styles.detail}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox={cup.viewBox}
                  fill={colors.text['60']}
                >
                  {cup.path}
                </svg>
                <p style={{ color: colors.text['60'] }}>
                  Participated in {userQuery.data?.signups.items.length || 0} MatchUps
                </p>
              </div>
            </div>
          </div>
          <Divider />
          {/*//////// ABOUT SECTION /////////*/}
          <div className={styles.aboutWrapper}>
            <p className="highlight-2" style={{ color: colors.text['100'] }}>
              About
            </p>
            <p style={{ color: colors.text['60'] }}>
              {userQuery.data?.about ||
                `Hi, my name is ${
                  userQuery.data?.givenName + ' ' + userQuery.data?.familyName
                }. Let's MatchUp!`}
            </p>
          </div>
          <Divider />
          {/*/////// PARTICIPATED EVENTS /////////*/}
          <div className={styles.matchupsWrapper}>
            <p className="highlight-2" style={{ color: colors.text['100'] }}>
              Participated in {userQuery.data?.signups.items.length || 0} MatchUps
            </p>
            <div className={styles.cardsWrapper}>
              {userQuery.data &&
                userQuery.data.signups.items.length != 0 &&
                userQuery.data.signups.items
                  .slice(0, showNextParticipating)
                  .map((signup) => (
                    <MatchUpCard
                      key={signup?.matchUp?.id}
                      id={signup?.matchUp?.id as string}
                      variant="small"
                      date={signup?.matchUp?.date as string}
                      indoor={signup.matchUp?.indoor as boolean}
                      title={signup?.matchUp?.title as string}
                      attendanceMax={signup?.matchUp?.attendanceMax as number}
                      participating={signup?.matchUp?.signups?.items?.length || 0}
                      location={signup?.matchUp?.location as string}
                      sportCategory={signup?.matchUp?.sportCategory as TSportCategories}
                      skillLevel={signup?.matchUp?.skillLevel as TSkillLevels}
                      image={signup?.matchUp?.image as string}
                      totalCost={signup?.matchUp?.totalCost as number}
                      reservedCourt={signup?.matchUp?.reservedCourt as boolean}
                    ></MatchUpCard>
                  ))}
            </div>
            {showNextParticipating <= userQuery.data?.signups.items.length && (
              <Button variant="secondary" callback={showMoreParticipating} text={'Show more'}></Button>
            )}
          </div>
          {/*/////// ORGANIZED EVENTS /////////*/}
          {organizedQuery.isSuccess && organizedQuery.data.items.length > 0 && (
            <>
              <Divider />
              <div className={styles.matchupsWrapper}>
                <p className="highlight-2" style={{ color: colors.text['100'] }}>
                  Organized {organizedCountData || 0} MatchUps
                </p>
                <div className={styles.cardsWrapper}>
                  {organizedCountIsRefetching && (
                    <div className={styles.refetchWrapper}>
                      <LoadingSpinner />
                    </div>
                  )}
                  {organizedQuery.data?.items.map((organized) => (
                    <>
                      <MatchUpCard
                        key={organized.matchUp.id}
                        id={organized.matchUp.id as string}
                        variant="small"
                        date={organized.matchUp.date as string}
                        indoor={organized.matchUp.indoor as boolean}
                        title={organized.matchUp.title as string}
                        attendanceMax={organized.matchUp.attendanceMax as number}
                        participating={organized.matchUp.signups?.items?.length || 0}
                        location={organized.matchUp.location as string}
                        sportCategory={organized.matchUp.sportCategory as TSportCategories}
                        skillLevel={organized.matchUp.skillLevel as TSkillLevels}
                        image={organized.matchUp.image as string}
                        totalCost={organized.matchUp.totalCost as number}
                        reservedCourt={organized.matchUp.reservedCourt as boolean}
                      ></MatchUpCard>
                    </>
                  ))}
                </div>
                <Button
                  variant="secondary"
                  disabled={organizedQuery.isRefetching}
                  callback={() => organizedQuery.refetch()}
                  text={'Show more'}
                ></Button>
              </div>
            </>
          )}
        </section>
      ) : (
        <></>
      )}

      <ThemeButton />
      <Navigation />
    </div>
  );
};
export default ProfileDetailPage;
