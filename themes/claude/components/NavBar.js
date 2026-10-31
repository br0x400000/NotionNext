import SmartLink from '@/components/SmartLink'
import { siteConfig } from '@/lib/config'
import { MenuList } from './MenuList'

/** Friendly, compact personal sidebar with documentation navigation. */
export default function NavBar(props) {
  const bio = siteConfig('BIO') ||
    '日常和 LLVM / GPU 编译器打交道，也喜欢折腾些新东西。代码之外，也是一个干饭人 🍚'

  return (
    <div className='flex flex-col'>
      <SmartLink href='/' className='block no-underline'>
        <div className='mb-2 flex items-center gap-2 text-xs font-medium tracking-wide' style={{ color: 'var(--claude-accent)' }}>
          <span aria-hidden='true'>🌱</span> 一点代码，一点生活
        </div>
        <div className='text-2xl font-semibold leading-tight tracking-tight' style={{ color: 'var(--claude-text-primary)' }}>
          0x400000
        </div>
        <div className='mt-1 text-sm' style={{ color: 'var(--claude-text-secondary)' }}>
          Compiler Notes
        </div>
      </SmartLink>

      <div className='mt-6 rounded-2xl border p-4'
           style={{ borderColor: 'var(--claude-border)', backgroundColor: 'var(--claude-bg-secondary)' }}>
        <div className='text-sm font-semibold mb-2' style={{ color: 'var(--claude-text-primary)' }}>
          你好呀，我是 Mira <span aria-hidden='true'>👋</span>
        </div>
        <p className='text-[13px] leading-6' style={{ color: 'var(--claude-text-secondary)' }}>
          {bio}
        </p>
      </div>

      <nav aria-label='站点导航' className='mt-7'>
        <div className='mb-3 px-2 text-xs font-medium' style={{ color: 'var(--claude-text-tertiary)' }}>
          在这里逛逛
        </div>
        <MenuList {...props} />
      </nav>

      <div className='mt-8 pt-5 border-t' style={{ borderColor: 'var(--claude-border)' }}>
        <SmartLink
          href='https://github.com/br0x400000'
          target='_blank'
          rel='noopener noreferrer'
          className='text-xs inline-flex items-center gap-2 hover:underline'
        >
          <i className='fab fa-github' aria-hidden='true' /> GitHub · 代码都在这儿
        </SmartLink>
      </div>
    </div>
  )
}
