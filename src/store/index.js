import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedBreakups: [
      {
        imageUrl: 'https://picsum.photos/id/1027/200/300',
        id: 'afajfjadfaadfa323',
        name: 'Isidora',
        date: new Date(),
        location: 'New York',
        description: 'Lo mande a freir mono'
      },
      {
        imageUrl: 'https://picsum.photos/id/331/200/300',
        id: 'aadsfhbkhlk1241',
        name: 'Marcos',
        date: new Date(),
        location: 'Paris',
        description: 'Adeu'
      }
    ],
    user: null
  },
  mutations: {
    createBreakup (state, payload) {
      state.loadedBreakups.push(payload)
    },
    setUser (state, payload) {
      state.user = payload
    }
  },
  actions: {
    createBreakup ({commit}, payload) {
      const meetup = {
        name: payload.name,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date,
        id: 'kfdlsfjslakl12'
      }
      // Reach out to firebase and store it
      commit('createBreakup', breakup)
    },
    signUserUp ({commit}, payload) {
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            const newUser = {
              id: user.uid,
              registeredBreakups: []
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            console.log(error)
          }
        )
    },
    signUserIn ({commit}, payload) {
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            const newUser = {
              id: user.uid,
              registeredBreakups: []
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            console.log(error)
          }
        )
    }
  },
  getters: {
    loadedBreakups (state) {
      return state.loadedBreakups.sort((breakupA, breakupB) => {
        return breakupA.date > breakupB.date
      })
    },
    featuredMeetups (state, getters) {
      return getters.loadedBreakups.slice(0, 5)
    },
    loadedMeetup (state) {
      return (meetupId) => {
        return state.loadedBreakups.find((meetup) => {
          return breakup.id === breakupId
        })
      }
    },
    user (state) {
      return state.user
    }
  }
})