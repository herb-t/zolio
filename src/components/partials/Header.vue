<style scoped>
  header {
    height: 64px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    position: fixed;
    background: #fff;
    z-index: 100;
    width: 100%;
    top: 0;
    left: 0;
  }

  .header__content {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 100%;
  }

  .header__logo {
    flex-basis: 50%;
    width: 50%;
  }

  .header__logo-img,
  .app-icon--menu {
    display: block;
  }

  .app-icon--menu {
    color: #393A39;
  }

  @media (max-width: 1023px) {
    .header__logo-img {
      max-width: 240px;
    }
  }

  .header__links--desktop,
  .header__menu {
    flex-basis: 50%;
    width: 50%;
    display: flex;
    margin: 0;
    padding: 0;
    justify-content: flex-end;
  }

  .header__links {
    display: none;
  }

  .header__links li {
    margin: 0;
    list-style: none;
    margin-right: 24px;
  }

  .header__links li a {
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    font-weight: 500;
    color: #969696;
    text-transform: uppercase;
    text-decoration: none;
  }

  .header__links li:last-child {
    margin: 0;
  }

  .header__link {
    position: relative;
  }

  .router-link-exact-active:after {
    content: '';
    display: inline-block;
    position: absolute;
    left: 0;
    bottom: -22px;
    width: 100%;
    height: 2px;
    background: #cf482a;
    animation: nav-anim 0.25s cubic-bezier(0.45, 0, 0.55, 1);
  }

  @keyframes nav-anim {
    0% {
      transform: scaleX(0);
    }

    100% {
      transform: scaleX(1);
    }
  }

  @media (min-width: 600px) {
    .header__menu {
      display: none;
    }

    .header__links {
      display: flex;
    }
  }
</style>

<template>
  <header>
    <div class="header__content app__page">
      <div class="header__logo">
        <svg role="img" class="header__logo-img" alt=""><use xlink:href="#folio-logo-full"></use></svg>
      </div>
      <ul class="header__links header__links--desktop">
        <li><router-link class="header__link" to="/">Projects</router-link></li>
        <li><router-link class="header__link" to="/about/">About</router-link></li>
        <li><router-link class="header__link" to="/contact/">Contact</router-link></li>
      </ul>
      <div class="header__menu">
        <svg role="img" class="app-icon app-icon--menu app-icon--24px" alt=""><use xlink:href="#menu"></use></svg>
      </div>
    </div>

    <div class="header__drawer" aria-label="Navigation drawer" role="dialog">
      <div class="header__drawer-content">
        <div class="header__drawer-bar">
        </div>
        <nav class="header__drawer-nav">
          <ul class="header__links header__links--mobile">
            <li><router-link class="header__link" to="/">Projects</router-link></li>
            <li><router-link class="header__link" to="/about/">About</router-link></li>
            <li><router-link class="header__link" to="/contact/">Contact</router-link></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>
