import { atom } from 'recoil'
import localStorageEffect from '../localStorage'

/*
  user atom
  현재 로그인 한 사람
  id, password는 localStorage에만 저장하고 사용하지 않을 것이기에 제외
*/
export const user = atom({
  key: 'user',
  default: {
    name: '',
    accessToken: '',
  },
  effects: [localStorageEffect('user')],
})
