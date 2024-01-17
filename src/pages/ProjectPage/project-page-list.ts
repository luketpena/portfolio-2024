import { PersonalProjectProps } from './components/PersonalProject/PersonalProject';

import dawg00 from '../../assets/images/projects/dawg_00.gif';

// import rocket00 from '../../assets/images/projects/rocket_00.png';
import rocket01 from '../../assets/images/projects/rocket_01.gif';

// import sailbound00 from '../../assets/images/projects/sailbound_00.png';
import sailbound01 from '../../assets/images/projects/sailbound_01.gif';

import catan00 from '../../assets/images/projects/catan_00.jpg';
import catan01 from '../../assets/images/projects/catan_01.jpg';
import catan03 from '../../assets/images/projects/catan_03.jpg';
import catan04 from '../../assets/images/projects/catan_04.jpg';
import catan05 from '../../assets/images/projects/catan_05.jpg';
import catan06 from '../../assets/images/projects/catan_06.jpg';
import catan07 from '../../assets/images/projects/catan_07.jpg';
import catan08 from '../../assets/images/projects/catan_08.jpg';
import catan09 from '../../assets/images/projects/catan_09.jpg';
import catan10 from '../../assets/images/projects/catan_10.jpg';
import catan11 from '../../assets/images/projects/catan_11.jpg';
import catan12 from '../../assets/images/projects/catan_12.jpg';

import print00 from '../../assets/images/projects/print_00.jpg';
import print01 from '../../assets/images/projects/print_01.jpg';
import print02 from '../../assets/images/projects/print_02.jpg';
import print03 from '../../assets/images/projects/print_03.jpg';
import print04 from '../../assets/images/projects/print_04.jpg';

import music00 from '../../assets/images/projects/music_00.jpeg';
import music01 from '../../assets/images/projects/music_01.jpeg';
import music02 from '../../assets/images/projects/music_02.jpeg';
import music03 from '../../assets/images/projects/music_03.jpeg';

import art00 from '../../assets/images/projects/art_00.jpeg';
import art01 from '../../assets/images/projects/art_01.jpeg';
import art02 from '../../assets/images/projects/art_02.png';
import art03 from '../../assets/images/projects/art_03.png';
import art04 from '../../assets/images/projects/art_04.png';
import art05 from '../../assets/images/projects/art_05.jpeg';

export const projects: PersonalProjectProps[] = [
  {
    title: 'Barrel Rocketeer',
    subtitle: 'Ongoing Development',
    color: '#7ADFEE',
    contrast: '#0D445B',
    icon: 'GiRocket',
    images: [rocket01],
    description: `The theme for the game jam was "Between Worlds", and I had been recently playing a lot of Zelda: Tears of the Kingdom.
    
    So I could think of no better way to bring those two together than to remake the ToTK ultrahand system in 2D to build rocketships to fly literally between worlds
    
    Glue pieces together, assign automation behaviors, and see what scores your ship can achieve on its flight to a new home... if it can make it that far.`,
    actions: [
      {
        text: 'Blast off at Itch.io',
        icon: 'FaItchIo',
        href: 'https://penapenyata.itch.io/barrel-rocketeer',
      },
    ],
  },
  {
    title: 'Sailbound',
    subtitle: 'Long-term Project',
    color: '#278FFF',
    icon: 'GiSailboat',
    images: [sailbound01],
    description: `Sailbound began its life as a game jam game, where I developed the concept, art, sound, and music, but was not directly involved in the code. After all was said and done, I wanted to rebuild it myself but better.
    
    Over the years, I've built and rebuilt this game from top to bottom repeatedly and taken it to a number of conventions. It has served as a wonderful learning ground, not just for solving new problems, but also for learning how I solve problems.
    
    Sailbound is a physics based sailing game inspired by Wind Waker. Bob above and below the water, dodging the dangers of the open ocean while chasing treasure.`,
    actions: [
      {
        text: 'Original game jam version at Itch.io',
        icon: 'FaItchIo',
        href: 'https://fib.itch.io/washed-up',
      },
    ],
  },

  {
    title: 'Dawg of the Dead',
    subtitle: 'Game Jam (48hr)',
    color: '#ff3c36',
    icon: 'GiTombstone',
    images: [dawg00],
    description: `Dawg of the Dead was created in Game Maker for the 28th GM48 Game Jam. The theme of which was "Companion".
          
    You are being assailed by a hoard of zombies, but you're not the one with the gun - only your canine companion can fight back. And their gun is always pointing at YOU.
    
    Shout commands to your pup, collect powerups, and try not to get eaten or shot in this top-down arcade shooter.`,
    actions: [
      {
        text: 'Run and gun at GM48',
        href: 'https://gm48.net/game-jams/companion/games/dawg-of-the-dead',
        icon: 'SiGamemaker',
      },
    ],
  },

  {
    title: '3D Catan',
    subtitle: 'Modeling, 3D printing, and model painting',
    color: '#FFA927',
    icon: 'GiCastle',
    images: [
      catan00,
      catan01,
      catan03,
      catan04,
      catan05,
      catan06,
      catan07,
      catan08,
      catan09,
      catan10,
      catan11,
      catan12,
    ],
    description: `In high school, I had the idea to build a 3D Settlers of Catan board, but lacked the tools. But a few years ago, I got my hands on a 3D resin print. I decided to theme it based on a video game I play with my family, Guild Wars 2. I taught myself how to 3D model and began to sculpt key architecture and landscapes from the game in 3D.
    
    Landscapes lock together and capital cities are lit with LEDs. This meant I had to figure out how to model parts to balance tech specs with artistic intent.
    
    Now that all the parts are printed, I've been learning how to paint minitures to finish the project up. Tea, good music, and precise micro-painting are how I spend many evenings now.`,
  },
  {
    title: '3D Printing & Crafts',
    subtitle: 'General shenanigans',
    color: '#8056F5',
    icon: 'GiScissors',
    images: [print00, print01, print02, print03, print04],
    description: `The printer is retired for now. But before it got put away, I managed to try out lots of ideas - magic boxes, magic wands, magic rabits, magic crystals.
    
    3D modeling and printing feels like magic. And I have many more ideas when I choose to get back into the hobby.`,
  },
  {
    title: 'Music Composition',
    subtitle: 'For games, for me',
    color: '#43C691',
    icon: 'GiClarinet',
    images: [music00, music01, music02, music03],
    description: `When I first started making video games, I also started writing some music. This evolved into studying music composition in undergrad and graduate school, with a goal of scoring video games.
    
    I scored two games as a freelancer - one failed after launch, but other did quite well. The developers of Mana Spark were wonderful people to work with.
    
    Music has taken a backseat since the pandemic. But I am plotting a return, if not for other people's games, then for my own.`,
    actions: [
      {
        text: 'Listen on SoundCloud',
        href: 'https://soundcloud.com/lukepena',
        icon: 'FaSoundcloud',
      },
      {
        text: 'Watch on YouTube',
        href: 'https://youtu.be/jKChh_-RymU',
        icon: 'SiYoutube',
      },
    ],
  },
  {
    title: 'Art',
    subtitle: 'Ink, pencil, oil pastel, watercolor',
    color: '#C6436A',
    icon: 'GiPaintBrush',
    images: [art05, art00, art02, art01, art03, art04],
    description: `I dabble in art. Not a lot, but just enough to be dangerous.
    
    I did a lot of highly detailed pencil portraits long ago, maybe some landscapes.
    
    Now, when I have the time, I tend to do quick ink sketches. Maybe representative, maybe more abstract.`,
    actions: [
      {
        text: 'Look on Instagram',
        href: 'https://www.instagram.com/luketpena/',
        icon: 'SiInstagram',
      },
    ],
  },
];
