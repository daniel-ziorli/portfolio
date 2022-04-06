<script lang="ts">
  import ScrollingTitle from '../components/ScrollingTitle.svelte';
</script>

<div style="margin-top: 80px;" />
<ScrollingTitle margin={'0'} text={'MULTIPLAYER VR SHOOTER '} />

<div>
  <h1>Introduction</h1>
  <p>
    Over the past 6 months I have been learning how to create a Multiplayer VR Fps in unity. It allows you to climb, jump, slide and shoot with fully physics based movement and interaction. It's created with a robust game manager allowing for a plethora of different game modes. The multiplayer is done in mirror and uses a relay server to connect players through nat punchthrough. It started out as a platformer similar to human fall flat but then I thought it would be way cooler if it had guns.
  </p>

  <h1>Features</h1>
  <h2>Physics Based Climbing and Combat</h2>
  <div class="video-container">
    <iframe width="auto" height="auto" src="https://www.youtube.com/embed/KD6l9dyC9go?controls=0&autoplay=1&loop=1&playlist=KD6l9dyC9go" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; repeat;" allowfullscreen></iframe>
  </div>
  <p>
    The game features fully physics based hands and movement. The hands are controlled using a stable backwards PD controller to control the hands rigidbodies in order to reach the target positions. The climbing physics is done using hooke's law and dampening the force relative to its velocity. Climbing uses the vector between the target position and the rigidbody to apply a force to the player in order to return the tracked hands to the in-game hands creating a fun and dynamic climbing system.
  </p>

  <h2>Physical Buttons for UI</h2>
  <div class="video-container">
    <iframe width="auto" height="auto" src="https://www.youtube.com/embed/yO67lNr-T_4?controls=0&autoplay=1&loop=1&playlist=yO67lNr-T_4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; repeat;" allowfullscreen></iframe>
  </div>
  <p>
    Using laser points for menus in vr is kind of weird so I created physical buttons that can interact with unity’s UI system. When the button rigidbody is pushed below a threshold it will invoke a UnityEvent specified in the editor in order to inject a keyboard input. When the left button is pushed it simply injects a left input as if you were pushing it on a joystick or keyboard.
  </p>

  <h2>Accurate Throwing</h2>
  <div class="video-container">
    <iframe width="auto" height="auto" src="https://www.youtube.com/embed/Ywa_iaHkmss?controls=0&autoplay=1&loop=1&playlist=Ywa_iaHkmss" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; repeat;" allowfullscreen></iframe>
  </div>
  <p>
    Since the hands are moved using a PD controller the physics of throwing an object are almost identical to real life. The velocity of the object is not calculated at the end of the motion, instead it is a combination of the full throwing motion.
  </p>

  <h2>Force Pulling Objects</h2>
  <div class="video-container">
    <iframe width="auto" height="auto" src="https://www.youtube.com/embed/6Ns-c61-YZk?controls=0&autoplay=1&loop=1&playlist=6Ns-c61-YZk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; repeat;" allowfullscreen></iframe>
  </div>
  <p>
    This feature was based off of Half-Life: Alyx’s force pull. It uses kinematic equations to set the object's initial velocity of the object. If the player moves their body or hand the object will completely miss. So as the object is in flight a PID controller is used to guide the object to the player's hand even if the player moves their hands, slides to a new position or jumps out of the way.
  </p>

</div>

<div style="margin-bottom: 25%" />

<style>
  .video-container {
      position: relative;
      padding-bottom: 56.25%; /* 16:9 */
      height: 0;
      width: 100%;
  }
  .video-container iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
  }
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
    margin-top: 4rem;
    margin-bottom: 8rem;
    line-height: 2rem;
  }
</style>
