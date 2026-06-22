import { SVGProps } from "react";

interface FeatureIconProps {
  icon: React.ComponentType<SVGProps<SVGSVGElement>>;
  className?: string;
}

/**
 * Rounded gradient icon tile used on service / value cards.
 */
export default function FeatureIcon({ icon: Icon, className = "" }: FeatureIconProps) {
  return (
    <div
      className={`grid h-[54px] w-[54px] place-items-center rounded-[15px] bg-[linear-gradient(135deg,rgba(21,160,69,.14),rgba(134,212,79,.2))] text-green-600 ${className}`}
    >
      <Icon className="h-[26px] w-[26px]" />
    </div>
  );
}
