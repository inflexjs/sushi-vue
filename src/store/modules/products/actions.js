const actions = {
	changeCount({commit}, {count, id}) {
		commit('changeCount', { count, id })
	},
}

export default actions