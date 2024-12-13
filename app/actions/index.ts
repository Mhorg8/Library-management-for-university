"use server";
import axios from "axios";

export async function registerUser(formData: FormData) {
  try {
    const email = formData.get("email") as string;
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    if (!email || !username || !password) {
      throw new Error("Pls fill all fields");
    }
    const headers = { "Content-type": "application/json" };

    const response = await axios.post(
      "http://localhost:3000/api/register",
      { email, username, password },
      { headers }
    );

    if (response.status === 200) {
    }
    console.log(response.data);
  } catch (error) {
    throw new Error(`${error}, Pls fill all fields`);
  }
}
