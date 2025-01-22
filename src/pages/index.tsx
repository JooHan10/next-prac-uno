import Link from "next/link";

export default function Home() {
  return (
    <main>
      <ul>
        <li>
          <Link href="/routing">STATIC</Link>
        </li>
        <li>
          <Link href="/routing/dynamic/1234">DYNAMIC</Link>
        </li>
        <li>
          <Link href="/routing/nested/asdf/routing">NESTED</Link>
        </li>
        <li>
          <Link href="/routing/catch-all-segments/1/2/3/4/5/a/b/c/d/e">
            CATCH-ALL-SEGMENTS
          </Link>
        </li>
      </ul>
    </main>
  );
}
