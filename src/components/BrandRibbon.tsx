import Image from "next/image";
import { FC } from "react";

const logos = [
  { src: "/brands/2.jpg", alt: "Facebook" },
  { src: "/brands/3.jpg", alt: "Facebook" },
  { src: "/brands/4.jpg", alt: "Facebook" },
  { src: "/brands/5.jpg", alt: "Facebook" },
  { src: "/brands/6.jpg", alt: "Facebook" },
  { src: "/brands/7.jpg", alt: "Facebook" },
  { src: "/brands/8.jpg", alt: "Facebook" },
  { src: "/brands/9.jpg", alt: "Facebook" },
  { src: "/brands/10.jpg", alt: "Facebook" },
  { src: "/brands/11.jpg", alt: "Facebook" },
  { src: "/brands/12.jpg", alt: "Facebook" },
  { src: "/brands/13.jpg", alt: "Facebook" },
  { src: "/brands/14.jpg", alt: "Facebook" },
  { src: "/brands/15.jpg", alt: "Facebook" },
  { src: "/brands/16.png", alt: "Facebook" },
  { src: "/brands/17.png", alt: "Facebook" },
  { src: "/brands/18.png", alt: "Facebook" },
  { src: "/brands/19.png", alt: "Facebook" },
  { src: "/brands/20.png", alt: "Facebook" },
  { src: "/brands/21.png", alt: "Facebook" },
  { src: "/brands/22.png", alt: "Facebook" },
  { src: "/brands/23.png", alt: "Facebook" },
  { src: "/brands/24.png", alt: "Facebook" },
  { src: "/brands/25.png", alt: "Facebook" },
  { src: "/brands/26.png", alt: "Facebook" },
  { src: "/brands/27.png", alt: "Facebook" },
  { src: "/brands/28.png", alt: "Facebook" },
  { src: "/brands/29.png", alt: "Facebook" },
  { src: "/brands/30.png", alt: "Facebook" },
];

const BrandRibbon: FC = () => {
  // Duplicate the logos array to create a seamless loop
  const repeatedLogos = [...logos, ...logos];

  return (
    <div className="overflow-hidden bg-neutral-100 my-8">
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
