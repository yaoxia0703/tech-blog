<script setup lang="ts">
import { computed } from 'vue'

type Locale = 'en' | 'ja'

interface Props {
  locale?: Locale
}

const props = withDefaults(defineProps<Props>(), {
  locale: 'en'
})

const content = computed(() => {
  if (props.locale === 'ja') {
    return {
      greeting: 'こんにちは、Yao Xiaです',
      title: 'Javaバックエンドエンジニア',
      subtitle:
        'Spring Boot を中心に、システムアーキテクチャ、RBAC、JWT、DDD を意識した設計・開発に取り組んでいます。',
      primaryButton: 'プロジェクトを見る',
      primaryLink: '/ja/projects',
      secondaryButton: '設計を見る',
      secondaryLink: '/ja/architecture',
      githubButton: 'GitHub',
      githubLink: 'https://github.com/yaoxia0703',
      sectionTitle: 'コア領域',
      cards: [
        {
          icon: '💻',
          title: 'バックエンド開発',
          description: 'Java / Spring Boot / MyBatis Plus / REST API'
        },
        {
          icon: '🔐',
          title: 'セキュリティ設計',
          description: 'Spring Security / JWT / RBAC / 権限制御'
        },
        {
          icon: '🏗️',
          title: 'アーキテクチャ',
          description: 'DDD / モジュラー設計 / マルチモジュール構成 / 保守性'
        }
      ],
      featuredTitle: '注目トピック',
      featuredItems: [
        {
          title: 'RBAC 権限管理設計',
          description: 'ロール・権限・メニューを軸にした認可設計',
          link: '/ja/blog/rbac'
        },
        {
          title: 'JWT 認証設計',
          description: 'Spring Security と JWT を用いた認証・認可フロー',
          link: '/ja/blog/jwt'
        },
        {
          title: 'DDD モジュラーアーキテクチャ',
          description: '責務分離と保守性を重視したバックエンド構成',
          link: '/ja/blog/ddd'
        }
      ]
    }
  }

  return {
    greeting: "Hi, I'm Yao Xia",
    title: 'Java Backend Engineer',
    subtitle:
      'Focused on Spring Boot, system architecture, RBAC, JWT, and DDD-inspired modular backend design.',
    primaryButton: 'View Projects',
    primaryLink: '/projects',
    secondaryButton: 'View Architecture',
    secondaryLink: '/architecture',
    githubButton: 'GitHub',
    githubLink: 'https://github.com/yaoxia0703',
    sectionTitle: 'Core Focus',
    cards: [
      {
        icon: '💻',
        title: 'Backend Engineering',
        description: 'Java / Spring Boot / MyBatis Plus / REST API'
      },
      {
        icon: '🔐',
        title: 'Security Design',
        description: 'Spring Security / JWT / RBAC / Permission Control'
      },
      {
        icon: '🏗️',
        title: 'Architecture',
        description: 'DDD / Modular Design / Multi-module Structure / Maintainability'
      }
    ],
    featuredTitle: 'Featured Topics',
    featuredItems: [
      {
        title: 'RBAC Permission Design',
        description: 'Authorization design based on roles, permissions, and menus',
        link: '/blog/rbac'
      },
      {
        title: 'JWT Authentication Design',
        description: 'Authentication and authorization flow with Spring Security and JWT',
        link: '/blog/jwt'
      },
      {
        title: 'DDD Modular Architecture',
        description: 'Backend structure focused on maintainability and clear boundaries',
        link: '/blog/ddd'
      }
    ]
  }
})
</script>

<template>
  <div class="landing-page">
    <section class="hero-section">
      <div class="hero-background">
        <div class="glow glow-1"></div>
        <div class="glow glow-2"></div>
        <div class="grid-overlay"></div>
      </div>

      <div class="hero-content">
        <div class="hero-left">
          <p class="hero-greeting">{{ content.greeting }}</p>
          <h1 class="hero-title">{{ content.title }}</h1>
          <p class="hero-subtitle">
            {{ content.subtitle }}
          </p>

          <div class="hero-actions">
            <a :href="content.primaryLink" class="btn btn-primary">
              {{ content.primaryButton }}
            </a>
            <a :href="content.secondaryLink" class="btn btn-secondary">
              {{ content.secondaryButton }}
            </a>
            <a
              :href="content.githubLink"
              class="btn btn-secondary"
              target="_blank"
              rel="noreferrer"
            >
              {{ content.githubButton }}
            </a>
          </div>
        </div>

        <div class="hero-right">
          <div class="avatar-card">
            <img
              src="https://avatars.githubusercontent.com/u/583231?v=4"
              alt="Yao Xia avatar"
              class="avatar-image"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="focus-section">
      <div class="section-header">
        <h2>{{ content.sectionTitle }}</h2>
      </div>

      <div class="card-grid">
        <div v-for="card in content.cards" :key="card.title" class="info-card">
          <div class="card-icon">{{ card.icon }}</div>
          <h3 class="card-title">{{ card.title }}</h3>
          <p class="card-description">{{ card.description }}</p>
        </div>
      </div>
    </section>

    <section class="featured-section">
      <div class="section-header">
        <h2>{{ content.featuredTitle }}</h2>
      </div>

      <div class="featured-list">
        <a
          v-for="item in content.featuredItems"
          :key="item.title"
          :href="item.link"
          class="featured-item"
        >
          <div class="featured-item-content">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </div>
          <span class="featured-arrow">→</span>
        </a>
      </div>
    </section>
  </div>
</template>

<style scoped>
.landing-page {
  position: relative;
  margin: 0 auto;
  padding-bottom: 72px;
}

.hero-section {
  position: relative;
  overflow: hidden;
  border-radius: 28px;
  margin-top: 12px;
  padding: 72px 40px 56px;
  background:
    radial-gradient(circle at top left, rgba(56, 189, 248, 0.18), transparent 32%),
    radial-gradient(circle at top right, rgba(99, 102, 241, 0.18), transparent 28%),
    linear-gradient(135deg, #08121f 0%, #0d1b2a 45%, #10253c 100%);
  color: #f8fafc;
}

.hero-background {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.grid-overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(rgba(56, 189, 248, 0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(56, 189, 248, 0.08) 1px, transparent 1px);
  background-size: 40px 40px;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.35));
}

.glow {
  position: absolute;
  width: 240px;
  height: 240px;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.45;
}

.glow-1 {
  top: 40px;
  left: 80px;
  background: rgba(56, 189, 248, 0.45);
}

.glow-2 {
  right: 100px;
  bottom: 40px;
  background: rgba(99, 102, 241, 0.35);
}

.hero-content {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 40px;
  align-items: center;
}

.hero-greeting {
  margin: 0 0 12px;
  font-size: 22px;
  font-weight: 700;
  color: #38bdf8;
}

.hero-title {
  margin: 0;
  font-size: 64px;
  line-height: 1.02;
  letter-spacing: -0.02em;
  color: #ffffff;
}

.hero-subtitle {
  max-width: 760px;
  margin: 24px 0 0;
  font-size: 20px;
  line-height: 1.8;
  color: rgba(248, 250, 252, 0.86);
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 32px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0 20px;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 700;
  transition: all 0.2s ease;
}

.btn-primary {
  background: linear-gradient(90deg, #38bdf8 0%, #6366f1 100%);
  color: #ffffff;
  box-shadow: 0 10px 24px rgba(56, 189, 248, 0.2);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 30px rgba(56, 189, 248, 0.28);
}

.btn-secondary {
  border: 1px solid rgba(148, 163, 184, 0.3);
  background: rgba(255, 255, 255, 0.06);
  color: #f8fafc;
  backdrop-filter: blur(8px);
}

.btn-secondary:hover {
  border-color: rgba(56, 189, 248, 0.45);
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

.hero-right {
  display: flex;
  justify-content: center;
}

.avatar-card {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 320px;
  height: 320px;
  border: 1px solid rgba(148, 163, 184, 0.18);
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.07);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.28);
  backdrop-filter: blur(12px);
}

.avatar-image {
  width: 220px;
  height: 220px;
  object-fit: contain;
  border-radius: 20px;
}

.focus-section,
.featured-section {
  margin-top: 48px;
}

.section-header {
  margin-bottom: 20px;
}

.section-header h2 {
  margin: 0;
  font-size: 28px;
  color: var(--vp-c-text-1);
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
}

.info-card {
  border: 1px solid rgba(148, 163, 184, 0.16);
  border-radius: 24px;
  padding: 24px;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.82), rgba(255, 255, 255, 0.7));
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.06);
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
}

.dark .info-card {
  background:
    linear-gradient(180deg, rgba(15, 23, 42, 0.88), rgba(15, 23, 42, 0.76));
}

.info-card:hover {
  transform: translateY(-4px);
  border-color: rgba(56, 189, 248, 0.35);
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.12);
}

.card-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: 16px;
  font-size: 24px;
  background: rgba(56, 189, 248, 0.12);
}

.card-title {
  margin: 18px 0 10px;
  font-size: 22px;
  color: var(--vp-c-text-1);
}

.card-description {
  margin: 0;
  line-height: 1.8;
  color: var(--vp-c-text-2);
}

.featured-list {
  display: grid;
  gap: 16px;
}

.featured-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  border: 1px solid rgba(148, 163, 184, 0.16);
  border-radius: 22px;
  padding: 22px 24px;
  text-decoration: none;
  color: inherit;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.82), rgba(255, 255, 255, 0.72));
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.05);
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
}

.dark .featured-item {
  background:
    linear-gradient(180deg, rgba(15, 23, 42, 0.88), rgba(15, 23, 42, 0.76));
}

.featured-item:hover {
  transform: translateY(-3px);
  border-color: rgba(56, 189, 248, 0.35);
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.12);
}

.featured-item-content h3 {
  margin: 0 0 8px;
  font-size: 21px;
  color: var(--vp-c-text-1);
}

.featured-item-content p {
  margin: 0;
  line-height: 1.75;
  color: var(--vp-c-text-2);
}

.featured-arrow {
  font-size: 26px;
  color: #38bdf8;
  flex-shrink: 0;
}

@media (max-width: 960px) {
  .hero-content {
    grid-template-columns: 1fr;
  }

  .hero-title {
    font-size: 48px;
  }

  .avatar-card {
    width: 260px;
    height: 260px;
  }

  .card-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .hero-section {
    padding: 48px 20px 40px;
    border-radius: 22px;
  }

  .hero-title {
    font-size: 38px;
  }

  .hero-subtitle {
    font-size: 17px;
  }

  .hero-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .btn {
    width: 100%;
  }

  .avatar-card {
    width: 220px;
    height: 220px;
  }

  .avatar-image {
    width: 160px;
    height: 160px;
  }

  .featured-item {
    align-items: flex-start;
  }
}
</style>