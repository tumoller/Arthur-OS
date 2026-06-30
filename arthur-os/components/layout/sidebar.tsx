import {
  LayoutDashboard,
  FileText,
  Bot,
  MessageCircle,
  Users,
  Settings,
} from "lucide-react";

export function Sidebar() {
  return (
    <aside className="w-64 border-r bg-background p-4 flex flex-col gap-6">
      {/* Logo */}
      <div className="text-xl font-bold">
        Arthur OS
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-3 text-sm">
        <NavItem icon={LayoutDashboard} label="Dashboard" />
        <NavItem icon={FileText} label="Conteúdo" />
        <NavItem icon={Bot} label="IA" />
        <NavItem icon={MessageCircle} label="WhatsApp" />
        <NavItem icon={Users} label="CRM" />
        <NavItem icon={Settings} label="Configurações" />
      </nav>
    </aside>
  );
}

function NavItem({
  icon: Icon,
  label,
}: {
  icon: any;
  label: string;
}) {
  return (
    <button className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted transition">
      <Icon size={18} />
      {label}
    </button>
  );
}