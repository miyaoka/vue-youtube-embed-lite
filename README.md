# vue-youtube-embed-light

[![NPM version](https://img.shields.io/npm/v/@miyaoka/vue-youtube-embed-light.svg?style=flat)](https://npmjs.com/package/@miyaoka/vue-youtube-embed-light) [![NPM downloads](https://img.shields.io/npm/dm/@miyaoka/vue-youtube-embed-light.svg?style=flat)](https://npmjs.com/package/@miyaoka/vue-youtube-embed-light) [![CircleCI](https://circleci.com/gh/miyaoka/vue-youtube-embed-light.svg?style=shield)](https://circleci.com/gh/miyaoka/vue-youtube-embed-light)

> Embed YouTube player without iframe for better performance.

Demo: https://miyaoka.github.io/vue-youtube-embed-light/

## Install

```sh
npm i @miyaoka/vue-youtube-embed-light
```

## Usage

```vue
<template>
  <YoutubeEmbedLight
    vid="M7lc1UVf-VE"
    thumb-quality="hq"
    :params="{start: 100}"
  />
</template>

<script>
import YoutubeEmbedLight from '@miyaoka/vue-youtube-embed-light'

export default {
  components: {
    YoutubeEmbedLight
  }
}
</script>
```
