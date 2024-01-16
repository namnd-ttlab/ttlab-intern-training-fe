import type { FunctionalComponent, SVGAttributes } from 'vue';
import { flattenIconsObject } from '../util';
import sidebarIcons from './sidebar';
import common from './common';
/**
 * Eg: Using with vuetify:
 * ```
 * <v-button icon="$custom.filter"></v-button>
 * ```
 * NOTE: custom SVG icon must be remove "width" and "height" attributes, change "stroke" value to "currentColor"
 */
const icons = flattenIconsObject({
  custom: common,
  sidebar: sidebarIcons,
}) as Record<string, FunctionalComponent<SVGAttributes>>;
export default icons;
