import client from "@/app/lib/prisma";
import { User } from "@/app/types/types";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";


export async function POST(req: NextRequest) {
  try {
    const body: User = await req.json();
    const { email, password, username, isAdmin = false } = body;

    // check user is exist or not
    const isExist = await client.user.findUnique({
      where: { email },
    });

    if (isExist) {
      return NextResponse.json(
        {
          message:
            "کاربری با یان آدرس ایمیل وجود دارد . آدرس دیگری را امتحان کنید ",
        },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    // generate new User in database
    const user = await client.user.create({
      data: {
        email,
        username,
        password: hashedPassword,
        isAdmin,
      },
    });

    if (user) {
      return NextResponse.json(
        {
          message: "User created Successfully",
          user,
        },
        { status: 200 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      {
        message: `Something went wrong ${error}`,
      },
      { status: 500 }
    );
  }
}
