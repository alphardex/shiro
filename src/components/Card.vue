<template>
  <a :href="link" target="_blank">
    <figure data-aos="fade-up">
      <img :src="thumbnailPath" :alt="title" loading="lazy" />
      <figcaption>
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
        <p>
          <i class="fa fa-tag" v-for="(tag, i) in tags" :key="i"
            >&nbsp;{{ tag }}</i
          >
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
}

figure {
  position: relative;
  box-sizing: border-box;

  img {
    max-width: 100%;
    box-shadow: 0 25px 20px -25px black;
    transition: 0.3s;
  }

  figcaption {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
    opacity: 0;
    transition: opacity 0.3s;

    &::after {
      position: absolute;
      content: "";
      width: 100%;
      height: 100%;
      border: 2.8px solid white;
      transform: scale(1);
      transition: transform 0.3s;
    }

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

  &:hover {
    img {
      filter: blur(3px) brightness(0.5);
    }

    figcaption {
      opacity: 1;

      &::after {
        transform: scale(0.85);
      }
    }
  }
}
</style>
