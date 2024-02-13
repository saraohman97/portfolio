import getCurrentUser from "@/actions/getCurrentUser";
import { redirect } from "next/navigation";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default async function DashboardLayou({
  children,
}: DashboardLayoutProps) {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      redirect("/");
    }

  return <div>{children}</div>;
}
