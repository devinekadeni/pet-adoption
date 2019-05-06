export default function locationReducer(state = 'Seattle, WA', action) {
  switch (action.type) {
    case 'SET_LOCATION':
      return action.payload
    default:
      return state
  }
}

// test('locationReducer', () => {
//   expect(locationReducer('Seattle, WA', {type: 'SET_LOCATION', payload: 'San Fransisco, CA'})).toBe('San Fransisco, CA')
// })
