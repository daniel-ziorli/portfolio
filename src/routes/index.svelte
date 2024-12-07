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
  import Pills from '../components/Pills.svelte';

  let pills = ['typescript', 'react', 'node.js', 'mongodb', 'three.js', 'jitsi', 'figma', 'aws'];
  let workExperience = [
    {
      title: 'Veerum',
      type: 'Full Time',
      description:
        'Developed integrations for 10+ services, integrating 500,000+ objects daily. Architected new standards reducing deployment time by 97%.',
      date: 'AUG 2022 - AUG 2024',
      pills: ['typescript', 'react', 'node.js', 'mongodb', 'three.js']
    },
    {
      title: 'Sadicon Labs',
      type: 'Contractor',
      description:
        'Led the development of a virtual receptionist web app for storage facilities. Used jitsi for video conferencing and react for facility management.',
      date: 'MAY 2021 - AUG 2021',
      pills: ['typescript', 'react', 'jitsi', 'figma', 'aws']
    },
    {
      title: 'Tulip ',
      type: 'Internship',
      description:
        'Developed tooling to creating and managing docker based applications and tooling for creating and managing client infrastructure.',
      href: 'tulip',
      date: 'MAY 2021 - AUG 2021',
      pills: ['golang', 'GCP', 'docker', 'grafana', 'terraform']
    },
    {
      title: 'WSIB',
      type: 'Internship',
      description:
        'Created a flutter app for scheduling in person meetings and contact trace employees who participated.',
      href: 'wsib',
      date: 'MAY 2020 - AUG 2020',
      pills: ['flutter', 'node.js', 'aws']
    },
    {
      title: 'TD Lab',
      type: 'Internship',
      description:
        'Worked as a full stack developer to create various prototypes such as a student investment app.',
      href: 'td',
      date: 'SEP 2019 - DEC 2019',
      pills: ['flutter', 'react', 'firebase']
    },
    {
      title: 'Orion',
      type: 'Internship',
      description:
        'Used python and Arbor Ddos protection technology to create comprehensive email alerts and reports.',
      href: 'orion',
      date: 'MAY 2019 - AUG 2019',
      pills: ['python', 'matplotlib', 'tensorflow', 'numpy']
    }
  ];

  let projects = [
    {
      title: 'Project Impulse',
      description:
        'Developing a Multiplayer VR shooter in unity for Steam and Oculus. It features a physics based climbing system, mod support, voice chat, accurate networked physics simulation, cross platform support and so much more!',
      href: '/vrgame',
      src: '/projects/vr.gif',
      pills: ['Unity', 'C#', 'Mirror', 'Addressables', 'Mod.io', 'Blender', 'Linode']
    },
    {
      title: 'LLM Text Adventure',
      description:
        'Created a real-time multiplayer text adventure game using Supabase for infrastructure, React for the frontend, and a custom LLM framework with Gemini Flash for adaptive game narratives.',
      href: 'https://dnd-fronted.vercel.app/',
      src: '/projects/dnd.png',
      newtab: true,
      pills: [
        'Supabase',
        'React',
        'Zustand',
        'Gemini',
        'Gen AI',
        'Prompt Engineering',
        'Dino',
        'Typescript',
        'Tailwind'
      ]
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
      title: 'Meh Window Manager',
      description: `A Simple cross platform window manager that allows you to quickly switch between applications with hotkeys.
        The term "meh" refers to the combination of keys used to trigger the window manager, by default meh is bound to Ctrl + Alt + Shift
        but everything can be changed with the config file.`,
      href: 'https://github.com/daniel-ziorli/MehWindowManager',
      src: '/projects/meh.gif',
      newtab: true,
      pills: ['Python']
    },
    {
      title: 'Auto Fill Extension',
      description: `Created a chrome extension that allows users to automatically fill forms using a hotkey.
      Add any context or personal information and the extension will use it to fill out inputs, select dropdown values, check checkboxes and click radio buttons.
      `,
      href: 'https://github.com/daniel-ziorli/auto-fill-browser',
      src: '/projects/browser_chat.gif',
      newtab: true,
      pills: ['Chrome Extension API', 'React', 'Gemini', 'Javascript', 'Tailwind']
    },
    {
      title: 'Browser Chat Extension',
      description: `Developed a chrome extension allowing users can harness the power of LLMs within their current browsing context.
        It's useful for creating notes, asking questions, summarizing text, and more.
        It also works on youtube videos, enabling users to get answers without watching the whole thing.`,
      href: 'https://github.com/daniel-ziorli/browser-chat',
      src: '/projects/browser_chat.gif',
      newtab: true,
      pills: ['Chrome Extension API', 'React', 'Gemini', 'Javascript', 'Tailwind']
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

<div id="about" style="height: 100px; margin-top: -100px;" />
<div style="margin-inline: 10px;">
  <div class="about-container about">
    <div class="about-header">
      <h1 style="flex: 1; margin:0px; font-size: 2rem; color: var(--yellow)">
        ABOUT<Blink>_</Blink>
      </h1>
      <div style="">
        <Socials />
      </div>
    </div>
    <p class="about-blurb">
      2 years of professional experience in full stack development with a focus on backend.
    </p>
    <div class="about-skills">
      <h1 style="align-self: left; margin:0px; font-size: 1.5rem; min-width: 140px;">Languages</h1>
      <Pills pills={['Typescript', 'Python', 'C#', 'Golang']} />
    </div>
    <div class="about-skills">
      <h1 style="align-self: left; margin:0px; font-size: 1.5rem; min-width: 140px;">Backend</h1>
      <Pills pills={['Node.js', 'Deno', 'ETL Pipelines', 'FastAPI']} />
    </div>
    <div class="about-skills">
      <h1 style="align-self: left; margin:0px; font-size: 1.5rem; min-width: 140px;">Databases</h1>
      <Pills pills={['Postgres', 'MongoDB', 'Supabase', 'Redis']} />
    </div>
    <div class="about-skills">
      <h1 style="align-self: left; margin:0px; font-size: 1.5rem; min-width: 140px;">Frontend</h1>
      <Pills pills={['React', 'Tailwind', 'Zustand', 'Redux']} />
    </div>
    <div class="about-skills">
      <h1 style="align-self: left; margin:0px; font-size: 1.5rem; min-width: 140px;">Tools</h1>
      <Pills pills={['Git', 'Docker', 'Figma', 'Blender']} />
    </div>
    <div style="height: 10px;" />
    <Resume />
  </div>
</div>

<div id="experience" />
<ScrollingTitle margin="3rem" text="Experience " />
<div
  style="display: flex; justify-content:center; align-items: center; margin-right: auto; margin-left: auto; width:100%;"
>
  <CardContainer cards={workExperience} />
</div>

<div id="projects" />
<ScrollingTitle margin="3rem" text="Projects " />

<div style="display: flex; justify-content:center;  width:100%">
  <ProjectContainer tiles={projects} />
</div>

<style>
  .about-container {
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
    max-width: 1200px;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    padding-inline: 40px;
    padding-block: 15px;
    padding-bottom: 35px;
    max-width: 800px;
    background-color: #17141d;
    border-radius: 16px;
  }
  @media only screen and (max-width: 800px) {
    .about-container {
      padding-inline: 20px;
      background-color: var(--background-color);
    }
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

  .about-header {
    display: flex;
    align-items: center;
  }
  .about-skills {
    display: flex;
    align-items: center;
    padding-block: 10px;
    flex-direction: row;
  }

  @media only screen and (max-width: 800px) {
    .about-skills {
      flex-direction: column;
      align-items: flex-start;
      gap: 5px;
    }
  }
  .about-blurb {
    margin-bottom: 0px;
    font-size: 1rem;
    width: 70%;
    margin-top: -5px;
  }

  @media only screen and (max-width: 800px) {
    .about-blurb {
      width: 100%;
      margin-top: 0px;
      margin-bottom: 10px;
    }
  }

  .purple {
    background-color: var(--purple, purple);
    width: 100%;
  }
</style>
