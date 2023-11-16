import Image from 'next/image';
import carhiveImage from '../../public/images/projects/carhive.webp';
import { siteConfig } from '@/config/site';
import { Icons } from '@/app/components/icons';

export function Projects() {
  const {
    links: { github },
  } = siteConfig;

  const carhiveUrl = 'https://carhive.eduam.dev';

  return (
    <section>
      <div className="min-w-[var(--content-min-width)] pb-12 md:pb-14">
        <div className="px-5 py-6 md:px-10">
          <h2 className="text-xl font-semibold">Projects</h2>
        </div>
        <div>
          <article>
            <div className="group relative flex h-full w-full flex-col overflow-hidden rounded-none bg-neutral-100/80 transition-colors  hover:contrast-[97%] dark:bg-neutral-900 ">
              <div className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-black/[0.08] bg-white text-neutral-900 opacity-0 shadow-[rgba(0,0,0,0.04)_0px_2px_2px_0px] transition-opacity group-hover:opacity-100 dark:border-black/[0.2] dark:shadow-[rgba(0,0,0,0.1)_0px_2px_2px_0px]">
                <Icons.arrowUpRight className="h-4 w-4" />
              </div>
              <a
                href={carhiveUrl}
                rel="noreferrer"
                target="_blank"
                className="absolute inset-0 z-10 h-full w-full select-none rounded-[inherit] border border-transparent border-t-neutral-200 focus-visible:border-2 focus-visible:border-[hsla(211,100%,42%,1)] dark:border-[hsla(0,0%,18%,1)] dark:focus-visible:border-[hsla(212,100%,48%,1)]"
              >
                <span className="sr-only">CarHive</span>
              </a>
              <div className="relative aspect-video max-w-full">
                <Image
                  src={carhiveImage}
                  alt=""
                  priority
                  fill
                  className="object-contain transition-transform duration-100 group-hover:scale-[1.03]"
                  placeholder="blur"
                  sizes="100vw"
                />
              </div>
            </div>
            <div className="grid grid-rows-2 items-center gap-x-4 gap-y-6 border border-black/10 border-x-transparent border-t-transparent bg-white p-5 dark:border-[hsla(0,0%,18%,1)] dark:bg-black md:flex md:px-10 md:py-6">
              <div className="inline-flex overflow-hidden">
                <div className="flex max-w-full flex-col">
                  <span className="inline-block max-w-full truncate text-sm font-semibold leading-none">
                    CarHive
                  </span>
                  <span className="mt-2.5 inline-block max-w-full truncate text-sm leading-none text-neutral-600 dark:text-neutral-400">
                    Open-source car rental application
                  </span>
                </div>
              </div>
              <div className="ml-auto w-full shrink-0 md:w-auto">
                <div className="grid grid-cols-2 items-center justify-center gap-x-4 md:flex">
                  <a
                    href={carhiveUrl}
                    rel="noreferrer"
                    target="_blank"
                    className="inline-flex h-10 min-w-[70px] items-center justify-center rounded-md border border-transparent bg-black px-3 text-sm font-medium text-neutral-50 transition-all hover:opacity-80 focus-visible:shadow-[0_0_0_2px_#fff,_0_0_0_4px_hsla(211,100%,42%,1)] focus-visible:outline-none dark:bg-neutral-50 dark:text-[#171717] dark:focus-visible:shadow-[0_0_0_2px_#0a0a0a,_0_0_0_4px_hsla(212,100%,48%,1)]"
                  >
                    Visit
                  </a>
                  <a
                    href={`${github.url}/carhive`}
                    rel="noreferrer"
                    target="_blank"
                    className="inline-flex h-10 min-w-[128px] items-center justify-center rounded-md border border-black/[0.13] px-3 text-sm font-medium transition-colors hover:bg-neutral-50 focus-visible:shadow-[0_0_0_2px_#fff,_0_0_0_4px_hsla(211,100%,42%,1)] focus-visible:outline-none dark:border-white/10 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:focus-visible:shadow-[0_0_0_2px_#0a0a0a,_0_0_0_4px_hsla(212,100%,48%,1)]"
                  >
                    Git Repository
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
