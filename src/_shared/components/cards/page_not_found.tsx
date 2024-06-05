import page_not_found from '../../assets/page_not_found.svg'
import { GenericButton } from '../..'
import { GoCheckCircleFill } from 'react-icons/go'

function PageNotFound() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="px-3 py-5">
        <p className="text-4xl text-center sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-background-primary py-8">
          Loco
        </p>
        <div className="flex flex-col gap-3 items-center justify-center">
          <img src={page_not_found} alt={'page not found'} />
          <div>Oops, Page not found</div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div>
                <GoCheckCircleFill />
              </div>
              <div>The URL is mistyped or contains a typographical error.</div>
            </div>
            <div className="flex items-center gap-2">
              <div>
                <GoCheckCircleFill />
              </div>
              <p>The webpage or resource has been moved or deleted. </p>
            </div>
            <div className="flex items-center gap-2">
              <div>
                <GoCheckCircleFill />
              </div>
              <div>The server is temporarily or permanently down. </div>
            </div>
            <div className="flex items-center gap-2">
              <div>
                <GoCheckCircleFill />
              </div>
              <p>The server is misconfigured. </p>
            </div>
          </div>
          <GenericButton
            title="Back To Homepage"
            sx={{ width: '100%' }}
            size="large"
          />
        </div>
      </div>
    </div>
    // <div>adfadsf</div>
  )
}

export default PageNotFound
