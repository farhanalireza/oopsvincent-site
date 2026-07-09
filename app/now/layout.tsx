import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Now",
  description: "What Farhan Ali Reza is focused on as of July 9, 2026.",
};

export default function NowLayout({ children }: { children: ReactNode }) {
  return children;
}
