import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cn } from "@/lib/utils";

function Switch({ className, ...props }) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        // Layout & Sizing
        "inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full",

        // Background States
        "peer data-[state=checked]:bg-blue-600 data-[state=unchecked]:bg-gray-300",
        "dark:data-[state=checked]:bg-blue-500 dark:data-[state=unchecked]:bg-gray-700",

        // Border & Shadow
        "border border-gray-300 shadow-sm dark:border-gray-600",

        // Focus States
        "focus-visible:border-blue-500 focus-visible:ring-blue-500/30",
        "dark:focus-visible:border-blue-400 dark:focus-visible:ring-blue-400/30",
        "focus-visible:ring-[3px] outline-none",

        // Transitions & Interactions
        "transition-all",

        // Disabled State
        "disabled:cursor-not-allowed disabled:opacity-50",

        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          // Layout & Sizing
          "pointer-events-none block size-4 rounded-full ring-0",

          // Background States
          "bg-white dark:bg-gray-900",
          "dark:data-[state=unchecked]:bg-gray-900 dark:data-[state=checked]:bg-white",

          // Transform States
          "transition-transform",
          "data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0"
        )}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
