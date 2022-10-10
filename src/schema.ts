import { Schema } from "elementor-php-core";

export const schema: Schema = [
  {
    type: 'section',
    name: 'general',
    label: 'General',
    default: [],
    fields: [
      {
        type: 'select',
        default: 'variant1',
        name: 'variant',
        label: 'General Variant',
        options: {
          variant1: 'Variant 1',
          variant2: 'Variant 2',
          variant3: 'Variant 3',
          variant4: 'Variant 4',
          variant5: 'Variant 5',
        },
      },

      {
        type: 'wil_list_terms', name: 'posts', label: "Posts", default: {
          categories: [
            {
              id: 1,
              selected: true,
              text: '',
            },
            {
              id: 2,
              selected: false,
              text: '',
            }
          ],
          limit: 4,
          order: 'desc',
          orderBy: "name",
          hideEmpty: "0",
          taxonomy: '',
        }
      },
      // { type: 'number', default: 0, name: 'imageRadius', label: 'Image Radius', min: 0, max: 200, condition: {
      //   general_variant: ['variant1', 'variant2']
      // }},
      // {
      //   type: 'text',
      //   label: 'Aspect ratio',
      //   name: 'aspectRatio',
      //   default: '300 / 209.78',
      //   condition: {
      //     general_variant: ['variant3', 'variant4', 'variant5']
      //   }
      // },
      // {
      //   type: 'array', default: [], name: 'content', label: 'Content', fields: [
      //     { type: 'media', name: 'image', label: 'Image',default: {
      //       url: '/wp-content/plugins/{{ name }}/src/Assets/Image/placeholder.jpeg'
      //     }},
      //     { type: 'text', default: 'Activewear', name: 'title', label: 'Title' },
      //     { type: 'text', default: '', name: 'link', label: 'Link' }
      //   ]
      // },
    ]
  },
  {
    type: 'section',
    name: 'responsive',
    label: 'Responsive',
    default: [],
    fields: [
      { type: 'number', name: 'lg', label: 'Column Large', min: 1, max: 10, default: 3, condition: {general_variant: ['variant1', 'variant2', 'variant3', 'variant4', 'variant5'] } },
      { type: 'number', name: 'md', label: 'Column Medium', min: 1, max: 10, default: 3, condition: {general_variant: ['variant1', 'variant2', 'variant3', 'variant4', 'variant5'] } },
      { type: 'number', name: 'sm', label: 'Column Small', min: 1, max: 10, default: 2, condition: {general_variant: ['variant1', 'variant2', 'variant3', 'variant4', 'variant5'] } },
      { type: 'number', name: 'xs', label: 'Column Extra Small', min: 1, max: 10, default: 1, condition: {general_variant: ['variant1', 'variant2', 'variant3', 'variant4', 'variant5'] } },
      { type: 'number', name: 'gapLg', label: 'Gap Large', min: 0, max: 60, default: 30, condition: {general_variant: ['variant1', 'variant2', 'variant3', 'variant4', 'variant5'] } },
      { type: 'number', name: 'gapMd', label: 'Gap Medium', min: 0, max: 60, default: 30, condition: {general_variant: ['variant1', 'variant2', 'variant3', 'variant4', 'variant5'] } },
      { type: 'number', name: 'gapSm', label: 'Gap Small', min: 0, max: 60, default: 30, condition: {general_variant: ['variant1', 'variant2', 'variant3', 'variant4', 'variant5'] } },
      { type: 'number', name: 'gapXs', label: 'Gap Extra Small', min: 0, max: 60, default: 30, condition: {general_variant: ['variant1', 'variant2', 'variant3', 'variant4', 'variant5'] } }
    ],
  },
  {
    type: 'section',
    name: 'carousel',
    label: 'Carousel',
    default: [],
    fields: [
      { type: 'switcher', name: 'enable', label: 'Enable', default: false },
      { type: 'switcher', name: 'buttonEnable', label: 'Button Enable', default: true, condition: { carousel_enable: true } },
      { type: 'switcher', name: 'paginationEnable', label: 'Pagination Enable', default: true, condition: { carousel_enable: true } },
      { type: 'color', name: 'buttonColor', label: 'Button Color', default: '#000', condition: { carousel_enable: true } },
    ]
  },
  {
    type: 'section_style',
    name: 'colors',
    label: 'Colors',
    default: [],
    fields: [
      { type: 'color', name: 'primary', label: 'Primary', default: '' },
      { type: 'color', name: 'light', label: 'Light', default: '' },
      { type: 'color', name: 'gray2', label: 'Gray 2', default: '' },
      { type: 'color', name: 'gray7', label: 'Gray 7', default: '' },
      { type: 'color', name: 'gray9', label: 'Gray 9', default: '' },
    ]
  },

  {
    type: 'section_style',
    name: 'typography',
    label: 'Typography',
    default: [],
    fields: [
      {
        type: 'typography',
        label: 'Name',
        name: 'titleTypo',
        default: '',
        selector: '{{WRAPPER}} .titleTypo'
      },
    ]
  },

  {
    type: 'section_style',
    name: 'border',
    label: 'Border',
    default: [],
    fields: [
      { type: 'switcher', default: false, name: 'enableBorder', label: 'Enable Border' },
      { type: 'number', default: 0, min: 0, max: Infinity, name: 'borderItemWidth', label: 'Border Item Width', condition: {border_enableBorder: true} },
      { type: 'select', default: 'solid', name: 'borderItemStyle', label: 'Border Item Style', options: {solid: 'solid', dotted: 'dotted', dashed: 'dashed', double: 'double', groove: 'groove'},  condition: {border_enableBorder: true} },
      { type: 'color', default: '', name: 'borderItemColor', label: 'border Item Color', condition: {border_enableBorder: true} },
      { type: 'number', default: 0, min: 0, max: Infinity, name: 'borderItemRadius', label: 'Border Item Radius', condition: {border_enableBorder: true}  },
    ]
  },

  {
    type: 'section_style',
    name: 'customCSS',
    label: 'Custom CSS',
    default: [],
    fields: [
      { type: 'code', name: 'code', label: 'Code', language: 'css',rows: 4 , default: '', },
    ],
  }
];
