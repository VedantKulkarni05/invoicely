import * as React from "react";
import { cn } from "@/lib/utils";

function Textarea({ className, ...props }) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        // Layout & Spacing
        "w-full min-h-16 px-4 py-2 rounded-md text-sm shadow-xs resize-none",

        // Background & Text
        "bg-background text-foreground placeholder:text-muted-foreground selection:bg-muted selection:text-muted-foreground",

        // Border & Focus
        "border border-input outline-none transition-all",
        "focus-visible:ring-2 focus-visible:ring-secondary focus-visible:border-secondary",

        // Disabled State
        "disabled:cursor-not-allowed disabled:opacity-50",

        // Aria-invalid for validation styling
        "aria-invalid:border-red-500 aria-invalid:ring-red-500/20 dark:aria-invalid:border-red-900 dark:aria-invalid:ring-red-900/40",

        className
      )}
      {...props}
    />
  );
}

export { Textarea };
