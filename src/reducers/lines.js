const lines = (state = [{content: 'hello', skin: 'new'}], action) => {
  switch (action.type) {
    case 'NEW_LINE':
      return [
        ...state,
        {
          content: action.content,
          skin: action.skin,
        },
      ]
    default:
      return state
  }
}

export default lines
