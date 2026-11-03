/**
 * Movie data for the watch.it home page .
 * The order matters: on desktop the first movie is shown as the wide
 * "featured" card, the next two as tall cards side by side, and the rest as
 * horizontal cards.
 */
import rogerRabbit from '../../assets/who-framed-roger-rabbit.jpg';
import hook from '../../assets/hook.jpg';
import laLaLand from '../../assets/la-la-land.jpg';
import hiddenFigures from '../../assets/hidden-figures.jpg';
import palmSprings from '../../assets/palm-springs.jpg';
import barbie from '../../assets/barbie.jpg';

export const genres = ['Action', 'Comedy', 'Romance', 'Drama'];

export const movies = [
  {
    title: 'Who Framed Roger Rabbit',
    year: 1988,
    poster: rogerRabbit,
    description:
      'In a world where cartoons and humans coexist, a detective must solve a zany, high-stakes mystery. Packed with wild humor, groundbreaking animation, and noir twists, this unique film will pull you into a world where anything is possible!',
  },
  {
    title: 'Hook',
    year: 1991,
    poster: hook,
    description:
      'Rediscover Neverland in this thrilling twist on Peter Pan! Robin Williams stars as a grown-up Peter, who must rediscover his inner child to rescue his kids from the clutches of Captain Hook. Adventure, magic, and nostalgia blend in this timeless family classic.',
  },
  {
    title: 'La La Land',
    year: 2016,
    poster: laLaLand,
    description:
      'Love, dreams, and the magic of LA take center stage in this musical masterpiece. Watch as two starry-eyed artists navigate passion and ambition in a world where every moment feels like a cinematic spectacle!',
  },
  {
    title: 'Hidden Figures',
    year: 2016,
    poster: hiddenFigures,
    description:
      "Three unsung heroes of NASA's space race take the spotlight in this inspiring true story. Battling discrimination and defying the odds, these brilliant African-American women prove that intelligence, perseverance, and unity can change history and break barriers.",
  },
  {
    title: 'Palm Springs',
    year: 2020,
    poster: palmSprings,
    description:
      'A never-ending wedding day turns into an unforgettable time-loop romance! Stuck in the same day, two strangers find love, chaos, and meaning in the most unexpected ways.',
  },
  {
    title: 'Barbie',
    year: 2023,
    poster: barbie,
    description:
      'Step into the dazzling world of Barbie as she embarks on an unexpected journey from her perfect doll life to the real world. Filled with humor, heart, and empowering messages, this vibrant adventure redefines what it means to dream big!',
  },
];

/**
 * Which desktop layout each card uses, by position in the list:
 *  - 0      -> "featured": wide banner card
 *  - 1, 2   -> "tall": poster above text, two per row
 *  - 3+     -> "wide": poster beside text, one per row
 * (On tablet and mobile every card is shown as a "tall" card.)
 */
export function layoutForIndex(index) {
  if (index === 0) return 'featured';
  if (index <= 2) return 'tall';
  return 'wide';
}
