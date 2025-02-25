import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";
// import { useSignOut } from "@/hooks/useAuth";
import { signOut } from "@/actions/auth/sign-out";

const UserPage = async () => {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/sign-un");
  }

  return (
    <main>
      <p>Hello {data.user.email}</p>
      <form action={signOut}>
        <button type="submit">Sign out</button>
      </form>
    </main>
  );
};

export default UserPage;
