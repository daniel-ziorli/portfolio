<script lang="ts">
  import { variables } from "../lib/variables";
</script>

<a href="{variables.resumePath ? variables.resumePath.toString() : ""}">
  <div>
    <h1>Resume</h1>
    <img src="icons/arrow-orange.png" alt="arrow" width="16px" height="16px" />
  </div>
</a>

<style>
  div {
    display: flex;
    align-items: center;
  }
  h1 {
    text-align: center;
    font-size: 1.5rem;
    font-weight: normal;
    text-decoration: none;
    color: var(--yellow, white);
    margin: 0;
    padding-top: 0;
    padding-right: 10px;
  }
  a {
    width: 100px;
    justify-self: flex-start;
    text-decoration: none;
    transition: 0.1s;
    margin-top: 5px;
    margin-bottom: 5px;
  }

  a:hover {
    transform: translateX(5px);
  }
</style>
