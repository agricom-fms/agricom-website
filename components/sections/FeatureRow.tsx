import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import Chip from "@/components/ui/Chip";
import FeatureIcon from "@/components/ui/FeatureIcon";

interface FeatureRowProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  desc: string;
  chips?: string[];
  cta: string;
  href?: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
}

/**
 * Large glass feature row: copy on one side, image on the other.
 * `reverse` puts the image first (alternating layout).
 */
export default function FeatureRow({
  icon,
  title,
  desc,
  chips = [],
  cta,
  href = "/contact",
  image,
  imageAlt,
  reverse,
}: FeatureRowProps) {
  const Copy = (
    <div className="flex h-full flex-col justify-center p-[clamp(30px,4vw,52px)] lg:min-h-[480px]">
      <FeatureIcon icon={icon} className="mb-5" />
      <h2 className="text-[clamp(21px,2.4vw,31px)]">{title}</h2>
      <p className="mt-3.5 max-w-[62ch] text-[clamp(15px,1.25vw,18px)] text-body">{desc}</p>
      {chips.length > 0 && (
        <div className="mt-[26px] flex flex-wrap gap-2.5">
          {chips.map((c) => (
            <Chip key={c}>{c}</Chip>
          ))}
        </div>
      )}
      <div className="mt-auto pt-11">
        <Button href={href}>{cta}</Button>
      </div>
    </div>
  );

  const Media = (
    <div className="relative min-h-[300px] h-full">
      <Image
        src={image}
        alt={imageAlt}
        fill
        sizes="(max-width: 1024px) 100vw, 540px"
        className="object-cover"
      />
    </div>
  );

  return (
    <Reveal className="glass grid grid-cols-1 items-stretch overflow-hidden p-0 lg:grid-cols-2">
      {reverse ? (
        <>
          <div className="max-lg:order-2">{Media}</div>
          <div className="max-lg:order-1">{Copy}</div>
        </>
      ) : (
        <>
          {Copy}
          {Media}
        </>
      )}
    </Reveal>
  );
}
