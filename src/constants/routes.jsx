// TODO: 임시로 정해둔거라 변경하게 될 경우, 공유해주세요!
export const routes = {
  home: '/home',
  community: '/community',
  boardWrite: '/board/write',
  boardDetail: '/board/:boardId',
  dataroom: '/dataroom',
  mypage: '/mypage',
  userInfoEdit: '/mypage/edit',
  userProfileEdit: '/mypage/edit/profile',
  secretCardPassword: '/mypage/secretCardPassword/:id',
  secretCard: '/mypage/secretCard/:id',
  writingSecretItem: '/mypage/secretCard/:id/writingSecretItem/:id',
  myLogPassword: '/mypage/myLogPassword',
  myLog: '/mypage/myLog',
  selftest: '/selfTest',
  testDescription: '/selfTest/:testType',
  testProgress: '/selfTest/testPage/:testType',
  selftTestResult: '/selfTest/resultPage/:testType',
  search: '/search', // 임시: 바꿀 예정
  diary: '/diary',
  diaryWrite: '/diary/write',
  counselingCenter: '/counseling-center',
};
