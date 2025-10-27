<!-- 
  RemixIcon Vue Component
  DÁP Design System + Remixicon Integration
-->

<template>
  <i 
    :class="iconClasses"
    :style="style"
    :aria-label="ariaLabel"
    :aria-hidden="ariaHidden || undefined"
    :role="onClick ? 'button' : undefined"
    @click="onClick"
  />
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  // Icon neve (pl. "home-line", "heart-fill")
  name: {
    type: String,
    required: true
  },
  
  // Icon mérete: xs, sm, md, lg, xl, 2xl, 3xl
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'].includes(value)
  },
  
  // Icon színe
  color: {
    type: String,
    default: 'default',
    validator: (value) => [
      'default', 
      'brand', 
      'positive', 
      'negative', 
      'warning', 
      'info', 
      'inverted', 
      'subtle', 
      'muted', 
      'disabled'
    ].includes(value)
  },
  
  // Extra CSS osztályok
  className: {
    type: String,
    default: ''
  },
  
  // Inline style-ok
  style: {
    type: Object,
    default: () => ({})
  },
  
  // Accessibility label
  ariaLabel: {
    type: String,
    default: undefined
  },
  
  // Ha true, akkor aria-hidden="true"
  ariaHidden: {
    type: Boolean,
    default: false
  },
  
  // Click handler
  onClick: {
    type: Function,
    default: undefined
  }
});

const iconClasses = computed(() => [
  `ri-${props.name}`,
  `icon-${props.size}`,
  `icon-${props.color}`,
  props.className
].filter(Boolean).join(' '));
</script>

<!--
USAGE EXAMPLES:

// Basic usage
<RemixIcon name="home-line" />

// Custom size and color
<RemixIcon name="heart-fill" size="lg" color="negative" />

// With click handler
<RemixIcon 
  name="delete-bin-line" 
  size="md" 
  color="negative"
  :onClick="handleDelete"
  ariaLabel="Delete item"
/>

// In button
<button class="btn-primary">
  <RemixIcon name="add-line" size="md" color="inverted" />
  <span>Add Item</span>
</button>

// Decorative icon (hidden from screen readers)
<div>
  <RemixIcon name="check-line" size="md" color="positive" :ariaHidden="true" />
  <span>Success message</span>
</div>
-->

