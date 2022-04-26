<script lang="ts">
  import ScrollingTitle from '../components/ScrollingTitle.svelte';
</script>

<div style="margin-top: 80px;" />
<ScrollingTitle margin={'0'} text={'WSIB '} />

<div>
  <h1>Introduction</h1>
  <p>
    During my summer co-op I worked at WSIB's lab as a Software Developer! WSIB lab is a branch
    focused on creating new products with new technology. While I worked there I was able to
    prototype a contact tracing app, a scheduling app and a chrome extension for hiring.
  </p>

  <h1>Goals</h1>
  <h2>React</h2>
  <p>
    Frontend development is quite difficult if you attempt to do things the vanilla way. At WSIB we
    primarily used React or React Native for our front end needs. Although it was extremely hard to
    get a first learning reaction in a production setting has really laid the foundation for other
    frameworks. When learning something like VUE I was able to immediately pick it up due to my
    experience with react.
  </p>

  <h2>AWS</h2>
  <p>
    WSIB primarily worked with aws for their various backend needs. When first looking into it I was
    overwhelmed with all the services and their possible applications. I worked on creating a
    backend to store and manage scheduling information. I also used some of the machine learning
    services in order to redact personal information from portfolio sites to remove biases.
  </p>

  <h2>Project Management</h2>
  <p>
    Over my term I was determined to take on a project. I would say that I did this in two places.
    First I created a chrome extension to redact personal information from portfolio sites to remove
    biases in the hiring process. I was able to create a plan to pitch it to my co-workers and
    develop it for production. The second place was in the use of flutter over react. I had
    experience with flutter from past co-op's and when the team needed to create a mobile app I
    suggested flutter. At first they were skeptical so I created a pro's and con's document
    evaluation react native and flutter as well as demoed a basic flutter application and its code
    which ultimately lead to the use of flutter.
  </p>

  <h1>Job Description</h1>
  <p>
    My primary role at WSIB was to rapidly create new prototypes for evaluation and possible use. I
    worked on creating web based applications with aws and react as well as mobile applications with
    flutter and firebase. I was also able to work on my own projects, come up with new ideas, pitch
    them and develop as seen fit.
  </p>

  <h1>Conclusion</h1>
  <p>
    Overall I really enjoyed my experience with WSIB. I was able to learn a lot of different
    technologies while also improving my personal skills. I learned React and although at first it
    was rough, I felt as if I have a strong understanding and ability to produce products with it. I
    also learned AWS which was daunting but got my feet wet and will be very valuable in the future.
    I was also able to improve my already existing skills. I was able to learn more about firebase
    and flutter and really hone my skills. WSIB has taught me a lot about front end frame works and
    backend technologies and I'm excited to apply my knowledge in the future.
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
