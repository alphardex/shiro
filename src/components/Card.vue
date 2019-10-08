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
@import "@/styles/_mixin.scss";

figure {
  background: hsl(187, 40%, 25%);
  box-shadow: 0 0 10px #263758;
  border-radius: 0.5em;
  padding: 0.8em;
  transition: all 0.5s ease;

  &:hover {
    box-shadow: 0 0 40px #263758;
  }

  img {
    max-width: 100%;
  }

  figcaption {
    h3 {
      font-family: "Lato";

      @include pc-layout {
        font-size: 1em;
        line-height: 1.2em;
      }

      @include sp-layout {
        font-size: 0.6em;
        line-height: 0.7em;
      }
    }

    p {
      font-family: "ZCOOL XiaoWei", serif;

      @include pc-layout {
        font-size: 1em;
      }

      @include sp-layout {
        font-size: 0.6em;
      }

      i {
        margin-right: 1em;

        @include pc-layout {
          font-size: 0.7em;
        }

        @include sp-layout {
          font-size: 0.4em;
        }
      }
    }
  }
}
</style>
