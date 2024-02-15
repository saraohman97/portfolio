import getCurrentUser from "@/actions/getCurrentUser";
import DashboardNavbar from "@/components/dashboard-navbar";
import { redirect } from "next/navigation";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    redirect("/");
  }

  return (
    <div className="p-10 max-w-screen-xl mx-auto">
      <h1 className="text-center py-20 text-5xl mt-10">Dashboard</h1>

      <DashboardNavbar />

      {children}
    </div>
  );
}
