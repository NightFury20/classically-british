import React from 'react';
import PropTypes from 'prop-types';

const OldModals = props => {
  return (
    <div>
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
      {/* MGModernModal */}
      <div className="modal fade" id="MGModernModal" tabIndex={-1} role="dialog" aria-labelledby="MGModernModal" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modern MG</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div id="mg-modern-accordion">
                <div className="card">
                  <button className="btn accordion-header-btn" id="MGMGFTFHeading" data-toggle="collapse" data-target="#MGMGTFTCollapse" aria-expanded="true" aria-controls="MGMGTFTCollapse">
                    <h5 className="mb-0">
                      MGF/TF
                            </h5>
                  </button>
                  <div id="MGMGTFTCollapse" className="collapse" aria-labelledby="MGMGFTFHeading" data-parent="#mg-modern-accordion">
                    <div className="card-body">
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--MGF-MG-TF-Accessories--m-2633">Accessories</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--MGF-MG-TF-Fuel-System--m-2685">Fuel System</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--MGF-MG-TF-Auto-Glass-Mirrors--m-2688">Auto Glass &amp; Mirrors</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--MGF-MG-TF-In-Car-Entertainment--m-2667">In-Car Entertainment</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--MGF-MG-TF-Auto-Paint--m-2634">Auto Paint</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--MGF-MG-TF-Instruments--m-2668">Instruments</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--MGF-MG-TF-Battery--m-2662">Battery</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--MGF-MG-TF-Interior-Trim--m-2675">Interior Trim</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--MGF-MG-TF-Bodywork--m-2639">Bodywork</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--MGF-MG-TF-Light-Lenses--m-2669">Light &amp; Lenses</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--MGF-MG-TF-Brakes--m-1960">Brakes</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--MGF-MG-TF-Rear-Suspension--m-2637">Rear Suspension</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--MGF-MG-TF-Gear--m-13361">Clothing and Regalia</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--MGF-MG-TF-Seat-Seat-Belts--m-2690">Seat &amp; Seat Belts</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--MGF-MG-TF-Clutch--m-2682">Clutch</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--MGF-MG-TF-Service-Parts--m-12731">Service Parts</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--MGF-MG-TF-Cooling-Heating--m-1961">Cooling &amp; Heating</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--MGF-MG-TF-Steering--m-1969">Steering</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--MGF-MG-TF-Electrical--m-2666">Electrical</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--MGF-MG-TF-Transmission-Auto-1800-VVC--m-2694">Transmission Auto 1800 -VVC</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--MGF-MG-TF-Engine-1600-Petrol-16V-DOHC--m-2672">Engine 1600 Petrol 16V DOHC</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--MGF-MG-TF-Transmission-Manual-1600--m-2695">Transmission Manual 1600</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--MGF-MG-TF-Engine-1800-Petrol,-4-Cyl-K-Series--m-2673">Engine 1800 Petrol, 4 Cyl K Series</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--MGF-MG-TF-Transmission-Manual-1800-Petrol--m-2696">Transmission Manual 1800 Petrol</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--MGF-MG-TF-Exhausts--m-2684">Exhausts</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--MGF-MG-TF-Wheels--m-2638">Wheels</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--MGF-MG-TF-Front-Suspension--m-2636">Front Suspension</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--MGF-MG-TF-Wiring-Harnesses--m-1971">Wiring Harnesses</a>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <button className="btn accordion-header-btn" id="MGZRHeading" data-toggle="collapse" data-target="#MGZRCollapse" aria-expanded="false" aria-controls="MGZRCollapse">
                    <h5 className="mb-0">
                      ZR
                            </h5>
                  </button>
                  <div id="MGZRCollapse" className="collapse" aria-labelledby="MGZRHeading" data-parent="#mg-modern-accordion">
                    <div className="card-body">
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--MG-ZR-Accessories--m-12752">Accessories</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--MG-ZR-Fuel-Emissions--m-12808">Fuel &amp; Emissions</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--MG-ZR-Auto-Glass-Fittings--m-12791">Auto Glass &amp; Fittings</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--MG-ZR-In-Car-Entertainment--m-12763">In Car Entertainment</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--MG-ZR-Battery--m-12761">Battery</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--MG-ZR-Instruments--m-12764">Instruments</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--MG-ZR-Bodyshell-Exterior-Fittings--m-12777">Bodyshell &amp; Exterior Fittings</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--MG-ZR-Lights-Lenses--m-12762">Lights &amp; Lenses</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--MG-ZR-Brake-System--m-12759">Brake System</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--MG-ZR-Paint--m-12753">Paint</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--MG-ZR-Gear--m-13366">Clothing and Regalia</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--MG-ZR-Rear-Suspension--m-12756">Rear Suspension</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--MG-ZR-Clutch--m-12801">Clutch</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--MG-ZR-Seats--m-12816">Seats</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--MG-ZR-Cooling-Heating--m-12760">Cooling &amp; Heating</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--MG-ZR-Service-Parts--m-12751">Service Parts</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--MG-ZR-Electrical--m-12775">Electrical</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--MG-ZR-Steering--m-12773">Steering</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--MG-ZR-Engine-Mountings--m-12776">Engine &amp; Mountings</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--MG-ZR-Tools--m-12754">Tools</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--MG-ZR-Exhausts--m-12807">Exhausts</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--MG-ZR-Transmission--m-12809">Transmission</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--MG-ZR-Facia-and-Trim--m-12792">Facia and Trim</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--MG-ZR-Wheels--m-12757">Wheels</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--MG-ZR-Front-Suspension--m-12755">Front Suspension</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--MG-ZR-Wiring-Harnesses--m-12774">Wiring Harnesses</a>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <button className="btn accordion-header-btn" id="MGZTHeading" data-toggle="collapse" data-target="#MGZTCollapse" aria-expanded="false" aria-controls="MGZTCollapse">
                    <h5 className="mb-0">
                      ZT
                            </h5>
                  </button>
                  <div id="MGZTCollapse" className="collapse" aria-labelledby="MGZTHeading" data-parent="#mg-modern-accordion">
                    <div className="card-body">
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--MG-ZT-Accessories--m-12916">Accessories</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--MG-ZT-Fuel-Emissions--m-12896">Fuel &amp; Emissions</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--MG-ZT-Auto-Glass--m-12915">Auto Glass</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--MG-ZT-In-Car-Entertainment--m-12908">In Car Entertainment</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--MG-ZT-Battery--m-12911">Battery</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--MG-ZT-Instrument-Panels--m-12910">Instrument Panels</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--MG-ZT-Body-Shell--m-12913">Body Shell</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--MG-ZT-Lights-Lenses--m-12912">Lights &amp; Lenses</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--MG-ZT-Brakes--m-12906">Brakes</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--MG-ZT-Paint--m-12917">Paint</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--MG-ZT-Clutch--m-12892">Clutch</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--MG-ZT-Rear-Suspension--m-12904">Rear Suspension</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--MG-ZT-Cooling-Heating--m-12893">Cooling &amp; Heating</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--MG-ZT-Seats-Seat-Belts--m-12925">Seats &amp; Seat Belts</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--MG-ZT-Electrical--m-12909">Electrical</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--MG-ZT-Service-Parts--m-12885">Service Parts</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--MG-ZT-Engine--m-12886">Engine</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--MG-ZT-Steering--m-12907">Steering</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--MG-ZT-Exhaust-System--m-12895">Exhaust System</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--MG-ZT-Tools--m-12918">Tools</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--MG-ZT-Exterior-Trim--m-12914">Exterior Trim</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--MG-ZT-Transmission--m-12897">Transmission</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--MG-ZT-Facia-Trim--m-12920">Facia &amp; Trim</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--MG-ZT-Wheels--m-12905">Wheels</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--MG-ZT-Front-Suspension--m-12903">Front Suspension</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--MG-ZT-Wiring-Harnesses--m-12932">Wiring Harnesses</a>
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
      {/* TriumphModal */}
      <div className="modal fade" id="TriumphModal" tabIndex={-1} role="dialog" aria-labelledby="TriumphModal" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Triumph</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div id="triumph-accordion">
                <div className="card">
                  <button className="btn accordion-header-btn" id="TriumphTR25Heading" data-toggle="collapse" data-target="#TriumphTR25Collapse" aria-expanded="true" aria-controls="TriumphTR25Collapse">
                    <h5 className="mb-0">
                      TR2 - 5
                            </h5>
                  </button>
                  <div id="TriumphTR25Collapse" className="collapse" aria-labelledby="TriumphTR25Heading" data-parent="#triumph-accordion">
                    <div className="card-body">
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR2-5-Accessories--m-13164">Accessories</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR2-5-Gearbox--m-13082">Gearbox</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR2-5-Body-Parts-Fittings--m-13145">Body Parts &amp; Fittings</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR2-5-General-Fasteners--m-13168">General Fasteners</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR2-5-Books-Manuals-and-DVDs--m-13166">Books Manuals &amp; DVDs</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR2-5-Heating--m-13080">Heating</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR2-5-Brake-System--m-13119">Brake System</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR2-5-Hoods-Hard-Tops--m-13162">Hoods &amp; Hard Tops</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR2-5-Chassis--m-13144">Chassis</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR2-5-Interior-Trim--m-13156">Interior Trim</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR2-5-Clutch--m-13074">Clutch</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR2-5-Manifolds--m-13081">Manifolds</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR2-5-Cooling--m-13077">Cooling</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR2-5-Paint--m-13165">Paint</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR2-5-Drive-Shaft--m-13113">Drive Shaft</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR2-5-Propshaft--m-13112">Propshaft</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR2-5-Electrical--m-13126">Electrical</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR2-5-Rear-Axle--m-13111">Rear Axle</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR2-5-Engine-and-Gearbox-Mountings--m-13073">Engine &amp; Gearbox Mountings</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR2-5-Rear-Suspension--m-13115">Rear Suspension</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR2-5-Engine-Components--m-13086">Engine Components</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR2-5-Steering--m-13125">Steering</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR2-5-Exhaust--m-13106">Exhaust</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR2-5-Suspension-Steering-Improvements--m-13117">Suspension &amp; Steering Improvements</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR2-5-Front-Suspension--m-13114">Front Suspension</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR2-5-Suspension-Packages--m-13116">Suspension Packages</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR2-5-Fuel-System--m-13093">Fuel System</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR2-5-Wheels--m-13118">Wheels</a>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <button className="btn accordion-header-btn" id="TriumphTR6Heading" data-toggle="collapse" data-target="#TriumphTR6Collapse" aria-expanded="true" aria-controls="TriumphTR6Collapse">
                    <h5 className="mb-0">
                      TR6
                            </h5>
                  </button>
                  <div id="TriumphTR6Collapse" className="collapse" aria-labelledby="TriumphTR6Heading" data-parent="#triumph-accordion">
                    <div className="card-body">
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR6-Accessories--m-752">Accessories</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR6-Gearbox--m-739">Gearbox</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR6-Body-Parts-Fittings--m-12442">Body Parts &amp; Fittings</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR6-General-Fasteners--m-13331">General Fasteners</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR6-Bodyshell--m-13514">Bodyshell</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR6-Hoods-Hard-Tops--m-748">Hard Tops</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR6-Books-Manuals-and-DVDs--m-12453">Books Manuals &amp; DVDs</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR6-Hood-Frame--m-13521">Hood &amp; Frame</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR6-Brake-System--m-742">Brake System</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR6-Interior-Trim--m-747">Interior Trim</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR6-Chassis--m-745">Chassis</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR6-Manifolds--m-13433">Manifolds</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR6-Clutch--m-974">Clutch</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR6-NAS--North-American-Models--m-750">NAS - North American Models</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR6-Commission-Plates-Labels--m-749">Commission Plates &amp; Labels</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR6-Overdrive-A-Type--m-3222">Overdrive A Type</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR6-Cooling-Heating--m-734">Cooling &amp; Heating</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR6-Overdrive-Conversions-Electrics--m-3224">Overdrive Conversions &amp; Electrics</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR6-Drive-Shaft--m-3182">Drive Shaft</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR6-Overdrive-J-Type--m-3223">Overdrive J Type</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR6-Electrical--m-744">Electrical</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR6-Paint--m-13321">Paint</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR6-Engine-Gearbox-Mountings--m-13430">Engine &amp; Gearbox Mountings</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR6-Propshaft--m-12481">Propshaft</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR6-Engine-Components--m-3396">Engine Components</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR6-Rear-Axle-Differential--m-740">Rear Axle</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR6-Exhaust--m-737">Exhaust</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR6-Suspension-Rear--m-3249">Rear Suspension</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR6-Suspension-Front--m-3205">Front Suspension</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR6-Steering--m-743">Steering</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR6-Fuel-System--Controls--m-3210">Fuel System - Controls</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR6-Suspension-Steering-Improvements--m-13512">Suspension &amp; Steering Improvements</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR6-Fuel-System--Injection--m-3209">Fuel System - Injection</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR6-Suspension-Kits--m-3206">Suspension Kits</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR6-Fuel-System--Pi-Early--m-3207">Fuel System - Pi Early</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR6-Tonneau-Hood-Stowage-Cover--m-13522">Tonneau &amp; Hood Stowage Cover</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR6-Fuel-System--Pi-Late--m-3208">Fuel System - Pi Late</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR6-Wheels--m-3241">Wheels</a>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <button className="btn accordion-header-btn" id="TriumphTR7Heading" data-toggle="collapse" data-target="#TriumphTR7Collapse" aria-expanded="true" aria-controls="TriumphTR7Collapse">
                    <h5 className="mb-0">
                      TR7
                            </h5>
                  </button>
                  <div id="TriumphTR7Collapse" className="collapse" aria-labelledby="TriumphTR7Heading" data-parent="#triumph-accordion">
                    <div className="card-body">
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR7-16v-Sprint-Conversion-Kits--m-4599">16v Sprint Conversion Kits</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR7-Gearbox-4-Speed--m-3175">Gearbox 4 Speed</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR7-16v-Sprint-Electrical--m-4600">16v Sprint Electrical</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR7-Gearbox-5-Speed--m-3176">Gearbox 5 Speed</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR7-16v-Sprint-Exhaust--m-4602">16v Sprint Exhaust</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR7-Gearbox-Automatic--m-931">Gearbox Automatic</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR7-16v-Sprint-Fuel-System--m-4603">16v Sprint Fuel System</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR7-General-Fasteners--m-13330">General Fasteners</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR7-Body-Parts-Fittings--m-243">Body Parts &amp; Fittings</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR7-Hoods-Hard-Tops--m-246">Hoods &amp; Hard Tops</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR7-Books-Manuals-and-DVDs--m-12452">Books Manuals &amp; DVDs</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR7-Interior-Trim--m-245">Interior Trim</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR7-Brake-System--m-239">Brake System</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR7-Paint--m-13320">Paint</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR7-Clutch--m-224">Clutch</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR7-Propshaft--m-232">Propshaft</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR7-Cooling-Heating--m-226">Cooling &amp; Heating</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR7-Rear-Axle-Differential-4-Speed--m-932">Rear Axle &amp; Differential 4 Speed</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR7-Electrical--m-241">Electrical</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR7-Rear-Axle-Differential-5-Speed--m-3177">Rear Axle &amp; Differential 5 Speed</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR7-Engine-Components--m-221">Engine Components</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR7-Steering--m-240">Steering</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR7-Exhaust--m-228">Exhaust</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR7-Suspension--m-933">Suspension</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR7-Exterior-Trim--m-244">Exterior Trim</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR7-Wheels--m-238">Wheels</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR7-Fuel-System--m-227">Fuel System</a>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <button className="btn accordion-header-btn" id="TriumphTR8Heading" data-toggle="collapse" data-target="#TriumphTR8Collapse" aria-expanded="true" aria-controls="TriumphTR8Collapse">
                    <h5 className="mb-0">
                      TR8
                            </h5>
                  </button>
                  <div id="TriumphTR8Collapse" className="collapse" aria-labelledby="TriumphTR8Heading" data-parent="#triumph-accordion">
                    <div className="card-body">
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR8-Books-Manuals-and-DVDs--m-12451">Books Manuals &amp; DVDs</a>
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR8-Gearbox--m-255">Gearbox</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR8-Brake-System--m-260">Brake System</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR8-General-Fasteners--m-13329">General Fasteners</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR8-Clutch--m-3247">Clutch</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR8-Paint--m-13327">Paint</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR8-Cooling-Heating--m-252">Cooling &amp; Heating</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR8-Propshaft--m-12467">Propshaft</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR8-Electrical--m-262">Electrical</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR8-Rear-Axle-Differential--m-256">Rear Axle &amp; Differential</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR8-Engine-Components--m-249">Engine Components</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR8-Steering--m-261">Steering</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR8-Exhaust--m-254">Exhaust</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR8-Suspension--m-965">Suspension</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-TR8-Fuel-System--m-253">Fuel System</a>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <button className="btn accordion-header-btn" id="TriumphGT6Heading" data-toggle="collapse" data-target="#TriumphGT6Collapse" aria-expanded="true" aria-controls="TriumphGT6Collapse">
                    <h5 className="mb-0">
                      GT6
                            </h5>
                  </button>
                  <div id="TriumphGT6Collapse" className="collapse" aria-labelledby="TriumphGT6Heading" data-parent="#triumph-accordion">
                    <div className="card-body">
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-GT6-Accessories--m-705">Accessories</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-GT6-Fuel-System--m-686">Fuel System</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-GT6-Body-Parts-Fittings--m-701">Body Parts &amp; Fittings</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-GT6-Gearbox--m-688">Gearbox</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-GT6-Books-Manuals-and-DVDs--m-12456">Books Manuals &amp; DVDs</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-GT6-General-Fasteners--m-13335">General Fasteners</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-GT6-Brake-System--m-697">Brake System</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-GT6-Interior-Trim--m-704">Interior Trim</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-GT6-Chassis--m-700">Chassis</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-GT6-Overdrive--m-12478">Overdrive</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-GT6-Cooling-Heating--m-685">Cooling &amp; Heating</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-GT6-Paint--m-13322">Paint</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-GT6-Drive-Shaft--m-12479">Drive Shaft</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-GT6-Propshaft--m-12480">Propshaft</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-GT6-Electrical--m-699">Electrical</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-GT6-Rear-Axle-Differential--m-689">Rear Axle &amp; Differential</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-GT6-Engine-Components--m-682">Engine Components</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-GT6-Steering--m-698">Steering</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-GT6-Exhaust--m-687">Exhaust</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-GT6-Suspension--m-905">Suspension</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-GT6-Exterior-Trim--m-702">Exterior Trim</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-GT6-Wheels--m-696">Wheels</a>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <button className="btn accordion-header-btn" id="TriumphHeraldHeading" data-toggle="collapse" data-target="#TriumphHeraldCollapse" aria-expanded="true" aria-controls="TriumphHeraldCollapse">
                    <h5 className="mb-0">
                      Herald
                            </h5>
                  </button>
                  <div id="TriumphHeraldCollapse" className="collapse" aria-labelledby="TriumphHeraldHeading" data-parent="#triumph-accordion">
                    <div className="card-body">
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-Herald-Accessories--m-3298">Accessories</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-Herald-Fuel-System--m-3282">Fuel System</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-Herald-Body-Parts-Fittings--m-3294">Body Parts &amp; Fittings</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-Herald-Gearbox--m-3284">Gearbox</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-Herald-Books-Manuals-and-DVDs--m-12459">Books Manuals &amp; DVDs</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-Herald-General-Fasteners--m-13334">General Fasteners</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-Herald-Brake-System--m-3290">Brake System</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-Herald-Hoods--m-3297">Hoods</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-Herald-Chassis--m-3293">Chassis</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-Herald-Interior-Trim--m-3296">Interior Trim</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-Herald-Clutch--m-3279">Clutch</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-Herald-Paint--m-13325">Paint</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-Herald-Cooling-Heating--m-3281">Cooling &amp; Heating</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-Herald-Propshaft--m-12462">Propshaft</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-Herald-Drive-Shaft--m-3285">Drive Shaft</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-Herald-Rear-Axle-Differential--m-12463">Rear Axle &amp; Differential</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-Herald-Electrical--m-3292">Electrical</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-Herald-Steering--m-3291">Steering</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-Herald-Engine-Components--m-3278">Engine Components</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-Herald-Suspension--m-3286">Suspension</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-Herald-Exhaust--m-3283">Exhaust</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-Herald-Wheels--m-3289">Wheels</a>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <button className="btn accordion-header-btn" id="TriumphSpitfireHeading" data-toggle="collapse" data-target="#TriumphSpitfireCollapse" aria-expanded="true" aria-controls="TriumphSpitfireCollapse">
                    <h5 className="mb-0">
                      Spitfire
                            </h5>
                  </button>
                  <div id="TriumphSpitfireCollapse" className="collapse" aria-labelledby="TriumphSpitfireHeading" data-parent="#triumph-accordion">
                    <div className="card-body">
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-Spitfire-Accessories--m-217">Accessories</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-Spitfire-Gearbox-3-Rail--m-3167">Gearbox 3 Rail</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-Spitfire-Body-Parts-Fittings--m-212">Body Parts &amp; Fittings</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-Spitfire-Gearbox-Single-Rail--m-3166">Gearbox Single Rail</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-Spitfire-Books-Manuals-and-DVDs--m-12449">Books Manuals &amp; DVDs</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-Spitfire-General-Fasteners--m-13333">General Fasteners</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-Spitfire-Brake-System--m-208">Brake System</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-Spitfire-Hoods-Hard-Tops--m-216">Hoods &amp; Hard Tops</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-Spitfire-Chassis--m-211">Chassis</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-Spitfire-Interior-Trim--m-214">Interior Trim</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-Spitfire-Clutch--m-192">Clutch</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-Spitfire-Overdrive-D-Type--m-3164">Overdrive D Type</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-Spitfire-Cooling-Heating--m-195">Cooling &amp; Heating</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-Spitfire-Overdrive-J-Type--m-3165">Overdrive J Type</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-Spitfire-Drive-Shaft--m-12461">Drive Shaft</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-Spitfire-Paint--m-218">Paint</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-Spitfire-Electrical--m-210">Electrical</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-Spitfire-Propshaft--m-201">Propshaft</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-Spitfire-Engine-Components--m-3243">Engine Components</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-Spitfire-Rear-Axle-Differential--m-202">Rear Axle &amp; Differential</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-Spitfire-Exhaust--m-197">Exhaust</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-Spitfire-Steering--m-209">Steering</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-Spitfire-Exterior-Trim--m-213">Exterior Trim</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-Spitfire-Suspension--m-204">Suspension</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-Spitfire-Fuel-System--m-196">Fuel System</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-Spitfire-Wheels--m-207">Wheels</a>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <button className="btn accordion-header-btn" id="TriumphStagHeading" data-toggle="collapse" data-target="#TriumphStagCollapse" aria-expanded="true" aria-controls="TriumphStagCollapse">
                    <h5 className="mb-0">
                      Stag
                            </h5>
                  </button>
                  <div id="TriumphStagCollapse" className="collapse" aria-labelledby="TriumphStagHeading" data-parent="#triumph-accordion">
                    <div className="card-body">
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-Stag-Accessories--m-730">Accessories</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-Stag-Gearbox--m-3163">Gearbox</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-Stag-Body-Parts-Fittings--m-724">Body Parts &amp; Fittings</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-Stag-General-Fasteners--m-13332">General Fasteners</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-Stag-Books-Manuals-and-DVDs--m-12450">Books Manuals &amp; DVDs</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-Stag-Hoods-Hard-Tops--m-728">Hoods &amp; Hard Tops</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-Stag-Brake-System--m-721">Brake System</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-Stag-Interior-Trim--m-726">Interior Trim</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-Stag-Clutch--m-4460">Clutch</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-Stag-Overdrive--m-12482">Overdrive</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-Stag-Cooling-Heating--m-710">Cooling &amp; Heating</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-Stag-Paint--m-13319">Paint</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-Stag-Drive-Shaft--m-4461">Drive Shaft</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-Stag-Propshaft--m-12483">Propshaft</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-Stag-Electrical--m-723">Electrical</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-Stag-Rear-Axle-Differential--m-12484">Rear Axle &amp; Differential</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-Stag-Engine-Components--m-707">Engine Components</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-Stag-Steering--m-722">Steering</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-Stag-Exhaust--m-712">Exhaust</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-Stag-Suspension--m-915">Suspension</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-Stag-Exterior-Trim--m-725">Exterior Trim</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-Stag-Wheels--m-720">Wheels</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-Stag-Fuel-System--m-711">Fuel System</a>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <button className="btn accordion-header-btn" id="TriumphVitesseHeading" data-toggle="collapse" data-target="#TriumphVitesseCollapse" aria-expanded="true" aria-controls="TriumphVitesseCollapse">
                    <h5 className="mb-0">
                      Vitesse
                            </h5>
                  </button>
                  <div id="TriumphVitesseCollapse" className="collapse" aria-labelledby="TriumphVitesseHeading" data-parent="#triumph-accordion">
                    <div className="card-body">
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-Vitesse-Accessories--m-881">Accessories</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-Vitesse-Gearbox--m-3245">Gearbox</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-Vitesse-Body-Parts-Fittings--m-877">Body Parts &amp; Fittings</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-Vitesse-General-Fasteners--m-13328">General Fasteners</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-Vitesse-Books-Manuals-and-DVDs--m-12460">Books Manuals &amp; DVDs</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-Vitesse-Hoods--m-880">Hoods</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-Vitesse-Brake-System--m-874">Brake System</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-Vitesse-Interior-Trim--m-879">Interior Trim</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-Vitesse-Chassis--m-12447">Chassis</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-Vitesse-Overdrive--m-12470">Overdrive</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-Vitesse-Clutch--m-864">Clutch</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-Vitesse-Paint--m-13326">Paint</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-Vitesse-Cooling-Heating--m-866">Cooling &amp; Heating</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-Vitesse-Propshaft--m-12471">Propshaft</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-Vitesse-Drive-Shaft--m-12472">Drive Shaft</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-Vitesse-Rear-Axle-Differential--m-12473">Rear Axle &amp; Differential</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-Vitesse-Electrical--m-876">Electrical</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-Vitesse-Steering--m-875">Steering</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-Vitesse-Engine-Components--m-3335">Engine Components</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-Vitesse-Suspension--m-871">Suspension</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-Vitesse-Exhaust--m-867">Exhaust</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-Vitesse-Wheels--m-873">Wheels</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Triumph-Vitesse-Fuel-System--m-868">Fuel System</a>
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
      {/* RoverModal */}
      <div className="modal fade" id="RoverModal" tabIndex={-1} role="dialog" aria-labelledby="RoverModal" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Rover</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div id="rover-accordion">
                <div className="card">
                  <button className="btn accordion-header-btn" id="Rover75Heading" data-toggle="collapse" data-target="#Rover75Collapse" aria-expanded="true" aria-controls="Rover75Collapse">
                    <h5>Rover 75</h5>
                  </button>
                  <div id="Rover75Collapse" className="collapse" aria-labelledby="Rover75Heading" data-parent="#rover-accordion">
                    <div className="card-body">
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Rover-75-Accessories--m-12985">Accessories</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Rover-75-Front-Suspension--m-2984">Front Suspension</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Rover-75-Auto-Glass--m-3057">Auto Glass</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Rover-75-Fuel-Emissions--m-3051">Fuel &amp; Emissions</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Rover-75-Battery--m-3012">Battery</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Rover-75-Instrument-Panels--m-3020">Instrument Panels</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Rover-75-Body-Shell--m-2987">Body Shell</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Rover-75-Lights-Lenses--m-3021">Lights &amp; Lenses</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Rover-75-Brakes--m-3001">Brakes</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Rover-75-Paint--m-12986">Paint</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Rover-75-Clutch--m-2023">Clutch</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Rover-75-Rear-Suspension--m-2985">Rear Suspension</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Rover-75-Cooling-Heating--m-3005">Cooling &amp; Heating</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Rover-75-Seats-Seat-Belts--m-12919">Seats &amp; Seat Belts</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Rover-75-Electrical--m-3011">Electrical</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Rover-75-Steering--m-2026">Steering</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Rover-75-Engine--m-12883">Engine</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Rover-75-Transmission--m-2027">Transmission</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Rover-75-Exhaust-System--m-12894">Exhaust System</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Rover-75-Wheels--m-2986">Wheels</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Rover-75-Exterior-Trim--m-2992">Exterior Trim</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Rover-75-Wiring-Harnesses--m-3076">Wiring Harnesses</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Rover-75-Facia-Trim--m-2022">Facia &amp; Trim</a>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <button className="btn accordion-header-btn" id="RoverV8Heading" data-toggle="collapse" data-target="#RoverV8Collapse" aria-expanded="true" aria-controls="RoverV8Collapse">
                    <h5 className="mb-0">
                      Rover V8
                            </h5>
                  </button>
                  <div id="RoverV8Collapse" className="collapse" aria-labelledby="RoverV8Heading" data-parent="#rover-accordion">
                    <div className="card-body">
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Rover-75-V8-Auto-Glass--m-3139">Auto Glass</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Rover-75-V8-Fuel-Emissions--m-3135">Fuel &amp; Emissions</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Rover-75-V8-Battery--m-3108">Battery</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Rover-75-V8-Instruments--m-3115">Instruments</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Rover-75-V8-Bodyshell--m-3084">Bodyshell</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Rover-75-V8-Lights-Lenses--m-3116">Lights &amp; Lenses</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Rover-75-V8-Brakes--m-3096">Brakes</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Rover-75-V8-Paint--m-3079">Paint</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Rover-75-V8-Clutch-4_6L-V8-260PS--m-3133">Clutch 4.6L V8 260PS</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Rover-75-V8-Rear-Suspension--m-3082">Rear Suspension</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Rover-75-V8-Cooling-Heating--m-3101">Cooling &amp; Heating</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Rover-75-V8-Seats-Seat-Belts--m-2036">Seats &amp; Seat Belts</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Rover-75-V8-Electrical--m-3106">Electrical</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Rover-75-V8-Steering--m-3142">Steering</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Rover-75-V8-Engine-4_6L-V8-260PS--m-3121">Engine 4.6L V8 260PS</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Rover-75-V8-Tools--m-3080">Tools</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Rover-75-V8-Exterior-Trim--m-3089">Exterior Trim</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Rover-75-V8-Transmission--m-3149">Transmission</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Rover-75-V8-Facia-Trim--m-12955">Facia &amp; Trim</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Rover-75-V8-Wheels--m-3083">Wheels</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Rover-75-V8-Front-Suspension--m-3081">Front Suspension</a><br />
                      <a target="blank" href="http://www.rimmerbros.co.uk/ItemList--Rover-75-V8-Wiring-Harnesses--m-3151">Wiring Harnesses</a>
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
      {/* MorrisModal */}
      <div className="modal fade" id="MorrisModal" tabIndex={-1} role="dialog" aria-labelledby="MorrisModal" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Morris</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="card">
                <div className="card-body">
                  <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=50&PlateTypeID=1&ComponentID=54">Apparel &amp; Gifts</a><br />
                  <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=50&PlateTypeID=1&ComponentID=2">Body</a><br />
                  <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=50&PlateTypeID=1&ComponentID=4">Brakes</a><br />
                  <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=50&PlateTypeID=1&ComponentID=58">Car Care, Books, Tools &amp; Workshop</a><br />
                  <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=50&PlateTypeID=1&ComponentID=6">Clutch, Gearbox &amp; Drive Train</a><br />
                  <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=50&PlateTypeID=1&ComponentID=59">Cooling System</a><br />
                  <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=50&PlateTypeID=1&ComponentID=9">Electrical</a><br />
                  <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=50&PlateTypeID=1&ComponentID=8">Engine</a><br />
                  <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=50&PlateTypeID=1&ComponentID=10">Exhaust</a><br />
                  <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=50&PlateTypeID=1&ComponentID=11">Exterior</a><br />
                  <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=50&PlateTypeID=1&ComponentID=57">Fuel System, Induction &amp; Controls</a><br />
                  <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=50&PlateTypeID=1&ComponentID=56">Heating &amp; Ventilation</a><br />
                  <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=50&PlateTypeID=1&ComponentID=14">Interior</a><br />
                  <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=50&PlateTypeID=1&ComponentID=55">Performance &amp; Tuning</a><br />
                  <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=50&PlateTypeID=1&ComponentID=53">Road Wheels, Tyres &amp; Road Side Equipment</a><br />
                  <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=50&PlateTypeID=1&ComponentID=52">Steering &amp; Suspension</a>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
      {/* MiniModal */}
      <div className="modal fade" id="MiniModal" tabIndex={-1} role="dialog" aria-labelledby="MiniModal" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Mini</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="card">
                <div className="card-body">
                  <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=43&PlateTypeID=1&ComponentID=54">Apparel &amp; Gifts</a><br />
                  <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=43&PlateTypeID=1&ComponentID=2">Body</a><br />
                  <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=43&PlateTypeID=1&ComponentID=4">Brakes</a><br />
                  <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=43&PlateTypeID=1&ComponentID=58">Car Care, Books, Tools &amp; Workshop</a><br />
                  <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=43&PlateTypeID=1&ComponentID=6">Clutch, Gearbox &amp; Drive Train</a><br />
                  <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=43&PlateTypeID=1&ComponentID=59">Cooling System</a><br />
                  <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=43&PlateTypeID=1&ComponentID=9">Electrical</a><br />
                  <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=43&PlateTypeID=1&ComponentID=8">Engine</a><br />
                  <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=43&PlateTypeID=1&ComponentID=10">Exhaust</a><br />
                  <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=43&PlateTypeID=1&ComponentID=11">Exterior</a><br />
                  <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=43&PlateTypeID=1&ComponentID=57">Fuel System, Induction &amp; Controls</a><br />
                  <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=43&PlateTypeID=1&ComponentID=56">Heating &amp; Ventilation</a><br />
                  <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=43&PlateTypeID=1&ComponentID=14">Interior</a><br />
                  <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=43&PlateTypeID=1&ComponentID=55">Performance &amp; Tuning</a><br />
                  <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=43&PlateTypeID=1&ComponentID=53">Road Wheels, Tyres &amp; Road Side Equipment</a><br />
                  <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=43&PlateTypeID=1&ComponentID=52">Steering &amp; Suspension</a><br />
                  <a target="blank" href="http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=43&PlateTypeID=1&ComponentID=51">Weather Equipment</a>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

OldModals.propTypes = {

};

export default OldModals;