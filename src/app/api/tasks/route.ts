import { NextRequest, NextResponse } from "next/server";

const tasks = [
  { id: 1, title: "Learn Next.js", status: "pending" },
  { id: 2, title: "Build API", status: "completed" },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const page = Number(searchParams.get("page")) || 1;
  const limit = Number(searchParams.get("limit")) || 10;

  return NextResponse.json({
    page,
    limit,
    data: tasks,
  });
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  if (!body.title) {
    return NextResponse.json(
      { error: "Task title is required" },
      { status: 400 }
    );
  }

  return NextResponse.json(
    {
      message: "Task created",
      task: {
        id: tasks.length + 1,
        title: body.title,
        status: body.status || "pending",
      },
    },
    { status: 201 }
  );
}
