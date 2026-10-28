<script setup lang="ts">
import { ref } from 'vue'
import FooterEmail from './FooterEmail.vue'
import FooterButton from '../ReuseableComponents/ButtonSite.vue'
import FooterNavigation from './FooterNavigation.vue'
import FooterSM from './FooterSM.vue'
import Logo from '../ReuseableComponents/Logo.vue'
import FacebookIcon from '../icons/icon-facebook.svg'
import YoutubekIcon from '../icons/icon-youtube.svg'
import TwitterIcon from '../icons/icon-twitter.svg'
import PrinterestIcon from '../icons/icon-pinterest.svg'
import InstagramIcon from '../icons/icon-instagram.svg'
const isWhite = ref(true)

const footerItems = ref([
  {
    id: 1,
    title: 'Home',
  },
  {
    id: 2,
    title: 'Pricing',
  },
  {
    id: 3,
    title: 'Product',
  },
  {
    id: 4,
    title: 'About Us',
  },
  {
    id: 5,
    title: 'Careers',
  },
  {
    id: 6,
    title: 'Community',
  },
  {
    id: 7,
    title: 'Privacy Policy',
  },
])
const footerSocialMedia = ref([
  {
    src: FacebookIcon,
    alt: 'Footer icon facebook',
  },
  {
    src: YoutubekIcon,
    alt: 'Footer icon youtube',
  },
  {
    src: TwitterIcon,
    alt: 'Footer icon twitter',
  },
  {
    src: PrinterestIcon,
    alt: 'Footer icon printerest',
  },
  {
    src: InstagramIcon,
    alt: 'Footer icon instagram',
  },
])
import { useValidationStore } from '@/stores/validation.ts'
const validateMail = useValidationStore()
</script>
<template>
  <footer class="footer">
    <div class="footer-content wrapper">
      <div class="validation-zone">
        <div class="actions">
          <FooterEmail />
          <FooterButton class="actions__cta" type="submit" @click="validateMail.validation"
            >Go</FooterButton
          >
        </div>

        <div class="disclaimers-zone">
          <p class="disclaimers-zone__description">Copyright 2020. All rights reserved.</p>
        </div>
      </div>
      <div class="footer-navigation-container">
        <FooterNavigation :footer-items="footerItems" />
      </div>
      <div class="social-media-container">
        <FooterSM :icons="footerSocialMedia" />
        <div class="logo-area">
          <Logo :is-white="isWhite" width="200" height="35" class="logo-area__logo" />
        </div>
        <p class="social-media-container__description">Copyright 2020. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
@use '@/assets/scss/mixins.scss' as *;
@use '@/assets/scss/colors.scss' as *;
@use '@/assets/scss/breakpoints.scss' as *;
.wrapper {
  margin: 0 auto;
  width: 100%;
  max-width: 81.25em;
}
.footer {
  background-color: setColor('blue-950');
  padding: 2em 1em;
  .footer-content {
    @include flex-layout($flex-direction: column);
    @include set-gap(2em, 3em);
    .validation-zone {
      .actions {
        @include flex-layout($justify-content: center, $align-items: start);
        @include set-gap(1em, 0);
        &__cta {
          box-shadow: none;
          transition: background-color 0.3s ease-in-out;
          &:hover {
            background-color: hsl(12, 97%, 75%);
          }
        }
      }
      .disclaimers-zone {
        display: none;
      }
    }
    .footer-navigation-container {
      @include flex-layout($justify-content: center);
    }
    .social-media-container {
      @include flex-layout($flex-direction: column, $justify-content: center, $align-items: center);
      @include set-gap(0, 3em);
      .logo-area{
         @include flex-layout($justify-content: start, $align-items: center);
        
      }
    }
  }
}
@media (min-width: $mobile-view) {
  .footer {
    .footer-content {
      .validation-zone {
        flex-direction: column;
        @include set-gap(0, 1em);
      }
    }
  }
}
@media (min-width: 30em) {
  .footer {
    .footer-content {
      .validation-zone {
        flex-direction: row;
        @include set-gap(1em, 0);
      }
    }
  }
}

@media (min-width: $desktop-wide) {
  .footer {
    padding: 4em 1em;
    .footer-content {
      @include flex-layout($flex-direction: row-reverse, $justify-content: space-between);
      .validation-zone {
        @include flex-layout($flex-direction: column, $justify-content: space-between);
        .disclaimers-zone {
          display: block;
          text-align: right;
        }
      }
      .social-media-container {
        @include flex-layout($flex-direction: column-reverse, $justify-content: space-between);
        &__description {
          display: none;
        }
        .logo-area{
         display: flex;
         justify-content: center;
         align-items: center;
        }
      }
    }
  }
}
</style>
