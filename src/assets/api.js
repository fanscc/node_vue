import { fetch } from './http'

// 登陆
export const loginAPi = params => fetch('/api/login', { ...params }, 'POST')
export const registerAPi = params => fetch('/api/register', { ...params }, 'POST')

export const homesAPi = params => fetch('/api/homes', { ...params })
export const deleteImg = params => fetch('/api/deleteImg', { ...params }, 'POST')

export const goodsAPi = params => fetch('/api/goods', { ...params })
export const addGood = params => fetch('/api/addGood', { ...params }, 'POST')
export const detailGood = params => fetch('/api/detailGood', { ...params })
export const updatedGood = params => fetch('/api/updatedGood', { ...params }, 'POST')
export const deleteGood = params => fetch('/api/deleteGood', { ...params }, 'POST')
