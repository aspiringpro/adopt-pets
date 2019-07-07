export default {
  // addPet: (context, pet) => {
  //   context.commit('appendPet', pet)
  // }, //vue gives us this context but we would usually use the shorthand as follows
  addPet: ( {commit}, payload ) => {
    commit('appendPet', payload)
  }
}
