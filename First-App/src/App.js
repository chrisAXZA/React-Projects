import AboutUs from "./components/AboutUs.js";
import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
import OurServices from "./components/OurServices.js";
import OurServices2 from "./components/OurServices2.js";

function App() {
  return (
    <div>
      <div className="back-to-top"></div>

      <Header />

      <OurServices />

      <AboutUs />

      <OurServices2 />

      <div className="page-section banner-seo-check">
        <div className="wrap bg-image" style={{ backgroundImage: 'url(/img/bg_pattern.svg)' }}>
          <div className="container text-center">
            <div className="row justify-content-center wow fadeInUp">
              <div className="col-lg-8">
                <h2 className="mb-4">Check your Website SEO</h2>
                <form action="#">
                  <input type="text" className="form-control" placeholder="E.g google.com" />
                  <button type="submit" className="btn btn-success">Check Now</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-section">
        <div className="container">
          <div className="text-center wow fadeInUp">
            <div className="subhead">Pricing Plan</div>
            <h2 className="title-section">Choose plan the right for you</h2>
            <div className="divider mx-auto"></div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-4 py-3 wow zoomIn">
              <div className="card-pricing">
                <div className="header">
                  <div className="pricing-type">Basic</div>
                  <div className="price">
                    <span className="dollar">$</span>
                    <h1>39<span className="suffix">.99</span></h1>
                  </div>
                  <h5>Per Month</h5>
                </div>
                <div className="body">
                  <p>25 Analytics <span className="suffix">Campaign</span></p>
                  <p>1,300 Change <span className="suffix">Keywords</span></p>
                  <p>Social Media <span className="suffix">Reviews</span></p>
                  <p>1 Free <span className="suffix">Optimization</span></p>
                  <p>24/7 <span className="suffix">Support</span></p>
                </div>
                <div className="footer">
                  <a href="#" className="btn btn-pricing btn-block">Subscribe</a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 py-3 wow zoomIn">
              <div className="card-pricing marked">
                <div className="header">
                  <div className="pricing-type">Standar</div>
                  <div className="price">
                    <span className="dollar">$</span>
                    <h1>59<span className="suffix">.99</span></h1>
                  </div>
                  <h5>Per Month</h5>
                </div>
                <div className="body">
                  <p>25 Analytics <span className="suffix">Campaign</span></p>
                  <p>1,300 Change <span className="suffix">Keywords</span></p>
                  <p>Social Media <span className="suffix">Reviews</span></p>
                  <p>1 Free <span className="suffix">Optimization</span></p>
                  <p>24/7 <span className="suffix">Support</span></p>
                </div>
                <div className="footer">
                  <a href="#" className="btn btn-pricing btn-block">Subscribe</a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 py-3 wow zoomIn">
              <div className="card-pricing">
                <div className="header">
                  <div className="pricing-type">Professional</div>
                  <div className="price">
                    <span className="dollar">$</span>
                    <h1>99<span className="suffix">.99</span></h1>
                  </div>
                  <h5>Per Month</h5>
                </div>
                <div className="body">
                  <p>25 Analytics <span className="suffix">Campaign</span></p>
                  <p>1,300 Change <span className="suffix">Keywords</span></p>
                  <p>Social Media <span className="suffix">Reviews</span></p>
                  <p>1 Free <span className="suffix">Optimization</span></p>
                  <p>24/7 <span className="suffix">Support</span></p>
                </div>
                <div className="footer">
                  <a href="#" className="btn btn-pricing btn-block">Subscribe</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="page-section banner-info">
        <div className="wrap bg-image" style={{ backgroundImage: 'url(/img/bg_pattern.svg)' }}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 py-3 pr-lg-5 wow fadeInUp">
                <h2 className="title-section">SEO to Improve Brand <br /> Visibility</h2>
                <div className="divider"></div>
                <p>We're an experienced and talented team of passionate consultants who breathe with search engine marketing.</p>

                <ul className="theme-list theme-list-light text-white">
                  <li>
                    <div className="h5">SEO Content Strategy</div>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
                  </li>
                  <li>
                    <div className="h5">B2B SEO</div>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 py-3 wow fadeInRight">
                <div className="img-fluid text-center">
                  <img src="/img/banner_image_2.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-section">
        <div className="container">
          <div className="text-center wow fadeInUp">
            <div className="subhead">Our Blog</div>
            <h2 className="title-section">Read Latest News</h2>
            <div className="divider mx-auto"></div>
          </div>

          <div className="row mt-5">
            <div className="col-lg-4 py-3 wow fadeInUp">
              <div className="card-blog">
                <div className="header">
                  <div className="post-thumb">
                    <img src="/img/blog/blog-1.jpg" alt="" />
                  </div>
                </div>
                <div className="body">
                  <h5 className="post-title"><a href="#">Source of Content Inspiration</a></h5>
                  <div className="post-date">Posted on <a href="#">27 Jan 2020</a></div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 py-3 wow fadeInUp">
              <div className="card-blog">
                <div className="header">
                  <div className="post-thumb">
                    <img src="/img/blog/blog-2.jpg" alt="" />
                  </div>
                </div>
                <div className="body">
                  <h5 className="post-title"><a href="#">Source of Content Inspiration</a></h5>
                  <div className="post-date">Posted on <a href="#">27 Jan 2020</a></div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 py-3 wow fadeInUp">
              <div className="card-blog">
                <div className="header">
                  <div className="post-thumb">
                    <img src="/img/blog/blog-3.jpg" alt="" />
                  </div>
                </div>
                <div className="body">
                  <h5 className="post-title"><a href="#">Source of Content Inspiration</a></h5>
                  <div className="post-date">Posted on <a href="#">27 Jan 2020</a></div>
                </div>
              </div>
            </div>

            <div className="col-12 mt-4 text-center wow fadeInUp">
              <a href="blog.html" className="btn btn-primary">View More</a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
