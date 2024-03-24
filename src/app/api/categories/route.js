import prisma from '@/utils/connect';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const categories = await prisma.category.findMany();
    return NextResponse.json(categories, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: 'Something went wrong!' }, { status: 500 });
  }
}
