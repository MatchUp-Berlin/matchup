import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Navigation from '../../components/misc/Navigation';
import { useTheme } from '../../contexts/Theme';
import { useQuery, useQueryClient } from 'react-query';
import styles from './styles/id.module.scss';
import { Avatar, Button, Divider } from '../../components/misc';
import moment from 'moment';

import MatchUpCard from '../../components/cards/MatchUp.Card';
import { getOrganizerMatchUps } from '../../utils/Query/getOrganizerMatchUps.util';
import ThemeButton from '../../components/misc/ThemeButton';
import { useState } from 'react';
import avatarDefault from '../../public/default-avatar.png';
import { getNumOrganizerMatchups } from '../../utils/Query/getNumOrganizedMatchUps.util';
import { useAuth } from '../../contexts/Auth';
import Empty from '../../components/misc/Empty';
import { getUserById } from '../../utils/Query/getUserById.util';
import { TSportCategories, TSkillLevels } from '../../utils/types/MatchUp.Type';
import LoadingSpinner from '../../components/misc/LoadingSpinner';
import { Storage } from 'aws-amplify';

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

  function uploadProfileImage() {
    let input = document.createElement('input');
    input.type = 'file';
    input.setAttribute('multiple', "false");
    input.setAttribute('accept', 'image/*');
    input.onchange = function (event) {
      currentUserId &&
        Storage.put(currentUserId, event.target.files[0], { level: 'public', contentType: 'image/*' })
          .then(() => queryClient.invalidateQueries(['user', currentUserId]))
          .catch((err) => console.log(err));
    };
    input.click();
  }

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

  if (isCurrentUser && currentUser) {
    return (
      <>
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
                    viewBox="0 0 16 21"
                    fill={colors.text['60']}
                  >
                    <path d="M15.89 8.55001C15.8069 8.3851 15.6798 8.24642 15.5227 8.14934C15.3656 8.05226 15.1847 8.00057 15 8.00001H10V2.00001C10.0107 1.7807 9.94898 1.56394 9.82428 1.38321C9.69957 1.20248 9.51885 1.06782 9.31 1.00001C9.10923 0.933956 8.89269 0.933213 8.69146 0.997892C8.49024 1.06257 8.31468 1.18934 8.19 1.36001L0.190001 12.36C0.0897665 12.5049 0.0295794 12.6737 0.0155313 12.8493C0.00148318 13.0249 0.0340726 13.2011 0.110001 13.36C0.179923 13.5418 0.301389 13.6991 0.459491 13.8128C0.617592 13.9265 0.805449 13.9916 1 14H6V20C6.00016 20.2109 6.06697 20.4163 6.1909 20.5869C6.31482 20.7576 6.48951 20.8846 6.69 20.95C6.79047 20.9812 6.89483 20.998 7 21C7.15779 21.0004 7.31343 20.9635 7.45421 20.8922C7.59499 20.821 7.71691 20.7174 7.81 20.59L15.81 9.59001C15.9177 9.44081 15.9822 9.26477 15.9963 9.08127C16.0105 8.89777 15.9737 8.71394 15.89 8.55001ZM8 16.92V13C8 12.7348 7.89464 12.4804 7.70711 12.2929C7.51957 12.1054 7.26522 12 7 12H3L8 5.08001V9.00001C8 9.26523 8.10536 9.51958 8.29289 9.70712C8.48043 9.89466 8.73478 10 9 10H13L8 16.92Z" />
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
                    viewBox="0 0 21 20"
                    fill={colors.text['60']}
                  >
                    <path d="M20 7.66999C19.9368 7.48708 19.822 7.32642 19.6693 7.20749C19.5167 7.08857 19.3328 7.01649 19.14 6.99999L13.45 6.16999L10.9 0.999993C10.8181 0.830922 10.6903 0.688335 10.5311 0.588566C10.3719 0.488798 10.1878 0.435883 9.99999 0.435883C9.81214 0.435883 9.62808 0.488798 9.4689 0.588566C9.30973 0.688335 9.18188 0.830922 9.09999 0.999993L6.54999 6.15999L0.859993 6.99999C0.674915 7.0263 0.500917 7.10396 0.357743 7.22415C0.214569 7.34435 0.107953 7.50227 0.0499927 7.67999C-0.00306233 7.85367 -0.00782339 8.03851 0.0362204 8.21469C0.0802643 8.39086 0.17145 8.55172 0.299993 8.67999L4.42999 12.68L3.42999 18.36C3.38962 18.5484 3.40455 18.7445 3.47298 18.9246C3.54141 19.1048 3.66043 19.2613 3.81572 19.3754C3.97101 19.4895 4.15596 19.5563 4.34832 19.5677C4.54068 19.5792 4.73225 19.5348 4.89999 19.44L9.99999 16.77L15.1 19.44C15.2403 19.5192 15.3989 19.5605 15.56 19.56C15.7718 19.5607 15.9784 19.4942 16.15 19.37C16.3051 19.2589 16.4252 19.1056 16.4961 18.9284C16.567 18.7512 16.5857 18.5575 16.55 18.37L15.55 12.69L19.68 8.68999C19.8244 8.56767 19.9311 8.4069 19.9877 8.22634C20.0444 8.04579 20.0486 7.85287 20 7.66999ZM13.85 11.67C13.7342 11.7824 13.6474 11.9211 13.5969 12.0744C13.5464 12.2276 13.5338 12.3908 13.56 12.55L14.28 16.75L10.52 14.75C10.3739 14.6777 10.213 14.6401 10.05 14.6401C9.88696 14.6401 9.72612 14.6777 9.57999 14.75L5.81999 16.75L6.53999 12.55C6.56623 12.3908 6.55356 12.2276 6.50306 12.0744C6.45256 11.9211 6.36574 11.7824 6.24999 11.67L3.24999 8.66999L7.45999 8.05999C7.62199 8.03746 7.77599 7.97553 7.90849 7.87964C8.04099 7.78376 8.14795 7.65683 8.21999 7.50999L9.99999 3.69999L11.88 7.51999C11.952 7.66683 12.059 7.79376 12.1915 7.88964C12.324 7.98553 12.478 8.04746 12.64 8.06999L16.85 8.67999L13.85 11.67Z" />
                  </svg>
                  <p style={{ color: colors.text['60'] }}>Organized {organizedCountData || 0} MatchUps</p>
                </div>
                <div className={styles.detail}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill={colors.text['60']}
                  >
                    <path d="M19 2H16V1C16 0.734784 15.8946 0.48043 15.7071 0.292893C15.5196 0.105357 15.2652 0 15 0H5C4.73478 0 4.48043 0.105357 4.29289 0.292893C4.10536 0.48043 4 0.734784 4 1V2H1C0.734784 2 0.48043 2.10536 0.292893 2.29289C0.105357 2.48043 0 2.73478 0 3V6C0 7.06087 0.421427 8.07828 1.17157 8.82843C1.92172 9.57857 2.93913 10 4 10H5.54C6.44453 11.0091 7.66406 11.6824 9 11.91V14H8C7.20435 14 6.44129 14.3161 5.87868 14.8787C5.31607 15.4413 5 16.2044 5 17V19C5 19.2652 5.10536 19.5196 5.29289 19.7071C5.48043 19.8946 5.73478 20 6 20H14C14.2652 20 14.5196 19.8946 14.7071 19.7071C14.8946 19.5196 15 19.2652 15 19V17C15 16.2044 14.6839 15.4413 14.1213 14.8787C13.5587 14.3161 12.7956 14 12 14H11V11.91C12.3359 11.6824 13.5555 11.0091 14.46 10H16C17.0609 10 18.0783 9.57857 18.8284 8.82843C19.5786 8.07828 20 7.06087 20 6V3C20 2.73478 19.8946 2.48043 19.7071 2.29289C19.5196 2.10536 19.2652 2 19 2ZM4 8C3.46957 8 2.96086 7.78929 2.58579 7.41421C2.21071 7.03914 2 6.53043 2 6V4H4V6C4.0022 6.68171 4.12056 7.35806 4.35 8H4ZM12 16C12.2652 16 12.5196 16.1054 12.7071 16.2929C12.8946 16.4804 13 16.7348 13 17V18H7V17C7 16.7348 7.10536 16.4804 7.29289 16.2929C7.48043 16.1054 7.73478 16 8 16H12ZM14 6C14 7.06087 13.5786 8.07828 12.8284 8.82843C12.0783 9.57857 11.0609 10 10 10C8.93913 10 7.92172 9.57857 7.17157 8.82843C6.42143 8.07828 6 7.06087 6 6V2H14V6ZM18 6C18 6.53043 17.7893 7.03914 17.4142 7.41421C17.0391 7.78929 16.5304 8 16 8H15.65C15.8794 7.35806 15.9978 6.68171 16 6V4H18V6Z" />
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
                About
              </p>
              <p style={{ color: colors.text['60'] }}>
                {currentUser?.about ||
                  `Hi, my name is ${currentUser?.givenName + ' ' + currentUser?.familyName}. Let's MatchUp!`}
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
                  viewBox="0 0 16 21"
                  fill={colors.text['60']}
                >
                  <path d="M15.89 8.55001C15.8069 8.3851 15.6798 8.24642 15.5227 8.14934C15.3656 8.05226 15.1847 8.00057 15 8.00001H10V2.00001C10.0107 1.7807 9.94898 1.56394 9.82428 1.38321C9.69957 1.20248 9.51885 1.06782 9.31 1.00001C9.10923 0.933956 8.89269 0.933213 8.69146 0.997892C8.49024 1.06257 8.31468 1.18934 8.19 1.36001L0.190001 12.36C0.0897665 12.5049 0.0295794 12.6737 0.0155313 12.8493C0.00148318 13.0249 0.0340726 13.2011 0.110001 13.36C0.179923 13.5418 0.301389 13.6991 0.459491 13.8128C0.617592 13.9265 0.805449 13.9916 1 14H6V20C6.00016 20.2109 6.06697 20.4163 6.1909 20.5869C6.31482 20.7576 6.48951 20.8846 6.69 20.95C6.79047 20.9812 6.89483 20.998 7 21C7.15779 21.0004 7.31343 20.9635 7.45421 20.8922C7.59499 20.821 7.71691 20.7174 7.81 20.59L15.81 9.59001C15.9177 9.44081 15.9822 9.26477 15.9963 9.08127C16.0105 8.89777 15.9737 8.71394 15.89 8.55001ZM8 16.92V13C8 12.7348 7.89464 12.4804 7.70711 12.2929C7.51957 12.1054 7.26522 12 7 12H3L8 5.08001V9.00001C8 9.26523 8.10536 9.51958 8.29289 9.70712C8.48043 9.89466 8.73478 10 9 10H13L8 16.92Z" />
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
                  viewBox="0 0 21 20"
                  fill={colors.text['60']}
                >
                  <path d="M20 7.66999C19.9368 7.48708 19.822 7.32642 19.6693 7.20749C19.5167 7.08857 19.3328 7.01649 19.14 6.99999L13.45 6.16999L10.9 0.999993C10.8181 0.830922 10.6903 0.688335 10.5311 0.588566C10.3719 0.488798 10.1878 0.435883 9.99999 0.435883C9.81214 0.435883 9.62808 0.488798 9.4689 0.588566C9.30973 0.688335 9.18188 0.830922 9.09999 0.999993L6.54999 6.15999L0.859993 6.99999C0.674915 7.0263 0.500917 7.10396 0.357743 7.22415C0.214569 7.34435 0.107953 7.50227 0.0499927 7.67999C-0.00306233 7.85367 -0.00782339 8.03851 0.0362204 8.21469C0.0802643 8.39086 0.17145 8.55172 0.299993 8.67999L4.42999 12.68L3.42999 18.36C3.38962 18.5484 3.40455 18.7445 3.47298 18.9246C3.54141 19.1048 3.66043 19.2613 3.81572 19.3754C3.97101 19.4895 4.15596 19.5563 4.34832 19.5677C4.54068 19.5792 4.73225 19.5348 4.89999 19.44L9.99999 16.77L15.1 19.44C15.2403 19.5192 15.3989 19.5605 15.56 19.56C15.7718 19.5607 15.9784 19.4942 16.15 19.37C16.3051 19.2589 16.4252 19.1056 16.4961 18.9284C16.567 18.7512 16.5857 18.5575 16.55 18.37L15.55 12.69L19.68 8.68999C19.8244 8.56767 19.9311 8.4069 19.9877 8.22634C20.0444 8.04579 20.0486 7.85287 20 7.66999ZM13.85 11.67C13.7342 11.7824 13.6474 11.9211 13.5969 12.0744C13.5464 12.2276 13.5338 12.3908 13.56 12.55L14.28 16.75L10.52 14.75C10.3739 14.6777 10.213 14.6401 10.05 14.6401C9.88696 14.6401 9.72612 14.6777 9.57999 14.75L5.81999 16.75L6.53999 12.55C6.56623 12.3908 6.55356 12.2276 6.50306 12.0744C6.45256 11.9211 6.36574 11.7824 6.24999 11.67L3.24999 8.66999L7.45999 8.05999C7.62199 8.03746 7.77599 7.97553 7.90849 7.87964C8.04099 7.78376 8.14795 7.65683 8.21999 7.50999L9.99999 3.69999L11.88 7.51999C11.952 7.66683 12.059 7.79376 12.1915 7.88964C12.324 7.98553 12.478 8.04746 12.64 8.06999L16.85 8.67999L13.85 11.67Z" />
                </svg>
                <p style={{ color: colors.text['60'] }}>Organized {organizedCountData || 0} MatchUps</p>
              </div>
              <div className={styles.detail}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill={colors.text['60']}
                >
                  <path d="M19 2H16V1C16 0.734784 15.8946 0.48043 15.7071 0.292893C15.5196 0.105357 15.2652 0 15 0H5C4.73478 0 4.48043 0.105357 4.29289 0.292893C4.10536 0.48043 4 0.734784 4 1V2H1C0.734784 2 0.48043 2.10536 0.292893 2.29289C0.105357 2.48043 0 2.73478 0 3V6C0 7.06087 0.421427 8.07828 1.17157 8.82843C1.92172 9.57857 2.93913 10 4 10H5.54C6.44453 11.0091 7.66406 11.6824 9 11.91V14H8C7.20435 14 6.44129 14.3161 5.87868 14.8787C5.31607 15.4413 5 16.2044 5 17V19C5 19.2652 5.10536 19.5196 5.29289 19.7071C5.48043 19.8946 5.73478 20 6 20H14C14.2652 20 14.5196 19.8946 14.7071 19.7071C14.8946 19.5196 15 19.2652 15 19V17C15 16.2044 14.6839 15.4413 14.1213 14.8787C13.5587 14.3161 12.7956 14 12 14H11V11.91C12.3359 11.6824 13.5555 11.0091 14.46 10H16C17.0609 10 18.0783 9.57857 18.8284 8.82843C19.5786 8.07828 20 7.06087 20 6V3C20 2.73478 19.8946 2.48043 19.7071 2.29289C19.5196 2.10536 19.2652 2 19 2ZM4 8C3.46957 8 2.96086 7.78929 2.58579 7.41421C2.21071 7.03914 2 6.53043 2 6V4H4V6C4.0022 6.68171 4.12056 7.35806 4.35 8H4ZM12 16C12.2652 16 12.5196 16.1054 12.7071 16.2929C12.8946 16.4804 13 16.7348 13 17V18H7V17C7 16.7348 7.10536 16.4804 7.29289 16.2929C7.48043 16.1054 7.73478 16 8 16H12ZM14 6C14 7.06087 13.5786 8.07828 12.8284 8.82843C12.0783 9.57857 11.0609 10 10 10C8.93913 10 7.92172 9.57857 7.17157 8.82843C6.42143 8.07828 6 7.06087 6 6V2H14V6ZM18 6C18 6.53043 17.7893 7.03914 17.4142 7.41421C17.0391 7.78929 16.5304 8 16 8H15.65C15.8794 7.35806 15.9978 6.68171 16 6V4H18V6Z" />
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
