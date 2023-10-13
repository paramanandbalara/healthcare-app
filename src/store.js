// src/store.js
import { ref } from 'vue';

function getInitialLoginState() {
	const persistedState = localStorage.getItem('isLoggedIn');
	return persistedState ? JSON.parse(persistedState) : false;
}

export const store = {
	isLoggedIn: ref(getInitialLoginState()),
	originatingPage: ref(null)
};
