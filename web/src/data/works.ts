export type WorkLanguage = 'zh' | 'en'

export interface WorkListItem {
  name: string
  meta?: string
  tags?: string[]
  link?: string
  slug?: string
}

export type WorkItem = WorkListItem

export interface WorkGroup {
  heading: string
  items: string[]
}

export interface WorkSection {
  id: string
  no: string
  title: string
  tagline: string
  items?: WorkListItem[]
  groups?: WorkGroup[]
  awards?: string[]
  footer?: string
}

export interface WorksLang {
  title: string
  closeLabel: string
  openLabel: string
  hint: string
  awardsLabel: string
  visitLabel: string
  detailPlaceholder: string
  phImageLabel: string
  phButtonLabel: string
  countLabel: (n: number) => string
  sections: WorkSection[]
}

export type WorksCopy = WorksLang

export const WORKS: Record<WorkLanguage, WorksLang> = {
  "zh": {
    "title": "项目经历",
    "closeLabel": "返回",
    "openLabel": "展开作品",
    "hint": "继续下滑",
    "awardsLabel": "项目成果",
    "visitLabel": "查看完整项目",
    "detailPlaceholder": "项目详情",
    "phImageLabel": "项目预览",
    "phButtonLabel": "打开项目",
    "countLabel": (n: number) => `${n} 个项目`,
    "sections": [
      {
        "id": "project-1",
        "no": "01",
        "title": "AI 运营看板与达人协作",
        "tagline": "转化分析｜达人筛选｜合作跟进｜渠道复盘",
        "items": [
          {
            "name": "AI 运营看板与达人协作",
            "meta": "搜狐 · AI 产品运营实习生",
            "slug": "ai-news-dashboard",
            "link": `${import.meta.env.BASE_URL}projects/ai-news-dashboard/case_study.html`,
            "tags": [
              "AI 看板：对比转化表现，识别流失节点",
              "达人与内容：筛选跟进博主，累计输出100+条内容",
              "渠道复盘：投放期注册较前周+50%，首次专题创建率相对约+15%"
            ]
          }
        ]
      },
      {
        "id": "project-2",
        "no": "02",
        "title": "客户需求与商务合作",
        "tagline": "需求台账｜合作资料｜项目进度｜高校推广",
        "items": [
          {
            "name": "客户需求与商务合作",
            "meta": "织知玄华 · 商务运营实习生",
            "slug": "ai-education-partnership",
            "link": `${import.meta.env.BASE_URL}projects/ai-education-partnership/case_study.html`,
            "tags": [
              "客户资料：归类100+条反馈，建立需求台账",
              "商务协同：梳理需求与分工，跟进签约及交接",
              "推广支持：30+篇内容、10条建议，期间核心功能使用率+30%"
            ]
          }
        ]
      },
      {
        "id": "project-4",
        "no": "03",
        "title": "ZUS Coffee 新品推广与渠道复盘",
        "tagline": "消费场景｜新品卖点｜社媒执行｜渠道协同",
        "items": [
          {
            "name": "ZUS Coffee 新品推广与渠道复盘",
            "meta": "Zuspresso · 海外新媒体运营实习生",
            "slug": "zus-everywhere",
            "link": `${import.meta.env.BASE_URL}projects/zus-everywhere/case_study.html`,
            "tags": [
              "新品推广：调研消费偏好，协助50条 Instagram 内容",
              "渠道协同：线上首发及 FamilyMart 素材与排期",
              "数据复盘：15+次复盘，协同带动粉丝增长1.1w+"
            ]
          }
        ]
      }
    ]
  },
  "en": {
    "title": "Project Experience",
    "closeLabel": "Back",
    "openLabel": "Open case",
    "hint": "Scroll to continue",
    "awardsLabel": "Outcomes",
    "visitLabel": "View full case",
    "detailPlaceholder": "Project details",
    "phImageLabel": "Project preview",
    "phButtonLabel": "Open project",
    "countLabel": (n: number) => `${n} projects`,
    "sections": [
      {
        "id": "project-1",
        "no": "01",
        "title": "AI Dashboard & Creator Coordination",
        "tagline": "Conversion Analysis · Creator Screening · Follow-up · Reviews",
        "items": [
          {
            "name": "AI Dashboard & Creator Coordination",
            "meta": "Sohu · AI Product Operations Intern",
            "slug": "ai-news-dashboard",
            "link": `${import.meta.env.BASE_URL}projects/ai-news-dashboard/case_study.html`,
            "tags": [
              "AI dashboard: compared conversion and identified drop-offs",
              "Creators and content: screening, follow-up and 100+ content pieces",
              "Review: campaign registrations +50% vs prior week; first-topic rate ~15% higher relatively"
            ]
          }
        ]
      },
      {
        "id": "project-2",
        "no": "02",
        "title": "Customer Needs & Partnership Coordination",
        "tagline": "Needs Log · Partner Records · Project Progress · University Promotion",
        "items": [
          {
            "name": "Customer Needs & Partnership Coordination",
            "meta": "Zhizhi Xuanhua · Business Operations Intern",
            "slug": "ai-education-partnership",
            "link": `${import.meta.env.BASE_URL}projects/ai-education-partnership/case_study.html`,
            "tags": [
              "Customer records: categorized 100+ feedback items in a needs log",
              "Partnerships: clarified needs and roles; followed up on signing and handoff",
              "Promotion: 30+ articles and 10 suggestions; feature usage +30% during the period"
            ]
          }
        ]
      },
      {
        "id": "project-4",
        "no": "03",
        "title": "ZUS Coffee Launch Promotion & Channel Reviews",
        "tagline": "Consumer Scenarios · Product Messages · Social Content · Channels",
        "items": [
          {
            "name": "ZUS Coffee Launch Promotion & Channel Reviews",
            "meta": "Zuspresso · Overseas Social Media Operations Intern",
            "slug": "zus-everywhere",
            "link": `${import.meta.env.BASE_URL}projects/zus-everywhere/case_study.html`,
            "tags": [
              "Launch: researched preferences and supported 50 Instagram posts",
              "Channels: online launch and FamilyMart assets and schedules",
              "Review: 15+ reviews; contributed to 11k+ follower growth"
            ]
          }
        ]
      }
    ]
  }
}


export const WORKS_CONTENT = WORKS

export const SECTION_COVERS: Record<string, string> = {
  'project-1': `${import.meta.env.BASE_URL}works/covers/sohu-dashboard.png`,
  'project-2': `${import.meta.env.BASE_URL}works/covers/education-pilot.png`,
  'project-4': `${import.meta.env.BASE_URL}works/covers/zus-everywhere.jpg`,
}
