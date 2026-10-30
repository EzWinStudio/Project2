"use client";

import type { ReactNode } from "react";
import { openProject } from "@/lib/open-project";

export default function OpenProjectLink({
  id,
  children,
  className,
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <button type="button" className={className} onClick={() => openProject(id)}>
      {children}
    </button>
  );
}
