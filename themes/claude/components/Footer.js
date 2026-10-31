import { siteConfig } from '@/lib/config'
import AnalyticsBusuanzi from '@/components/AnalyticsBusuanzi'
import DarkModeButton from './DarkModeButton'
import CONFIG from '../config'

export default function Footer() {
  const year = new Date().getFullYear()
  const since = siteConfig('SINCE')
  const customCopyright = siteConfig('CLAUDE_FOOTER_COPYRIGHT', '', CONFIG)
  const copyrightDate = parseInt(since, 10) < year ? since + '-' + year : year

  return (
    <footer className='claude-footer'>
      <DarkModeButton className='mb-3' />
      <div className='mb-2'>技术认真写，饭也认真吃 <span aria-hidden='true'>🍚</span></div>
      <div>
        {customCopyright || `© ${copyrightDate} ${siteConfig('AUTHOR')}`}
      </div>
      <div className='mt-2 flex justify-center'><AnalyticsBusuanzi /></div>
    </footer>
  )
}
