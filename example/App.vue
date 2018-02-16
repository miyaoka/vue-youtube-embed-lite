<template>
  <div id="app">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0/css/bootstrap-reboot.min.css">

    <header>
      <h1>
        Vue YouTube embed light
      </h1>
      <p>
        Display YouTube thumbnail only instead of iframe for better loading performance.
      </p>
    </header>

    <section>
      <h2>Example</h2>
      <div>
        <h3>embed light(Display thumnail only)</h3>
        <YoutubeEmbedLight
          vid="M7lc1UVf-VE"
          style="width:200px; height:100px"
          :params="{start: 100}"/>

        <YoutubeEmbedLight
          vid="M7lc1UVf-VE"
          thumb-quality="maxres"/>
      </div>
      <div>
        <h3>Vanilla iframe</h3>
        <iframe
          width="200"
          height="100"
          src="https://www.youtube.com/embed/M7lc1UVf-VE"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen></iframe>

        <iframe
          src="https://www.youtube.com/embed/M7lc1UVf-VE"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen></iframe>
      </div>

    </section>

    <section>
      <h2>Usage</h2>
      <div>
        <pre><code>{{ code }}</code></pre>
      </div>
    </section>
    <section>
      <h2>Props</h2>

      <h3>[Optional]</h3>
      <dl>
        <dt>value: Number</dt>
        <dd>(default: 0)</dd>
        <dt>min: Number</dt>
        <dd>(default: 0)</dd>
        <dt>max: Number</dt>
        <dd>(default: 1)</dd>
        <dt>step: Number | String</dt>
        <dd>(default: any)</dd>
        <dt>disabled: Boolean</dt>
        <dd>(default: false)</dd>
      </dl>

    </section>

  </div>
</template>

<script>
import YoutubeEmbedLight from '../src/YoutubeEmbedLight'

export default {
  components: {
    YoutubeEmbedLight
  },
  data() {
    return {
      code: `<YoutubeEmbedLight
  vid="M7lc1UVf-VE"
  thumbQuality="hq"
  :params="{start: 100}"
/>
`
    }
  }
}
</script>

<style>
html {
  margin: 1rem;
}
.slider {
  width: 100%;
}
pre {
  padding: 1rem;
  background: #eee;
}
section {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 2px dotted #ccc;
}
</style>
