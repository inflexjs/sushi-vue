import mutations from "./mutations";
import actions from "./actions";
import state from "./state";
import getters from "./getters";

const basketModule = {
  state,
  mutations,
  actions,
  getters,
  namespaced: true
}

export default basketModule