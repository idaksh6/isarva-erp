import { NextResponse } from 'next/server';
import { getContent, updateContent } from '../../../lib/content-store';

export async function GET() {
  return NextResponse.json({ success: true, content: getContent() });
}

export async function POST(request) {
  try {
    const body = await request.json();
    const updated = updateContent(body);
    return NextResponse.json({ success: true, content: updated });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to update content' }, { status: 500 });
  }
}
