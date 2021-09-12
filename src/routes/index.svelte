<script lang="ts">
  import Hero from '../components/Hero.svelte';
  import Wave from '../components/Wave.svelte';
  import IconButton from '../components/IconButton.svelte';
  import CardContainer from '../components/CardContainer.svelte';
  import ScrollingTitle from '../components/ScrollingTitle.svelte';
  import Blink from '../components/Blink.svelte';
  import GridContainer from '../components/GridContainer.svelte'

  let workExperience = [
    {
      title: 'Orion',
      description: 'Used python and Arbor Ddos protection technology to create comprehensive email alerts and reports.',
      href: '/orion',
      date: 'MAY 2019 - AUG 2019',
      pills: ['python', 'matplotlib', 'tensorflow', 'numpy']
    },
    {
      title: 'TD Lab',
      description: 'Worked as a full stack developer to create various prototypes such as a student investment app.',
      href: '/td',
      date: 'SEP 2019 - DEC 2019',
      pills: ['flutter', 'react', 'firebase']
    },
    {
      title: 'WSIB',
      description: 'Created a flutter app for scheduling in person meetings and contact trace employees who participated.',
      href: '/wsib',
      date: 'MAY 2020 - AUG 2020',
      pills: ['react', 'aws', 'flutter']
    },
    {
      title: 'Tulip',
      description: 'Developed tooling to creating and managing docker based applications and tooling for creating and managing client infrastructure.',
      href: '/tulip',
      date: 'MAY 2021 - AUG 2021',
      pills: ['golang', 'GCP', 'docker', 'grafana', 'terraform']
    },
  ];

  let projects = [
    {
      title: '1',
      description: ' asdf asdf sdaf sad asdfasdf asfasd fasd',
      href: '/orion',
      src: '/giphy.gif',
      pills: ['python', 'matplotlib', 'tensorflow', 'numpy']
    },
    {
      title: '2',
      description: 'asdfasd fsad fsadf asdf asdf sdf sdf asd',
      href: '/td',
      src: '/giphy.gif',
      pills: ['flutter', 'react', 'firebase']
    },
    {
      title: '3',
      description: 'asdf asdf asd fasdf sadf asdf asdfasdf s',
      href: '/wsib',
      src: '/giphy.gif',
      pills: ['react', 'aws', 'flutter']
    },
    {
      title: '4',
      description: 'asdfasdfasdf asdf asdf asdf asd fsd',
      href: '/tulip',
      src: '/giphy.gif',
      pills: ['golang', 'GCP', 'docker', 'grafana', 'terraform']
    },

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
      <div class="social-button">
        <IconButton href="https://github.com/daniel-ziorli" src="icons/github.png" size={42} newTab={true}/>
      </div>
      <div class="social-button">
        <IconButton href="https://www.youtube.com/channel/UC9MyKPOkIZkxSiRsxwJbj8Q" src="icons/youtube.png" size={42} newTab={true}/>
      </div>
      <div class="social-button">
        <IconButton href="https://www.linkedin.com/in/daniel-ziorli-2443bb164" src="icons/linkedin.png" size={42} newTab={true}/>
      </div>
    </div>
    <p>
      Hello! My name is Daniel and I enjoy solving problems with tech. My interest in programming
      started back in 2013 when I decided to create my smash hit indie game. As it turns out
      programming is hard and game development is even harder.
    </p>
    <p>
      Fast-forward to today, and I’ve had experience working in large companies such as TD and WSIB
      doing fullstack development. I've had the pleauser of working on tooling at Tulip and
      networking at ORION. Personally I have been working on a VR game in Unity using C#.
    </p>
  </div>
</div>
<Wave svg="waves/black-purple.svg" flip={true}/>

<div id="projects" />
<ScrollingTitle margin="3rem" text="Projects " />

<div style="display: flex; justify-content:center;  width:100%">
  <GridContainer tiles={projects}/>
</div>

<div id="experience" />
<ScrollingTitle margin="3rem" text="Experience " />
<div style="display: flex; justify-content:center; align-items: center; margin-right: auto; margin-left: auto; width:100%">
  <CardContainer cards={workExperience}/>
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

  .social-button {
    margin-left: 10px;
    margin-right: 10px;
  }

  .light-text {
    color: var(--text-color, white);
  }

  .dark-text {
    color: var(--background-color, black);
  }

  .purple {
    background-color: var(--purple, purple);
    width: 100%;
  }
  .white {
    background-color: var(--text-color, white);
    width: 100%;
  }

  .yellow {
    background-color: var(--yellow, yellow);
    width: 100%;
  }
</style>
