import SmartLink from '@/components/SmartLink'
import { siteConfig } from '@/lib/config'
import { MenuList } from './MenuList'

/** Documentation-oriented sidebar, shared by desktop and mobile layouts. */
export default function NavBar(props) {
  const description = siteConfig('BIO') || 'LLVM · GPU · Program Analysis · Systems'

  return (
    <div className='flex flex-col'>
      <SmartLink href='/' className='block no-underline'>
        <div className='text-xs font-semibold tracking-[0.18em] uppercase mb-2' style={{ color: 'var(--claude-accent)' }}>
          Compiler engineering
        </div>
        <div className='text-2xl font-semibold tracking-tight leading-tight' style={{ color: 'var(--claude-text-primary)' }}>
          0x400000
        </div>
        <div className='mt-1 text-sm font-medium' style={{ color: 'var(--claude-text-secondary)' }}>
          Compiler Notes
        </div>
      </SmartLink>

      <div className='mt-5 pb-5 text-xs leading-relaxed border-b' style={{ color: 'var(--claude-text-secondary)', borderColor: 'var(--claude-border)' }}>
        {description}
      </div>

      <nav aria-label='站点导航' className='mt-6'>
        <div className='mb-3 px-2 text-[11px] uppercase tracking-widest font-semibold' style={{ color: 'var(--claude-text-tertiary)' }}>
          Explore
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
          <i className='fab fa-github' aria-hidden='true' />
          GitHub
        </SmartLink>
      </div>
    </div>
  )
}
