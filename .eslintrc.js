module.exports = {
  /* 指定如何解析语法。可以为空，但若不为空，只能配该值，原因见下文。*/
  parser: 'vue-eslint-parser',
  env: {
    node: true
  },
  /* 扩展配置，加一些插件 */
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  /* 优先级低于parse的语法解析配置 */
  parserOptions: {
    parser: '@typescript-eslint/parser' /* 解析ts语法 */,
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      // Allows for the parsing of JSX
      jsx: true
    }
  },
  rules: {
    '@typescript-eslint/no-unused-vars': 0,
    'vue/attribute-hyphenation': 0, // bind value 不需要有dash -
    'vue/v-on-event-hyphenation': 0, // bind value 不需要有dash -
    'vue/multi-word-component-names': 0 // 組件不需要一定要兩個單字命名 ex: TodoItem(V), Loading(X)
  }
}
