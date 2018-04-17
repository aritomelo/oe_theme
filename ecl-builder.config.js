const path = require('path');
const is_prod = process.env.NODE_ENV === 'production';
const source_folder = __dirname + '/node_modules/@ec-europa';

module.exports = {

  scripts: [{
    entry: path.resolve(source_folder, 'ecl-preset-full/index.js'),
    dest: path.resolve(__dirname, 'js/base.js'),
    options: {
      sourceMap: is_prod ? false : 'inline',
      moduleName: 'ECL'
    }
  }],

  styles: [
    {
      entry: path.resolve(source_folder, 'ecl-preset-full/index.scss'),
      dest: path.resolve(__dirname, 'css/base.css'),
      options: { sourceMap: is_prod ? 'file' : true }
    },
    {
      entry: 'sass/style.scss',
      dest: 'css/style.css',
      options: { sourceMap: is_prod ? 'file' : true }
    }
  ],

  copy: [
    { from: path.resolve(source_folder, 'ecl-icons/fonts'), to: path.resolve(__dirname, 'fonts')},
    { from: path.resolve(source_folder, 'ecl-forms-checkboxes/images'), to: path.resolve(__dirname, 'images')},
    { from: path.resolve(source_folder, 'ecl-forms-feedback-messages/images'), to: path.resolve(__dirname, 'images')},
    { from: path.resolve(source_folder, 'ecl-forms-radios/images'), to: path.resolve(__dirname, 'images')},
    { from: path.resolve(source_folder, 'ecl-forms-selects/images'), to: path.resolve(__dirname, 'images')},
    { from: path.resolve(source_folder, 'ecl-logos/images'), to: path.resolve(__dirname, 'images')},
    { from: path.resolve(source_folder, 'ecl-messages/images'), to: path.resolve(__dirname, 'images')},
    { from: path.resolve(source_folder), patterns: 'ecl-accordions/*.twig', to: path.resolve(__dirname, 'templates/components') },
    { from: path.resolve(source_folder), patterns: 'ecl-breadcrumbs/*.twig', to: path.resolve(__dirname, 'templates/components') },
    { from: path.resolve(source_folder), patterns: 'ecl-buttons/*.twig', to: path.resolve(__dirname, 'templates/components') },
    { from: path.resolve(source_folder), patterns: 'ecl-fields/*.twig', to: path.resolve(__dirname, 'templates/components') },
    { from: path.resolve(source_folder), patterns: 'ecl-forms-checkboxes/*.twig', to: path.resolve(__dirname, 'templates/components') },
    { from: path.resolve(source_folder), patterns: 'ecl-forms-labels/*.twig', to: path.resolve(__dirname, 'templates/components') },
    { from: path.resolve(source_folder), patterns: 'ecl-forms-radios/*.twig', to: path.resolve(__dirname, 'templates/components') },
    { from: path.resolve(source_folder), patterns: 'ecl-link-blocks/*.twig', to: path.resolve(__dirname, 'templates/components') },
    { from: path.resolve(source_folder), patterns: 'ecl-links/*.twig', to: path.resolve(__dirname, 'templates/components') },
    { from: path.resolve(source_folder), patterns: 'ecl-logos/*.twig', to: path.resolve(__dirname, 'templates/components') },
    { from: path.resolve(source_folder), patterns: 'ecl-messages/*.twig', to: path.resolve(__dirname, 'templates/components') },
    { from: path.resolve(source_folder), patterns: 'ecl-navigation-lists/*.twig', to: path.resolve(__dirname, 'templates/components') },
    { from: path.resolve(source_folder), patterns: 'ecl-navigation-menus/*.twig', to: path.resolve(__dirname, 'templates/components') },
    { from: path.resolve(source_folder), patterns: 'ecl-pagers/*.twig', to: path.resolve(__dirname, 'templates/components') },
    { from: path.resolve(source_folder), patterns: 'ecl-skip-links/*.twig', to: path.resolve(__dirname, 'templates/components') },
    { from: path.resolve(source_folder), patterns: '**/variants.json', to: path.resolve(__dirname, 'templates/components') }
  ]

};
