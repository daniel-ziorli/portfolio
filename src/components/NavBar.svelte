<script lang="ts">
  import { fly } from 'svelte/transition';
  import { onMount } from 'svelte';
  import clickOutside from "svelte-outside-click";

  let showMobileMenu = false;

  onMount(() => {
    let mobileMenu = document.getElementsByClassName(
      'mobile-menu'
    ) as HTMLCollectionOf<HTMLElement>;

    if (mobileMenu.length != 0) {
      mobileMenu[0].classList.toggle('open');
    }
  });

  function toggleMobileMenuClick() {
    showMobileMenu = !showMobileMenu;
    let mobileMenu = document.getElementsByClassName(
      'mobile-menu'
    ) as HTMLCollectionOf<HTMLElement>;

    if (mobileMenu.length != 0) {
      mobileMenu[0].style.visibility = "visible";
      mobileMenu[0].classList.toggle('open');
    }
  }

  function closeMobileMenuClick() {
    let mobileMenu = document.getElementsByClassName(
      'mobile-menu'
    ) as HTMLCollectionOf<HTMLElement>;

    if (mobileMenu.length != 0 && showMobileMenu) {
      showMobileMenu = false;
      mobileMenu[0].classList.remove('open');
    }
  }
</script>

<div class="desktop-nav">
  <nav>
    <a href="/#home" class="left"><h1>DZ</h1></a>
    <a href="/#about"><h1>ABOUT</h1></a>
    <a href="/#projects"><h1>PROJECTS</h1></a>
    <a href="/#experience"><h1>EXPERIENCE</h1></a>
  </nav>
</div>

<div class="mobile-nav">
  <div class="hamberger-icon" on:click={toggleMobileMenuClick} use:clickOutside={closeMobileMenuClick}>
      <img src="./icons/menu.png" alt="menu" width="32px" height="32px" />
  </div>
  <div class="mobile-menu open">
    <a href="/#home">
      <div class="mobile-button">
        <h1>HOME</h1>
      </div>
    </a>
    <a href="/#about">
      <div class="mobile-button">
        <h1>ABOUT</h1>
      </div>
    </a>
    <a href="/#projects">
      <div class="mobile-button">
        <h1>PROJECTS</h1>
      </div>
    </a>
    <a href="/#experience">
      <div class="mobile-button">
        <h1>EXPERIENCE</h1>
      </div>
    </a>
  </div>
</div>

<style>
  div {
    z-index: 10000;
  }
  .desktop-nav {
    position: fixed;
    top: 0px;
    width: 100%;
    background-color: var(--background-color, black);
  }

  .mobile-nav {
    position: fixed;
    bottom: 0;
    right: 0;
    margin: 6%;
    display: none;
    width: auto;
    height: 60px;
  }

  .hamberger-icon {
    border: 1px solid white;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--background-color, black);
  }

  .mobile-menu {
    position: fixed;
    bottom: 60px;
    right: 0;
    margin: 6%;
    width: auto;
    height: auto;
    max-height: 0;
    max-width: 0;
    overflow: hidden;
    border: 2px solid white;
    background-color: var(--background-color, black);
    transition: max-height 0.6s ease-in-out, max-width 0.3s ease-in-out;
    visibility: hidden;
  }

  .open {
    max-height: 1000px;
    max-width: 1000px;
  }

  .mobile-button {
    overflow: hidden;
    padding: 10px;
    text-align: center;
  }

  nav {
    display: flex;
    flex-direction: row;
    justify-content: right;
    align-items: center;
    align-self: center;
    margin-left: auto;
    margin-right: auto;
    max-width: 1200px;
    height: 60px;
  }
  h1 {
    font-size: 1.2rem;
    padding-left: 20px;
    padding-right: 20px;
    font-weight: normal !important;
  }
  .left {
    margin-right: auto;
  }
  a {
    text-decoration: none;
    color: var(--text-color);
  }
  a:hover {
    text-decoration: none;
    color: var(--yellow);
  }
  @media only screen and (max-width: 660px) {
    .desktop-nav {
      display: none;
    }

    .mobile-nav {
      display: flex;
    }
  }
</style>
