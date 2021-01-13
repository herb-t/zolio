<template>
  <div class="about">
    <div class="about__content">
      <div class="about__image anim__stagger-default">
        <img src="https://placekitten.com/1920/1080" class="anim__stagger-default" alt="">
      </div>
      <div class="about__text">
        <h1 class="anim__stagger-default">Front End Developer</h1>
        <p class="anim__stagger-default">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima dignissimos praesentium ad quod eligendi delectus officiis tempora error culpa. Laborum, aliquam cum quas tempore sunt dignissimos perspiciatis iure dolor reiciendis.</p>
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
.about__content {
  display: flex;
}

.about__image {
  flex: 2;
}

.about__text {
  flex: 1;
  margin-left: 24px;
}
</style>
