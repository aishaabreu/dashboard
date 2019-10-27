<template functional>
  <span class="mdi mdi-arrow-down" :role="props.role" :aria-label="props.ariaLabel">
    <svg
      fill="currentColor"
      :width="props.width"
      :height="props.height"
      :viewBox="props.viewBox"
      :xmlns="props.xmlns"
    >
      <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/><path fill="none" d="M0 0h24v24H0V0z"/>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'mdi-arrow-down',
  props: {
    width: {
      type: [Number, String],
      default: 24
    },
    height: {
      type: [Number, String],
      default: 24
    },
    viewBox: {
      type: [String],
      default: '0 0 24 24'
    },
    xmlns: {
      type: String,
      default: 'xmlns="http://www.w3.org/2000/svg"'
    },
    ariaLabel: {
      type: String,
      default: 'ArrowDown icon'
    },
    role: {
      type: String,
      default: 'img'
    }
  }
}
</script>
