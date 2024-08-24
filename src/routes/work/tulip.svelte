<script lang="ts">
  import ScrollingTitle from '../../components/ScrollingTitle.svelte';
</script>

<div style="margin-top: 80px;" />
<ScrollingTitle margin={'0'} text={'Tulip '} />

<div>
  <h1>Introduction</h1>
  <p>
    During the summer I had the absolute pleasure of working with the people at Tulip as a Software
    Developer on the tools team! Tulip is a SaaS mobile platform which provides a better shopping
    experience for businesses and customers alike. During my term I worked exclusively with the dev
    tools department to develop and maintain various services for the developers at tulip.
  </p>

  <h1>Goals</h1>
  <h2>GO</h2>
  <p>
    When working at tulip the primary backend language used was GO. This language was completely new
    to me but as I read documentation and went over source it became really easy to work with. GO
    and tulip also taught me a lot of really great design patterns. For example GO interfaces are
    commonly used in order to decouple code allowing it to be modified and built upon fairly easily
    in the future.
  </p>

  <h2>Docker</h2>
  <p>
    In my previous Coop terms I was never exposed to Docker and when I was told to work with it I was completely blown away by the technology. Docker in combination with kubernetes is an extremely powerful combo. I learned a fair amount about clusters, pods, containers and images. I worked with one of Tulips internal tools which was primarily focused on building docker based applications. It taught me a lot about how images and container based applications work and I plan on taking this knowledge and applying it in my future works.
  </p>

  <h2>Hackathons</h2>
  <p>
    Every Coop term I try to participate in the company hackathons as it's a good way to get to know others and make something fun and different in a short amount of time. Tulip was unique as they allowed you to create anything. This could include going out and picking up trash as one group did. As long as you had something to present and you accomplished something It was considered a success. I decided to create a VR application in Unity. The project consisted of a new locomotion system that allowed you to traverse using your arms as legs. Although Tulip may never use the technology many liked the work and got people interested in VR which is amazing.
  </p>

  <h1>Job Description</h1>
  <p>
    My primary role at Tulip was to work with the Tooling team to create and maintain their tools. I mainly worked on the aforementioned tool for creating and managing docker based applications as well as another tool that focused on creating and managing client infrastructure. I also worked with platforms such as Google Cloud Platform and Grafana.
  </p>

  <h1>Conclusion</h1>
  <p>
    I really enjoyed my time at Tulip. It taught me a lot about how companies manage and develop their code base to allow for change and expansion. I was able to work with flexible hours in order to achieve my goals. I'm proud of my progress with GO as I came into the term knowing nothing about it. Coming out of the term I feel confident that I could use GO in my own projects or in another corporate setting. I am also very excited to apply my knowledge on Docker. I have already applied Docker to one of my personal projects and plan to continue to learn and expand on it. Overall, Tulip has taught me a tone about creating applications that are scalable and maintainable. I'm truly excited to learn and apply the knowledge I have developed at Tulip in the future. 
  </p>
</div>

<div style="margin-bottom: 25%" />

<style>
  div {
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
    max-width: 1200px;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }

  h1 {
    color: var(--yellow);
    font-weight: normal !important;
  }
  h2 {
    font-weight: normal !important;
  }
  p {
    font-weight: normal !important;
    margin-top: 2rem;
    margin-bottom: 2rem;
    line-height: 2rem;
  }
</style>
