/**
 * 0x400000 technical documentation navigation.
 * Keep curated links independent from NotionNext template Menu/SubMenu samples.
 */
const CATEGORY_LINKS = [
  { id: 'llvm', name: 'LLVM Backend', href: '/category/LLVM%20Backend', icon: 'fas fa-code-branch' },
  { id: 'gpu', name: 'GPU Compiler', href: '/category/GPU%20Compiler', icon: 'fas fa-microchip' },
  { id: 'analysis', name: 'Program Analysis', href: '/category/Program%20Analysis', icon: 'fas fa-diagram-project' },
  { id: 'systems', name: 'Systems', href: '/category/Systems', icon: 'fas fa-terminal' },
  { id: 'algorithms', name: '算法', href: '/category/%E7%AE%97%E6%B3%95%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84', icon: 'fas fa-sitemap' }
]

export function getClaudeMenuLinks() {
  return [
    { id: 'home', name: '首页', href: '/', icon: 'fas fa-house' },
    { id: 'articles', name: '全部文章', href: '/archive', icon: 'fas fa-book-open' },
    {
      id: 'topics',
      name: '技术栏目',
      icon: 'fas fa-layer-group',
      subMenus: CATEGORY_LINKS
    },
    { id: 'search', name: '搜索', href: '/search', icon: 'fas fa-magnifying-glass' },
    { id: 'about', name: '关于本站', href: '/about', icon: 'fas fa-circle-info' }
  ]
}
