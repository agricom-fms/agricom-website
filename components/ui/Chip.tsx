import type {
  ButtonHTMLAttributes,
  HTMLAttributes,
  ReactNode,
} from "react";

interface SharedChipProps {
  children: ReactNode;
  active?: boolean;
  className?: string;
}

type ButtonChipProps = SharedChipProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof SharedChipProps> & {
    as: "button";
  };

type SpanChipProps = SharedChipProps &
  Omit<HTMLAttributes<HTMLSpanElement>, keyof SharedChipProps> & {
    as?: "span";
  };

type ChipProps = ButtonChipProps | SpanChipProps;

export default function Chip({
  children,
  active = false,
  className = "",
  as = "span",
  ...props
}: ChipProps) {
  const classes = `cursor-pointer rounded-pill border px-4 py-2.5 font-display text-[12.5px] font-semibold transition ${
    active
      ? "border-transparent bg-gradient-to-br from-green-500 to-green-600 text-white shadow-glow"
      : "border-mist-200 bg-white text-ink-soft hover:border-green-400 hover:text-green-600"
  } ${className}`;

  if (as === "button") {
    return (
      <button
        className={classes}
        {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {children}
      </button>
    );
  }

  return (
    <span className={classes} {...(props as HTMLAttributes<HTMLSpanElement>)}>
      {children}
    </span>
  );
}
