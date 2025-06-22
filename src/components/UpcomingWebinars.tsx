"use client";
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

export default function UpcomingWebinars() {
  const featureWebinars = [
    {
      title: "The Healing Power of Music",
      description:
        "Explore how music has the power to heal emotional wounds, uplift spirits, and connect people across cultures. This piece takes you through stories of individuals whose lives were transformed through melody and rhythm.",
      slug: "healing-power-music",
      isFeatured: true,
    },
    {
      title: "Creating Lo-Fi Beats for Relaxation",
      description:
        "A complete guide for beginners to create soothing, nostalgic lo-fi beats perfect for studying or unwinding after a long day. Learn about drum loops, mellow chords, and atmospheric effects that define the genre.",
      slug: "lofi-beat-guide",
      isFeatured: true,
    },
    {
      title: "The Language of Emotions in Music",
      description:
        "Understand how different musical scales, rhythms, and instruments evoke emotions like happiness, sadness, and nostalgia. This article explains the science behind why certain songs make us feel certain ways.",
      slug: "music-and-emotion",
      isFeatured: true,
    },
    {
      title: "Building Your First EDM Track",
      description:
        "Step into the world of electronic dance music production with this hands-on guide. From selecting synth sounds to arranging drops and buildups, discover how professional producers craft infectious dance tracks.",
      slug: "edm-track-basics",
      isFeatured: true,
    },
    {
      title: "Why Every Story Needs a Soundtrack",
      description:
        "This piece dives into the relationship between storytelling and music, explaining how background scores in films, games, and ads amplify emotional impact and leave lasting impressions on audiences.",
      slug: "story-soundtrack",
      isFeatured: true,
    },
  ];

  return (
    <>
      <div className="p-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
              FEATURED WEBINARS
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Enhance Your Musical Journey
            </p>
          </div>
          <div className="mt-10">
            <HoverEffect
              items={featureWebinars.map((wabinar) => ({
                title: wabinar.title,
                description: wabinar.description,
                link: "/",
              }))}
            />
          </div>
          <div className="mt-10 text-center">
            <Link
              href={"/"}
              className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
            >
              View All webinars
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
