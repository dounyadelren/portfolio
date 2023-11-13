<script setup>
import { ref, reactive } from "vue";
import Web from "../assets/img/coding.png";
import Ui from "../assets/img/pencil-and-ruler.png";
import Contact from "../assets/img/mail.png";
import Github from "../assets/img/github.png";
import LinkedIn from "../assets/img/linked.png";
import Notion from "../assets/img/letter-n.png";
import Fr from "../assets/img/fr.png";
import En from "../assets/img/en.png";
import i18n from "../plugins/i18n";

const navOpen = ref(false);
let baseUrl = window.location.origin;
const menu = reactive([
  {
    url: "/projects/web",
    img: Web,
    name: "Projets web",
  },
  {
    url: "/projects/ui",
    img: Ui,
    name: "Conceptions ui",
  },
  {
    url: "mailto:derlen.dounya@gmail.com",
    img: Contact,
    name: "Contact",
  },
  {
    url: "https://github.com/dounyadelren",
    img: Github,
    name: "Github",
  },
  {
    url: "https://www.linkedin.com/in/dounya-derlen/",
    img: LinkedIn,
    name: "LinkedIn",
  },
  {
    url: "https://dounya-derlen.notion.site/Dounya-Derlen-Resume-7fa6941db63f4a54b2d887830acb701c?pvs=4",
    img: Notion,
    name: "Notion",
  },
]);
const currentLocale = ref("fr");
const changeLocale = (locale) => {
  currentLocale.value = locale;
  i18n.global.locale = locale;
  localStorage.setItem("selectedLanguage", locale);
  const savedLanguage = localStorage.getItem("selectedLanguage");
  if (savedLanguage) {
    i18n.global.locale = savedLanguage;
  }
};
</script>
<template>
  <div>
    <nav class="navbar navbar-expand-lg font-12 border-bottom">
      <div class="container-fluid p-0">
        <a href="/"
          ><img src="../assets/img/LogoDD.png" class="logo-class"
        /></a>
        <div id="sidemenu" class="is-small-screen">
          <button
            class="sidemenu__btn"
            @click="navOpen = !navOpen"
            :class="{ active: navOpen }"
          >
            <span class="top"></span>
            <span class="mid"></span>
            <span class="bottom"></span>
          </button>
          <transition name="translateY">
            <nav id="burger" v-show="navOpen">
              <div class="sidemenu__wrapper">
                <ul class="sidemenu__list font-12">
                  <li
                    v-for="item in menu"
                    :key="item.id"
                    class="sidemenu__item"
                    @click="navOpen = !navOpen"
                  >
                    <a :href="item.url"
                      ><img
                        :src="item.img"
                        :alt="item.name"
                        width="20"
                        class="me-3"
                      />{{ item.name }}</a
                    >
                  </li>
                  <li class="sidemenu__item" @click="changeLocale('fr')">
                    <a href=""
                      ><img :src="Fr" width="20" class="me-3" />Français</a
                    >
                  </li>
                  <li class="sidemenu__item" @click="changeLocale('en')">
                    <a href=""
                      ><img :src="En" width="20" class="me-3" />English</a
                    >
                  </li>
                </ul>
              </div>
            </nav>
          </transition>
        </div>
        <div
          class="d-flex align-items-center cursor menu-container justify-content-around is-large collapse navbar-collapse"
          id="navbarNav"
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              <a
                :href="baseUrl + '/projects/web'"
                class="menu-item me-2 letter-space-1 text-uppercase"
                >{{ $t("menu.web") }}</a
              >
            </li>
          </ul>
          <li class="nav-item">
            <a
              href="/projects/ui"
              class="menu-item me-2 letter-space-1 text-uppercase"
              >{{ $t("menu.ui") }}</a
            >
          </li>
        </div>
        <div class="d-flex align-items-center is-large">
          <a href="mailto:derlen.dounya@gmail.com">
            <button class="contact-btn">Contact</button>
          </a>
        </div>
      </div>
    </nav>
  </div>
</template>
<style lang="scss">
#sidemenu {
  #burger {
    max-width: 100%;
    width: 100%;
    background: white;
    position: fixed;
    top: 77px;
    left: 0;
    z-index: 99999;
    height: 100%;
  }

  .sidemenu {
    &__btn {
      display: block;
      width: 50px;
      height: 50px;
      background: var(--purplegradient);
      border: none;
      border-radius: 200px;
      position: relative;
      z-index: 100;
      appearance: none;
      cursor: pointer;
      outline: none;

      span {
        display: block;
        width: 20px;
        height: 2px;
        margin: auto;
        background: white;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        transition: all 0.4s ease;

        &.top {
          transform: translateY(-8px);
        }

        &.bottom {
          transform: translateY(8px);
        }
      }
      &.active {
        .top {
          transform: rotate(-45deg);
        }
        .mid {
          transform: translateX(-20px) rotate(360deg);
          opacity: 0;
        }
        .bottom {
          transform: rotate(45deg);
        }
      }
    }

    // &__wrapper {
    //   // padding-top: 50px;
    // }

    &__list {
      padding-top: 50px;
      list-style: none;
      padding: 14px;
      margin: 0;
    }

    &__item {
      a {
        text-decoration: none;
        line-height: 1.6em;
        font-size: 1.6em;
        padding: 0.5em;
        display: block;
        color: black;
        transition: 0.4s ease;

        &:hover {
          background: lightgrey;
          color: dimgrey;
        }
      }
    }
  }
}

.translateY-enter {
  transform: translateY(-200px);
  opacity: 0;
}

.translateY-enter-active,
.translateY-leave-active {
  transform-origin: top left 0;
  transition: 0.2s ease;
}

.translateY-leave-to {
  transform: translateY(-200px);
  opacity: 0;
}
</style>
