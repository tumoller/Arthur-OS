import { Input } from "@/components/ui/input";
import { Avatar } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

export function Header() {
  return (
    <header className="h-14 border-b flex items-center justify-between px-6">
      {/* Left */}
      <div className="text-sm text-muted-foreground">
        Dashboard
      </div>

      {/* Center */}
      <div className="w-96">
        <Input placeholder="Buscar no Arthur OS..." />
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        <Avatar />
      </div>
    </header>
  );
}