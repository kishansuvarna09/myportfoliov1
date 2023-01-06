import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <main>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="h-screen flex flex-col">
      <div className="">
        <div className="h-max">
          <p className="text-[36px]">KS.</p>
        </div>
      </div>
      <div className="basis-full">{children}</div>
      <div className="flex justify-center items-center p-2 space-x-10">
        <div className="">Github</div>
        <div className="">LinkedIn</div>
      </div>
    </div>
  </main>
);

export default Layout;
