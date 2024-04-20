# imitated-seed-2 미러
## 리버티 스킨만 지원
## 실제 사용은 안하는걸 추천함.

## 사용법

nuxt.config.js의
``` js
axios: {
    baseURL: '', //미러링 할 링크
},
```
baseURL에 자신이 미러링할 위키의 url을 집어넣으세요.

ex)
``` js
axios: {
    baseURL: 'https://wiki.the-seed.xyz',
},
```
링크 뒤에 슬래쉬(/)가 붙으면 작동하지 않습니다.

``` bash
npm i
```
(프로덕션)
``` bash
npm run build
npm start
```
(개발)
``` bash
npm run dev
```

## 작동방식
1. 서버에서 데이터를 불러온다.
2. 데이터를 그대로 보여준다.
3. static폴더안의 css와 js를 이용해서 기존의 liberty와 theseed의 js, css를 적용시킨다
4. 사용자가 본다.

# 개발지향점
theseed와 동일하게 nuxt.js안에서 템플릿 렌더
