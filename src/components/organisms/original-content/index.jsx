import React from 'react';

import { HeaderJumbotron, WriteupSection } from '~/components/molecules';
import { CataloguesSection } from '~/components/organisms';

const OriginalContent = () => (
  <div data-spy="scroll" data-target="#navbar-example2" data-offset={0}>
    <HeaderJumbotron />
    <div className="container-fluid">
      <div className="main container">
        <WriteupSection />
        <CataloguesSection />
      </div>
    </div>
  </div>
);

export default OriginalContent;