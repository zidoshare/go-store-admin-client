import { GET_HOME_INFO, HOME_CALC_ADD } from '../constants'
import post from '../utils/post'
export const add = (count) => ({
  type: HOME_CALC_ADD,
  count,
})
export const getHomeInfo = () => async (dispatch, getState) => {
  let { name, age } = getState().homeInfo
  if (name || age) return

  await new Promise(resolve => {
    let homeInfo = { name: 'zido', age: 22 }
    setTimeout(() => resolve(homeInfo), 1000)
  }).then(homeInfo => {
    dispatch({ type: GET_HOME_INFO, data: homeInfo })
  })
}

export const getItems = () => async (dispatch) => {
  await post('/api/v0/items',{}).then(data => {
    dispatch({
      type:'dwdawdafe',
      data,
    })
  })
}