import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { DashboardSidebar } from "../components/DashboardSidebar";

const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider className="h-svh overflow-hidden">
      <DashboardSidebar />

      <div className="relative min-w-0 flex-1">
        <SidebarTrigger className="absolute left-4 top-4 z-30 text-white hover:bg-white/10 hover:text-white" />

        <main className="h-svh overflow-y-auto">{children}</main>
      </div>
    </SidebarProvider>
  );
};

export default DashBoardLayout;