import { FC } from "react";
import winter from "./image2.jpg";
import Image from "next/image";

const LocalMain: FC = () => {
  console.log(winter);
  return (
    <main>
      <Image
        src={winter}
        width={500}
        placeholder="blur"
        quality={100}
        priority
        alt="first image"
      />
    </main>
  );
};

export { LocalMain };
