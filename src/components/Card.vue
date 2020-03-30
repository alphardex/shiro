<template>
  <a :href="link" target="_blank">
    <figure data-aos="fade-up">
      <img :src="thumbnailPath" :alt="title" lazyload="on" />
      <figcaption>
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
        <p>
          <i class="fa fa-tag" v-for="(tag, i) in tags" :key="i">&nbsp;{{ tag }}</i>
        </p>
      </figcaption>
    </figure>
  </a>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Card extends Vue {
  @Prop() private title!: string;
  @Prop() private description!: string;
  @Prop() private tags!: string[];
  get link() {
    return `/gallery/${this.title}/dist/`;
  }
  get thumbnailPath() {
    return `/thumbnails/${this.title}.png`;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url(https://fonts.googleapis.com/css?family=Lato);
@import "@/styles/_mixin.scss";

* {
  margin: 0;
}

a {
  color: white;
  text-decoration: none;
}

figure {
  position: relative;
  box-shadow: 0 25px 20px -25px black;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    transition: 0.5s;
  }

  &:hover img {
    clip-path: polygon(0 0, 100% 0, 0 0, 0% 100%);
  }

  figcaption {
    padding: 1em 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #2c3e50;

    h3 {
      font-family: "Lato";
      margin-bottom: 1em;
      font-size: 1em;
      line-height: 1.5em;

      @include sp-layout {
        font-size: 0.7em;
        line-height: 1.05em;
      }
    }

    p {
      font-family: "ZCOOL XiaoWei", serif;
      margin-bottom: 1em;
      font-size: 1em;
      line-height: 1.5em;

      @include sp-layout {
        font-size: 0.7em;
        line-height: 1.05em;
      }

      i {
        margin-right: 1em;
        font-size: 0.6em;
        line-height: 0.9em;

        @include sp-layout {
          font-size: 0.5em;
          line-height: 0.75em;
        }
      }
    }
  }
}
</style>
