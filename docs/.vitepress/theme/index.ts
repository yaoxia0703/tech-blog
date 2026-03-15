import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import HomePage from './components/HomePage.vue'

const theme: Theme = {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('HomePage', HomePage)
  }
}

export default theme