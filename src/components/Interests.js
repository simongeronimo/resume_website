const Interests = () => {
  return (
    <div className="section service" id="section-interests">
      <div className="content">
        {/* title */}
        <div className="title">
          <div className="title_inner">Interests</div>
        </div>
        {/* interests items */}
        <div className="service-items">
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-futbol" />
              </div>
              <div className="name">Soccer</div>
              <div className="text">
              </div>
            </div>
          </div>
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-gamepad" />
              </div>
              <div className="name">Videogames</div>
              <div className="text">

              </div>
            </div>
          </div>
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-microchip"/>
              </div>
              <div className="name">Technology</div>
              <div className="text">

              </div>
            </div>
          </div>
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-tv" />
              </div>
              <div className="name">Series</div>
              <div className="text">

              </div>
            </div>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default Interests;
