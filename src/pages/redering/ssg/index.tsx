import dayjs from "dayjs";
import { GetStaticProps } from "next";
import { FC } from "react";

interface Props {
  test: string;
}

export const getStaticProps: GetStaticProps<Props> = () => {
  return {
    props: {
      test: dayjs().format("YYYY-MM-DD HH:mm:ss"), //ssg된 데이터
    },
  };
};

const SsgPage: FC<Props> = (props) => {
  return (
    <main className="text-2xl">
      {props.test}
      <p>{dayjs().format("YYYY-MM-DD HH:mm:ss")}</p> {/*csr로 생성한 데이터*/}
    </main>
  );
};

export default SsgPage;
