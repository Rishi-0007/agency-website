import Image from "next/image";
import { FC } from "react";

const logos = [
  { src: "/brands/1.png", alt: "Facebook" },
  { src: "/brands/2.png", alt: "Facebook" },
  { src: "/brands/3.png", alt: "Facebook" },
  { src: "/brands/4.png", alt: "Facebook" },
  { src: "/brands/5.png", alt: "Facebook" },
  { src: "/brands/6.png", alt: "Facebook" },
  { src: "/brands/7.png", alt: "Facebook" },
  { src: "/brands/8.png", alt: "Facebook" },
  { src: "/brands/9.png", alt: "Facebook" },
  { src: "/brands/10.png", alt: "Facebook" },
  { src: "/brands/11.png", alt: "Facebook" },
  { src: "/brands/12.png", alt: "Facebook" },
  { src: "/brands/13.png", alt: "Facebook" },
  { src: "/brands/14.png", alt: "Facebook" },
  { src: "/brands/15.png", alt: "Facebook" },
  { src: "/brands/16.png", alt: "Facebook" },
  { src: "/brands/17.png", alt: "Facebook" },
  { src: "/brands/18.png", alt: "Facebook" },
  { src: "/brands/19.png", alt: "Facebook" },
  { src: "/brands/20.png", alt: "Facebook" },
  { src: "/brands/21.png", alt: "Facebook" },
];

const BrandRibbon: FC = () => {
  // Duplicate the logos array to create a seamless loop
  const repeatedLogos = [...logos, ...logos];

  return (
    <div className="overflow-hidden bg-muted-foreground/10 my-8">
      <div className="flex items-center justify-center animate-marquee whitespace-nowrap space-x-8">
        {repeatedLogos.map((logo, index) => (
          <div key={index} className="flex-shrink-0">
            <Image src={logo.src} alt={logo.alt} width={100} height={50} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandRibbon;
