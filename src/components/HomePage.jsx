import React from 'react';
import ProjectCard from '../components/ProjectCard';
import QuoteProfile from './Quote';
import atomicLoansThumbnail from '../assets/atomic-loans/2024_Atomic_Finance_Thumbnail.png';
import chimneyThumbnail from '../assets/chimney/2024_Chimney_Thumbnail.png';
import shopPayThumbnail from '../assets/shop-pay/2024_Shop_Pay_Thumbnail.png';
import shopifyBulkEditorThumbnail from '../assets/shopify-bulk-editor/2024_BE_Shopify_thumbnail.png';
import sonicThumbnail from '../assets/sonic/2024_Web_Performance_Thumbnail.png';

import BoldText from './BoldText';
import GradientText from './GradientText';

import dt from '../assets/quotes/dt.png';
import rs from '../assets/quotes/rs.png';
import cm from '../assets/quotes/cm.png';

import DTQuote from './DTQuote';
import RSQuote from './RSQuote';
import CMQuote from './CMQuote';
import Footer from './Footer';

const HomePage = () => {
  return (
    <React.Fragment>
      <div className="flow-root">
        {/* <div className="text-3xl mt-14">
              Product designer & Developer
            </div> */}
        {/* 30px */}
        <div className="font-bold text-3xl mt-16">VIVIAN LAM</div>

        {/* 20px */}
        <div
          className="text-[#C6C6C6] text-l mt-4"
          style={{ maxWidth: '745px' }}
        >
          <div>
            Data-driven product designer who loves to{' '}
            <BoldText t="collaborate" /> with others.
          </div>

          <br></br>
          <div>
            Previously at <BoldText t="Shopify." /> Also experienced in startup
            environments, working in <BoldText t="cryptocurrency" /> and{' '}
            <BoldText t="real-estate" /> sectors at <BoldText t="Chimney.ai" />{' '}
            and <BoldText t="Atomic.Finance." />
          </div>
          <br></br>
          <div>
            In the past, I've worked as a developer at <BoldText t="Shopify," />{' '}
            <BoldText t="Motion Metrics," /> and{' '}
            <BoldText t="IA Financial Group." />
          </div>
        </div>

        <div className="font-bold text-2xl mt-16">WORK</div>
        {/* <div className="grid my-20 grid-flow-col gap-y-24 gap-x-24 grid-cols-1 grid-rows-4 xl:grid-cols-2 xl:grid-rows-2"> */}

        <div
          className="grid
                          mt-5
                          xl:grid-cols-3 gap-x-8 gap-y-2
                          md:grid-cols-2 gap-8"
        >
          <div>
            <ProjectCard
              projectImg={shopifyBulkEditorThumbnail}
              projectLink="https://gbvivian.medium.com/shopify-bulk-editor-errors-b9ad53774877"
            />
          </div>
          <div>
            <ProjectCard
              projectImg={chimneyThumbnail}
              projectLink="https://gbvivian.medium.com/chimney-ai-ca7449437469"
            />
          </div>
          <div>
            <ProjectCard
              projectImg={sonicThumbnail}
              projectLink="https://medium.com/@gbvivian/shopify-web-performance-report-978145c86e2b"
            />
          </div>

          <div>
            <ProjectCard
              projectImg={shopPayThumbnail}
              projectLink="https://gbvivian.medium.com/shop-pay-ad1f6e2a9acd"
            />
          </div>

          <div>
            <ProjectCard
              projectImg={atomicLoansThumbnail}
              projectLink="https://gbvivian.medium.com/atomic-finance-landing-page-69faa146d129"
            />
          </div>
        </div>

        {/* QUOTES */}
        <div className="font-bold text-2xl mt-16">OTHERS HAVE SAID</div>

        <div
          className="grid
                          mt-5
                          xl:grid-cols-3 gap-x-8 gap-y-2
                          md:grid-cols-1 gap-y-5"
        >
          {/* QUOTE 1 */}
          {/* grey background, border radius 30px, padding 32px */}
          <div className="bg-neutral-950 rounded-3xl p-8">
            <div>
              <QuoteProfile
                quoteImg={dt}
                name={'Dan Tristan'}
                title={'Staff Product Designer, Shopify'}
              />
            </div>

            <div className="mt-6">
              <DTQuote />
            </div>
          </div>

          {/* QUOTE 2 */}
          {/* grey background, border radius 30px, padding 32px */}
          <div className="bg-[#0C0C0C] rounded-3xl p-8">
            <div>
              <QuoteProfile
                quoteImg={rs}
                name={'Rafael Schulman'}
                title={'Senior Data Scientist, Shopify'}
              />
            </div>
            <div className="mt-6">
              <RSQuote />
            </div>
          </div>

          {/* QUOTE 3 */}
          {/* grey background, border radius 30px, padding 32px */}
          <div className="bg-[#0C0C0C] rounded-3xl p-8">
            <div>
              <QuoteProfile
                quoteImg={cm}
                name={'Chris Muratis'}
                title={'UX Manager, Shopify'}
              />
            </div>

            <CMQuote />
          </div>
        </div>
      </div>

      <div className="mt-24"></div>

      {/* FOOTER*/}
      <div className="mt-22">
        <Footer></Footer>
      </div>
      <div className="text-[#6A6A6A] mt-8">Copyright © 2024 Vivian Lam</div>
      <div className="mt-12"></div>
      <br />
    </React.Fragment>
  );
};

export default HomePage;
