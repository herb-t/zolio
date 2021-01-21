<style>

body {
  background: #fff;
  color: #202124;
  cursor: auto;
  font-family: 'Open Sans', Arial, Helvetica, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 1.444;
  margin: 0;
  overflow-wrap: break-word;
  padding: 0;
  word-wrap: break-word;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

p,
h1,
h2,
h3 {
  margin: 0;
}

p {
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
  font-weight: 400;
  line-height: 1.75;
  font-size: 16px;
  letter-spacing: .25px;
  margin-bottom: 16px;
}

* > p:last-child {
    margin-bottom: 0;
}

a {
  color: #393b39;
}

h1 {
  font-size: 36px;
  font-weight: 400;
  letter-spacing: -.25px;
  line-height: 44px;
}

h2 {
  font-size: 28px;
  font-weight: 400;
  letter-spacing: initial;
  line-height: 36px;
}

h3 {
  font-size: 24px;
  font-weight: 400;
  letter-spacing: initial;
  line-height: 32px;
}

h4 {
  font-size: 18px;
  font-weight: 400;
  letter-spacing: initial;
  line-height: 28px;
}

@media (min-width: 600px) {
  p {
    line-height: 1.75;
    font-size: 16px;
    letter-spacing: .25px;
    margin-bottom: 16px;
  }

  h1 {
    font-size: 48px;
    font-weight: 400;
    letter-spacing: -.5px;
    line-height: 56px;
  }

  h2 {
    font-size: 40px;
    font-weight: 400;
    letter-spacing: -.5px;
    line-height: 48px;
  }

  h3 {
    font-size: 32px;
    font-weight: 400;
    letter-spacing: -.25px;
    line-height: 40px;
  }

  h4 {
    font-size: 28px;
    font-weight: 400;
    letter-spacing: initial;
    line-height: 36px;
  }
}

@media (min-width: 1024px) {
  p {
    line-height: 1.75;
    font-size: 16px;
    letter-spacing: 0;
    margin-bottom: 16px;
  }

  h1 {
    font-size: 60px;
    font-weight: 400;
    letter-spacing: -.5px;
    line-height: 72px;
  }

  h2 {
    font-size: 48px;
    font-weight: 400;
    letter-spacing: -.5px;
    line-height: 56px;
  }

  h3 {
    font-size: 36px;
    font-weight: 400;
    letter-spacing: -.25px;
    line-height: 44px;
  }

  h4 {
    font-size: 28px;
    font-weight: 400;
    letter-spacing: initial;
    line-height: 36px;
  }
}

@media (min-width: 1024px) {
  h1 {
    font-size: 60px;
    font-weight: 400;
    letter-spacing: -.5px;
    line-height: 72px;
  }

  h2 {
    font-size: 48px;
    font-weight: 400;
    letter-spacing: -.5px;
    line-height: 56px;
  }

  h3 {
    font-size: 36px;
    font-weight: 400;
    letter-spacing: -.25px;
    line-height: 44px;
  }

  h4 {
    font-size: 28px;
    font-weight: 400;
    letter-spacing: initial;
    line-height: 36px;
  }
}

img {
  display: inline-block;
  width: 100%;
  max-width: 100%;
  height: auto;
}

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

.app-icons {
  display: none;
}

.app-icon {
  display: inline-block;
  fill: currentColor;
}

.app-icon--menu {
  display: block;
}

.app-icon--18px {
  height: 18px;
  width: 18px;
}

.app-icon--24px {
  height: 24px;
  width: 24px;
}

.app-icon--36px {
  height: 36px;
  width: 36px;
}

.app-icon--48px {
  height: 48px;
  width: 48px;
}

.app__main {
  margin-top: 160px;
}

.app__views {
  min-height: 79.5vh;
}

.app__page {
  box-sizing: border-box;
  margin: 0 28px;
}

@media (min-width: 600px) {
  .app__page {
    margin: 0 40px;
  }
}

@media (min-width: 1024px) {
  .app__page {
    margin: 0 72px;
  }
}

@media (min-width: 1440px) {
  .app__page {
    margin: 0 auto;
    max-width: 1296px;
  }
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

.header__links,
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

footer {
  background: #393b39;
  height: 100px;
}

.footer__content {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
}

.footer__links {
  align-items: center;
  justify-content: flex-end;
  display: flex;
  margin: 0;
  padding: 0;
}

.footer__links li {
  list-style: none;
  margin-right: 24px;
}

.footer__links li:last-child {
  margin-right: 0;
}

.footer__links li a {
  color: #fff;
}

.header__logo-img {
  display: block;
}

</style>

<template>
  <div class="app__main">
    <header>
      <div class="header__content app__page">
        <div class="header__logo">
          <svg role="img" class="header__logo-img" alt=""><use xlink:href="#folio-logo-full"></use></svg>
        </div>
        <ul class="header__links">
          <li><router-link class="header__link" to="/">Projects</router-link></li>
          <li><router-link class="header__link" to="/about/">About</router-link></li>
          <li><router-link class="header__link" to="/contact/">Contact</router-link></li>
        </ul>
        <div class="header__menu">
          <svg role="img" class="app-icon app-icon--menu app-icon--24px" alt=""><use xlink:href="#menu"></use></svg>
        </div>
      </div>
    </header>

    <main class="app__views app__page">
      <transition
          @enter="enter"
          @leave="leave">
        <router-view/>
      </transition>
    </main>

    <footer>
      <div class="footer__content app__page">
        <ul class="footer__links">
          <li>
            <a href="" target="_blank">
              <svg role="img" class="app-icon app-icon--36px" alt=""><use xlink:href="#post-linkedin"></use></svg>
            </a>
          </li>
          <li>
            <a href="" target="_blank">
              <svg role="img" class="app-icon app-icon--36px" alt=""><use xlink:href="#post-facebook"></use></svg>
            </a>
          </li>
          <li>
            <a href="" target="_blank">
              <svg role="img" class="app-icon app-icon--36px" alt=""><use xlink:href="#twitter"></use></svg>
            </a>
          </li>
          <li>
            <a href="" target="_blank">
              <svg role="img" class="app-icon app-icon--36px" alt=""><use xlink:href="#instagram"></use></svg>
            </a>
          </li>
        </ul>
      </div>
      
    </footer>

    <div class="app-icons" style="display:none;">
      <svg xmlns="http://www.w3.org/2000/svg">
        <defs>
          <svg id="chevron-left" viewBox="0 0 24 24"><path d="M16.41 5.41L15 4l-8 8 8 8 1.41-1.41L9.83 12"></path></svg>
          <svg id="chevron-right" viewBox="0 0 24 24"><path d="M7.59 18.59L9 20l8-8-8-8-1.41 1.41L14.17 12"></path></svg>
          <svg id="expand-less" viewBox="0 0 24 24"><path d="M18.59 16.41L20 15l-8-8-8 8 1.41 1.41L12 9.83"></path></svg>
          <svg id="expand-more" viewBox="0 0 24 24"><path d="M5.41 7.59L4 9l8 8 8-8-1.41-1.41L12 14.17"></path></svg>
          <svg id="arrow-back" viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path></svg>
          <svg id="arrow-forward" viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"></path></svg>
          <svg id="arrow-upward" viewBox="0 0 24 24"><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path></svg>
          <svg id="arrow-downward" viewBox="0 0 24 24"><path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path></svg>
          <svg id="arrow-left" viewBox="0 0 24 24"><path d="M14 7l-5 5 5 5V7z"></path></svg>
          <svg id="arrow-right" viewBox="0 0 24 24"><path d="M10 17l5-5-5-5v10z"></path></svg>
          <svg id="arrow-drop-up" viewBox="0 0 24 24"><path d="M7 14l5-5 5 5H7z"></path></svg>
          <svg id="arrow-drop-down" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5H7z"></path></svg>
          <svg id="help" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"></path></svg>
          <svg id="menu" viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>
          <svg id="more-vert" viewBox="0 0 24 24"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>
          <svg id="drive-pdf" viewBox="0 0 24 24"><path d="M7 11.5h1v-1H7v1zM19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9.5 8.5c0 .83-.67 1.5-1.5 1.5H7v2H5.5V9H8c.83 0 1.5.67 1.5 1.5v1zm10-1H17v1h1.5V13H17v2h-1.5V9h4v1.5zm-5 3c0 .83-.67 1.5-1.5 1.5h-2.5V9H13c.83 0 1.5.67 1.5 1.5v3zm-2.5 0h1v-3h-1v3z"></path></svg>
          <svg id="file-download" viewBox="0 0 24 24"><path d="M4 15h2v3h12v-3h2v3c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2m11.59-8.41L13 12.17V4h-2v8.17L8.41 9.59 7 11l5 5 5-5-1.41-1.41z"></path></svg>
          <svg id="open-in-new" viewBox="0 0 24 24"><path d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path></svg>
          <svg id="phone" viewBox="0 0 24 24"><path d="M16.01 14.46l-2.62 2.62a16.141 16.141 0 0 1-6.5-6.5l2.62-2.62a.98.98 0 0 0 .27-.9L9.13 3.8c-.09-.46-.5-.8-.98-.8H4c-.56 0-1.03.47-1 1.03a17.92 17.92 0 0 0 2.43 8.01 18.08 18.08 0 0 0 6.5 6.5 17.92 17.92 0 0 0 8.01 2.43c.56.03 1.03-.44 1.03-1v-4.15c0-.48-.34-.89-.8-.98l-3.26-.65a.99.99 0 0 0-.9.27z"></path></svg>
          <svg id="email" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.8 2L12 10.8 4.8 6h14.4zM4 18V7.87l8 5.33 8-5.33V18H4z"></path></svg>
          <svg id="instagram" viewBox="0 0 24 24"><path d="M12,0 C15.3,0 15.7,0 17,0 C18.3,0.1 19.1,0.3 19.9,0.6 C20.7,0.9 21.3,1.3 22,2 C22.7,2.7 23.1,3.4 23.3,4.2 C23.6,5 23.8,5.8 23.9,7.1 C24,8.3 24,8.7 24,12 C24,15.3 24,15.7 23.9,16.9 C23.8,18.2 23.6,19 23.3,19.8 C23,20.6 22.6,21.2 21.9,21.9 C21.3,22.6 20.6,23 19.8,23.3 C19,23.6 18.2,23.8 16.9,23.9 C15.7,24 15.3,24 12,24 C8.7,24 8.3,24 7,24 C5.7,23.9 4.9,23.7 4.1,23.4 C3.3,23.1 2.7,22.7 2,22 C1.3,21.3 0.9,20.6 0.7,19.8 C0.4,19 0.2,18.2 0.1,16.9 C0,15.7 0,15.3 0,12 C0,8.7 0,8.3 0.1,7.1 C0.1,5.8 0.3,4.9 0.6,4.1 C0.9,3.4 1.3,2.7 2,2 C2.7,1.3 3.4,0.9 4.1,0.6 C4.9,0.3 5.8,0.1 7.1,0.1 C8.3,0 8.7,0 12,0 Z M12,2.2 C8.8,2.2 8.4,2.2 7.2,2.2 C6,2.3 5.3,2.5 4.9,2.6 C4.4,2.9 4,3.1 3.5,3.5 C3.1,3.9 2.8,4.3 2.6,4.9 C2.5,5.3 2.3,6 2.3,7.2 C2.2,8.4 2.2,8.8 2.2,12 C2.2,15.2 2.2,15.5 2.3,16.8 C2.3,17.9 2.5,18.6 2.7,19 C2.9,19.6 3.2,20 3.6,20.4 C4,20.8 4.4,21.1 5,21.3 C5.4,21.5 6,21.6 7.2,21.7 C8.4,21.8 8.8,21.8 12,21.8 C15.2,21.8 15.5,21.8 16.8,21.7 C17.9,21.7 18.6,21.5 19,21.3 C19.6,21.1 20,20.8 20.4,20.4 C20.8,20 21.1,19.6 21.3,19 C21.5,18.6 21.6,18 21.7,16.8 C21.8,15.6 21.8,15.2 21.8,12 C21.8,8.8 21.8,8.5 21.7,7.2 C21.7,6.1 21.5,5.4 21.3,5 C21.1,4.4 20.8,4 20.4,3.6 C20,3.2 19.6,2.9 19,2.7 C18.6,2.5 18,2.4 16.8,2.3 C15.6,2.2 15.2,2.2 12,2.2 Z M12,5.8 C15.4,5.8 18.2,8.6 18.2,12 C18.2,15.4 15.4,18.2 12,18.2 C8.6,18.2 5.8,15.4 5.8,12 C5.8,8.6 8.6,5.8 12,5.8 Z M12,16 C14.2,16 16,14.2 16,12 C16,9.8 14.2,8 12,8 C9.8,8 8,9.8 8,12 C8,14.2 9.8,16 12,16 Z M18.4,7 C17.6268014,7 17,6.37319865 17,5.6 C17,4.82680135 17.6268014,4.2 18.4,4.2 C19.1731986,4.2 19.8,4.82680135 19.8,5.6 C19.8,6.37319865 19.1731986,7 18.4,7 Z"></path></svg>
          <svg id="link" viewBox="0 0 24 24"><path d="M17 7h-4v2h4c1.65 0 3 1.35 3 3s-1.35 3-3 3h-4v2h4c2.76 0 5-2.24 5-5s-2.24-5-5-5zm-6 8H7c-1.65 0-3-1.35-3-3s1.35-3 3-3h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-2z"></path><path d="M8 11h8v2H8z"></path></svg>
          <svg id="post-blogger" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 20c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-4 7v1c0 .55.45 1 1 1s1 .45 1 1v3c0 1.66-1.34 3-3 3H9c-1.66 0-3-1.34-3-3V8c0-1.66 1.34-3 3-3h4c1.66 0 3 1.34 3 3v1zm-6.05 1h2.6c.55 0 1-.45 1-1s-.45-1-1-1h-2.6c-.55 0-1 .45-1 1s.45 1 1 1zM14 13H9.95c-.55 0-1 .45-1 1s.45 1 1 1H14c.55 0 1-.45 1-1s-.45-1-1-1z"></path></svg>
          <svg id="post-facebook" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 20c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 2v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v7h-3v-7h-2v-3h2V7.5C13 5.57 14.57 4 16.5 4H19z"></path></svg>
          <svg id="post-linkedin" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 20c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 19H5v-9h3v9zM6.5 8.31c-1 0-1.81-.81-1.81-1.81S5.5 4.69 6.5 4.69s1.81.81 1.81 1.81S7.5 8.31 6.5 8.31zM19 19h-3v-5.3c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5V19h-3v-9h3v1.2c.52-.84 1.59-1.4 2.5-1.4 1.93 0 3.5 1.57 3.5 3.5V19z"></path></svg>
          <svg id="share" viewBox="0 0 24 24"><path d="M18 16c-.79 0-1.5.31-2.03.81L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.53.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.48.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.05 4.12c-.05.22-.09.45-.09.69 0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3zm0-12c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"></path></svg>
          <svg id="twitter" viewBox="0 0 24 24"><path d="M7.5,21.8c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6c1-0.7,1.8-1.6,2.5-2.5c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7 c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1 C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,4,4.8c-0.4,0.1-0.8,0.2-1.3,0.2 c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1C2.2,20.9,4.8,21.8,7.5,21.8"></path></svg>
          <svg id="video-youtube" viewBox="0 0 24 24"><path d="M23.74 7.1s-.23-1.65-.95-2.37c-.91-.96-1.93-.96-2.4-1.02C17.04 3.47 12 3.5 12 3.5s-5.02-.03-8.37.21c-.46.06-1.48.06-2.39 1.02C.52 5.45.28 7.1.28 7.1S.04 9.05 0 10.98V13c.04 1.94.28 3.87.28 3.87s.24 1.65.96 2.38c.91.95 2.1.92 2.64 1.02 1.88.18 7.91.22 8.12.22 0 0 5.05.01 8.4-.23.46-.06 1.48-.06 2.39-1.02.72-.72.96-2.37.96-2.37s.24-1.94.25-3.87v-2.02c-.02-1.93-.26-3.88-.26-3.88zM9.57 15.5V8.49L16 12.13 9.57 15.5z"></path></svg>
          <svg id="video-youtube-white" viewBox="0 0 24 24"><path fill="#fff" d="M23.74 7.1s-.23-1.65-.95-2.37c-.91-.96-1.93-.96-2.4-1.02C17.04 3.47 12 3.5 12 3.5s-5.02-.03-8.37.21c-.46.06-1.48.06-2.39 1.02C.52 5.45.28 7.1.28 7.1S.04 9.05 0 10.98V13c.04 1.94.28 3.87.28 3.87s.24 1.65.96 2.38c.91.95 2.1.92 2.64 1.02 1.88.18 7.91.22 8.12.22 0 0 5.05.01 8.4-.23.46-.06 1.48-.06 2.39-1.02.72-.72.96-2.37.96-2.37s.24-1.94.25-3.87v-2.02c-.02-1.93-.26-3.88-.26-3.88zM9.57 15.5V8.49L16 12.13 9.57 15.5z"></path></svg>
          <svg id="video-youtube-black" viewBox="0 0 24 24"><path fill="#000" d="M23.74 7.1s-.23-1.65-.95-2.37c-.91-.96-1.93-.96-2.4-1.02C17.04 3.47 12 3.5 12 3.5s-5.02-.03-8.37.21c-.46.06-1.48.06-2.39 1.02C.52 5.45.28 7.1.28 7.1S.04 9.05 0 10.98V13c.04 1.94.28 3.87.28 3.87s.24 1.65.96 2.38c.91.95 2.1.92 2.64 1.02 1.88.18 7.91.22 8.12.22 0 0 5.05.01 8.4-.23.46-.06 1.48-.06 2.39-1.02.72-.72.96-2.37.96-2.37s.24-1.94.25-3.87v-2.02c-.02-1.93-.26-3.88-.26-3.88zM9.57 15.5V8.49L16 12.13 9.57 15.5z"></path><polygon fill="#fff" points="9.6,15.5 9.6,8.5 16,12.1 "></polygon></svg>
          <svg id="video-youtube-red" viewBox="0 0 24 24"><path fill="#f00" d="M23.74 7.1s-.23-1.65-.95-2.37c-.91-.96-1.93-.96-2.4-1.02C17.04 3.47 12 3.5 12 3.5s-5.02-.03-8.37.21c-.46.06-1.48.06-2.39 1.02C.52 5.45.28 7.1.28 7.1S.04 9.05 0 10.98V13c.04 1.94.28 3.87.28 3.87s.24 1.65.96 2.38c.91.95 2.1.92 2.64 1.02 1.88.18 7.91.22 8.12.22 0 0 5.05.01 8.4-.23.46-.06 1.48-.06 2.39-1.02.72-.72.96-2.37.96-2.37s.24-1.94.25-3.87v-2.02c-.02-1.93-.26-3.88-.26-3.88zM9.57 15.5V8.49L16 12.13 9.57 15.5z"></path><polygon fill="#fff" points="9.6,15.5 9.6,8.5 16,12.1 "></polygon></svg>
          <svg id="video-youtube-white" viewBox="0 0 24 24"><path fill="#fff" d="M23.74 7.1s-.23-1.65-.95-2.37c-.91-.96-1.93-.96-2.4-1.02C17.04 3.47 12 3.5 12 3.5s-5.02-.03-8.37.21c-.46.06-1.48.06-2.39 1.02C.52 5.45.28 7.1.28 7.1S.04 9.05 0 10.98V13c.04 1.94.28 3.87.28 3.87s.24 1.65.96 2.38c.91.95 2.1.92 2.64 1.02 1.88.18 7.91.22 8.12.22 0 0 5.05.01 8.4-.23.46-.06 1.48-.06 2.39-1.02.72-.72.96-2.37.96-2.37s.24-1.94.25-3.87v-2.02c-.02-1.93-.26-3.88-.26-3.88zM9.57 15.5V8.49L16 12.13 9.57 15.5z"></path></svg>
          <svg id="close" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path></svg>
          <svg id="expand-all" viewBox="0 0 24 24"><path d="M16.59 9.41L18 8l-6-6-6 6 1.41 1.41L12 4.83l4.59 4.58zM12 19.17l-4.59-4.58L6 16l6 6 6-6-1.41-1.41L12 19.17z"></path></svg>
          <svg id="play-circle-filled" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"></path></svg>
          <svg id="search" viewBox="0 0 24 24"><path d="M20.49 19l-5.73-5.73C15.53 12.2 16 10.91 16 9.5A6.5 6.5 0 1 0 9.5 16c1.41 0 2.7-.47 3.77-1.24L19 20.49 20.49 19zM5 9.5C5 7.01 7.01 5 9.5 5S14 7.01 14 9.5 11.99 14 9.5 14 5 11.99 5 9.5z"></path></svg>
          <svg id="google-color-logo" viewBox="0 0 74 24"><path fill="#4285F4" d="M9.24 8.19v2.46h5.88c-.18 1.38-.64 2.39-1.34 3.1-.86.86-2.2 1.8-4.54 1.8-3.62 0-6.45-2.92-6.45-6.54s2.83-6.54 6.45-6.54c1.95 0 3.38.77 4.43 1.76L15.4 2.5C13.94 1.08 11.98 0 9.24 0 4.28 0 .11 4.04.11 9s4.17 9 9.13 9c2.68 0 4.7-.88 6.28-2.52 1.62-1.62 2.13-3.91 2.13-5.75 0-.57-.04-1.1-.13-1.54H9.24z"></path><path fill="#EA4335" d="M25 6.19c-3.21 0-5.83 2.44-5.83 5.81 0 3.34 2.62 5.81 5.83 5.81s5.83-2.46 5.83-5.81c0-3.37-2.62-5.81-5.83-5.81zm0 9.33c-1.76 0-3.28-1.45-3.28-3.52 0-2.09 1.52-3.52 3.28-3.52s3.28 1.43 3.28 3.52c0 2.07-1.52 3.52-3.28 3.52z"></path><path fill="#4285F4" d="M53.58 7.49h-.09c-.57-.68-1.67-1.3-3.06-1.3C47.53 6.19 45 8.72 45 12c0 3.26 2.53 5.81 5.43 5.81 1.39 0 2.49-.62 3.06-1.32h.09v.81c0 2.22-1.19 3.41-3.1 3.41-1.56 0-2.53-1.12-2.93-2.07l-2.22.92c.64 1.54 2.33 3.43 5.15 3.43 2.99 0 5.52-1.76 5.52-6.05V6.49h-2.42v1zm-2.93 8.03c-1.76 0-3.1-1.5-3.1-3.52 0-2.05 1.34-3.52 3.1-3.52 1.74 0 3.1 1.5 3.1 3.54.01 2.03-1.36 3.5-3.1 3.5z"></path><path fill="#FBBC05" d="M38 6.19c-3.21 0-5.83 2.44-5.83 5.81 0 3.34 2.62 5.81 5.83 5.81s5.83-2.46 5.83-5.81c0-3.37-2.62-5.81-5.83-5.81zm0 9.33c-1.76 0-3.28-1.45-3.28-3.52 0-2.09 1.52-3.52 3.28-3.52s3.28 1.43 3.28 3.52c0 2.07-1.52 3.52-3.28 3.52z"></path><path fill="#34A853" d="M58 .24h2.51v17.57H58z"></path><path fill="#EA4335" d="M68.26 15.52c-1.3 0-2.22-.59-2.82-1.76l7.77-3.21-.26-.66c-.48-1.3-1.96-3.7-4.97-3.7-2.99 0-5.48 2.35-5.48 5.81 0 3.26 2.46 5.81 5.76 5.81 2.66 0 4.2-1.63 4.84-2.57l-1.98-1.32c-.66.96-1.56 1.6-2.86 1.6zm-.18-7.15c1.03 0 1.91.53 2.2 1.28l-5.25 2.17c0-2.44 1.73-3.45 3.05-3.45z"></path></svg>
          <svg id="google-solid-logo" viewBox="0 0 74 24"><path d="M9.24 8.19v2.46h5.88c-.18 1.38-.64 2.39-1.34 3.1-.86.86-2.2 1.8-4.54 1.8-3.62 0-6.45-2.92-6.45-6.54s2.83-6.54 6.45-6.54c1.95 0 3.38.77 4.43 1.76L15.4 2.5C13.94 1.08 11.98 0 9.24 0 4.28 0 .11 4.04.11 9s4.17 9 9.13 9c2.68 0 4.7-.88 6.28-2.52 1.62-1.62 2.13-3.91 2.13-5.75 0-.57-.04-1.1-.13-1.54H9.24zm15.76-2c-3.21 0-5.83 2.44-5.83 5.81 0 3.34 2.62 5.81 5.83 5.81s5.83-2.46 5.83-5.81c0-3.37-2.62-5.81-5.83-5.81zm0 9.33c-1.76 0-3.28-1.45-3.28-3.52 0-2.09 1.52-3.52 3.28-3.52s3.28 1.43 3.28 3.52c0 2.07-1.52 3.52-3.28 3.52zm28.58-8.03h-.09c-.57-.68-1.67-1.3-3.06-1.3C47.53 6.19 45 8.72 45 12c0 3.26 2.53 5.81 5.43 5.81 1.39 0 2.49-.62 3.06-1.32h.09v.81c0 2.22-1.19 3.41-3.1 3.41-1.56 0-2.53-1.12-2.93-2.07l-2.22.92c.64 1.54 2.33 3.43 5.15 3.43 2.99 0 5.52-1.76 5.52-6.05V6.49h-2.42v1zm-2.93 8.03c-1.76 0-3.1-1.5-3.1-3.52 0-2.05 1.34-3.52 3.1-3.52 1.74 0 3.1 1.5 3.1 3.54.01 2.03-1.36 3.5-3.1 3.5zM38 6.19c-3.21 0-5.83 2.44-5.83 5.81 0 3.34 2.62 5.81 5.83 5.81s5.83-2.46 5.83-5.81c0-3.37-2.62-5.81-5.83-5.81zm0 9.33c-1.76 0-3.28-1.45-3.28-3.52 0-2.09 1.52-3.52 3.28-3.52s3.28 1.43 3.28 3.52c0 2.07-1.52 3.52-3.28 3.52zM58 .24h2.51v17.57H58zm10.26 15.28c-1.3 0-2.22-.59-2.82-1.76l7.77-3.21-.26-.66c-.48-1.3-1.96-3.7-4.97-3.7-2.99 0-5.48 2.35-5.48 5.81 0 3.26 2.46 5.81 5.76 5.81 2.66 0 4.2-1.63 4.84-2.57l-1.98-1.32c-.66.96-1.56 1.6-2.86 1.6zm-.18-7.15c1.03 0 1.91.53 2.2 1.28l-5.25 2.17c0-2.44 1.73-3.45 3.05-3.45z"></path></svg>
          <svg id="error" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>
        </defs>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg">
        <defs>
          <svg version="1.1" id="folio-logo-full" viewBox="0 0 371.067 47.013"><polygon fill="#CD4829" points="0.034,20.246 0,26.443 39.603,47.013 39.603,40.201 "></polygon> <polygon fill="#393A39" points="6.216,23.336 39.603,6.645 39.603,0 0.034,20.246 "></polygon> <polygon fill="#CD4829" points="19.042,16.923 32.123,23.166 41.358,18.199 28.634,12.128 "></polygon> <polygon fill="#CD4829" points="85.513,20.467 46.11,0 46.11,6.813 79.325,23.591 "></polygon> <polygon fill="#393A39" points="46.11,40.369 46.11,47.013 85.513,26.855 85.513,20.467 "></polygon> <polygon fill="#CD4829" points="66.67,30.089 53.592,23.848 44.355,28.814 57.078,34.884 "></polygon> <path fill="#393A39" d="M116.709,38.547V27.958h-7.185v10.589h-9.583V8.603h9.583V19.19h7.185V8.603h9.583v29.944H116.709z"></path> <path fill="#393A39" d="M149.288,27.239h-9.582v3.643h11.739v7.666h-21.322V8.603h21.082l-1.198,7.665h-10.3v4.026h9.582V27.239z"></path> <path fill="#393A39" d="M180.671,38.547H170.13l-3.928-8.913h-2.061v8.913h-9.582V8.603h15.092c6.867,0,10.301,3.498,10.301,10.493
          c0,4.791-1.484,7.955-4.457,9.489L180.671,38.547z M164.141,16.268v5.989h2.206c1.15,0,1.986-0.119,2.514-0.359
          c0.525-0.239,0.791-0.792,0.791-1.653v-1.963c0-0.864-0.266-1.414-0.791-1.653c-0.528-0.239-1.364-0.36-2.514-0.36H164.141z"></path> <path fill="#393A39" d="M184.025,38.547V8.603h15.522c2.876,0,4.929,0.558,6.157,1.676c1.229,1.118,1.845,2.748,1.845,4.888
          c0,2.142-0.392,3.793-1.173,4.957c-0.783,1.168-1.83,1.928-3.137,2.278v0.289c3.86,0.669,5.795,3.303,5.795,7.905
          c0,2.397-0.641,4.32-1.915,5.774c-1.279,1.45-3.243,2.178-5.896,2.178H184.025z M196.626,15.167h-3.02v4.455h2.972
          c1.212,0,1.82-0.741,1.82-2.227C198.398,15.909,197.806,15.167,196.626,15.167z M197.345,26.616h-3.738v4.891h3.689
          c1.34,0,2.015-0.817,2.015-2.446C199.311,27.429,198.654,26.616,197.345,26.616z"></path> <path fill="#CD4829" d="M233.708,16.268h-6.947v22.279h-9.582V16.268h-6.947V8.603h23.477V16.268z"></path> <path fill="#CD4829" d="M234.904,23.601c0-5.463,1.021-9.445,3.067-11.956c2.045-2.507,5.734-3.76,11.066-3.76
          c5.336,0,9.025,1.253,11.07,3.76c2.041,2.511,3.064,6.493,3.064,11.956c0,2.711-0.214,4.999-0.647,6.849
          c-0.43,1.856-1.173,3.468-2.226,4.839c-1.055,1.375-2.51,2.383-4.361,3.021c-1.852,0.638-4.152,0.957-6.9,0.957
          c-2.746,0-5.046-0.319-6.897-0.957c-1.854-0.639-3.304-1.646-4.36-3.021c-1.053-1.371-1.797-2.982-2.227-4.839
          C235.122,28.599,234.904,26.312,234.904,23.601z M245.207,18.617v12.458h3.977c1.31,0,2.259-0.149,2.851-0.458
          c0.592-0.301,0.888-0.994,0.888-2.081V16.078h-4.024c-1.28,0-2.215,0.152-2.806,0.456
          C245.501,16.835,245.207,17.533,245.207,18.617z"></path> <path fill="#CD4829" d="M290.723,38.547h-10.54l-3.93-8.913h-2.06v8.913h-9.581V8.603h15.09c6.869,0,10.302,3.498,10.302,10.493
          c0,4.791-1.485,7.955-4.456,9.489L290.723,38.547z M274.193,16.268v5.989h2.204c1.15,0,1.987-0.119,2.516-0.359
          c0.525-0.239,0.789-0.792,0.789-1.653v-1.963c0-0.864-0.264-1.414-0.789-1.653c-0.528-0.239-1.365-0.36-2.516-0.36H274.193z"></path> <path fill="#CD4829" d="M320.187,38.547h-10.54l-3.929-8.913h-2.06v8.913h-9.581V8.603h15.091c6.867,0,10.3,3.498,10.3,10.493
          c0,4.791-1.482,7.955-4.454,9.489L320.187,38.547z M303.658,16.268v5.989h2.205c1.148,0,1.988-0.119,2.513-0.359
          c0.528-0.239,0.792-0.792,0.792-1.653v-1.963c0-0.864-0.264-1.414-0.792-1.653c-0.524-0.239-1.364-0.36-2.513-0.36H303.658z"></path> <path fill="#CD4829" d="M341.747,27.239h-9.582v3.643h11.741v7.666h-21.322V8.603h21.08l-1.197,7.665h-10.302v4.026h9.582V27.239z"></path> <path fill="#CD4829" d="M345.82,38.022l1.341-7.908c2.938,0.735,5.58,1.102,7.929,1.102c2.35,0,4.241-0.095,5.679-0.285v-2.395
          l-4.313-0.381c-3.896-0.355-6.571-1.288-8.023-2.806c-1.454-1.52-2.182-3.762-2.182-6.732c0-4.089,0.888-6.9,2.662-8.433
          c1.771-1.534,4.78-2.299,9.031-2.299c4.245,0,8.077,0.398,11.494,1.196l-1.195,7.667c-2.97-0.48-5.352-0.72-7.139-0.72
          c-1.791,0-3.308,0.08-4.553,0.239v2.349l3.45,0.334c4.185,0.417,7.075,1.414,8.673,2.998c1.598,1.58,2.394,3.774,2.394,6.587
          c0,2.013-0.271,3.714-0.813,5.102s-1.19,2.44-1.941,3.163c-0.749,0.719-1.812,1.271-3.184,1.65
          c-1.377,0.385-2.582,0.614-3.619,0.693c-1.038,0.084-2.421,0.123-4.143,0.123C353.213,39.267,349.364,38.851,345.82,38.022z"></path></svg>
          <svg version="1.1" id="folio-logo" viewBox="0 0 371.067 47.013"><polygon fill="#CD4829" points="0.034,20.246 0,26.443 39.603,47.013 39.603,40.201 "></polygon> <polygon fill="#393A39" points="6.216,23.336 39.603,6.645 39.603,0 0.034,20.246 "></polygon> <polygon fill="#CD4829" points="19.042,16.923 32.123,23.166 41.358,18.199 28.634,12.128 "></polygon> <polygon fill="#CD4829" points="85.513,20.467 46.11,0 46.11,6.813 79.325,23.591 "></polygon> <polygon fill="#393A39" points="46.11,40.369 46.11,47.013 85.513,26.855 85.513,20.467 "></polygon> <polygon fill="#CD4829" points="66.67,30.089 53.592,23.848 44.355,28.814 57.078,34.884 "></polygon></svg>
        </defs>
      </svg>
    </div>
  </div>
</template>

<script>
// move animation stuff to another file
import gsap from "gsap";
import {loadImages} from './js/utils.js';
import {
  enterStaggerAnimation,
  leaveStaggerAnimation,
  enterProjectsAnimation,
  leaveProjectsAnimation,
  enterCloseBtn,
  leaveCloseBtn,
} from './js/animation.js';

export default {
  name: 'App',
  data () {
    return {
      transitionName: null,
      toProjectPage: null
    }
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      // if (to.path.includes('projects')) {
      //   console.log(to.path)
      //   this.toProjectPage = true;
      // } else {
      //   this.toProjectPage = false;
      // }
      to.path.includes('projects') ? this.toProjectPage = true : this.toProjectPage = false;
      this.transitionName = toDepth < fromDepth ? 'to-projects' : 'from-projects'
    }
  },
  methods: {
    leave (el, done) {

      const master = gsap.timeline({
        onStart: () => {
          document.body.classList.add('body--overflow');
          console.log("onStart leave")
        },
        onComplete: () => {
          if (document.body.classList.contains('images-are-loaded')) {
            document.body.classList.remove('images-are-loaded');
          }
          done();
        },
      });

      if (this.transitionName === 'to-projects') {
        master
            .add(leaveProjectsAnimation('.work__item'), '<')
      } else {
        master
          .add(leaveStaggerAnimation('.anim__stagger-default'), '<')
      }
    },
    enter (el, done) {

      const master = gsap.timeline({
        onComplete: () => {
          document.body.classList.remove('body--overflow');
          done();
        },
      });

      if (this.transitionName === 'to-projects') {
        master.add(enterProjectsAnimation('.work__item'), '<')
      } else {
        if (this.toProjectPage) {
          console.log('going to a project page')
          master
              .add(enterStaggerAnimation('.anim__stagger-default'), '<')
        } else {
          console.log('going to about or contact page')
          master
              .add(enterStaggerAnimation('.anim__stagger-default'), '<')
        }
      }
    },
  },
  mounted: function() {
    if (!document.body.classList.contains('is-loaded')) {
      console.log('inial load has happened')
      loadImages([
      '../static/images/about-img.jpg',
      '../static/images/contact-bg.jpg'
    ], function() {
      document.body.classList.add('is-loaded');
    });
    }
    
  }
}
</script>
