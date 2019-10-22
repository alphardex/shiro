<template>
  <div>
    <a href="https://github.com/alphardex/shiro" target="_blank">
      <h1 class="title">Shiro</h1>
    </a>
    <p class="intro">Shiro，是alphardex平时所做的CSS动画作品集</p>
    <div class="search-bar">
      <input type="search" name="keyword" id="search" placeholder="以标签搜索作品，如button" v-model="keyword" />
      <i class="fa fa-search"></i>
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
      title: "name-card-hover-expand",
      thumbnail: "name-card-hover-expand.png",
      description: "利用裁剪属性实现名片细节的展开",
      tags: ["ui", "card", "hover", "clip-path"]
    },
    {
      title: "one-field-login-form",
      thumbnail: "one-field-login-form.png",
      description: "把登陆按钮本身作为表单",
      tags: ["ui", "button", "form", "login"]
    },
    {
      title: "card-hover-expand-body",
      thumbnail: "card-hover-expand-body.png",
      description: "鼠标悬浮卡片时会展开描述文字",
      tags: ["ui", "card", "hover"]
    },
    {
      title: "button-hover-shining",
      thumbnail: "button-hover-shining.png",
      description: "会闪烁的按钮",
      tags: ["ui", "button", "hover"]
    },
    {
      title: "burger-menu",
      thumbnail: "burger-menu.png",
      description: "汉堡菜单",
      tags: ["ui", "menu", "burger", "staggered"]
    },
    {
      title: "staggered-square-loading",
      thumbnail: "staggered-square-loading.png",
      description: "交错放大的方块加载",
      tags: ["ui", "loading", "staggered"]
    },
    {
      title: "glowing-menu-buttons",
      thumbnail: "glowing-menu-buttons.png",
      description: "发光的按钮",
      tags: ["ui", "button", "hover"]
    },
    {
      title: "eclipse-loader",
      thumbnail: "eclipse-loader.png",
      description: "日食加载效果",
      tags: ["ui", "loading", "gradient", "blur"]
    },
    {
      title: "menu-hover-magnify",
      thumbnail: "menu-hover-magnify.png",
      description: "获取焦点时自动放大的菜单栏",
      tags: ["ui", "menu", "hover", "scale"]
    },
    {
      title: "shining-text",
      thumbnail: "shining-text.png",
      description: "黑色背景下的文字渐变效果",
      tags: ["ui", "text", "gradient", "background"]
    },
    {
      title: "progress-bar",
      thumbnail: "progress-bar.png",
      description: "文件上传进度条效果",
      tags: ["ui", "loading", "progress bar"]
    },
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
      description: "刮雪凝结效果",
      tags: ["transform", "blur", "contrast"]
    }
  ];
  @Provide() keyword: string = "";
  get searchResult() {
    return this.keyword
      ? this.arts.filter(art => art.tags.includes(this.keyword.toLowerCase()))
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
  color: #172530;
  text-align: center;
  font-size: 4em;
  font-family: "Lobster";
  margin-top: 0.5em;
  margin-bottom: 0.2em;
}

.intro {
  color: #0b2438;
  text-align: center;
  font-size: 1.2em;
  font-family: "ZCOOL XiaoWei", serif;
  margin: 1em 0 4em 0;
  line-height: 1.6em;
}

.search-bar {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -150%);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: 40px;
  border: 2px solid rgba(0, 0, 0, 0.4);
  border-radius: 40px;
  padding: 10px;
  cursor: pointer;

  input#search {
    font-family: "ZCOOL XiaoWei", serif;
    font-size: 1em;
    line-height: 40px;
    border: none;
    outline: none;
    background: none;
    width: 0;
    padding: 0;
    transition: 0.5s ease-in-out;
  }

  i {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: #448aff;
    background: #f5f5f5;
    transition: 0.5s;
  }

  @include pc-layout {
    &:hover {
      input#search {
        width: 30em;
        padding: 0 1em;
      }

      i {
        background: #616161;
      }
    }
  }

  @include sp-layout {
    input#search {
      width: 27em;
      padding: 0 1em;
    }
  }
}

.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25ch, 1fr));
  grid-gap: 2rem;
  margin: 0 6rem 3rem 6rem;

  padding-top: 2.5rem;
}
</style>
