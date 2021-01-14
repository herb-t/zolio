<template>
  <div class="about">
    <div class="about__content">
      <div class="about__image anim__stagger-default">
        <img src="../assets/about-img.jpg" class="anim__stagger-default" alt="">
      </div>
      <div class="about__text">
        <h2 class="anim__stagger-default">Front End Developer</h2>
        <p class="anim__stagger-default">I'm a front end developer based out of Ann Arbor, Michigan where I live with my lovely wife and two little rugrats.  I’ve always had an interest in design and user interaction. In addition, I love to solve problems, and I seem to thrive in chaotic environments. As it turns out, that is the perfect mix for a frontend developer.</p>
        <p class="anim__stagger-default">Currenly, I am working at <a href="http://byhook.com/" target="_blank">Hook Studios</a> where I specialize in building marketing and informational websites, with an emphasis on maintainability, interactivity, accessibility, localization, and performance.</p>
        <p class="anim__stagger-default">When i'm not working, I spend most my free time with the family but I like to play basketball and 3rd person shooters or turn based stradegy games on PlayStation.</p>
      </div>
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
h2 {
  margin-bottom: 32px;
}
.about__content {
  display: flex;
}

.about__image {
  flex-basis: 60%;
  width: 60%;
}

.about__text {
  flex-basis: 40%;
  width: 40%;
}

@media (min-width: 1024px) {
  .about__text {
    margin-left: 48px;
  }
}
</style>
