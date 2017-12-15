<template lang='pug'>
#section-what.section-home: .section-home__container
  .section-home__header {{ text.whatTitle }}
  .section-home__main
    .section-home__text
      .section-home__p {{ text.siteDescription }}
    .section-home__diagrams
      .cosmos-diagram(v-for="i in text.whatDiagrams")
        .cosmos-diagram__image: i.material-icons {{ i.icon }}
        .cosmos-diagram__label {{ i.title }}
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'section-what',
  computed: { ...mapGetters(['text']) }
}
</script>

<style lang="stylus">
@require '~variables'

#section-what
  background app-fg

.section-home__container
  padding 2rem 1rem
  max-width 1024px
  margin 0 auto
  overflow hidden

.section-home__header
.section-home__text
.section-home__diagrams
  margin-bottom 1.5rem
  &:last-child
    margin-bottom 0

.section-home__header
  font-size h1
  color bright
  font-weight 500
  margin-bottom 1.5rem
  line-height 1.25
  text-align center

.section-home__text
  max-width 32rem
  margin-left auto
  margin-right auto

.section-home__p
  margin-bottom 1.5rem
  &:last-child
    margin-bottom 0

.section-home__diagrams
  background app-bg

.cosmos-diagram
  display flex
  flex-flow row nowrap

.cosmos-diagram__image
  flex 1
  padding 1rem

  i.material-icons
    background link
    color bright
    font-size 4rem
    display flex
    align-items center
    justify-content center
    padding 1rem 0
    width 100%
    width 8rem
    height 8rem
    border-radius 4rem

.cosmos-diagram__img
  max-width 8rem

.cosmos-diagram__label
  flex 2
  padding 1rem 1rem 1rem 0
  display flex
  align-items center
  font-size sm

@media screen and (min-width: 375px)
  .cosmos-diagram__label
    padding 1rem

@media screen and (min-width: 768px)
  .section-home__container
    padding 3rem 1rem

  .section-home__header
  .section-home__text
  .section-home__diagrams
    margin-bottom 3rem

  .section-home__diagrams
    display flex
    flex-flow row nowrap
    padding 2rem

  .cosmos-diagram
    flex 1
    flex-flow column nowrap

  .cosmos-diagram__image
    display flex
    align-items center
    justify-content center
    margin-bottom 1rem

  .cosmos-diagram__label
    flex 1
    text-align center
    align-items flex-start
    padding-bottom 0

@media screen and (min-width: 1024px)
  .section-home__diagrams
    margin-left 1rem
    margin-right 1rem
</style>
