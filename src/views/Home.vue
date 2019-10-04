<template>
  <div>
    <h1 class="intro">Skadi</h1>
    <div class="gallery">
      <Card
        v-for="art in arts"
        :title="art.title"
        :thumbnail="art.thumbnail"
        :description="art.description"
        :key="art.title"
      ></Card>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from "vue-property-decorator";
import Card from "@/components/Card.vue";

interface Art {
  title: string;
  thumbnail: string;
  description: string;
}

@Component({
  components: {
    Card
  }
})
export default class Home extends Vue {
  @Provide() arts: Art[] = [
    {
      title: "abbr-expansion",
      thumbnail: "abbr-expansion.png",
      description: "缩写的展开效果"
    },
    {
      title: "apple-watch-breeze",
      thumbnail: "apple-watch-breeze.png",
      description: "苹果手表上加载时的呼吸动画"
    },
    {
      title: "gleaming-heading",
      thumbnail: "gleaming-heading.png",
      description: "隐约闪烁的标题"
    },
    {
      title: "gleaming-loading",
      thumbnail: "gleaming-loading.png",
      description: "隐约闪烁的加载"
    },
    {
      title: "gradient-background",
      thumbnail: "gradient-background.png",
      description: "动态的渐变背景"
    },
    {
      title: "login-button",
      thumbnail: "login-button.png",
      description: "附带交互效果的登陆按钮"
    },
    {
      title: "particle-burst",
      thumbnail: "particle-burst.png",
      description: "微粒向四周爆炸的效果"
    },
    {
      title: "rgb-loading",
      thumbnail: "rgb-loading.png",
      description: "红绿蓝三色的加载环"
    },
    {
      title: "snow-scratch",
      thumbnail: "snow-scratch.png",
      description: "刮雪效果，雪会再度凝结"
    }
  ];
}
</script>

<style lang="scss">
@import url(https://fonts.googleapis.com/css?family=Lobster);

.intro {
  color: hsl(187, 61%, 18%);
  text-align: center;
  font-size: 4em;
  font-family: "Lobster";
}

.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30ch, 1fr));
  grid-gap: 2rem;

  padding-top: 2.5rem;
}
</style>
