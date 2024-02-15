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
    <>
      <h1 className="text-center py-20 text-5xl">Dashboard</h1>
      <DashboardNavbar />
      <div className="max-w-screen-xl mx-auto">
      {children}
      </div>
    </>
  );
}
