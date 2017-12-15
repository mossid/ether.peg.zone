<template lang='pug'>
.section-cover
  .section-cover__container
    .section-cover__logo
      i.material-icons(v-if="text.coverIcon") {{ text.coverIcon }}
      img(v-else src="~assets/images/logo-zone.png")
    .section-cover__name {{ text.zoneName }}
    .section-cover__tagline {{ text.zoneTagline }}
    .section-cover__action
      btn(
        :href="text.coverBtn.href"
        :value="text.coverBtn.value"
        :icon="text.coverBtn.icon"
        type="anchor"
        size="lg"
        target="_blank")
    .section-cover__scroll
      btn(icon="arrow_downward" v-scroll-to="'#section-what'")
</template>

<script>
import { mapGetters } from 'vuex'
import Btn from '@nylira/vue-button'
export default {
  name: 'section-cover',
  components: {
    Btn
  },
  computed: { ...mapGetters(['config', 'text']) }
}
</script>

<style lang="stylus">
@require '~variables'

.section-cover
  height 100vh
  width 100vw
  display flex
  margin-top -3rem
  background app-fg
  border-bottom 1px solid bc

.section-cover__container
  flex 1
  margin-top 3rem
  padding 0 2rem

  display flex
  flex-flow column nowrap
  align-items center
  justify-content center
  position relative

.section-cover__logo
  margin-bottom 5vh

  img
    width 50vw
    max-width 12rem
    max-height 12rem

  i.material-icons
    font-size 8rem
    color bright

    width 12rem
    height 12rem
    border-radius 6rem
    background link

    display flex
    align-items center
    justify-content center

.section-cover__scroll
  position absolute
  bottom 0.5rem
  right 0.5rem

.section-cover__scroll .ni-btn
  shadow()

.section-cover__name
  display flex
  align-items center
  font-size h1
  font-weight 500
  color bright

  margin-bottom 1.5vh

.section-cover__tagline
  text-align center
  font-weight 300
  letter-spacing 0.025em
  line-height 2
  color dim
  max-width 22em

  margin-bottom 5vh

.section-cover__action
  padding-bottom 3rem
  .ni-btn
    shadow()
</style>
