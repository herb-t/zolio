<style scoped>
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

</style>

<template>
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
</template>

<script>
export default {
  name: 'Footer',
}
</script>
