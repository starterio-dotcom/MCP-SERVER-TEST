<!--
  Button Component - DÁP Design System
  Auto-generated from Figma: Button (node: 564:1370)
  
  @see https://www.figma.com/design/wlzFe2hkjpLnBYiNfZbLBM/DÁP_Design_System_UI_Kit_1.2?node-id=564-1370
-->

<template>
  <button
    :class="buttonClasses"
    :disabled="disabled || loading"
    v-bind="$attrs"
  >
    <RemixIcon
      v-if="(!iconOnly && icon && iconPosition === 'left') || (iconOnly && icon)"
      :name="loadingIcon"
      :size="iconSize"
      :color="iconColor"
      :class="{ 'btn-spinner': loading }"
    />
    
    <span v-if="!iconOnly && $slots.default" class="btn-text">
      <slot />
    </span>
    
    <RemixIcon
      v-if="!iconOnly && icon && iconPosition === 'right'"
      :name="loadingIcon"
      :size="iconSize"
      :color="iconColor"
      :class="{ 'btn-spinner': loading }"
    />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import RemixIcon from '../RemixIcon.vue';

export interface ButtonProps {
  /** Button variáció: primary (kitöltött), outline (kerettel), subtle (finom), toggle (kapcsoló) */
  variant?: 'primary' | 'outline' | 'subtle' | 'toggle';
  
  /** Méret: large (48px), medium (40px), small (32px), xsmall (24px) */
  size?: 'large' | 'medium' | 'small' | 'xsmall';
  
  /** Szín: brand (kék), negative (piros), inverted (fehér), neutral (szürke - subtle/toggle) */
  color?: 'brand' | 'negative' | 'inverted' | 'neutral';
  
  /** Csak ikon, nincs szöveg */
  iconOnly?: boolean;
  
  /** Ikon neve (Remixicon) */
  icon?: string;
  
  /** Ikon pozíció */
  iconPosition?: 'left' | 'right';
  
  /** Quiet variáció (csak subtle-nél) */
  quiet?: boolean;
  
  /** Kiválasztott állapot (csak toggle-nél) */
  selected?: boolean;
  
  /** Loading állapot */
  loading?: boolean;
  
  /** Teljes szélesség */
  fullWidth?: boolean;
  
  /** Letiltva */
  disabled?: boolean;
}

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'primary',
  size: 'medium',
  color: 'brand',
  iconOnly: false,
  iconPosition: 'left',
  quiet: false,
  selected: false,
  loading: false,
  fullWidth: false,
  disabled: false
});

// CSS osztályok összeállítása
const buttonClasses = computed(() => {
  const classes = ['btn'];
  
  classes.push(`btn-${props.variant}`);
  classes.push(`btn-${props.size}`);
  
  if (props.color !== 'brand') {
    classes.push(`btn-${props.color}`);
  }
  
  if (props.iconOnly) {
    classes.push('btn-icon-only');
  }
  
  if (props.quiet && props.variant === 'subtle') {
    classes.push('btn-quiet');
  }
  
  if (props.selected && props.variant === 'toggle') {
    classes.push('btn-selected');
  }
  
  if (props.loading) {
    classes.push('btn-loading');
  }
  
  if (props.fullWidth) {
    classes.push('btn-full-width');
  }
  
  return classes.join(' ');
});

// Icon méret mapping
const iconSize = computed(() => {
  const sizeMap: Record<string, string> = {
    large: 'lg',
    medium: 'md',
    small: 'sm',
    xsmall: 'xs'
  };
  return sizeMap[props.size];
});

// Icon szín mapping
const iconColor = computed(() => {
  if (props.variant === 'primary') {
    return props.color === 'inverted' ? 'brand' : 'inverted';
  }
  if (props.variant === 'outline') {
    return props.color === 'inverted' ? 'inverted' : props.color;
  }
  if (props.variant === 'subtle' || props.variant === 'toggle') {
    if (props.color === 'inverted') return 'inverted';
    if (props.color === 'neutral') return 'default';
    return props.color;
  }
  return 'default';
});

// Loading ikon
const loadingIcon = computed(() => {
  return props.loading ? 'loader-2-line' : props.icon || '';
});
</script>

<style src="./Button.css"></style>

<!--
USAGE EXAMPLES:

// Primary button
<Button variant="primary" size="large" icon="add-line">
  Add Item
</Button>

// Outline button
<Button variant="outline" size="medium" color="negative" icon="delete-bin-line">
  Delete
</Button>

// Icon only button
<Button variant="primary" :icon-only="true" icon="search-line" aria-label="Search" />

// Toggle button
<Button variant="toggle" :selected="isSelected" @click="isSelected = !isSelected">
  Favorite
</Button>

// Loading button
<Button variant="primary" :loading="true">
  Saving...
</Button>
-->

