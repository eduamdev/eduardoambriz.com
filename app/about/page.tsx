import Image from "next/image";
import { Text } from "@/components/text";
import { Icons } from "@/components/icons";

const jobs = [
  {
    logo: {
      image: "",
      alt: "",
    },
    company: "Freelance",
    job: "Developer",
    initialDate: "April 2022",
    endDate: "Present",
    location: "",
    remote: true,
  },
  {
    logo: {
      image: "/images/resultscx_logo.png",
      alt: "ResultsCX logo",
    },
    company: "ResultsCX",
    job: "Software Developer",
    initialDate: "Jun 2021",
    endDate: "March 2022",
    location: "",
    remote: true,
  },
  {
    logo: {
      image: "/images/cotemar_logo.png",
      alt: "Cotemar logo",
    },
    company: "Cotemar",
    job: "Software Engineer",
    initialDate: "Jan 2020",
    endDate: "Jun 2021",
    location: "Mérida, Mexico",
    remote: true,
  },
  {
    logo: {
      image: "/images/tpmex_logo.png",
      alt: "",
    },
    company: "TP-MEX Programación y Tecnologia",
    job: "Web Developer",
    initialDate: "Feb 2018",
    endDate: "Jul 2019",
    location: "Campeche, Mexico",
    remote: false,
  },
];

export default function AboutPage() {
  return (
    <main className="flex min-h-screen max-w-5xl mx-auto flex-col items-center px-6 py-24">
      <section className="flex flex-col justify-center items-center mt-6 w-full">
        <Text
          as="h1"
          align="center"
          className="px-8 text-xl font-[575] leading-9 tracking-[-0.01em] md:mt-3 md:text-2xl md:leading-[44px]"
          balanced
        >
          About
        </Text>
        <Text
          align="center"
          className="max-w-4xl text-lg leading-8 text-neutral-600 dark:text-neutral-300 mt-5"
          balanced
        >
          Hello, I&apos;m Eduardo, a Mexico-based Software Engineer specializing
          in crafting high-performance, intuitive websites with excellent user
          experiences.
        </Text>
      </section>
      <section className="mx-auto mt-16 flex w-full max-w-5xl flex-col items-center justify-center md:mt-20">
        <Text
          as="h2"
          align="center"
          className="px-8 text-xl font-[575] leading-9 tracking-[-0.01em] md:mt-3 md:text-2xl md:leading-[44px]"
          balanced
        >
          Experience
        </Text>
        {/* <div className="mt-7 md:mt-12 max-w-5xl w-full py-2 px-5 md:px-8 flex flex-col divide-y shadow-sm border border-black/[0.1] dark:border-white/[0.1] divide-black/[0.1] dark:divide-white/[0.1] rounded-3xl">
          <div className="grid grid-cols-4 items-baseline justify-between gap-x-12 gap-y-6 py-6">
            <div className="col-span-4 md:col-span-1">
              <Text className="font-medium">Freelance</Text>
              <Text className="text-neutral-500 dark:text-neutral-400 text-[13px] mt-2 md:mt-3 leading-loose lg:text-sm lg:leading-loose">
                May 2022 - Present
              </Text>
            </div>
            <div className="col-span-4 md:col-span-3">
              <Text className="font-medium">Developer</Text>
              <Text className="text-sm md:text-[15px] text-neutral-600 dark:text-neutral-400 mt-2 md:mt-3 leading-loose">
                Software Engineer specializing in crafting high-performance,
                intuitive websites with excellent user experiences
              </Text>
            </div>
          </div>
          <div className="grid grid-cols-4 items-baseline justify-between gap-x-12 gap-y-6 py-6">
            <div className="col-span-4 md:col-span-1">
              <Text className="font-medium">Results CX</Text>
              <Text className="text-neutral-500 dark:text-neutral-400 text-[13px] mt-2 md:mt-3 leading-loose lg:text-sm lg:leading-loose">
                July 2021 - March 2022
              </Text>
            </div>
            <div className="col-span-4 md:col-span-3">
              <Text className="font-medium">Software Engineer</Text>
              <Text className="text-sm md:text-[15px] text-neutral-600 dark:text-neutral-400 mt-2 md:mt-3 leading-loose">
                Software Engineer specializing in crafting high-performance,
                intuitive websites with excellent user experiences. Software
                Engineer specializing in crafting high-performance, intuitive
                websites with excellent user experiences
              </Text>
            </div>
          </div>
        </div> */}
        <div className="mt-7 md:mt-12 max-w-5xl w-full flex flex-col items-start gap-y-4">
          {jobs.map((job) => {
            return (
              <div
                key={job.company}
                className="flex gap-x-5 md:gap-x-8 w-full p-5 shadow-sm shadow-neutral-50 border border-black/[0.08] dark:border-white/[0.1] rounded-xl"
              >
                <div className="h-[60px] w-[60px] bg-neutral-50">
                  <Image
                    className="border border-black/[0.1] dark:border-white/[0.1] rounded-md shadow-sm"
                    width={60}
                    height={60}
                    src={job.logo.image}
                    alt={job.logo.alt}
                  />
                </div>
                <div>
                  <Text className="leading-none text-[15px] md:text-base font-semibold dark:text-neutral-200">
                    {job.job}
                  </Text>
                  <Text className="mt-1.5 text-[15px] text-neutral-600 dark:text-neutral-400">
                    {job.company}
                  </Text>
                  <div className="flex flex-col md:flex-row items-start md:items-center mt-4 gap-2">
                    <span className="rounded-md px-2.5 py-1 text-[13px] text-neutral-600 border border-black/[0.1] dark:border-white/[0.1] text-sm bg-neutral-50 inline-flex items-center justify-center gap-x-2">
                      <Icons.calendar className="h-4 w-4" />
                      <span>
                        {job.initialDate} - {job.endDate}
                      </span>
                    </span>
                    <span className="rounded-md px-2.5 py-1 text-[13px] text-neutral-600 border border-black/[0.1] dark:border-white/[0.1] text-sm bg-neutral-50 inline-flex items-center justify-center gap-x-2">
                      <Icons.pin className="h-4 w-4" />
                      <span>
                        {job.location}
                        {job.remote
                          ? job.location
                            ? " - Remote"
                            : "Remote"
                          : ""}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
