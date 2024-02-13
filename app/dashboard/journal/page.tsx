import { Button } from "@/components/ui/button";
import PostsClient from "./(components)/client";
import Link from "next/link";
import getCurrentUser from "@/actions/getCurrentUser";
import { redirect } from "next/navigation";

const JournalPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    redirect("/");
  }

  return (
    <div>
      <Link href="/journal/new">
        <Button>New</Button>
      </Link>
      <PostsClient />
    </div>
  );
};

export default JournalPage;
