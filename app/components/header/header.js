import Link from 'next/link';

export default () => {
  return (
    <header>
      <Link href="/">
        <a id="logo">Header logo Link</a>
      </Link>
    </header>
  );
};
