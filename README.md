심연의 바다

React:
inplementingReason: vue의 정해진 프레임워크 기반 문법으로는 다양한 상황을 구현하기 힘들고, vue에 대해 익숙하지 않았습니다.
troubleShootign: 안정적입니다. 다만 이런 소규모 프로젝트에서는 EsLint나 Prettier을 사용할 때, 프로젝트에 바로 적용시키는 것보다는 개인이 사용하는 vscode같은 편집기에만 적용해 제한적으로 사용하는 게 훨씬 나은 것 같습니다. 생산성이 줄어드는 효과를 보입니다. TypeScript도 마찬가지로. 적용시키는 순간 타입 체크 문법 때문에 들어가는 시간과 비용이 배로 늘어나는 형태를 보입니다.

Electron:
inplementingReason: 웹 기반으로 데스크탑 애플리케이션을 만들기 위해서 현 시점에서 가장 대중적이고 안정적인 앱 프레임워크인 Electron을 선택했습니다.
troubleShooting: React의 최신 버전과 호환성 문제가 상당히 포진해 있어서 단순히 React와 Electron간의 통신에도 통신을 따로 handle해주는 컴포넌트를 작성해주지 못할 뿐더러 (이는 Electron이 전통적인 common-js 패키지고, React가 ES6을 기반으로 한 babel을 사용하는 패키지라는 점에서 기인하는 것처럼 보임), 따라서 반복되는 코드를 사용해야하는 불편함이 있음. 이는 직접적으로 서로를 호환시켜주는 패키지를 빌드하거나, 서로간의 프로세스 통신(Electron의 ipc)을 시켜주는 패키지(handler)를 따로 빌드해주지 않는 이상 해결이 불가능할 것으로 보임. 차라리 axios나 jquery를 사용해 프론트-프론트 통신을 시켜주는 게 나을수도 있을 거 같은데, 이 방법은 Electron에서 받아들이지 못할 거 같음.(Electron은 모듈화시켜 사용하기에는 애로사항이 많기 때문)

결론적으로, ipc 통신이 필요할 때 매번 모듈을 불러오고 핸들러를 작성해주는 반복적인 코드가 필요하지만, 해당 경우는 버튼을 눌러 창을 변경하거나 하는 때의 제한적인 상황에서만 적용되므로 그렇게 큰 문제는 아니라고 할 수 있다.

SASS:
implementingReason: 반복적이고 직관적이지 않은 기존의 CSS의 생산성을 향상시키기 위해서
troubleShooting: 사용하기 위해서 빌드해줘야 하는데, 그럴때마다 동일한 이름의 _.css파일과 _.css.map 파일이 생겨나 너무 번거로워서 .vscode/settings.json 파일에서 숨겨지도록 설정했습니다.

jquery:
implementingReason: 비인간적인 기존의 DOM 이벤트 처리를 대체하기 위해서
window.addEventListener('click', (e) => {}); 앞의 코드를
$('window').on('click', (e) => {}); 처럼 대체할 수 있었습니다.
훨씬 알아보기 편한 코드 가독성 덕분에 개발이 편해졌습니다.
