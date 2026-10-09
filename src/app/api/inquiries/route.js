import { NextResponse } from 'next/server';
import { getContent, addInquiry } from '../../../lib/content-store';

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'isarva2026';

export async function GET(request) {
  const authHeader = request.headers.get('authorization') || request.headers.get('x-admin-key');
  const token = authHeader?.replace('Bearer ', '');

  if (token !== ADMIN_PASSWORD) {
    return NextResponse.json(
      { success: false, error: 'Unauthorized: Invalid Admin Password' },
      { status: 401 }
    );
  }

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

