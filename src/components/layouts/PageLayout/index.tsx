import * as React from 'react';

import { getBaseLayoutComponent } from '../../../utils/base-layout';
import { getComponent } from '../../components-registry';
import BlankBaseLayout from '../BlankBaseLayout';

export default function PageLayout(props) {
    const { page, site } = props;
    const BaseLayout = getBaseLayoutComponent(page.baseLayout, site.baseLayout);
    const { enableAnnotations = true } = site;
    const { title, sections = [] } = page;
    const isDy = title === 'DY';
const isLandingPage = title === 'Careers';

    console.log('title',title);

    if(isDy){
        return (
          <BlankBaseLayout page={page} site={site}>
            <iframe src="https://html-engine-dev1.dynamicyield.com/ap/M4XgHA7GCcYCwGYDcBjEBGADBBYBs6SALhtrnpkA/Untitled-landing-pages" style={{ width: '100vw', height: '100vh', border: 'none' }} />
          </BlankBaseLayout>
);
    }

       if(isLandingPage){
        return (
          <BlankBaseLayout page={page} site={site}>
            <iframe src="https://html-engine-dev1.dynamicyield.com/ap/M4XgHA7GCcYCwGYDcBjEBGADBBYBs6SALhtrnpkA/Untitled-landing-pages" style={{ width: '100vw', height: '100vh', border: 'none' }} />
          </BlankBaseLayout>
);
    }
    
    return (
        <BaseLayout page={page} site={site}>
            <main id="main" className="sb-layout sb-page-layout">
                {title && (
                    <h1 className="sr-only" {...(enableAnnotations && { 'data-sb-field-path': 'title' })}>
                        {title}
                    </h1>
                )}
                {sections.length > 0 && (
                    <div {...(enableAnnotations && { 'data-sb-field-path': 'sections' })}>
                        {sections.map((section, index) => {
                            const Component = getComponent(section.__metadata.modelName);
                            if (!Component) {
                                throw new Error(`no component matching the page section's model name: ${section.__metadata.modelName}`);
                            }
                            return (
                                <Component
                                    key={index}
                                    {...section}
                                    enableAnnotations={enableAnnotations}
                                    {...(enableAnnotations && { 'data-sb-field-path': `sections.${index}` })}
                                />
                            );
                        })}
                    </div>
                )}
            </main>
        </BaseLayout>
    );
}
