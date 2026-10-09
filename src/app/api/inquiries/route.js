import { NextResponse } from 'next/server';
import { getContent, addInquiry } from '../../../lib/content-store';

export async function GET() {
  const content = getContent();
  return NextResponse.json({ success: true, inquiries: content.inquiries || [] });
}

export async function POST(request) {
  try {
    const body = await request.json();
    if (!body.name || !body.phone) {
      return NextResponse.json({ success: false, error: 'Name and Phone are required' }, { status: 400 });
    }
    const newInquiry = addInquiry(body);
    return NextResponse.json({ success: true, inquiry: newInquiry });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to record inquiry' }, { status: 500 });
  }
}
