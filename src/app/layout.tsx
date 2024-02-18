import '@/styles/globals.scss';
import localFont from 'next/font/local'
import { Metadata, ResolvingMetadata } from 'next'
import { headers } from "next/headers";

import { Navbar } from '@/components/molecules/navbar';
import { config } from '@/utils/config';
import { Footer } from '@/components/molecules/footer';
import {Cursor} from '@/components/atoms/cursor';

const cabinet = localFont({
  src: [
    {
      path: '../assets/CabinetGrotesk-Extralight.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../assets/CabinetGrotesk-Light.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../assets/CabinetGrotesk-Thin.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../assets/CabinetGrotesk-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/CabinetGrotesk-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/CabinetGrotesk-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../assets/CabinetGrotesk-Extrabold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../assets/CabinetGrotesk-Black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
})

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const headersList = headers();
  const pathname = headersList.get("x-invoke-path") || "";
  const pageTitle = pathname.replace("/", "");

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []

  return {
    title: {
      template: `${pageTitle.charAt(0).toUpperCase() + pageTitle.slice(1)} | ${config.name}`,
      default: config.name,
    },
    openGraph: {
      images: ['/some-specific-page-image.jpg', ...previousImages],
    },
    description: config.desc
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={cabinet.className}>
        <Navbar />
        {children}
        <Footer />
        <Cursor />
      </body>
    </html>
  );
}
