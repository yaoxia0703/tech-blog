import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Yao Xia',
  description: 'Java Backend Engineer',
  base: '/tech-blog/',

  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Tech Stack', link: '/tech-stack' },
          { text: 'Projects', link: '/projects' },
          { text: 'Architecture', link: '/architecture' }
        ]
      }
    },

    ja: {
      label: '日本語',
      lang: 'ja-JP',
      themeConfig: {
        nav: [
          { text: 'ホーム', link: '/ja/' },
          { text: '技術スタック', link: '/ja/tech-stack' },
          { text: 'プロジェクト', link: '/ja/projects' },
          { text: 'アーキテクチャ', link: '/ja/architecture' }
        ]
      }
    }
  },

  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/yaoxia0703' }
    ]
  }
})