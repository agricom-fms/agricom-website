import type {
  ComponentPropsWithoutRef,
  ElementType,
  ReactNode,
} from "react";

type ContainerProps<T extends ElementType = "div"> = {
  as?: T;
  children: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

/**
 * Page gutter container — mirrors the original `.wrap` dimensions.
 */
export default function Container<T extends ElementType = "div">({
  as,
  className = "",
  children,
  ...props
}: ContainerProps<T>) {
  const Component = as ?? "div";

  return (
    <Component className={`wrap ${className}`} {...props}>
      {children}
    </Component>
  );
}
