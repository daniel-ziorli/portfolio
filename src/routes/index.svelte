<script lang="ts">
  import Hero from '../components/Hero.svelte';
  import Wave from '../components/Wave.svelte';
  import IconButton from '../components/IconButton.svelte';
  import CardContainer from '../components/CardContainer.svelte';
  import ScrollingTitle from '../components/ScrollingTitle.svelte';
  import Blink from '../components/Blink.svelte';
  import ProjectContainer from '../components/ProjectContainer.svelte';
  import Socials from '../components/Socials.svelte';
  import Resume from '../components/Resume.svelte';
  import { onMount } from 'svelte';

  let workExperience = [
    {
      title: 'Tulip',
      description:
        'Developed tooling to creating and managing docker based applications and tooling for creating and managing client infrastructure.',
      href: 'tulip',
      date: 'MAY 2021 - AUG 2021',
      pills: ['golang', 'GCP', 'docker', 'grafana', 'terraform']
    },
    {
      title: 'WSIB',
      description:
        'Created a flutter app for scheduling in person meetings and contact trace employees who participated.',
      href: 'wsib',
      date: 'MAY 2020 - AUG 2020',
      pills: ['react', 'aws', 'flutter']
    },
    {
      title: 'TD Lab',
      description:
        'Worked as a full stack developer to create various prototypes such as a student investment app.',
      href: 'td',
      date: 'SEP 2019 - DEC 2019',
      pills: ['flutter', 'react', 'firebase']
    },
    {
      title: 'Orion',
      description:
        'Used python and Arbor Ddos protection technology to create comprehensive email alerts and reports.',
      href: 'orion',
      date: 'MAY 2019 - AUG 2019',
      pills: ['python', 'matplotlib', 'tensorflow', 'numpy']
    }
  ];

  let projects = [
    {
      title: 'LLM Text Adventure',
      description:
        'Created a real-time multiplayer text adventure game using Supabase for infrastructure, React for the frontend, and a custom LLM framework with Gemini Flash for adaptive game narratives.',
      href: 'https://dnd-fronted.vercel.app/',
      newtab: true,
      pills: ['Supabase', 'React', 'Gemini 1.5 Flash', 'LLM', 'Dino', 'Typescript']
    },
    {
      title: 'Project Impulse',
      description:
        'Developing a Multiplayer VR shooter in unity for Steam and Oculus. It features a physics based climbing system, mod support, voice chat, accurate networked physics simulation, cross platform support and so much more!',
      href: '/vrgame',
      src: '/projects/vr.gif',
      pills: ['Unity', 'C#', 'Mirror', 'Addressables', 'Mod.io', 'Blender', 'Linode']
    },
    {
      title: 'CSGO Hack',
      description:
        'Hacked csgo with python. Used pymem to read memory to display/modify the game state with pyQt5 and win32gui. Tool features recoil control, aimbot, trigger bot, auto bhop, wall hacks, and radar. Each feature runs on a thread to prevent in-game performance loss.',
      href: '',
      src: '/projects/csgo.gif',
      pills: ['Python', 'pyQt5', 'pymem', 'win32gui', 'multithreading']
    },
    {
      title: 'Productive Youtube',
      description:
        'Created a chrome extension to change video speeds past the 2x cap, disables the home page and disable comments to have a more productive youtube experience.',
      href: 'https://github.com/daniel-ziorli/productive-youtube',
      newtab: true,
      src: '/projects/productiveYoutube.gif',
      pills: ['Javascript', 'HTML', 'CSS', 'Chrome API'],
      alignment: 'top'
    },
    {
      title: 'Doom Engine',
      description:
        'Used python and pygame to recreate the doom rendering engine. Uses a 2D map composed of 2D walls to create a 3D projection of the map. Also features a simple collision detection system which projects the players velocity over the 2d walls.',
      href: 'https://github.com/daniel-ziorli/doom-engine',
      newtab: true,
      src: '/projects/doom.gif',
      pills: ['Python', 'pygame']
    }
  ];
</script>

<div id="home" />
<Hero />

<div id="about" />
<Wave svg="waves/black-purple.svg" />
<div class="purple">
  <div class="content about">
    <div class="about-header">
      <h1 style="align-self: left; margin-right: auto;">ABOUT<Blink>_</Blink></h1>
      <div style="align-self: right;">
        <Socials />
      </div>
    </div>
    <p>
      Hello! My name is Daniel and I enjoy solving problems with tech. My interest in programming
      started back in 2013 when I decided to create my smash hit indie game. As it turns out
      programming is hard and game development is even harder.
    </p>
    <p>
      Fast-forward to today, and I've had experience working in large companies such as TD and WSIB
      doing full stack development. I've had the pleasure of working on tooling at Tulip and
      networking at ORION. Personally I have been working on a VR game in Unity using C#.
    </p>
    <Resume />
  </div>
</div>
<Wave svg="waves/black-purple.svg" flip={true} />

<div id="projects" />
<ScrollingTitle margin="3rem" text="Projects " />

<div style="display: flex; justify-content:center;  width:100%">
  <ProjectContainer tiles={projects} />
</div>

<div id="experience" />
<ScrollingTitle margin="3rem" text="Experience " />
<div
  style="display: flex; justify-content:center; align-items: center; margin-right: auto; margin-left: auto; width:100%"
>
  <CardContainer cards={workExperience} />
</div>

<style>
  .content {
    padding-left: 20px;
    padding-right: 20px;
  }
  .content {
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
    max-width: 1200px;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }
  h1 {
    font-size: 2rem;
    font-weight: normal !important;
  }
  p {
    line-height: 1.8rem;
    font-size: 1.3rem;
    font-weight: normal !important;
  }
  .about {
    max-width: 800px;
  }
  .about-header {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .purple {
    background-color: var(--purple, purple);
    width: 100%;
  }
</style>
