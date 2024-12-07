<script lang="ts">
  import { onMount } from 'svelte';
  import { variables } from '../lib/variables';

  let showMobileMenu = false;
  let hideNav = false;
  let y = 0;
  let prevY = 0;

  onMount(() => {
    prevY = y;
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
      mobileMenu[0].style.visibility = 'visible';
      mobileMenu[0].classList.toggle('open');
    }
  }

  function closeMobileMenuClick() {
    let mobileMenu = document.getElementsByClassName('mobile-nav') as HTMLCollectionOf<HTMLElement>;

    if (mobileMenu.length != 0 && showMobileMenu) {
      showMobileMenu = false;
      mobileMenu[0].classList.remove('open');
    }
  }

  function onScroll() {
    if (y < 60) {
      hideNav = false;
      return;
    }
    if (y - prevY > 0) {
      hideNav = true;
      closeMobileMenuClick();
    } else if (y - prevY < 0) {
      hideNav = false;
    }
    prevY = y;
  }

  function clickOutside(element, callbackFunction) {
    function onClick(event) {
      if (!element.contains(event.target)) {
        callbackFunction();
      }
    }

    document.body.addEventListener('click', onClick);

    return {
      update(newCallbackFunction) {
        callbackFunction = newCallbackFunction;
      },
      destroy() {
        document.body.removeEventListener('click', onClick);
      }
    };
  }
  showMobileMenu = false;
</script>

<svelte:window bind:scrollY={y} on:scroll={onScroll} />

<div class="desktop-nav {hideNav ? 'desktop-nav-hide' : ''}">
  <nav>
    <a href="/#home" class="left"><h1>DZ</h1></a>
    <a href="/#about"><h1>ABOUT</h1></a>
    <a href="/#experience"><h1>EXPERIENCE</h1></a>
    <a href="/#projects"><h1>PROJECTS</h1></a>
    <a href={variables.resumePath ? variables.resumePath.toString() : ''}><h1>RESUME</h1></a>
  </nav>
</div>

<div
  class="mobile-nav
  {hideNav ? 'mobile-nav-hide' : ''}
  {showMobileMenu ? 'open' : ''}"
  on:click={toggleMobileMenuClick}
  use:clickOutside={() => {
    showMobileMenu = false;
  }}
>
  <div style="display: flex; align-items: center;">
    <h1 style="padding-right: 0;">MENU</h1>
    <div class="mobile-icon {showMobileMenu ? 'mobile-icon-open' : ''}">
      <img src="icons/menu-arrow.png" alt="menu arrow" width="12px" height="12px" />
    </div>
  </div>

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
  <a href="/#experience">
    <div class="mobile-button">
      <h1>EXPERIENCE</h1>
    </div>
  </a>
  <a href="/#projects">
    <div class="mobile-button">
      <h1>PROJECTS</h1>
    </div>
  </a>
  <a href={variables.resumePath ? variables.resumePath.toString() : ''}>
    <div class="mobile-button">
      <h1>RESUME</h1>
    </div>
  </a>
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
    transition: 0.3s;
  }
  .desktop-nav-hide {
    top: -60px;
  }
  .mobile-nav {
    position: fixed;
    width: 95vw;
    height: 350px;
    display: none;
    flex-direction: column;
    align-items: center;
    bottom: -295px;
    background-color: #17141d;
    box-shadow: 0 0 3rem #0e0e0e;
    border-radius: 16px;
    left: 2.5vw;
    transition: 0.3s;
  }
  .mobile-nav-hide {
    bottom: -450px;
  }
  .mobile-icon {
    margin: 0.67em;
    transition: 0.3s;
  }
  .mobile-icon-open {
    transform: rotate(180deg) translateY(2px);
  }
  .open {
    bottom: -40px;
  }
  .mobile-button {
    overflow: hidden;
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
