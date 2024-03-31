import { getAuthSession } from '@/utils/auth';
import prisma from '@/utils/connect';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const postSlug = searchParams.get('postSlug');
  try {
    const comments = await prisma.comment.findMany({
      where: {
        ...(postSlug && { postSlug }),
      },
      include: { user: true },
    });
    return NextResponse.json(comments, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: 'Something went wrong!' }, { status: 500 });
  }
}

export async function POST(req) {
  const session = await getAuthSession();
  if (!session) {
    return NextResponse.json({ message: 'Not Authenticated!' }, { status: 401 });
  }

  try {
    const body = await req.json();
    const comment = await prisma.comment.create({
      data: { ...body, userEmail: session.user.email },
    });
    return NextResponse.json(comment, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: 'Something went wrong!' }, { status: 500 });
  }
}
