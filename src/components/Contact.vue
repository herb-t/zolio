<template>
  <div class="contact">
    <div class="contact__background anim__stagger-default"></div>
    <div class="contact__content">
      <p class="anim__stagger-default">Phone</p>
      <p class="anim__stagger-default">Email</p>
      <p class="anim__stagger-default">Other</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      msg: 'About page'
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contact__background {
  background-image: url('/static/images/contact-bg.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  position: absolute;
  z-index: -1;
  pointer-events: none;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transform: none !important;
}
</style>
