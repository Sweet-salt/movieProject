import axios  from "axios"
import _uniqBy from 'lodash/uniqBy'
export default{
  // module
  namespaced: true,
  // data
  state: () => ({
      movies: [],
      message: '',
      loading: false

  }),
  //computed
  getters: {},
  // methods
  // 변이
  mutations: {
    updateState(state, payload) {
      Object.keys(payload).forEach(key => {
        state[key] = payload[key]
        
      })
    },
    resetMovies(state){
      state.movies = []
    }
  },
  // 비동기
  actions: {
    async searchMovies({ state, commit }, payload) {
      const { title, type, year, number } = payload
      const OMDB_API_KEY = '7035c60c'
      const res = await axios.get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=1`)
      const { Search, totalResults } = res.data
      commit('updateState', {
        movies: _uniqBy(Search, 'imdbID'),
        
      })
      console.log(totalResults) // 301
      console.log(typeof(totalResults)) // string

      const total = parseInt( totalResults, 10)
      const pageLength = Math.ceil(total / 10) // ceil 올림처리 해줌.
      if(pageLength > 1) {
        for(let p = 2; p <= pageLength; page += 1){
          if(p > number / 10) break
          const res = await axios.get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=${p}`)
          const { Search } = res.data
          commit('updateState', {
            movies: [
              ...state.movies, 
              ..._uniqBy(Search , 'imdbID')
            ]
          })
        }
      }
    }
  }

}