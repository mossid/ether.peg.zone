<template lang="pug">
.section-home: .section-home__container
  .section-home__header {{ text.communityTitle }}
  // .app-footer__row.app-footer__row-actions
    part(title="Get Started")
      btn(
        type="link"
        to="/intro"
        size="lg"
        icon="description"
        value="Read Introduction")
    part(title="Get Newsletter"): form-email-signup
  .app-footer__row
    part(:title="text.communityUrlsTitle"): .community-cards
      card-community(v-for="i in text.communityUrls"
        :key="i.title"
        :dt="i.title"
        :icon="i.icon"
        :anchor="i.href")
    part(:title="text.socialMediaUrlsTitle"): .community-cards
      card-community(v-for="i in text.socialMediaUrls"
        :key="i.title"
        :dt="i.title"
        :icon="i.icon"
        :anchor="i.href")
</template>

<script>
import {mapGetters} from 'vuex'
import Cards from 'common/NiCards'
import Btn from '@nylira/vue-button'
import CardCommunity from 'cards/CardCommunity'
import FormEmailSignup from 'forms/FormEmailSignup'
import Part from 'common/NiPart'
export default {
  name: 'app-footer',
  components: {
    Btn,
    Cards,
    CardCommunity,
    FormEmailSignup,
    Part
  },
  computed: { ...mapGetters(['text']) }
}
</script>

<style lang="stylus">
@require '~variables'

.app-footer__row
  margin 0 0 0.25rem

.app-footer__row-actions
  .ni-part-main
    padding 1rem
    background app-fg
    margin-top 0.25rem

    .ni-btn:only-child
      width 100%
      max-width 20rem

    .form-email-signup
      max-width 20rem
      margin 0

@media screen and (min-width: 768px)
  .app-footer__row
    margin-left 1rem
    margin-right 1rem

    display flex
    flex-flow row nowrap

    .ni-part:first-child
      margin-right 2px
    .ni-part:last-child
      margin-left 2px

    .ni-part
      flex 1
</style>
