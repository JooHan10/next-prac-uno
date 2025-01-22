import Image from "next/image";
import { FC } from "react";

const RemoteMain: FC = () => {
  return (
    <main>
      <Image
        src="/img/image2.jpg"
        width={500}
        height={750}
        priority
        alt="remote image"
      />
    </main>
  );
};

export { RemoteMain };
