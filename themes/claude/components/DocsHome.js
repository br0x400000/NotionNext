import SmartLink from '@/components/SmartLink'
import { siteConfig } from '@/lib/config'

const TOPICS = [
  {
    title: 'LLVM Backend',
    path: '/category/LLVM%20Backend',
    number: '01',
    description: 'SelectionDAG、指令选择、MachineScheduler、RegAllocGreedy 与代码生成。',
    icon: 'fas fa-code-branch'
  },
  {
    title: 'GPU Compiler',
    path: '/category/GPU%20Compiler',
    number: '02',
    description: 'OpenCL、GPU 执行模型、MLIR、Triton 与浮点数值语义。',
    icon: 'fas fa-microchip'
  },
  {
    title: 'Program Analysis',
    path: '/category/Program%20Analysis',
    number: '03',
    description: '符号执行、动态插桩、Sanitizer 与并发程序分析。',
    icon: 'fas fa-diagram-project'
  },
  {
    title: 'Systems',
    path: '/category/Systems',
    number: '04',
    description: 'C++、Rust、Linux、构建工具和性能工程。',
    icon: 'fas fa-terminal'
  }
]

export default function DocsHome({ posts = [] }) {
  const recentPosts = posts.slice(0, 6)

  return (
    <main className='w-full mx-auto max-w-[880px] pb-16'>
      <div className='mb-10 pb-9 border-b' style={{ borderColor: 'var(--claude-border)' }}>
        <p className='text-xs tracking-[0.18em] uppercase font-semibold mb-5' style={{ color: 'var(--claude-accent)' }}>
          Notes / Research / Engineering
        </p>
        <h1 className='text-3xl md:text-5xl font-semibold tracking-tight leading-tight mb-5' style={{ color: 'var(--claude-text-primary)' }}>
          {siteConfig('TITLE') || '0x400000 · Compiler Notes'}
        </h1>
        <p className='text-base md:text-lg leading-8 max-w-2xl' style={{ color: 'var(--claude-text-secondary)' }}>
          记录 LLVM 后端、GPU 编译器、程序分析和系统软件的技术理解与可复现实验。
          从源码到机器指令，从问题到工程实践。
        </p>
        <div className='flex gap-3 flex-wrap mt-7'>
          <SmartLink href='/archive' className='inline-flex items-center gap-2 px-4 py-2.5 rounded-md text-sm font-medium text-white' style={{ backgroundColor: 'var(--claude-accent)' }}>
            阅读文章 <span aria-hidden='true'>→</span>
          </SmartLink>
          <SmartLink href='/about' className='inline-flex items-center px-4 py-2.5 rounded-md text-sm border font-medium' style={{ borderColor: 'var(--claude-border)', color: 'var(--claude-text-primary)' }}>
            关于本站
          </SmartLink>
        </div>
      </div>

      <section className='mb-12' aria-labelledby='compiler-topics'>
        <div className='flex items-baseline justify-between gap-4 mb-5'>
          <h2 id='compiler-topics' className='text-xl md:text-2xl font-semibold' style={{ color: 'var(--claude-text-primary)' }}>
            技术栏目
          </h2>
          <span className='text-xs tracking-wide' style={{ color: 'var(--claude-text-tertiary)' }}>TOPICS</span>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          {TOPICS.map(topic => (
            <SmartLink key={topic.title} href={topic.path} className='group block rounded-lg border p-5 no-underline transition-colors hover:border-orange-300' style={{ borderColor: 'var(--claude-border)', backgroundColor: 'var(--claude-bg-secondary)' }}>
              <div className='flex justify-between items-center mb-5'>
                <i className={`${topic.icon} text-lg`} style={{ color: 'var(--claude-accent)' }} aria-hidden='true' />
                <span className='text-xs font-mono' style={{ color: 'var(--claude-text-tertiary)' }}>{topic.number}</span>
              </div>
              <h3 className='text-base font-semibold mb-2' style={{ color: 'var(--claude-text-primary)' }}>
                {topic.title} <span aria-hidden='true'>↗</span>
              </h3>
              <p className='text-sm leading-6' style={{ color: 'var(--claude-text-secondary)' }}>{topic.description}</p>
            </SmartLink>
          ))}
        </div>
      </section>

      <section aria-labelledby='recent-articles'>
        <div className='flex justify-between items-center mb-4'>
          <h2 id='recent-articles' className='text-xl md:text-2xl font-semibold' style={{ color: 'var(--claude-text-primary)' }}>
            最近更新
          </h2>
          <SmartLink href='/archive' className='text-sm hover:underline' style={{ color: 'var(--claude-accent)' }}>
            查看全部 →
          </SmartLink>
        </div>
        {recentPosts.length ? (
          <div className='border-t' style={{ borderColor: 'var(--claude-border)' }}>
            {recentPosts.map(post => (
              <SmartLink key={post.id || post.slug} href={post.href || `/article/${post.slug || post.id}`} className='block py-4 border-b no-underline' style={{ borderColor: 'var(--claude-border)' }}>
                <div className='text-base font-medium hover:underline' style={{ color: 'var(--claude-text-primary)' }}>{post.title}</div>
                {post.summary && <p className='mt-1 text-sm leading-6' style={{ color: 'var(--claude-text-secondary)' }}>{post.summary}</p>}
              </SmartLink>
            ))}
          </div>
        ) : (
          <p className='text-sm py-5' style={{ color: 'var(--claude-text-secondary)' }}>
            内容持续更新，先从上方技术栏目开始阅读。
          </p>
        )}
      </section>
    </main>
  )
}
