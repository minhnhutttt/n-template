import { tv } from "tailwind-variants";

export const buttonVariants = tv({
  variants: {
    type: {
      primary:
        "bg-primary font-bold shadow-[0_0_24px_0_rgb(var(--color-primary-rgb)/65%)]",
      outline: "border-bg-02 bg-bg-03 border border-[1.5px]",
    },
    full: {
      true: "w-full",
      false: "w-[240px]",
    },
  },
  defaultVariants: {
    type: "outline",
    full: false,
  },
});
