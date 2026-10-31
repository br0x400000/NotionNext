import SmartLink from '@/components/SmartLink'

const TOPICS = [
  {
    title: 'LLVM Backend',
    path: '/category/LLVM%20Backend',
    subtitle: '跟着 LLVM 源码慢慢走',
    description: '从 SelectionDAG、指令选择到寄存器分配，记录那些想明白之后很开心的细节。',
    icon: '🧩',
    index: '01'
  },
  {
    title: 'GPU Compiler',
    path: '/category/GPU%20Compiler',
    subtitle: '和 GPU 打交道',
    description: 'OpenCL、MLIR、Triton，以及性能、调度和浮点数带来的各种小挑战。',
    icon: '⚡',
    index: '02'
  },
  {
    title: 'Program Analysis',
    path: '/category/Program%20Analysis',
    subtitle: '追着 Bug 找答案',
    description: '符号执行、动态分析、Sanitizer，偶尔把程序里藏起来的问题揪出来。',
    icon: '🔍',
    index: '03'
  },
  {
    title: 'Systems',
    path: '/category/Systems',
    subtitle: '一些系统里的事',
    description: 'C++、Rust、Linux 和性能工程。好用的工具与踩过的坑也都值得记下。',
    icon: '🌿',
    index: '04'
  }
]

export default function DocsHome({ posts = [] }) {
  const recentPosts = posts.slice(0, 6)

  return (
    <main className='mx-auto w-full max-w-[880px] pb-16'>
      <section
        className='relative overflow-hidden rounded-3xl border px-6 py-9 sm:px-10 sm:py-12 mb-12'
        style={{
          borderColor: 'var(--claude-border)',
          backgroundColor: 'var(--claude-bg-secondary)',
          backgroundImage: 'radial-gradient(circle at 92% 8%, rgba(218,119,86,.13), transparent 48%)'
        }}
      >
        <div className='relative z-10'>
          <div
            className='inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium mb-7'
            style={{
              borderColor: 'var(--claude-border)',
              color: 'var(--claude-accent)',
              backgroundColor: 'var(--claude-bg)'
            }}
          >
            <span aria-hidden='true'>🌱</span> 0x400000 · 一点代码，一点生活
          </div>

          <h1
            className='text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight tracking-tight mb-6'
            style={{ color: 'var(--claude-text-primary)' }}
          >
            嗨，欢迎来坐坐 <span aria-hidden='true'>👋</span>
          </h1>
          <div className='max-w-[650px] space-y-3 text-[15px] sm:text-base leading-8' style={{ color: 'var(--claude-text-secondary)' }}>
            <p>
              这里是 0x400000，一个慢慢积攒技术笔记的小站。
            </p>
            <p>
              平时主要和 LLVM 后端、GPU 编译器打交道，也曾研究过程序分析、
              Sanitizer、区块链和分布式系统。喜欢在源码里翻来翻去，
              顺着问题一点点寻找答案。这里会记下读源码的心得、实践中踩过的坑，
              还有那些偶尔冒出来的「原来如此」。
            </p>
            <p>
              代码之外，也是一个干饭人 <span aria-label='米饭'>🍚</span>
            </p>
          </div>

          <div className='flex flex-wrap gap-3 mt-8'>
            <SmartLink
              href='/archive'
              className='inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-white no-underline transition-opacity hover:opacity-90'
              style={{ backgroundColor: 'var(--claude-accent)' }}
            >
              随便翻翻文章 <span aria-hidden='true'>→</span>
            </SmartLink>
            <SmartLink
              href='/about'
              className='inline-flex items-center gap-2 rounded-xl border px-5 py-3 text-sm font-medium no-underline transition-colors hover:opacity-80'
              style={{
                borderColor: 'var(--claude-border)',
                color: 'var(--claude-text-primary)',
                backgroundColor: 'var(--claude-bg)'
              }}
            >
              认识一下我
            </SmartLink>
          </div>
        </div>
      </section>

      <section className='mb-14' aria-labelledby='compiler-topics'>
        <div className='mb-6'>
          <div className='text-xs tracking-widest font-medium mb-2' style={{ color: 'var(--claude-accent)' }}>
            WHAT I WRITE
          </div>
          <h2 id='compiler-topics' className='text-2xl font-semibold mb-2' style={{ color: 'var(--claude-text-primary)' }}>
            平时都在折腾些什么？
          </h2>
          <p className='text-sm leading-7' style={{ color: 'var(--claude-text-secondary)' }}>
            大多围着编译器和系统软件转。挑个感兴趣的方向，慢慢逛就好。
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          {TOPICS.map(topic => (
            <SmartLink
              key={topic.title}
              href={topic.path}
              className='group block rounded-2xl border p-5 sm:p-6 no-underline transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md'
              style={{
                borderColor: 'var(--claude-border)',
                backgroundColor: 'var(--claude-bg)'
              }}
            >
              <div className='flex items-center justify-between mb-5'>
                <span
                  className='inline-flex h-10 w-10 items-center justify-center rounded-xl text-xl'
                  style={{ backgroundColor: 'var(--claude-bg-secondary)' }}
                  aria-hidden='true'
                >
                  {topic.icon}
                </span>
                <span className='font-mono text-xs' style={{ color: 'var(--claude-text-tertiary)' }}>
                  {topic.index}
                </span>
              </div>
              <h3 className='text-[17px] font-semibold' style={{ color: 'var(--claude-text-primary)' }}>
                {topic.title} <span aria-hidden='true' style={{ color: 'var(--claude-accent)' }}>↗</span>
              </h3>
              <p className='text-xs mt-1 mb-3 font-medium' style={{ color: 'var(--claude-accent)' }}>
                {topic.subtitle}
              </p>
              <p className='text-sm leading-7' style={{ color: 'var(--claude-text-secondary)' }}>
                {topic.description}
              </p>
            </SmartLink>
          ))}
        </div>
      </section>

      <section aria-labelledby='recent-articles'>
        <div className='flex flex-wrap items-end justify-between gap-3 mb-5'>
          <div>
            <div className='text-xs tracking-widest font-medium mb-2' style={{ color: 'var(--claude-accent)' }}>
              RECENT NOTES
            </div>
            <h2 id='recent-articles' className='text-2xl font-semibold' style={{ color: 'var(--claude-text-primary)' }}>
              最近写了点什么
            </h2>
          </div>
          <SmartLink href='/archive' className='text-sm font-medium hover:underline' style={{ color: 'var(--claude-accent)' }}>
            所有文章 →
          </SmartLink>
        </div>

        {recentPosts.length > 0 ? (
          <div className='border-t' style={{ borderColor: 'var(--claude-border)' }}>
            {recentPosts.map(post => (
              <SmartLink
                key={post.id || post.slug}
                href={post.href || ['/article', post.slug || post.id].join('/')}
                className='group block border-b py-5 no-underline'
                style={{ borderColor: 'var(--claude-border)' }}
              >
                <div className='text-base font-medium group-hover:underline' style={{ color: 'var(--claude-text-primary)' }}>
                  {post.title}
                </div>
                {post.summary && (
                  <p className='mt-1.5 text-sm leading-7' style={{ color: 'var(--claude-text-secondary)' }}>
                    {post.summary}
                  </p>
                )}
              </SmartLink>
            ))}
          </div>
        ) : (
          <p className='rounded-2xl border p-6 text-sm leading-7'
             style={{
               borderColor: 'var(--claude-border)',
               backgroundColor: 'var(--claude-bg-secondary)',
               color: 'var(--claude-text-secondary)'
             }}>
            小站正在慢慢添砖加瓦，先从上面的专题逛起吧。☕
          </p>
        )}
      </section>

      <p className='mt-12 pt-7 border-t text-sm leading-7'
         style={{ borderColor: 'var(--claude-border)', color: 'var(--claude-text-tertiary)' }}>
        写给以后可能忘记这些细节的自己，也分享给刚好路过的你。🌿
      </p>
    </main>
  )
}
