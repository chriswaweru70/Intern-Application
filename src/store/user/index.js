import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export default {
    state: {
        user: {}
    },

    mutations: {
        setUser(state, user) {
            let firebaseUser = firebase.auth().currentUser

            if (firebaseUser) {
                state.user = firebaseUser.uid
                window.location = '/login'
            } else {
                window.location = '/register'
            }
        }
    },

    actions: {
        onSignup({ commit }, payload) {
            firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
                .then(() => {
                    commit('setUser')
                })
                .catch(
                    error => {
                        console.log(error)
                    }
                )
        },
    },

    getters: {
        user(state) {
            return state.user
        }
    },

    modules: {

    }
}