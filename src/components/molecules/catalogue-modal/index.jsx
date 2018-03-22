import React from 'react';
import PropTypes from 'prop-types';

const CatalogueModal = ({ cars }) => {
  return (
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
                <button className="btn accordion-header-btn" id="MGMGBHeading" data-toggle="collapse" data-target="#MGMGBcollapse" aria-expanded="true" aria-controls="MGMGBcollapse">
                  <h5 className="mb-0">
                    MGB
                          </h5>
                </button>
                <div id="MGMGBcollapse" className="collapse" aria-labelledby="MGMGBHeading" data-parent="#mg-classic-accordion">
                  <div className="card-body">
                    <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=37&PlateTypeID=1&ComponentID=54">Apparel &amp; Gifts</a><br />
                    <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=37&PlateTypeID=1&ComponentID=2">Body</a><br />
                    <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=37&PlateTypeID=1&ComponentID=4">Brakes</a><br />
                    <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=37&PlateTypeID=1&ComponentID=58">Car Care, Books, Tools &amp; Workshop</a><br />
                    <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=37&PlateTypeID=1&ComponentID=6">Clutch, Gearbox &amp; Drive Train</a><br />
                    <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=37&PlateTypeID=1&ComponentID=59">Cooling System</a><br />
                    <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=37&PlateTypeID=1&ComponentID=9">Electrical</a><br />
                    <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=37&PlateTypeID=1&ComponentID=8">Engine</a><br />
                    <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=37&PlateTypeID=1&ComponentID=10">Exhaust</a><br />
                    <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=37&PlateTypeID=1&ComponentID=11">Exterior</a><br />
                    <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=37&PlateTypeID=1&ComponentID=57">Fuel System, Induction &amp; Controls</a><br />
                    <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=37&PlateTypeID=1&ComponentID=56">Heating &amp; Ventilation</a><br />
                    <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=37&PlateTypeID=1&ComponentID=14">Interior</a><br />
                    <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=37&PlateTypeID=1&ComponentID=55">Performance &amp; Tuning</a><br />
                    <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=37&PlateTypeID=1&ComponentID=53">Road Wheels, Tyres &amp; Road Side Equipment</a><br />
                    <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=37&PlateTypeID=1&ComponentID=52">Steering &amp; Suspension</a><br />
                    <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=37&PlateTypeID=1&ComponentID=51">Weather Equipment</a>
                  </div>
                </div>
              </div>
              <div className="card">
                <button className="btn accordion-header-btn" id="MGMGAHeading" data-toggle="collapse" data-target="#MGMGACollapse" aria-expanded="false" aria-controls="MGMGACollapse">
                  <h5 className="mb-0">
                    MGA
                          </h5>
                </button>
                <div id="MGMGACollapse" className="collapse" aria-labelledby="MGMGAHeading" data-parent="#mg-classic-accordion">
                  <div className="card-body">
                    <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=46&PlateTypeID=1&ComponentID=54">Apparel &amp; Gifts</a><br />
                    <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=46&PlateTypeID=1&ComponentID=2">Body</a><br />
                    <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=46&PlateTypeID=1&ComponentID=4">Brakes</a><br />
                    <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=46&PlateTypeID=1&ComponentID=58">Car Care, Books, Tools &amp; Workshop</a><br />
                    <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=46&PlateTypeID=1&ComponentID=6">Clutch, Gearbox &amp; Drive Train</a><br />
                    <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=46&PlateTypeID=1&ComponentID=59">Cooling System</a><br />
                    <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=46&PlateTypeID=1&ComponentID=9">Electrical</a><br />
                    <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=46&PlateTypeID=1&ComponentID=8">Engine</a><br />
                    <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=46&PlateTypeID=1&ComponentID=10">Exhaust</a><br />
                    <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=46&PlateTypeID=1&ComponentID=11">Exterior</a><br />
                    <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=46&PlateTypeID=1&ComponentID=57">Fuel System, Induction &amp; Controls</a><br />
                    <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=46&PlateTypeID=1&ComponentID=56">Heating &amp; Ventilation</a><br />
                    <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=46&PlateTypeID=1&ComponentID=14">Interior</a><br />
                    <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=46&PlateTypeID=1&ComponentID=55">Performance &amp; Tuning</a><br />
                    <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=46&PlateTypeID=1&ComponentID=53">Road Wheels, Tyres &amp; Road Side Equipment</a><br />
                    <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=46&PlateTypeID=1&ComponentID=52">Steering &amp; Suspension</a><br />
                    <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=46&PlateTypeID=1&ComponentID=51">Weather Equipment</a>
                  </div>
                </div>
              </div>
              <div className="card">
                <button className="btn accordion-header-btn" id="MGMGTHeading" data-toggle="collapse" data-target="#MGMGTCollapse" aria-expanded="false" aria-controls="MGMGTCollapse">
                  <h5 className="mb-0">
                    MG T
                          </h5>
                </button>
                <div id="MGMGTCollapse" className="collapse" aria-labelledby="MGMGTHeading" data-parent="#mg-classic-accordion">
                  <div className="card-body">
                    <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=48&PlateTypeID=1&ComponentID=54">Apparel &amp; Gifts</a><br />
                    <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=48&PlateTypeID=1&ComponentID=2">Body</a><br />
                    <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=48&PlateTypeID=1&ComponentID=4">Brakes</a><br />
                    <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=48&PlateTypeID=1&ComponentID=58">Car Care, Books, Tools &amp; Workshop</a><br />
                    <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=48&PlateTypeID=1&ComponentID=6">Clutch, Gearbox &amp; Drive Train</a><br />
                    <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=48&PlateTypeID=1&ComponentID=59">Cooling System</a><br />
                    <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=48&PlateTypeID=1&ComponentID=9">Electrical</a><br />
                    <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=48&PlateTypeID=1&ComponentID=8">Engine</a><br />
                    <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=48&PlateTypeID=1&ComponentID=10">Exhaust</a><br />
                    <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=48&PlateTypeID=1&ComponentID=11">Exterior</a><br />
                    <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=48&PlateTypeID=1&ComponentID=57">Fuel System, Induction &amp; Controls</a><br />
                    <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=48&PlateTypeID=1&ComponentID=14">Interior</a><br />
                    <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=48&PlateTypeID=1&ComponentID=55">Performance &amp; Tuning</a><br />
                    <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=48&PlateTypeID=1&ComponentID=53">Road Wheels, Tyres &amp; Road Side Equipment</a><br />
                    <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=48&PlateTypeID=1&ComponentID=52">Steering &amp; Suspension</a><br />
                    <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=48&PlateTypeID=1&ComponentID=51">Weather Equipment</a>
                  </div>
                </div>
              </div>
              <div className="card">
                <button className="btn accordion-header-btn" id="MGSpriteEarlyHeading" data-toggle="collapse" data-target="#MGSpriteEarlyCollapse" aria-expanded="false" aria-controls="MGSpriteEarlyCollapse">
                  <h5 className="mb-0">
                    Sprite / Midget (early)
                          </h5>
                </button>
                <div id="MGSpriteEarlyCollapse" className="collapse" aria-labelledby="MGSpriteEarlyHeading" data-parent="#mg-classic-accordion">
                  <div className="card-body">
                    <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=38&PlateTypeID=1&ComponentID=54">Apparel &amp; Gifts</a><br />
                    <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=38&PlateTypeID=1&ComponentID=2">Body</a><br />
                    <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=38&PlateTypeID=1&ComponentID=42">Books &amp; CD Roms</a><br />
                    <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=38&PlateTypeID=1&ComponentID=4">Brakes</a><br />
                    <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=38&PlateTypeID=1&ComponentID=58">Car Care, Books, Tools &amp; Workshop</a><br />
                    <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=38&PlateTypeID=1&ComponentID=6">Clutch, Gearbox &amp; Drive Train</a><br />
                    <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=38&PlateTypeID=1&ComponentID=59">Cooling System</a><br />
                    <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=38&PlateTypeID=1&ComponentID=9">Electrical</a><br />
                    <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=38&PlateTypeID=1&ComponentID=8">Engine</a><br />
                    <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=38&PlateTypeID=1&ComponentID=10">Exhaust</a><br />
                    <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=38&PlateTypeID=1&ComponentID=11">Exterior</a><br />
                    <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=38&PlateTypeID=1&ComponentID=57">Fuel System, Induction &amp; Controls</a><br />
                    <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=38&PlateTypeID=1&ComponentID=56">Heating &amp; Ventilation</a><br />
                    <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=38&PlateTypeID=1&ComponentID=14">Interior</a><br />
                    <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=38&PlateTypeID=1&ComponentID=55">Performance &amp; Tuning</a><br />
                    <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=38&PlateTypeID=1&ComponentID=53">Road Wheels, Tyres &amp; Road Side Equipment</a><br />
                    <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=38&PlateTypeID=1&ComponentID=52">Steering &amp; Suspension</a><br />
                    <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=38&PlateTypeID=1&ComponentID=51">Weather Equipment</a>
                  </div>
                </div>
              </div>
              <div className="card">
                <button className="btn accordion-header-btn" id="MGSpriteLateHeading" data-toggle="collapse" data-target="#MGSpriteLateCollapse" aria-expanded="false" aria-controls="MGSpriteLateCollapse">
                  <h5 className="mb-0">
                    Sprite / Midget (late)
                          </h5>
                </button>
                <div id="MGSpriteLateCollapse" className="collapse" aria-labelledby="MGSpriteLateHeading" data-parent="#mg-classic-accordion">
                  <div className="card-body">
                    <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=39&PlateTypeID=1&ComponentID=54">Tools &amp; Equipment</a><br />
                    <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=39&PlateTypeID=1&ComponentID=2">Body</a><br />
                    <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=39&PlateTypeID=1&ComponentID=4">Brakes</a><br />
                    <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=39&PlateTypeID=1&ComponentID=58">Car Care, Books, Tools &amp; Workshop</a><br />
                    <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=39&PlateTypeID=1&ComponentID=6">Clutch, Gearbox &amp; Drive Train</a><br />
                    <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=39&PlateTypeID=1&ComponentID=59">Cooling System</a><br />
                    <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=39&PlateTypeID=1&ComponentID=9">Electrical</a><br />
                    <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=39&PlateTypeID=1&ComponentID=8">Engine</a><br />
                    <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=39&PlateTypeID=1&ComponentID=10">Exhaust</a><br />
                    <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=39&PlateTypeID=1&ComponentID=11">Exterior</a><br />
                    <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=39&PlateTypeID=1&ComponentID=57">Fuel System, Induction &amp; Controls</a><br />
                    <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=39&PlateTypeID=1&ComponentID=56">Heating &amp; Ventilation</a><br />
                    <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=39&PlateTypeID=1&ComponentID=14">Interior</a><br />
                    <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=39&PlateTypeID=1&ComponentID=55">Performance &amp; Tuning</a><br />
                    <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=39&PlateTypeID=1&ComponentID=53">Road Wheels, Tyres &amp; Road Side Equipment</a><br />
                    <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=39&PlateTypeID=1&ComponentID=52">Steering &amp; Suspension</a><br />
                    <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=39&PlateTypeID=1&ComponentID=51">Weather Equipment</a>
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
  );
};

CatalogueModal.propTypes = {

};

export default CatalogueModal;