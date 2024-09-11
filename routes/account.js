import express from 'express';
import { PrismaClient } from '@prisma/client';
import Joi from 'joi';
import bcrypt from 'bcrypt';

const router = express.Router();

// [심화] 라우터마다 prisma 클라이언트를 생성하고 있다. 더 좋은 방법이 있지 않을까?
const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
  errorFormat: 'pretty',
});

// 6. [도전] 인증 미들웨어 구현
// Request의 Authorization 헤더에서 JWT를 가져와서 인증 된 사용자인지 확인하는 Middleware를 구현합니다

// 6-1. [도전] 회원가입
// 아이디, 비밀번호, 비밀번호 확인, 이름
router.post('/account/join', async (req, res) => {
  const joinSchema = Joi.object({
    // 계정은 문자열로, 알파벳과 숫자, 소문자만 씁니다
    accountId: Joi.string().alphanum().lowercase().required(),
    // 패스워드는 문자열, 최소 6개 요구 됩니다
    password: Joi.string().min(6).required(),
    // valid된 비밀번호가 요구 됩니다
    confirmPassword: Joi.valid(Joi.ref('password')).required(),
    // 닉네임은 문자열이 요구 됩니다
    userName: Joi.string().required(),
  });

  const validateResult = joinSchema.validate(req.body);
  if (validateResult.error) {
    res.status(400).json({ error: '잘못된 정보입니다.' });
    return;
  }

  const inputValue = validateResult.value;

  const accountId = inputValue.accountId;
  const password = inputValue.password;
  const userName = inputValue.userName;

  // 비밀번호는 평문으로 쓰지말고 해싱해서 저장해라
  const hashedPassword = await bcrypt.hash(password, 10);

  const existAccount = await prisma.account.findUnique({ where: { accountId: accountId } });
  if (existAccount) {
    res.status(400).json({ error: '중복된 아이디입니다.' });
    return;
  }

  const joinAccount = await prisma.account.create({
    data: { accountId: accountId, password: hashedPassword, userName: userName },
  });

  res.status(200).json({ account_info: { accountId: jointAccount.uerName } });

  // 만약 비밀번호가 abcde12345 -> cbaed52431

  // 중복 X
});

// 6-2. [도전] 로그인
router.post('/account/login', async (req, res) => {
  req.body.sessionKey;
  const user = session[req.body.sessionKey];

  const loginSchema = Joi.object({
    accountId: Joi.string().alphanum().required(),
    password: Joi.string().min(6).required(),
  });

  const validateResult = loginSchema.validate(req.body);
  if (validateResult.error) {
    res.status(400).json({ error: '잘못된 요청입니다.' });
    return;
  }

  const inputValue = validateResult.value;
  const accountId = inputValue.accountId;
  const password = inputValue.password;

  const account = await prisma.account.findUnique({ where: { accountId: accountId } });
  if (account == null) {
    res.status(400).json({ error: '존재하지 않는 계정입니다.' });
    return;
  }

  const passwordValidate = await bcrypt.compare(password, account.password);
  if (!passwordValidate) {
    res.status(400).json({ error: '비밀번호가 일치하지 않습니다.' });
    return;
  }

  const accessToken = jwt.sign(
    { accountId: accountId, userName: account.userName },
    'secretOrPrivatekey',
    { expiresIn: '1h' },
  );
  // 로그인 성공과 아이디 비번 검증 끝

  res.status(200).json({ account_info: { account_accountId, userName: account.userName } });
});

export default router;
