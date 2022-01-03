# Vue3 Movie app

Vue3와 OMDb API를 사용하는 영화 검색 애플리케이션입니다.<br>
[vue3-webpack-template#vue-router](https://github.com/ParkYoungWoong/vue3-webpack-template)에서 프로젝트를 시작합니다.

[DEMO](https://stupefied-hodgkin-d9d350.netlify.app/)

## 💡 Specs

- Vue3
- Vuex
- Vue-Router
- Webpack
- OMDb API
- Netlify
  - Hosting with GitHub(Continuous Deployment)
  - Functions(Serverless)
- Axios
- Lodash
- Tests
  - Jest
  - Vue Test Utils
  - Cypress


## 📚 Refs

### HTML Entities in numeric order

http://www.evotech.net/blog/2007/04/named-html-entities-in-numeric-order/

## 설치 주의사항

npm i vue-router@4  
npm i vuex@next  
npm i bootstrap@next  
npm i @vue/test-utils@next

### Search.vue에서 클론코딩을 통해 배운 것
```
 v-for="filter in filters"
        v-model="$data[filter.name]"
        :key="filter.name"
```
- 위 코드에서 나는 $data부분에 type number year 등등을 직접 넣어 주려고 생각했다.
- 하지만 배열 형태로 filter.name이라고 작성하면 하나하나 작성하는 것이 아닌 동적으로 알아서 내가 선택한 부분이 입력된다는 것을 배웠다.
- 동적으로 관리할 때 $data.type 처럼 .표기대신 ["type"]를 사용할 수 있다.

### store
- 데이터를 중앙 집중해서 사용하는 방법
- 관계가 복잡해지더라도 중간 매개체를 하나만 사용하면되는 장점이 있음