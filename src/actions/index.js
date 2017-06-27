export const INCREMENT = 'counter/INCREMENT'
export const DECREMENT = 'counter/DECREMENT'

export const increment = (amount = 1) => ({
  type: INCREMENT,
  payload: amount,
})

export const decrement = (amount = 1) => ({
  type: DECREMENT,
  payload: amount,
})
