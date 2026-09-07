import Sidebar from "./Sidebar";
export default function AppShell({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen flex"><Sidebar/><main className="min-w-0 flex-1 p-5 md:p-8">{children}</main></div>;
}