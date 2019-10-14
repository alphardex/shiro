<template>
  <figure class="imghvr-shutter-in-out-diag-2" data-aos="fade-up">
    <img :src="thumbnailPath" :alt="title" loading="lazy" />
    <figcaption>
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <p>
        <i class="fa fa-tag" v-for="(tag, i) in tags" :key="i">&nbsp;{{tag}}</i>
      </p>
    </figcaption>
    <a :href="link" target="_blank"></a>
  </figure>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Card extends Vue {
  @Prop() private title!: string;
  @Prop() private thumbnail!: string;
  @Prop() private description!: string;
  @Prop() private tags!: string[];
  get link() {
    return `/gallery/${this.title}/dist/`;
  }
  get thumbnailPath() {
    return `/thumbnails/${this.thumbnail}`;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url(https://fonts.googleapis.com/css?family=Lato);

* {
  margin: 0;
}

figure {
  background: hsl(187, 40%, 25%);
  box-shadow: 0 25px 20px -25px black;
  border-radius: 0.5em;
  transition: all 0.5s ease;

  img {
    max-width: 100%;
  }

  figcaption {
    h3 {
      font-family: "Lato";
      margin-bottom: 1em;
      font-size: 1em;
      line-height: 1.5em;
    }

    p {
      font-family: "ZCOOL XiaoWei", serif;
      margin-bottom: 1em;
      font-size: 1em;
      line-height: 1.5em;

      i {
        margin-right: 1em;
        font-size: 0.7em;
        line-height: 1.05em;
      }
    }
  }
}
</style>
