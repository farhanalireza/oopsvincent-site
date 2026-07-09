import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Farhan Ali Reza: how he thinks, what drives his work, and the kind of software products he wants to build.",
};

export default function AboutLayout({ children }: { children: ReactNode }) {
  return children;
}
