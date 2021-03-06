<template>
  <div id="app">
    <header class="hero is-info is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Vue YouTube embed lite
          </h1>
          <h2 class="subtitle">
            Embed YouTube player without iframe for better performance.
          </h2>
        </div>
      </div>
    </header>

    <section class="section">
      <div class="container">
        <h2 class="title">Example</h2>

        <div class="columns">
          <div class="column">
            <div class="card">
              <header class="card-header">
                <p class="card-header-title">Embed lite</p>
              </header>
              <div class="card-content">
                <YoutubeEmbedLite
                  vid="M7lc1UVf-VE"
                  thumb-quality="maxres"
                  style="width: 320px"
                  :params="{ start: 100 }"/>

                <p>Display only thumbnail in init. Load iframe after clicking.</p>
              </div>

            </div>
          </div>
          <div class="column">
            <div class="card">
              <header class="card-header">
                <p class="card-header-title">Normal iframe</p>
              </header>
              <div class="card-content">
                <iframe
                  width="320"
                  height="180"
                  src="https://www.youtube.com/embed/M7lc1UVf-VE"
                  frameborder="0"
                  allow="autoplay; encrypted-media"
                  allowfullscreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 class="title">Usage</h2>
        <div class="content">
          <pre><code>{{ code }}</code></pre>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 class="title">Props</h2>
        <div class="content">
          <table class="table">
            <thead>
              <tr>
                <th>name</th>
                <th>desc</th>
                <th>type</th>
                <th>required</th>
                <th>default</th>
                <th>e.g.</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="prop in propTable"
                :key="prop.name">
                <th>{{ prop.name }}</th>
                <td>{{ prop.desc }}</td>
                <td>{{ prop.type }}</td>
                <td>{{ prop.required }}</td>
                <td><code v-if="prop.default">{{ prop.default }}</code></td>
                <td>
                  <span
                    v-for="eg in prop.eg"
                    :key="eg">
                    <code>{{ eg }}</code>&nbsp;
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <footer class="footer">
      <div class="container">
        <h2 class="title">Licence</h2>
        <div class="content">
          <a href="https://github.com/miyaoka/vue-youtube-embed-lite/blob/master/LICENSE">MIT</a>
        </div>
        <h2 class="title">Source</h2>
        <div class="content">
          <a href="https://github.com/miyaoka/vue-youtube-embed-lite">GitHub</a>
        </div>
      </div>
    </footer>

  </div>
</template>

<script>
import 'bulma/css/bulma.css'
import YoutubeEmbedLite from '../src/YoutubeEmbedLite'

export default {
  components: {
    YoutubeEmbedLite
  },
  data() {
    return {
      code: `<YoutubeEmbedLite
  vid="M7lc1UVf-VE"
  thumb-quality="hq"
  :params="{start: 100}"
/>
`,
      propTable: [
        {
          name: 'vid',
          type: 'String',
          required: true,
          desc: 'YouTube vidoo id',
          eg: ['M7lc1UVf-VE']
        },
        {
          name: 'thumb-quality',
          type: 'String',
          default: 'md',
          desc: 'Thumbnail image size',
          eg: ["''", 'md', 'hq', 'sd', 'maxres']
        },
        {
          name: 'params',
          type: 'Object',
          default: '{}',
          desc: 'Embed player params',
          eg: ['{ start: 100 }']
        },
        {
          name: 'aspect',
          type: 'Number',
          default: '0.5625',
          desc: 'Aspect ratio',
          eg: ['0.75']
        }
      ]
    }
  }
}
</script>

<style>

</style>
