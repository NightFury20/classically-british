import React from 'react';

import {
  HeaderSection,
  WriteupSection,
} from '~/components/molecules';

import {
  CataloguesSection,
} from '~/components/organisms';

const OriginalContent = () => (
  <div>
    <HeaderSection />
    <div className="container-fluid">
      <WriteupSection />
      <CataloguesSection />
    </div>
    {/* Optional JavaScript */}
    {/* jQuery first, then Popper.js, then Bootstrap JS */}
    {/* Font Awesome icons */}
  </div>
);

export default OriginalContent;