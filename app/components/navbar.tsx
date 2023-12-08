'use client';

import { useRef } from 'react';
import { useMotionValueEvent, useScroll } from 'framer-motion';

import { siteConfig } from '@/config/site';
import { Icons } from '@/app/components/icons';
import { getCssVariableValue } from '@/lib/utils';
import { Avatar } from '@/app/components/avatar';

export function Navbar() {
  const {
    links: { xcom, github },
    name,
    username,
  } = siteConfig;

  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  const minY = getCssVariableValue('--navbar-animation-start-y');
  const maxY = getCssVariableValue('--navbar-animation-end-y');
  let maxNavbarBgRGB = getCssVariableValue('--navbar-bg-max-rgb');
  let maxNavbarBgAlpha = getCssVariableValue('--navbar-bg-max-alpha');

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
    maxNavbarBgRGB = getCssVariableValue('--navbar-bg-max-rgb');
    maxNavbarBgAlpha = getCssVariableValue('--navbar-bg-max-alpha');

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
      ref.current.style.borderColor = 'transparent';
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
    ref.current.style.borderColor = 'var(--navbar-border-color)';
  });

  return (
    <div
      ref={ref}
      className="fixed inset-x-4 bottom-auto top-0 z-30 mx-auto mt-[var(--navbar-offset)] flex h-[var(--navbar-height)] w-[90%] min-w-[var(--content-min-width)] max-w-[var(--navbar-width)] flex-row items-center justify-between gap-x-4 rounded-xl border border-transparent px-2 py-1 backdrop-blur-[10px] transition-colors duration-200 [transition-timing-function:ease]"
      style={{ willChange: 'background' }}
    >
      <div className="flex shrink-0 items-center gap-x-3 pl-1">
        <Avatar />
        <div className="flex flex-col items-stretch gap-y-2">
          <span className="text-sm font-medium leading-none">{name}</span>
          <span className="text-[13px] leading-none text-neutral-600 dark:text-[#bbb]">
            @{username}
          </span>
        </div>
      </div>
      {/* Allow horizontal scrolling to avoid overlapping items on very small devices (<360px) */}
      <nav className="overflow-hidden">
        <ul className="flex items-center gap-x-2.5 overflow-x-hidden text-sm">
          <a
            href={github.url}
            target="_blank"
            rel="noreferrer"
            className="group relative mx-auto inline-block p-3 text-left align-top leading-none text-neutral-600 ring-inset ring-[#0060df] ring-offset-1 ring-offset-white transition-all hover:text-black focus:outline-none focus-visible:ring-2 dark:text-neutral-300 dark:hover:text-white"
          >
            <li>{github.name}</li>
            <Icons.navbarExternalArrow
              aria-hidden="true"
              className="absolute right-1 top-2.5 h-[7px] w-[7px] text-neutral-400 transition-transform group-focus-visible:-translate-y-1 dark:text-neutral-600"
            />
          </a>
          <a
            href={xcom.url}
            target="_blank"
            rel="noreferrer"
            className="group relative mx-auto inline-block p-3 text-left align-top leading-none text-neutral-600 ring-inset ring-[#0060df] ring-offset-1 ring-offset-white transition-all hover:text-black focus:outline-none focus-visible:ring-2 dark:text-neutral-300 dark:hover:text-white"
          >
            <li>{xcom.name}</li>
            <Icons.navbarExternalArrow
              aria-hidden="true"
              className="absolute right-1 top-2.5 h-[7px] w-[7px] text-neutral-400 transition-transform group-focus-visible:-translate-y-1 dark:text-neutral-600"
            />
          </a>
        </ul>
      </nav>
    </div>
  );
}
