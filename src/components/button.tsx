import { Link } from "@tanstack/react-router";
import clsx from "clsx";
import type { ReactNode } from "react";

const classes =
  "bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer hover:opacity-80 transition-all duration-150";

type ButtonProps = {
  onClick?: () => void;
  to?: string;
  kind?: "button" | "link";
  type?: "submit" | "button";
  form?: string;
  id?: string;
  children: string | ReactNode;
  className?: string;
};

export function Button({
  onClick = () => {},
  to = "/",
  kind = "button",
  type = "button",
  form,
  id,
  children,
  className,
}: Readonly<ButtonProps>) {
  if (kind === "button") {
    return (
      <button
        className={clsx(classes, className)}
        onClick={onClick}
        type={type}
        form={form}
        id={id}
      >
        {children}
      </button>
    );
  }
  return (
    <Link className={classes} to={to}>
      {children}
    </Link>
  );
}
