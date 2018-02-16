# vue-youtube-embed-lite

[![NPM version](https://img.shields.io/npm/v/@miyaoka/vue-youtube-embed-lite.svg?style=flat)](https://npmjs.com/package/@miyaoka/vue-youtube-embed-lite) [![NPM downloads](https://img.shields.io/npm/dm/@miyaoka/vue-youtube-embed-lite.svg?style=flat)](https://npmjs.com/package/@miyaoka/vue-youtube-embed-lite) [![CircleCI](https://circleci.com/gh/miyaoka/vue-youtube-embed-lite.svg?style=shield)](https://circleci.com/gh/miyaoka/vue-youtube-embed-lite)

> Embed YouTube player without iframe for better performance.

Demo: https://miyaoka.github.io/vue-youtube-embed-lite/

## Install

```sh
npm i @miyaoka/vue-youtube-embed-lite
```

## Usage

```vue
<template>
  <YoutubeEmbedLite
    vid="M7lc1UVf-VE"
    thumb-quality="hq"
    :params="{start: 100}"
  />
</template>

<script>
import YoutubeEmbedLite from '@miyaoka/vue-youtube-embed-lite'

export default {
  components: {
    YoutubeEmbedLite
  }
}
</script>
```
