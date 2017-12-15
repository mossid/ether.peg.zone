<template lang='pug'>
.section-home.section-home-benefits: .section-home__container
  .section-home__header {{ text.benefitsTitle }}
  .section-home__main
    .cosmos-panels
      .cosmos-panel(v-for="i in text.benefits")
        .cosmos-panel__image: i.material-icons {{ i.icon }}
        .cosmos-panel__text
          .cosmos-panel__title {{ i.title }}
          .cosmos-panel__body {{ i.body }}
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'section-benefits',
  computed: { ...mapGetters(['text']) }
}
</script>

<style lang="stylus">
@require '~variables'

.cosmos-panels
  margin 0 -1rem

.cosmos-panel
  background app-fg
  display flex
  flex-flow column nowrap
  margin 1rem
  &:first-child
    margin-top 0
  &:last-child
    margin-bottom 0

.cosmos-panel__title
.cosmos-panel__body
.cosmos-panel__action
  padding 1rem

.cosmos-panel__title + .cosmos-panel__body
  padding-top 0

.cosmos-panel__body + .cosmos-panel__action
  padding-top 0

.cosmos-panel__title
  color bright 
  font-size h2
  font-weight 500

.cosmos-panel__image
  i.material-icons
    background link
    color bright
    font-size 5rem
    display flex
    align-items center
    justify-content center
    padding 2rem 0
    width 100%
    max-width 22.25rem
    max-height 8rem

.cosmos-panel__img
  width 100%


.cosmos-panel__action
  display block

@media screen and (min-width: 768px)
  .cosmos-panel
    flex-flow row nowrap

  .cosmos-panel__image
    flex 1

  .cosmos-panel__text
    flex 2

  .cosmos-panel__title
  .cosmos-panel__body
  .cosmos-panel__action
    padding 1.5rem

@media screen and (min-width: 1024px)
  .cosmos-panels
    display flex
    flex-flow row nowrap
    margin -1rem 0

  .cosmos-panel
    flex 1
    flex-flow column nowrap
    &:first-child
    &:last-child
      margin 1rem

  .cosmos-panel__text
    display flex
    flex-flow column

  .cosmos-panel__body
    flex 1
</style>
