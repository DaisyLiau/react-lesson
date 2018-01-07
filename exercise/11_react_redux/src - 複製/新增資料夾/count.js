export default (state = 10, action) => {
  switch (action.type) {
    case 'INCREASE':
      console.log('now increase');
      return state + 1;
    default:
      return state;
  }
}
;
