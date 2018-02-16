# vue-youtube-embed-light

[![NPM version](https://img.shields.io/npm/v/@miyaoka/vue-youtube-embed-light.svg?style=flat)](https://npmjs.com/package/@miyaoka/vue-youtube-embed-light) [![NPM downloads](https://img.shields.io/npm/dm/@miyaoka/vue-youtube-embed-light.svg?style=flat)](https://npmjs.com/package/@miyaoka/vue-youtube-embed-light) [![CircleCI](https://circleci.com/gh/miyaoka/vue-youtube-embed-light.svg?style=shield)](https://circleci.com/gh/miyaoka/vue-youtube-embed-light)

> Touch extension of input-range element

Demo: https://miyaoka.github.io/vue-youtube-embed-light/

## Install

```sh
npm i @miyaoka/vue-youtube-embed-light
```

## Usage

### in script

```js
import YoutubeEmbedLight from '@miyaoka/vue-youtube-embed-light'

export default {
  components: {
    YoutubeEmbedLight
  }
}
```

### in template

```
<YoutubeEmbedLight
  :min="min"
  :max="max"
  :step="step"
  :disabled="disabled"
  v-model="value"
/>
```
