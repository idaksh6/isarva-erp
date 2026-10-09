import { NextResponse } from 'next/server';
import { getContent, updateContent } from '../../../lib/content-store';

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'isarva2026';

export async function GET() {
  return NextResponse.json({ success: true, content: getContent() });
}

export async function POST(request) {
  try {
    const authHeader = request.headers.get('authorization') || request.headers.get('x-admin-key');
    const token = authHeader?.replace('Bearer ', '');

    if (token !== ADMIN_PASSWORD) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized: Invalid Admin Password' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const updated = updateContent(body);
    return NextResponse.json({ success: true, content: updated });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to update content' }, { status: 500 });
  }
}

