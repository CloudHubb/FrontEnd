// 예시
import { Navigate, useRoutes } from 'react-router-dom';
import { routes } from '../constants/routes';
import HomePage from '../pages/home/page';
import CommunityPage from '../pages/community/page';
import DataRoomPage from '../pages/data_room/page';
import MyPage from '../pages/my_page/page';

// 자가진단 페이지
import SelfTestPage from '../pages/self_test/page';
import GaslightingTestPage from '../pages/self_test/gaslightingTestPage';
import TestDescriptionPage from '../pages/self_test/TestDescriptionPage';
import TestProgressPage from '../pages/self_test/TestProgressPage';
import TestResultPage from '../pages/self_test/TestResultPage';
//
import Header from '../components/header/Header';
import UserEditPage from '../pages/my_page/_subComponents/userEditPage';
import UserProfileEditPage from '../pages/my_page/_subComponents/userProfileEditPage';
import PasswordModal from '../components/modal/PasswordModal';

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
          path: routes.passwordModal,
          element: <PasswordModal />,
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
          path: '/',
          element: <Navigate replace to={routes.home} />,
        },
      ],
    },
  ];

  return useRoutes(elements);
}
