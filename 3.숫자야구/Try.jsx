import React, { memo } from 'react';

// 클래스 컴포넌트의 PureComponent의 역할을 memo가 해준다.
// 부모컴포넌트가 변경될 떄 memo를 적용한 자식컴포넌트의 props가 변하지 않으면
// 해당 컴포넌트는 리렌더링 되지 않는다.
const Try = memo(({ tryInfo }) => {
  return (
    <li>
      <div>{tryInfo.try}</div>
      <div>{tryInfo.result}</div>
    </li>
  );
});

// 개발자 도구에 해당 컴포넌트 명이 이상하게 나오는것을 방지해준다.
Try.displayName = 'Try';

export default Try;
