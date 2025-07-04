import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "@/components/ui/moving-border";

export default function HeroSection() {
  return (
    <>
      <div className="h-auto md:h-screen w-full rounded-full flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0 ">
        <div className="p-4 relative z-10 w-full text-center flex flex-col gap-5">
          <Spotlight
            className="-top-40 left-0 md:-top-100 md:left-80"
            fill="white"
          />
          <h1 className=" mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 ">
            Master the art of music
          </h1>
          <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
            Dive into our comprehensive music courses and transform your musical
            journey today. Whether you are a beginner or looking to refine your
            skills, join us to unlock your true potential.
          </p>
          <div className="mt-4">
            <Link href={"/courses"}>
              <Button>Explore Courses</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
