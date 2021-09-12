<script lang="ts">
  import ScrollingTitle from '../components/ScrollingTitle.svelte';
</script>

<div style="margin-top: 80px;" />
<ScrollingTitle margin={'0'} text={'ORION '} />

<div>
  <h1>Introduction</h1>
  <p>
    Over the course of the summer I had the pleasure to work with ORION as a software developer.
    ORION is an Internet Service Provider for major research institutions, school boards and medical
    facilities. They are also a non for profit company that focuses on creating a reliable service
    for everyone in Ontario. They also have initiatives to bring the internet to the nether regions
    of Ontario which is interesting because we take the internet for granted.
  </p>

  <h1>Goals</h1>
  <h2>Effective requirements gathering</h2>
  <p>
    Although this is a trivial skill it is probably one of the most important ones. I learned that
    if you don’t ask the right questions you end up doing a lot of work that is not what is
    required. During the term I worked on various projects by myself, I worked with various
    technical and non technical departments to generate requirements list that were detailed and
    accurate to their needs. Gathering accurate requirements allowed me to plan and complete my
    projects without surprises or revisions. Having this skill will greatly benefit me in the future
    as requirements gathering is a fundamental building block of effective software development.
  </p>

  <h2>Robust Code</h2>
  <p>
    Since I was the only developer at the company at the time my code needed to work after I left.
    To insure quality code I worked on creating well documented, clean and thoroughly tested code. I
    used GitHub to store my documentation files and code and various python libraries such as
    selenium to test my gui’s. This skill is a great transferable skills as it adds value to the
    work I complete and leave with the company.
  </p>

  <h2>Big Data and DDOS Mitigation</h2>
  <p>
    During the course of the semester I worked closely with the security team to enforce security
    and help use their DDOS mitigation solution Arbor. Arbor tracks and logs over 20,000 packets
    every second on the ORION network and all this information is stored for later analysis. Using
    Libraries such as Pandas to test hypothesis and tools such as Hadoop the team and I were able to
    filter specific packets that were malicious. By doing this we reduced down time and server load
    significantly.
  </p>

  <h1>Job Description</h1>
  <p>
    My primary role at ORION was to work with network teams to evaluate and use the various tools
    supplied by ORION such as their SIEM and Arbor to generate statistical insights and
    transparency. Alongside assisting the various teams and departments in the specification of and
    development of customized software tools as required.
  </p>
  <p>
    The most unique aspect of this job was the diversity of projects and keeping all of them on
    track and manageable. I had to develop excellent time management skills which I already
    possessed from school. The Software Design courses that I have taken in year 1 and 2 have been
    extremely helpful in preparing me for
  </p>

  <h1>Conclusion</h1>
  <p>
    Overall the experience was great. It taught me a lot about managing time, keeping on top of
    tasks and providing quality work that I can be proud of. I’m very proud to work with Big data to
    develop statistical models that have helped and will continue to help ORION’s network run
    smoothly in the future. Working with many different and diverse teams gave me insights into were
    their problems lie and helped me understand how to better suit their needs. ORION is a great
    company and gave me a lot of freedom to develop and strive and would love to work with them
    again in the future.
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
