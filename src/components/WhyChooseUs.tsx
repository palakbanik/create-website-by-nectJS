"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

const musicSchoolContent = [
  {
    title: "Acoustic Guitar Basics",
    description:
      "Dive into the world of acoustic guitar with this beginner-friendly course. You’ll learn essential chords, strumming patterns, and foundational techniques to start playing your favorite songs with confidence and style.",
  },
  {
    title: "Lo-Fi Beat Making",
    description:
      "Discover how to create smooth, nostalgic lo-fi beats that are perfect for study, relaxation, and chill-out playlists. This course covers sample selection, drum programming, and atmospheric layering using popular digital audio workstations.",
  },
  {
    title: "Pop Vocal Training",
    description:
      "Enhance your vocal range, control, and pitch accuracy with practical exercises designed for aspiring pop singers. Learn breathing techniques, vocal warm-ups, and stylistic tips to make your performances truly stand out.",
  },
  {
    title: "Electronic Dance Music (EDM) Production",
    description:
      "Unleash your creativity and produce high-energy EDM tracks that light up the dance floor. This course teaches you sound design, beat arrangement, effects processing, and mixdown techniques using professional-grade software.",
  },
  {
    title: "Classical Piano Mastery",
    description:
      "Refine your piano-playing skills by exploring timeless classical pieces from legendary composers like Mozart, Beethoven, and Chopin. This course focuses on technique, musical expression, and performance interpretation for intermediate to advanced pianists.",
  },
];

export default function WhyChooseUs() {
  return (
    <>
      <StickyScroll content={musicSchoolContent} />
    </>
  );
}
