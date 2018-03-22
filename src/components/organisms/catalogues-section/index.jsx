import React from 'react';
import PropTypes from 'prop-types';

import { CatalogueCard } from '~/components/molecules';

const CataloguesSection = props => {
  return (
    <div id="catalogues" className="main__brands justify-content-center mt-2">
      <div className="mt-5 mb-4">
        <h3 className="text-center"><strong>Parts Catalogues</strong></h3>
      </div>
      <div className="row justify-content-center pt-5 pb-5">

        <CatalogueCard
          title="Classic MG"
          imageUrl="assets/classic-mg-logo.jpg"
        />

        <CatalogueCard
          title="Modern MG"
          imageUrl="assets/mg-logo.jpg"
        />

        <CatalogueCard
          title="Rover"
          imageUrl="assets/rover-logo.jpg"
        />

        <CatalogueCard
          title="Triumph"
          imageUrl="assets/triumph-logo.jp"
        />

        <CatalogueCard
          title="Mini"
          imageUrl="assets/mini-logo.jpg"
        />

        <CatalogueCard
          title="Morris Minor"
          imageUrl="assets/morris-logo.jpg"
        />

      </div>
      <hr className="hr-half" />
      {/* Modals */}
      {/* MGClassicModal */}
      <div className="modal fade" id="MGClassicModal" tabIndex={-1} role="dialog" aria-labelledby="MGClassicModal" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Classic MG</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div id="mg-classic-accordion">
                <div className="card">
                  <div className="card-header" id="headingOne">
                    <h5 className="mb-0">
                      <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        MGB
                              </button>
                    </h5>
                  </div>
                  <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#mg-classic-accordion">
                    <div className="card-body">
                      <a href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=37&PlateTypeID=1&ComponentID=54">Apparel &amp; Gifts</a><br />
                      <a href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=37&PlateTypeID=1&ComponentID=2">Body</a><br />
                      <a href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=37&PlateTypeID=1&ComponentID=4">Brakes</a><br />
                      <a href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=37&PlateTypeID=1&ComponentID=58">Car Care, Books, Tools &amp; Workshop</a><br />
                      <a href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=37&PlateTypeID=1&ComponentID=6">Clutch, Gearbox &amp; Drive Train</a><br />
                      <a href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=37&PlateTypeID=1&ComponentID=59">Cooling System</a><br />
                      <a href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=37&PlateTypeID=1&ComponentID=9">Electrical</a><br />
                      <a href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=37&PlateTypeID=1&ComponentID=8">Engine</a><br />
                      <a href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=37&PlateTypeID=1&ComponentID=10">Exhaust</a><br />
                      <a href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=37&PlateTypeID=1&ComponentID=11">Exterior</a><br />
                      <a href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=37&PlateTypeID=1&ComponentID=57">Fuel System, Induction &amp; Controls</a><br />
                      <a href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=37&PlateTypeID=1&ComponentID=56">Heating &amp; Ventilation</a><br />
                      <a href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=37&PlateTypeID=1&ComponentID=14">Interior</a><br />
                      <a href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=37&PlateTypeID=1&ComponentID=55">Performance &amp; Tuning</a><br />
                      <a href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=37&PlateTypeID=1&ComponentID=53">Road Wheels, Tyres &amp; Road Side Equipment</a><br />
                      <a href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=37&PlateTypeID=1&ComponentID=52">Steering &amp; Suspension</a><br />
                      <a href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=37&PlateTypeID=1&ComponentID=51">Weather Equipment</a>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingTwo">
                    <h5 className="mb-0">
                      <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        MGA
                              </button>
                    </h5>
                  </div>
                  <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#mg-classic-accordion">
                    <div className="card-body">
                      <a href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=46&PlateTypeID=1&ComponentID=54">Apparel &amp; Gifts</a><br />
                      <a href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=46&PlateTypeID=1&ComponentID=2">Body</a><br />
                      <a href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=46&PlateTypeID=1&ComponentID=4">Brakes</a><br />
                      <a href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=46&PlateTypeID=1&ComponentID=58">Car Care, Books, Tools &amp; Workshop</a><br />
                      <a href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=46&PlateTypeID=1&ComponentID=6">Clutch, Gearbox &amp; Drive Train</a><br />
                      <a href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=46&PlateTypeID=1&ComponentID=59">Cooling System</a><br />
                      <a href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=46&PlateTypeID=1&ComponentID=9">Electrical</a><br />
                      <a href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=46&PlateTypeID=1&ComponentID=8">Engine</a><br />
                      <a href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=46&PlateTypeID=1&ComponentID=10">Exhaust</a><br />
                      <a href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=46&PlateTypeID=1&ComponentID=11">Exterior</a><br />
                      <a href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=46&PlateTypeID=1&ComponentID=57">Fuel System, Induction &amp; Controls</a><br />
                      <a href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=46&PlateTypeID=1&ComponentID=56">Heating &amp; Ventilation</a><br />
                      <a href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=46&PlateTypeID=1&ComponentID=14">Interior</a><br />
                      <a href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=46&PlateTypeID=1&ComponentID=55">Performance &amp; Tuning</a><br />
                      <a href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=46&PlateTypeID=1&ComponentID=53">Road Wheels, Tyres &amp; Road Side Equipment</a><br />
                      <a href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=46&PlateTypeID=1&ComponentID=52">Steering &amp; Suspension</a><br />
                      <a href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=46&PlateTypeID=1&ComponentID=51">Weather Equipment</a>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingThree">
                    <h5 className="mb-0">
                      <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        MG T
                              </button>
                    </h5>
                  </div>
                  <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#mg-classic-accordion">
                    <div className="card-body">
                      <a href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=48&PlateTypeID=1&ComponentID=54">Apparel &amp; Gifts</a><br />
                      <a href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=48&PlateTypeID=1&ComponentID=2">Body</a><br />
                      <a href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=48&PlateTypeID=1&ComponentID=4">Brakes</a><br />
                      <a href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=48&PlateTypeID=1&ComponentID=58">Car Care, Books, Tools &amp; Workshop</a><br />
                      <a href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=48&PlateTypeID=1&ComponentID=6">Clutch, Gearbox &amp; Drive Train</a><br />
                      <a href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=48&PlateTypeID=1&ComponentID=59">Cooling System</a><br />
                      <a href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=48&PlateTypeID=1&ComponentID=9">Electrical</a><br />
                      <a href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=48&PlateTypeID=1&ComponentID=8">Engine</a><br />
                      <a href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=48&PlateTypeID=1&ComponentID=10">Exhaust</a><br />
                      <a href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=48&PlateTypeID=1&ComponentID=11">Exterior</a><br />
                      <a href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=48&PlateTypeID=1&ComponentID=57">Fuel System, Induction &amp; Controls</a><br />
                      <a href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=48&PlateTypeID=1&ComponentID=14">Interior</a><br />
                      <a href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=48&PlateTypeID=1&ComponentID=55">Performance &amp; Tuning</a><br />
                      <a href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=48&PlateTypeID=1&ComponentID=53">Road Wheels, Tyres &amp; Road Side Equipment</a><br />
                      <a href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=48&PlateTypeID=1&ComponentID=52">Steering &amp; Suspension</a><br />
                      <a href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=48&PlateTypeID=1&ComponentID=51">Weather Equipment</a>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingFour">
                    <h5 className="mb-0">
                      <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        Sprite / Midget (early)
                              </button>
                    </h5>
                  </div>
                  <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#mg-classic-accordion">
                    <div className="card-body">
                      <a href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=38&PlateTypeID=1&ComponentID=54">Apparel &amp; Gifts</a><br />
                      <a href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=38&PlateTypeID=1&ComponentID=2">Body</a><br />
                      <a href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=38&PlateTypeID=1&ComponentID=42">Books &amp; CD Roms</a><br />
                      <a href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=38&PlateTypeID=1&ComponentID=4">Brakes</a><br />
                      <a href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=38&PlateTypeID=1&ComponentID=58">Car Care, Books, Tools &amp; Workshop</a><br />
                      <a href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=38&PlateTypeID=1&ComponentID=6">Clutch, Gearbox &amp; Drive Train</a><br />
                      <a href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=38&PlateTypeID=1&ComponentID=59">Cooling System</a><br />
                      <a href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=38&PlateTypeID=1&ComponentID=9">Electrical</a><br />
                      <a href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=38&PlateTypeID=1&ComponentID=8">Engine</a><br />
                      <a href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=38&PlateTypeID=1&ComponentID=10">Exhaust</a><br />
                      <a href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=38&PlateTypeID=1&ComponentID=11">Exterior</a><br />
                      <a href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=38&PlateTypeID=1&ComponentID=57">Fuel System, Induction &amp; Controls</a><br />
                      <a href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=38&PlateTypeID=1&ComponentID=56">Heating &amp; Ventilation</a><br />
                      <a href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=38&PlateTypeID=1&ComponentID=14">Interior</a><br />
                      <a href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=38&PlateTypeID=1&ComponentID=55">Performance &amp; Tuning</a><br />
                      <a href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=38&PlateTypeID=1&ComponentID=53">Road Wheels, Tyres &amp; Road Side Equipment</a><br />
                      <a href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=38&PlateTypeID=1&ComponentID=52">Steering &amp; Suspension</a><br />
                      <a href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=38&PlateTypeID=1&ComponentID=51">Weather Equipment</a>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingFive">
                    <h5 className="mb-0">
                      <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        Sprite / Midget (late)
                              </button>
                    </h5>
                  </div>
                  <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#mg-classic-accordion">
                    <div className="card-body">
                      <a href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=39&PlateTypeID=1&ComponentID=54">Tools &amp; Equipment</a><br />
                      <a href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=39&PlateTypeID=1&ComponentID=2">Body</a><br />
                      <a href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=39&PlateTypeID=1&ComponentID=4">Brakes</a><br />
                      <a href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=39&PlateTypeID=1&ComponentID=58">Car Care, Books, Tools &amp; Workshop</a><br />
                      <a href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=39&PlateTypeID=1&ComponentID=6">Clutch, Gearbox &amp; Drive Train</a><br />
                      <a href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=39&PlateTypeID=1&ComponentID=59">Cooling System</a><br />
                      <a href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=39&PlateTypeID=1&ComponentID=9">Electrical</a><br />
                      <a href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=39&PlateTypeID=1&ComponentID=8">Engine</a><br />
                      <a href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=39&PlateTypeID=1&ComponentID=10">Exhaust</a><br />
                      <a href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=39&PlateTypeID=1&ComponentID=11">Exterior</a><br />
                      <a href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=39&PlateTypeID=1&ComponentID=57">Fuel System, Induction &amp; Controls</a><br />
                      <a href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=39&PlateTypeID=1&ComponentID=56">Heating &amp; Ventilation</a><br />
                      <a href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=39&PlateTypeID=1&ComponentID=14">Interior</a><br />
                      <a href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=39&PlateTypeID=1&ComponentID=55">Performance &amp; Tuning</a><br />
                      <a href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=39&PlateTypeID=1&ComponentID=53">Road Wheels, Tyres &amp; Road Side Equipment</a><br />
                      <a href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=39&PlateTypeID=1&ComponentID=52">Steering &amp; Suspension</a><br />
                      <a href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=39&PlateTypeID=1&ComponentID=51">Weather Equipment</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
      {/* /Modals */}
    </div>
  );
};

CataloguesSection.propTypes = {

};

export default CataloguesSection;