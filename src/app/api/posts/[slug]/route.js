import prisma from '@/utils/connect';
import { NextResponse } from 'next/server';

export async function GET(req, { params }) {
  const { slug } = params;
  try {
    const posts = await prisma.post.findUnique({
      where: { slug },
      include: { user: true },
    });
    return NextResponse.json(posts, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: 'Something went wrong!' }, { status: 500 });
  }
}
