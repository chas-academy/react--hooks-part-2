import { Link } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";

export default function NavLinkButton({
  children,
  to,
  icon: Icon,
}: {
  children: React.ReactNode;
  to: string;
  icon: LucideIcon;
}) {
  return (
    <Link
      className="flex flex-col items-center gap-2 border-3 border-gray-300 p-3 rounded-lg cursor-pointer hover:shadow-lg"
      to={to}
    >
      <Icon className="size-14 text-gray-500 dark:text-white" />
      <p className="font-bold text-gray-500 dark:text-white">{children}</p>
    </Link>
  );
}
