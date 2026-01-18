import { NextResponse } from 'next/server';

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  return NextResponse.json({
    id: params.id,
    title: 'Sample Task',
    status: 'pending'
  });
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const body = await req.json();

  return NextResponse.json({
    message: 'Task updated',
    id: params.id,
    updatedData: body
  });
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  return NextResponse.json({
    message: `Task ${params.id} deleted`
  });
}
