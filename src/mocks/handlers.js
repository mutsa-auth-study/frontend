import { rest } from 'msw'
import { BASE_URL } from '../config'

export const handlers = [
  rest.post(`${BASE_URL}/auth/login`, async (req, res, ctx) => {
    const body = await req.json()
    const { id, password } = body

    // 서버 문제
    const members = JSON.parse(localStorage.getItem('member'))
    if (members === null)
      return res(ctx.status(500), ctx.json('서버에 회원 정보가 없습니다.'))

    // 회원 정보가 서버에 있는지 체크
    const loginUser = members.find(user => user.id === id)
    if (loginUser === undefined)
      return res(ctx.status(401), ctx.json('회원이 존재하지 않습니다.'))

    // 비밀번호가 일치하지 않는 경우
    if (password !== loginUser.password)
      return res(ctx.status(401), ctx.json('비밀번호가 일치하지 않습니다.'))

    // 모든 조건을 통과한 경우
    const userinfo = {
      status: 200,
      name: loginUser.name,
      accessToken: 'permission',
    }
    return res(ctx.status(200), ctx.json(userinfo))
  }),

  rest.post(`${BASE_URL}/signup`, async (req, res, ctx) => {
    const body = await req.json()
    const { id, password, name } = body
    const signupUser = [{ id, password, name }]

    // 서버 문제 (로컬 스토리지에 member 없음)
    const members = JSON.parse(localStorage.getItem('member'))
    if (members === null)
      return res(ctx.status(500), ctx.json('서버에 문제가 있습니다.'))

    // 이미 가입한 회원인지 체크 (혹시나 몰라서 회원가입 시에 한 번 더 체크)
    const checkDuplicateUser = members.find(user => user.id === id)
    if (checkDuplicateUser)
      return res(ctx.status(409), ctx.json('이미 가입한 회원입니다.'))

    // 이상 없을 시 정상적으로 회원가입
    members.push(signupUser)
    localStorage.setItem('member', JSON.stringify(members))
    return res(ctx.status(201), ctx.json('회원가입 성공!'))
  }),

  rest.post(`${BASE_URL}/signup/checkduplicate`, async (req, res, ctx) => {
    const body = await req.json()
    const { id } = body

    // 서버 문제 (로컬 스토리지에 member 없음)
    const members = JSON.parse(localStorage.getItem('member'))
    if (members === null)
      return res(ctx.status(500), ctx.json('서버에 문제가 있습니다.'))

    // 이미 가입한 회원인지 체크
    const checkDuplicateUser = members.find(user => user.id === id)
    if (checkDuplicateUser)
      return res(ctx.status(409), ctx.json('중복된 아이디입니다.'))

    return res(
      ctx.status(200),
      ctx.json({ status: 200, data: '사용할 수 있는 아이디입니다.' })
    )
  }),
]
