<template>
  <div>
    <a href="https://github.com/alphardex/skadi" target="_blank">
      <h1 class="title">Skadi</h1>
    </a>
    <p class="intro">Skadi，是alphardex平时所做的CSS动画作品集</p>
    <div class="search-bar">
      <i class="fa fa-search"></i>
      <input type="search" name="keyword" id="search" placeholder="以标签搜索作品" v-model="keyword" />
    </div>
    <div class="gallery">
      <Card
        v-for="art in searchResult"
        :title="art.title"
        :thumbnail="art.thumbnail"
        :description="art.description"
        :tags="art.tags"
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
  tags: string[];
}

@Component({
  components: {
    Card
  }
})
export default class Home extends Vue {
  @Provide() arts: Art[] = [
    {
      title: "staggered-wave-loading",
      thumbnail: "staggered-wave-loading.png",
      description: "交错的波纹加载效果",
      tags: ["ui", "loading", "staggered"]
    },
    {
      title: "abbr-expansion",
      thumbnail: "abbr-expansion.png",
      description: "缩写的展开效果",
      tags: ["ui", "hover"]
    },
    {
      title: "gleaming-heading",
      thumbnail: "gleaming-heading.png",
      description: "隐约闪烁的标题",
      tags: ["ui", "heading", "blur", "staggered"]
    },
    {
      title: "gleaming-loading",
      thumbnail: "gleaming-loading.png",
      description: "隐约闪烁的加载",
      tags: ["ui", "loading", "blur", "staggered"]
    },
    {
      title: "gradient-background",
      thumbnail: "gradient-background.png",
      description: "动态的渐变背景",
      tags: ["gradient", "background"]
    },
    {
      title: "login-button",
      thumbnail: "login-button.png",
      description: "附带交互效果的登陆按钮",
      tags: ["ui", "button", "loading"]
    },
    {
      title: "particle-burst",
      thumbnail: "particle-burst.png",
      description: "微粒向四周爆炸的效果",
      tags: ["particle", "random"]
    },
    {
      title: "snow-scratch",
      thumbnail: "snow-scratch.png",
      description: "刮雪效果，雪会再度凝结",
      tags: ["blur", "transform"]
    }
  ];
  @Provide() keyword: string = "";
  get searchResult() {
    return this.keyword
      ? this.arts.filter(art => art.tags.includes(this.keyword))
      : this.arts;
  }
}
</script>

<style lang="scss">
@import url(https://fonts.googleapis.com/css?family=Lobster);
@import url(https://fonts.googleapis.com/css?family=ZCOOL+QingKe+HuangYou|ZCOOL+XiaoWei&display=swap);
@import "@/styles/_mixin.scss";

a {
  text-decoration: none;
}

.title {
  color: hsl(187, 61%, 18%);
  text-align: center;
  font-size: 4em;
  font-family: "Lobster";
  margin-top: 0.5em;
  margin-bottom: 0.2em;
}

.search-bar {
  display: flex;
  margin: 0 auto;
  width: 20%;

  @include pc-layout {
    width: 60%;
  }

  @include sp-layout {
    width: 80%;
  }

  background: white;
  padding: 1em;
  box-sizing: border-box;
  border-radius: 0.5em;
  box-shadow: 0.5rem 0.875rem 2.375rem rgba(39, 44, 49, 0.06),
    0.0625rem 0.1875rem 0.5rem rgba(39, 44, 49, 0.03);

  i {
    margin-right: 1em;
  }

  #search {
    font-family: "ZCOOL XiaoWei", serif;
    font-size: 100%;
    border: none;
    outline: 0;
    width: 100%;
  }
}

.intro {
  color: hsl(187, 61%, 18%);
  text-align: center;
  font-size: 1.2em;
  font-family: "ZCOOL XiaoWei", serif;
  margin: 2em auto;
  line-height: 1.6em;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25ch, 1fr));
  grid-gap: 2rem;
  margin: 0 6rem 3rem 6rem;

  padding-top: 2.5rem;
}
</style>
