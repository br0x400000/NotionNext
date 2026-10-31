import SmartLink from '@/components/SmartLink'
import { siteConfig } from '@/lib/config'
import { MenuList } from './MenuList'

/** Friendly, compact personal sidebar with documentation navigation. */
export default function NavBar(props) {
  const authorName = (siteConfig('AUTHOR') || 'Mira').split('/')[0].trim()

  return (
    <div className='flex flex-col'>
      <SmartLink href='/' className='block no-underline'>
        <div className='text-2xl font-semibold leading-tight tracking-tight' style={{ color: 'var(--claude-text-primary)' }}>
          0x400000
        </div>
        <div className='mt-1 text-sm' style={{ color: 'var(--claude-text-secondary)' }}>
          Compiler Notes
        </div>
      </SmartLink>

      <div className='mt-5 rounded-xl border px-4 py-3'
           style={{ borderColor: 'var(--claude-border)', backgroundColor: 'var(--claude-bg-secondary)' }}>
        <div className='text-sm font-semibold' style={{ color: 'var(--claude-text-primary)' }}>
          {authorName}
        </div>
        <p className='mt-1 text-xs leading-5' style={{ color: 'var(--claude-text-secondary)' }}>
          LLVM / GPU Compiler Engineer
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
