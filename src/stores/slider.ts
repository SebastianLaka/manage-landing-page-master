import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { SliderItem } from '@/Types/Types'
import AvatarAnisha from '@/assets/images/avatar-anisha.png'
import AvatarAli from '@/assets/images/avatar-ali.png'
import AvatarRichard from '@/assets/images/avatar-richard.png'
import AvatarShanai from '@/assets/images/avatar-shanai.png'

export const useSliderStore = defineStore('slider', () => {
  const sliderItems = ref<SliderItem[]>([
    {
      id: 1,
      reviewerImage: {
        src: AvatarAnisha,
        alt: 'slider reviewer Anisha Li image',
      },
      reviewerName: 'Anisha Li',
      content:
        ' “Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”',
    },
    {
      id: 2,
      reviewerImage: {
        src: AvatarAli,
        alt: 'slider reviewer Ali Bravo image',
      },

      reviewerName: 'Ali Bravo',
      content:
        ' “We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”',
    },
    {
      id: 3,
      reviewerImage: {
        src: AvatarRichard,
        alt: 'slider reviewer Richard Watts image',
      },

      reviewerName: 'Richard Watts',
      content:
        ' “Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”',
    },
    {
      id: 4,
      reviewerImage: {
        src: AvatarShanai,
        alt: 'slider reviewer Shanai Gough image',
      },
      reviewerName: 'Shanai Gough',
      content:
        ' “Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”',
    },
  ])

  const currentCarousellItem = ref(1)
  const carousellItemsCount = computed(() => sliderItems.value.length)
  let autoplayInterval: ReturnType<typeof setInterval> | null = null
  const slidePrev = () => {
    if (currentCarousellItem.value > 0) {
      currentCarousellItem.value--
    } else {
      currentCarousellItem.value = carousellItemsCount.value - 1
    }
  }
  const slideNext = () => {
    if (currentCarousellItem.value < carousellItemsCount.value - 1) {
      currentCarousellItem.value++
    } else {
      currentCarousellItem.value = 0
    }
  }
  const setSlide = (index: number) => {
    currentCarousellItem.value = index
  }
  const slideAutoplay = (interval: number) => {
    stopSlideAutoplay()
    autoplayInterval = setInterval(() => {
      slideNext()
    }, interval)
  }

  const stopSlideAutoplay = () => {
    if (autoplayInterval) {
      clearInterval(autoplayInterval)
      autoplayInterval = null
    }
  }

  return {
    sliderItems,
    currentCarousellItem,
    slidePrev,
    slideNext,
    setSlide,
    slideAutoplay,
    stopSlideAutoplay,
  }
})
