import dayjs from "dayjs";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { FC } from "react";

interface Props {
  timestamp: string;
}

export const getStaticProps: GetStaticProps<Props> = () => {
  return {
    props: {
      timestamp: dayjs().format("YYYY-MM-DD HH:mm:ss"),
    },
  };
};

const OnDemandRevalidation: FC<Props> = (props) => {
  const { timestamp } = props;
  const router = useRouter();
  const revalidate = async () => {
    const result = await fetch("/api/revalidate");
    const data = await result.json();

    if (data.revalidated) {
      alert("revalidate success");
      router.reload();
    } else {
      alert("revalidate fail");
    }
  };
  return (
    <main>
      <h1 className="text-2xl">{timestamp}</h1>
      <button onClick={revalidate}>Revalidate</button>
    </main>
  );
};

export default OnDemandRevalidation;
