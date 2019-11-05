<template>
  <div>
    <a
      href="https://github.com/alphardex/shiro"
      target="_blank"
      class="github-corner"
      aria-label="View source on GitHub"
    >
      <svg
        width="80"
        height="80"
        viewBox="0 0 250 250"
        style="fill:#151513; color:#fff; position: absolute; top: 0; border: 0; right: 0;"
        aria-hidden="true"
      >
        <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z" />
        <path
          d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
          fill="currentColor"
          style="transform-origin: 130px 106px;"
          class="octo-arm"
        />
        <path
          d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
          fill="currentColor"
          class="octo-body"
        />
      </svg>
    </a>
    <h1 class="title">Shiro</h1>
    <p class="intro">Shiro，是alphardex平时所做的CSS动画作品集</p>
    <div class="search-bar">
      <input
        type="search"
        name="keyword"
        id="search"
        placeholder="以标签搜索作品，如button"
        v-model="keyword"
      />
      <i class="fa fa-search"></i>
    </div>
    <div class="gallery">
      <Card
        v-for="art in searchResult"
        :title="art.title"
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
      title: "rainbow-color-text",
      description: "彩虹渐变文本",
      tags: ["ui", "text", "staggered"]
    },
    {
      title: "radio-button",
      description: "精巧的单选按钮",
      tags: ["ui", "form", "radio"]
    },
    {
      title: "toggle",
      description: "精巧的开关",
      tags: ["ui", "toggle"]
    },
    {
      title: "staggered-glow-in-text",
      description: "发光文本淡入显现效果",
      tags: ["ui", "text", "glow", "staggered"]
    },
    {
      title: "staggered-bouncing-3d-loading",
      description: "弹跳的3D文本加载",
      tags: ["ui", "text", "loading", "staggered"]
    },
    {
      title: "menu-hover-underline",
      description: "获取焦点时出现下划线的菜单栏",
      tags: ["ui", "menu", "hover"]
    },
    {
      title: "staggered-stair-loading",
      description: "高低起伏的阶梯式加载",
      tags: ["ui", "loading", "staggered"]
    },
    {
      title: "bubbling-text",
      description: "用web animation制作冒泡文字",
      tags: ["ui", "text", "bubble"]
    },
    {
      title: "neon-text",
      description: "用text-shadow制作霓虹文字",
      tags: ["ui", "text", "neon"]
    },
    {
      title: "nav-tab",
      description: "动态导航栏",
      tags: ["ui", "nav", "tabs"]
    },
    {
      title: "transparent-material-login-form",
      description: "透明material风格的登录表单",
      tags: ["ui", "material", "form", "login"]
    },
    {
      title: "name-card-hover-expand",
      description: "利用裁剪属性实现卡片的展开",
      tags: ["ui", "card", "hover", "clip-path"]
    },
    {
      title: "one-field-login-form",
      description: "把登陆按钮本身作为表单",
      tags: ["ui", "button", "form", "login"]
    },
    {
      title: "card-hover-expand-body",
      description: "鼠标悬浮卡片时会展开描述文字",
      tags: ["ui", "card", "hover"]
    },
    {
      title: "button-hover-shining",
      description: "会闪烁的按钮",
      tags: ["ui", "button", "hover"]
    },
    {
      title: "burger-menu",
      description: "汉堡菜单",
      tags: ["ui", "menu", "burger", "staggered"]
    },
    {
      title: "staggered-square-loading",
      description: "交错放大的方块加载",
      tags: ["ui", "loading", "staggered"]
    },
    {
      title: "glowing-menu-buttons",
      description: "发光的按钮",
      tags: ["ui", "button", "hover"]
    },
    {
      title: "eclipse-loader",
      description: "日食加载效果",
      tags: ["ui", "loading", "gradient", "blur"]
    },
    {
      title: "menu-hover-magnify",
      description: "获取焦点时自动放大的菜单栏",
      tags: ["ui", "menu", "hover", "scale"]
    },
    {
      title: "shining-text",
      description: "黑色背景下的文字渐变效果",
      tags: ["ui", "text", "gradient", "background"]
    },
    {
      title: "progress-bar",
      description: "文件上传进度条效果",
      tags: ["ui", "loading", "progress bar"]
    },
    {
      title: "staggered-wave-loading",
      description: "交错的波纹加载效果",
      tags: ["ui", "loading", "staggered"]
    },
    {
      title: "abbr-expansion",
      description: "缩写的展开效果",
      tags: ["ui", "text", "hover"]
    },
    {
      title: "gleaming-heading",
      description: "隐约闪烁的标题",
      tags: ["ui", "text", "blur", "staggered"]
    },
    {
      title: "gleaming-loading",
      description: "隐约闪烁的加载",
      tags: ["ui", "text", "loading", "blur", "staggered"]
    },
    {
      title: "login-button",
      description: "附带交互效果的登陆按钮",
      tags: ["ui", "button", "loading"]
    },
    {
      title: "particle-burst",
      description: "微粒向四周爆炸的动画",
      tags: ["ui", "loading", "particle", "random"]
    },
    {
      title: "snow-scratch",
      description: "刮雪融化的文本效果",
      tags: ["ui", "text", "blur", "contrast"]
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

.github-corner:hover .octo-arm {
  animation: octocat-wave 560ms ease-in-out;
}

@keyframes octocat-wave {
  0%,
  100% {
    transform: rotate(0);
  }
  20%,
  60% {
    transform: rotate(-25deg);
  }
  40%,
  80% {
    transform: rotate(10deg);
  }
}

@media (max-width: 500px) {
  .github-corner:hover .octo-arm {
    animation: none;
  }
  .github-corner .octo-arm {
    animation: octocat-wave 560ms ease-in-out;
  }
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
    transform: translate(-50%, -180%);

    input#search {
      width: 19em;
      padding: 0 1em;
    }
  }
}

.gallery {
  display: grid;
  // 自适应列数，每列的范围最小为25个字符宽度，正常情况下为1列的大小
  grid-template-columns: repeat(auto-fill, minmax(25ch, 1fr));
  grid-gap: 2rem;
  margin: 0 6rem 3rem 6rem;

  padding-top: 2.5rem;
}
</style>
