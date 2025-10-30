import Image from 'next/image';
import Link from 'next/link';

interface DonkeyCardProps {
  name: string;
  age: number;
  image: string;
  personality?: string;
  slug?: string;
}

export function DonkeyCard({ name, age, image, personality, slug }: DonkeyCardProps) {
  const content = (
    <div className="flex flex-col items-center group cursor-pointer">
      {/* Circular profile image */}
      <div className="relative w-32 h-32 mb-4 transition-transform group-hover:scale-105">
        <Image
          src={image}
          alt={`${name} the donkey`}
          fill
          className="circular-profile object-cover"
        />
      </div>

      {/* Name */}
      <h5
        className="text-[hsl(var(--foreground))] text-center mb-1 group-hover:text-[hsl(var(--primary))] transition-colors"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        {name}
      </h5>

      {/* Age and personality */}
      <p className="text-sm text-[hsl(var(--muted-foreground))] text-center">
        Age {age} {personality && `• ${personality}`}
      </p>
    </div>
  );

  if (slug) {
    return <Link href={`/donkeys/${slug}`}>{content}</Link>;
  }

  return content;
}
