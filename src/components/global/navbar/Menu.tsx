import Link from 'next/link';

export default function Menu() {
  return (
    <div>
      <ul>
        <li>
          <Link href='/work'>Work</Link>
        </li>
        <li>
          <Link href='/lab'>Lab</Link>
        </li>
        <li>
          <Link href='/about'>About</Link>
        </li>
      </ul>
    </div>
  );
}
