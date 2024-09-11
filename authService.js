import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
  errorFormat: 'pretty',
});

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  const tokenInfo = authHeader.split('');
  if (tokenInfo.length != 2) {
    res.status(400).json({ error: '인증에 실패하였습니다.' });
    return;
  }
  if (tokenInfo[0] != 'Bearer') {
    res.status(400).json({ error: '토큰 종류에 오류가 발생하였습니다.' });
    return;
  }

  const token = tokenInfo[1];
  const decodeToken = jwt.verify(token, 'secretOrPrivateKey');
  const accountId = decodeToken.accountId;

  const accountInfo = await prisma.account.findUnique({ where: { accountId: accountdId } });
  if (accountInfo == null) {
    res.status(400).json({ error: '계정 정보를 찾을수 없습니다.' });
    return;
  }
};

export default authService;
