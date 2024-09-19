// 예시
import { Navigate, useRoutes } from 'react-router-dom';
import { routes } from '../constants/routes';
import HomePage from '../pages/home/page';
import CommunityPage from '../pages/community/page';
import DataRoomPage from '../pages/data_room/page';
import MyPage from '../pages/my_page/page';
import SelfTestPage from '../pages/self_test/page';
import GaslightingTestPage from '../pages/self_test/gaslightingTestPage';
import Header from '../components/header/Header';

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
          path: routes.selftest,
          element: <SelfTestPage />,
        },
        {
          path: routes.gaslighting,
          element: <GaslightingTestPage />,
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
