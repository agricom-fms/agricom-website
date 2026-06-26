import Link from "next/link";
import type {
  ButtonHTMLAttributes,
  ComponentPropsWithoutRef,
  ReactNode,
} from "react";

const VARIANTS = {
  primary:
    "bg-gradient-to-br from-green-500 to-green-600 text-white shadow-glow hover:-translate-y-0.5 hover:shadow-glow-hover active:translate-y-0 active:scale-[.985]",
  glass: "glass text-strong hover:-translate-y-0.5 hover:bg-white/70",
  "ghost-light":
    "bg-white/10 border border-white/55 text-white backdrop-blur-sm hover:bg-white/20 hover:-translate-y-0.5",
} as const;

const SIZES = {
  md: "px-[21px] py-3 text-[13px]",
  lg: "px-[26px] py-3.5 text-[13.5px]",
} as const;

type ButtonVariant = keyof typeof VARIANTS;
type ButtonSize = keyof typeof SIZES;

interface SharedProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

type LinkButtonProps = SharedProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, keyof SharedProps | "href"> & {
    href: ComponentPropsWithoutRef<typeof Link>["href"];
  };

type NativeButtonProps = SharedProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof SharedProps | "href"> & {
    href?: never;
  };

export type ButtonProps = LinkButtonProps | NativeButtonProps;

/**
 * Pill button. Renders a Next.js link when `href` is set, otherwise a button.
 */
export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2.5 rounded-pill font-display font-semibold border border-transparent transition-[transform,box-shadow,background,color] duration-200 ease-smooth will-change-transform [&>svg]:h-[18px] [&>svg]:w-[18px] ${VARIANTS[variant]} ${SIZES[size]} ${className}`;

  if (href !== undefined) {
    return (
      <Link
        href={href}
        className={classes}
        {...(props as Omit<LinkButtonProps, keyof SharedProps | "href">)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      {...(props as Omit<NativeButtonProps, keyof SharedProps | "href">)}
    >
      {children}
    </button>
  );
}
