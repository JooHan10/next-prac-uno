import { useRouter } from "next/router";
import { FC } from "react";

const UseRouterMain: FC = () => {
  const router = useRouter();

  return (
    <main>
      <ol className="p-10">
        <li>{router.pathname}</li>
        <li>{router.query.name}</li>
        <li>{router.asPath}</li>
      </ol>
      <ol>
        <li>
          <button onClick={() => router.back()}>Back</button>
        </li>
        <li>
          <button onClick={() => router.forward()}>Forward</button>
        </li>
        <li>
          <button onClick={() => router.reload()}>Reload</button>
        </li>
        <li>
          <button onClick={() => router.push("/")}>Push to /</button>
        </li>
        <li>
          <button onClick={() => router.replace("/")}>Replace</button>
        </li>
        <li>
          <button onClick={() => router.prefetch("/")}>Prefetch</button>
        </li>
      </ol>
    </main>
  );
};

export { UseRouterMain };
