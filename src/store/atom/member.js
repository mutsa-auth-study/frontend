import { atom } from 'recoil'

/*
  member atom
  회원가입한 멤버 객체 배열
*/
export const member = atom({
  key: 'member',
  default: [],
})
