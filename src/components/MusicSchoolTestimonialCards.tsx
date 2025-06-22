"use client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicSchoolTestimonial = [
  {
    quote:
      "Music has the incredible power to change hearts, inspire minds, and bring people together in a way nothing else can. It speaks a universal language of emotion, transcending borders and beliefs.",
    name: "Bono",
    title: "Lead Vocalist of U2",
  },
  {
    quote:
      "When our words fall short and emotions become too deep for expression, music steps in and becomes the voice of our soul. It says what we feel, without needing to say anything at all.",
    name: "Hans Christian Andersen",
    title: "Author and Poet",
  },
  {
    quote:
      "One of the most beautiful things about music is its ability to touch you so deeply that you feel healed, empowered, and understood, without any pain. It hits the heart directly and leaves an eternal mark.",
    name: "Bob Marley",
    title: "Legendary Reggae Musician",
  },
  {
    quote:
      "A life without music is like a canvas without color — dull, incomplete, and empty. Music breathes life into our days, adds meaning to our moments, and brings harmony to chaos.",
    name: "Friedrich Nietzsche",
    title: "Philosopher",
  },
  {
    quote:
      "Music doesn’t just entertain — it nourishes the soul, frees the mind, lifts the spirit, and paints our imaginations with infinite possibilities. It’s a gift to humanity that brings life to every corner of our world.",
    name: "Plato",
    title: "Greek Philosopher",
  },
];

export default function MusicSchoolTestimonialCards() {
  return (
    <>
      <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden ">
        <h2 className="text-3xl font-bold text-center mb-8 z-10">
          Hear our Harmony: Voices of success
        </h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8 ">
          <div className="w-full max-w-6xl">
            <InfiniteMovingCards
              items={musicSchoolTestimonial}
              direction="right"
              speed="slow"
            />
          </div>
        </div>
      </div>
    </>
  );
}
