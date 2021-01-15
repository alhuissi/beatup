import { firebaseAuth, db } from "../../config/firebaseConfig";

const state = {
	cartItemList: []
}

const mutations = {
	'UPDATE_CART'(state, { item, quantity, licencia, price, link, isAdd }) {
		const record = state.cartItemList.find(element => element.id == item.id);
		if (record) {
			if (isAdd) {
				record.quantity += quantity;
			} else {
				record.quantity = quantity;
			}
		} else {
			state.cartItemList.push({
				...item,
				quantity,
				licencia,
				price,
				link
			});
		}
		let docRef = db.collection("users").doc(firebaseAuth().currentUser.uid);
		docRef.update()({
			carro: {
				...item,
				quantity,
				licencia,
				price,
				link
			},
		});
	},
	'SET_CART'(state, productList) {
		if (productList) {
			state.cartItemList = productList;
			//Grabar en firebase el carro
			let docRef = db.collection("users").doc(firebaseAuth().currentUser.uid);
			docRef.update()({
				carro: productList,
			});
		}
	},
	'REMOVE_CART_ITEM'(state, { item }) {
		const record = state.cartItemList.find(element => element.id == item.id);
		state.cartItemList.splice(state.cartItemList.indexOf(record), 1);
		let docRef = db.collection("users").doc(firebaseAuth().currentUser.uid);
		docRef.update()({
			carro: [],
		});
	}
}

const actions = {
	clearCart: ({ commit }) => {
		commit('SET_CART', []);
	}
}

const getters = {
	cartItemList: (state) => {
		return state.cartItemList;
	},
	cartValue: (state) => {
		let res = 0;
		state.cartItemList.map(item => {
			res += item.price * item.quantity;
		});
		return res;
	}
}

export default {
	state,
	mutations,
	actions,
	getters
}
