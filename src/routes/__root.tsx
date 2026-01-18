import { Outlet, createRootRoute } from "@tanstack/react-router";
import { GlobeIcon, MoonIcon, SaveIcon, SunDimIcon } from "lucide-react";
import { useState } from "react";
import profiles from "../lib/profiles";
import Profile from "../components/profile";
import NavLinkButton from "../components/nav-button";

export type Theme = "light" | "dark";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const [theme, setTheme] = useState<Theme>("light");
  const [profileIndex, setProfileIndex] = useState<0 | 1>(0);

  const profileImg = profiles[profileIndex].img;
  const profileName = profiles[profileIndex].name;

  return (
    <div className="min-h-screen p-6 flex flex-col gap-6">
      <div className="flex justify-between border-b py-4">
        <Profile img={profileImg} name={profileName} />
        <h1 className="self-end">React hooks - Del 2</h1>
        <button
          className="rounded-full border-2 border-gray-500 dark:border-gray-300 size-8 flex items-center justify-center cursor-pointer"
          onClick={() => {
            document.documentElement.classList.toggle("dark");
            setTheme(theme === "dark" ? "light" : "dark");
          }}
        >
          {theme === "dark" ? <MoonIcon /> : <SunDimIcon />}
        </button>
      </div>
      <nav className="flex gap-2 justify-center">
        <NavLinkButton to="/context" icon={GlobeIcon}>
          useContext
        </NavLinkButton>
        <NavLinkButton to="/memo" icon={SaveIcon}>
          useMemo
        </NavLinkButton>
      </nav>
      <div className="flex flex-col gap-4 items-start py-4 flex-1 border-t">
        <Outlet />
      </div>
    </div>
  );
}
