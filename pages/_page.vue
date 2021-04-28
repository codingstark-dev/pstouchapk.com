<template>
  <div>
    <nuxt-content :document="page" />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.page.title,
      link: [
        { rel: 'canonical', href: `https://pstouchapk.com/${this.page.slug}` },
      ],
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.page.description,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:title',
          content: this.page.title,
        },
        {
          property: 'og:description',
          content: this.page.description,
        },
      ],
    }
  },
  async asyncData({
    $content,
    isDev,
    route,
    store,
    env,
    params,
    query,
    req,
    res,
    redirect,
    error,
  }) {
    const page = await $content('pages', params.page).fetch()
    return {
      page,
    }
  },
}
</script>
