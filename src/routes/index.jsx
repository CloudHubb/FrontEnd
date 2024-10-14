import { Navigate, useRoutes } from 'react-router-dom';

import { routes } from '../constants/routes';

import Header from '../components/header/Header';

import HomePage from '../pages/home/page';

import CommunityPage from '../pages/community/page';
import BoardDetailPage from '../pages/community/boardDetail';
import BoardWritePage from '../pages/community/boardWrite';

import DataRoomPage from '../pages/data_room/page';

// 상담센터 페이지
import CounselingCenterPage from '../pages/data_room/counseling_center/CounselingPage';

import MyPage from '../pages/my_page/page';

// 자가진단 페이지
import SelfTestPage from '../pages/self_test/page';
import GaslightingTestPage from '../pages/self_test/gaslightingTestPage';
import TestDescriptionPage from '../pages/self_test/TestDescriptionPage';
import TestProgressPage from '../pages/self_test/TestProgressPage';
import TestResultPage from '../pages/self_test/TestResultPage';

// 마음일기 페이지
import DiaryPage from '../pages/diary/page';
import DiaryWritePage from '../pages/diary/_subComponents/diaryWritePage';

import UserEditPage from '../pages/my_page/_subComponents/_userSetting/userEditPage';
import UserProfileEditPage from '../pages/my_page/_subComponents//_userSetting/userProfileEditPage';
import SecretCardPasswordPage from '../pages/my_page/_subComponents/_secretContainer/secretCardPasswordPage';
import SecretCardPage from '../pages/my_page/_subComponents/_secretContainer/secretCardPage';
import WritingSecretItemPage from '../pages/my_page/_subComponents/_secretContainer/writingSecretItemPage';
import SearchResultPage from '../pages/search_result/page';
import MyLogPassswordPage from '../pages/my_page/_subComponents/_myActivity/myLogPassswordPage';
import MyLogPage from '../pages/my_page/_subComponents/_myActivity/myLogPage';

export default function Router() {
  const elements = [
    {
      path: '/',
      element: <Header />,
      children: [
        {
          path: routes.home,
          element: <HomePage />,
        },
        {
          path: routes.community,
          element: <CommunityPage />,
        },
        {
          path: routes.boardDetail,
          element: <BoardDetailPage />,
        },
        {
          path: routes.boardWrite,
          element: <BoardWritePage />,
        },
        {
          path: routes.dataroom,
          element: <DataRoomPage />,
        },
        {
          path: routes.mypage,
          element: <MyPage />,
        },
        {
          path: routes.userInfoEdit,
          element: <UserEditPage />,
        },
        {
          path: routes.userProfileEdit,
          element: <UserProfileEditPage />,
        },
        {
          path: routes.secretCardPassword,
          element: <SecretCardPasswordPage />,
        },
        {
          path: routes.secretCard,
          element: <SecretCardPage />,
        },
        {
          path: routes.writingSecretItem,
          element: <WritingSecretItemPage />,
        },
        {
          path: routes.myLogPassword,
          element: <MyLogPassswordPage />,
        },
        {
          path: routes.myLog,
          element: <MyLogPage />,
        },
        {
          path: routes.selftest,
          element: <SelfTestPage />,
        },
        {
          path: routes.gaslighting,
          element: <GaslightingTestPage />,
        },
        {
          path: routes.testDescription,
          element: <TestDescriptionPage />,
        },
        {
          path: routes.testProgress,
          element: <TestProgressPage />,
        },
        {
          path: routes.selftTestResult,
          element: <TestResultPage />,
        },
        {
          path: routes.search,
          element: <SearchResultPage />,
        },
        {
          path: routes.diary,
          element: <DiaryPage />,
        },
        {
          path: routes.diaryWrite,
          element: <DiaryWritePage />,
        },
        {
          path: routes.counselingCenter,
          element: <CounselingCenterPage />,
        },
        {
          path: '/',
          element: <Navigate replace to={routes.home} />,
        },
      ],
    },
  ];

  return useRoutes(elements);
}
