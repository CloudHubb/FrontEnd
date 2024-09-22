import { Navigate, useRoutes } from 'react-router-dom';

import { routes } from '../constants/routes';

import Header from '../components/header/Header';

import HomePage from '../pages/home/page';

import CommunityPage from '../pages/community/page';

import DataRoomPage from '../pages/data_room/page';

import SelfTestPage from '../pages/self_test/page';

import MyPage from '../pages/my_page/page';
import UserEditPage from '../pages/my_page/_subComponents/_userSetting/userEditPage';
import UserProfileEditPage from '../pages/my_page/_subComponents//_userSetting/userProfileEditPage';
import SecretCardPasswordPage from '../pages/my_page/_subComponents/_secretContainer/secretCardPasswordPage';
import SecretCardPage from '../pages/my_page/_subComponents/_secretContainer/secretCardPage';
import WritingSecretItemPage from '../pages/my_page/_subComponents/_secretContainer/writingSecretItemPage';
import SearchResultPage from '../pages/search_result/page';

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
          path: routes.selftest,
          element: <SelfTestPage />,
        },
        {
          path: routes.search,
          element: <SearchResultPage />,
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
