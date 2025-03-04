"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import { createClient } from "@/lib/supabase/server";
import supabaseAdmin from "@/lib/supabase/admin";
import { GenerateLinkParams } from "@supabase/supabase-js";
import Mailjet from "node-mailjet";

export async function login({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const supabase = await createClient();

  const userData = {
    email: email,
    password: password,
  };

  const { error } = await supabase.auth.signInWithPassword(userData);

  if (error) {
    console.log(error);
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function signupWithOtp({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const supabase = supabaseAdmin();

  const emailData: GenerateLinkParams = {
    type: "signup",
    email: email,
    password: password,
  };

  const { data, error } = await supabase.auth.admin.generateLink(emailData);

  if (error) {
    console.log(error);
    redirect("/error");
  }

  // const mailjet = Mailjet.apiConnect(
  //   `${process.env.MJ_APIKEY_PUBLIC}`,
  //   `${process.env.MJ_APIKEY_PRIVATE}`,
  // );

  // mailjet.post("send", { version: "v3.1" }).request({
  //   Messages: [
  //     {
  //       From: {
  //         Email: "ikeandrie.ro@gmail.com",
  //         Name: "Me",
  //       },
  //       To: [
  //         {
  //           Email: emailData.email,
  //           Name: "You",
  //         },
  //       ],
  //       Subject: "OTP",
  //       TextPart: "OTP Verification Code",
  //       HTMLPart: `<p>${data.properties.email_otp}</p>`,
  //     },
  //   ],
  // });

  console.log(data);
}
