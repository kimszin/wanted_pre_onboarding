# wanted_pre_onboarding

## 구현내용

- 스타일은 styled-component를 사용했습니다.

1. Toggle: ul/li 태그로 html을 만들고 클릭시 해당 요소에 class를 변경하여 디자인을 적용했습니다. 처음에는 input radio 태그로 접근하려 했으나 디자인 부분에서 어려움을 겪어 적용하지 않았습니다. map으로 만든 li요소의 index와 currentToggle이라는 state가 일치할때 class를 바꿔주는 것이 로직의 핵심입니다.
2. Tab: Toggle과 유사한 구조로 개발했습니다. 디자인만 다르게 처리했습니다.
3. Input: 아이콘은 FontAwesome 라이브러리를 이용했습니다. 이메일 작성란은 onChange이벤트에서 유효성을 검사한 후, 관련 state를 변경, state에 따라 아이콘의 모습을 변경하게 했습니다. 비밀번호 작성란은 눈 아이콘을 클릭하면 관련 state에 따라 input의 type을 text 또는 password로 적용하게 했습니다.
4. Dropdown: 크게 두개의 div로 영역을 나누었습니다. 한개는 현재 상태를 보여주는 영역, 나머지는 리스트를 보여주는 영역입니다. 리스트는 ul/li태그를 사용해 map으로 표출했습니다. 전체적인 동작은 state를 이용했으며 리스트에서 마우스 호버 이벤트는 &:hover {} 문법을 사용했습니다. 처음에는 태그에 인라인으로 직접 onMouseEnter, onMouseLeave를 적용하려 했으나 코드가 길어지고 복잡해지는 문제가 있었습니다. &: hover {} 문법을 처음 사용해보았는데 간편하고 깔끔했습니다.
