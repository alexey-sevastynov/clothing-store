import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import {
  findUserByEmail,
  generateTokens,
  getDbAndReqBody,
} from '@/lib/utils/api-routes';

export async function POST(req: Request) {
  const { db, reqBody } = await getDbAndReqBody(clientPromise, req);
  const user = await findUserByEmail(db, reqBody.email);

  if (!user) {
    return NextResponse.json({
      warningMessage: 'User does not exist',
    });
  }

  if (!bcrypt.compareSync(reqBody.password, user.password)) {
    return NextResponse.json({
      warningMessage: 'Wrong e-mail address or password',
    });
  }

  const tokens = generateTokens(user.name, reqBody.email);

  return NextResponse.json(tokens);
}
