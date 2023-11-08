'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { useMotionValueEvent, useScroll } from 'framer-motion';

import { Wordmark } from '@/components/wordmark';
import { socialLinks } from '@/components/site-header';
import { Icons } from '@/components/icons';
import { getCssVariableValue } from '@/lib/utils';

export function Navbar() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  const minY = getCssVariableValue('--navbar-animation-start-y');
  const maxY = getCssVariableValue('--navbar-animation-end-y');
  const maxNavbarBgRGB = getCssVariableValue('--navbar-bg-max-rgb');
  const maxNavbarBgAlpha = getCssVariableValue('--navbar-bg-max-alpha');

  function calculateNavbarBgColor(
    latest: number,
    maxY: number,
    maxRGB: number,
    maxAlpha: number,
  ) {
    const intensity = Math.round((latest / maxY) * maxRGB);
    const alpha = ((latest / maxY) * maxAlpha).toFixed(1);
    return `rgba(${intensity},${intensity},${intensity},${alpha})`;
  }

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (
      !ref ||
      !ref.current ||
      isNaN(Number(minY)) ||
      isNaN(Number(maxY)) ||
      isNaN(Number(maxNavbarBgRGB)) ||
      isNaN(Number(maxNavbarBgAlpha))
    ) {
      return;
    }

    const minYValue = Number(minY);
    const maxYValue = Number(maxY);
    const maxRgbValue = Number(maxNavbarBgRGB);
    const maxAlphaValue = Number(maxNavbarBgAlpha);

    if (latest < minYValue) {
      ref.current.style.backgroundColor = 'var(--navbar-bg-initial)';
      return;
    }

    if (latest > maxYValue) {
      ref.current.style.backgroundColor = 'var(--navbar-bg-end)';
      return;
    }

    ref.current.style.backgroundColor = calculateNavbarBgColor(
      latest,
      maxYValue,
      maxRgbValue,
      maxAlphaValue,
    );
  });

  return (
    <div
      ref={ref}
      className="fixed inset-x-0 bottom-auto top-0 z-20 mx-auto mt-[15px] flex h-14 w-[90%] min-w-[330px] max-w-[700px] flex-row items-center justify-between gap-x-4 rounded-xl border-[length:0.5px] border-black/[0.05] bg-white px-2 py-1 backdrop-blur-[10px] transition-colors duration-200 [transition-timing-function:ease] dark:border-white/[0.1] dark:bg-black sm:w-[600px]"
      style={{ willChange: 'background' }}
    >
      <Link href="/" className="-m-1 ml-1 p-1">
        <Wordmark />
      </Link>
      {/* Allow horizontal scrolling to avoid overlapping items on very small devices (<360px) */}
      <nav className="static flex flex-1 items-center justify-end overflow-x-hidden">
        <ul className="shrink-1 flex grow-0 basis-auto items-stretch overflow-x-hidden text-[13px] md:text-sm">
          {socialLinks.map(({ name, url }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noreferrer"
              className="group relative mx-auto inline-block px-4 py-3 text-left align-top font-medium text-neutral-600 ring-inset ring-[#0060df] ring-offset-1 ring-offset-white transition-all hover:text-black focus:outline-none focus-visible:ring dark:text-neutral-400 dark:hover:text-white"
            >
              <li>{name}</li>
              <Icons.arrowUpRight className="absolute right-1.5 top-3 h-2 w-2 text-neutral-500 transition-transform group-focus-visible:-translate-y-1" />
            </a>
          ))}
        </ul>
      </nav>
    </div>
  );
}
