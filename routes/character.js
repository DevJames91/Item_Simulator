import express from 'express';
import { PrismaClient } from '@prisma/client';
import authService from '../authService';

const router = express.Router();

// [심화] 라우터마다 prisma 클라이언트를 생성하고 있다. 더 좋은 방법이 있지 않을까?
const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
  errorFormat: 'pretty',
});

// router.post('/account/join', async (req, res) => {
//   const joinSchema = Joi.object({
//     // 계정은 문자열로, 알파벳과 숫자, 소문자만 씁니다
//     accountId: Joi.string().alphanum().lowercase().required(),
//     // 패스워드는 문자열, 최소 6개 요구 됩니다
//     password: Joi.string().min(6).required(),
//     // valid된 비밀번호가 요구 됩니다
//     confirmPassword: Joi.valid(Joi.ref('password')).required(),
//     // 닉네임은 문자열이 요구 됩니다
//     userName: Joi.string().required(),
//   });

// const validateResult = joinSchema.validate(req.body);
//   if (validateResult.error) {
//     res.status(400).json({ error: '잘못된 정보입니다.' });
//     return;
//   }

//   const inputValue = validateResult.value;

//   const accountId = inputValue.accountId;
//   const password = inputValue.password;
//   const userName = inputValue.userName;

// [필수] **3. 캐릭터 생성**
router.post('/character/create', async (req, res) => {
  const characterId = req.body;
  const accountId = req.user;
  const joinSchema = Joi.object({
    accountId: Joi.string().alphanum().lowercase().required(),
    characterId: Joi.string().alphanum().required(),
  });

  if (characterId == null) {
    return res.status(400).json({ error: '아이디를 입력해주세요' });
  }
});

// [필수] **4. 캐릭터 삭제**
router.post('/character/delete', async (req, res) => {});

// [필수] **5. 캐릭터 상세 조회**
router.get('/character/detail/:characterId', async (req, res) => {});

// 6-3. [도전] "회원"에 귀속된 캐릭터를 생성하기
router.post('/character/createfromuser', async (req, res) => {
  const authResult = await isValidAuth(req);
  console.log(`isValidAuth:${authResult}`);
  //캐릭터 생성
});

// 6-4. [도전] "회원"에 귀속된 캐릭터를 삭제하기
router.post('/character/createfrom', (req, res) => {});

export default router;
