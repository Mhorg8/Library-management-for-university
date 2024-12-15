import client from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      firstname,
      lastname,
      phoneNumber,
      password,
    }: {
      firstname: string;
      lastname: string;
      phoneNumber: string;
      password: string;
    } = body;

    // check user is exist or not
    const isExist = await client.user.findUnique({
      where: {
        PhoneNumber: phoneNumber as string,
      },
    });

    if (isExist) {
      return NextResponse.json(
        {
          message:
            "کاربری با یان آدرس ایمیل وجود دارد . آدرس دیگری را امتحان کنید ",
        },
        { status: 409, statusText: "user already have used" }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    // generate new User in database
    const user = await client.user.create({
      data: {
        LastName: lastname,
        FirstName: firstname,
        PhoneNumber: phoneNumber,
        Password: hashedPassword,
      },
    });

    if (user) {
      return NextResponse.json(
        {
          message: "خوش آمدید",
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
