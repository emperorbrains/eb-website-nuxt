<template>
  <div>
    <Header />

    <!------------title part----------->
    <div class="content insert-remove-container togglePpopupFilter">
      <section class="small-banner">
        <div class="container w-100">
          <div class="small-title">
            <div class="row d-flex flex-wrap">
              <div class="col-12 col-md-9">
                <h1>
                  Project that speak <br />
                  about our <br />
                  verasatility
                </h1>
                <p>
                  We’re passionate about what we do! Our portfolio is a sheer
                  presentation about 20+ years of industry experience,
                  collaboration, expertise, and quality deliverables.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!------------------Middle PArt--------------->
      <section class="casestudy-listing">
        <div class="container">
          <div class="cs-filter-bar d-flex align-item-center">
            <div class="tab-filter pb-4">
              <!--<a href="/brands">Popular Brands</a>
                        <a href="/case-studies">Case-studies</a>-->
              <a href="#" class="active">Portfolio</a>
              <div class="listing-filter d-none"></div>
            </div>
            <div class="category-filter">
              <div class="filterby-sec d-none align-item-center">
                <h4>Filter Case Studies By</h4>
                <div class="filter-close">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="14px"
                    height="14px"
                    viewBox="0 0 14 14"
                    version="1.1"
                    _ngcontent-c4=""
                    class="svg-convert"
                    src="../assets/images/locker-close-icon.svg"
                  >
                    <desc>Created with Sketch.</desc>
                    <g
                      id="Page-1"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path
                        id="Combined-Shape"
                        d="M7,7 L13,1 L7,7 L1,1 L7,7 Z M7,7 L1,13 L7,7 L13,13 L7,7 Z"
                        stroke="#81959E"
                        stroke-width="2"
                      ></path>
                    </g>
                  </svg>
                </div>
              </div>
              <!------------------Type---------------------->
              <div class="filter-dropdown d-flex align-item-center">
                <div class="dropdown">
                  <div class="drop">
                    Type
                    <span class="down-caret"></span>
                  </div>
                  <div class="dropdownArrow"></div>
                  <ul class="dropdown-menu">
                    <li class="filterclick">
                      <span datafiltertype="new-project">New Project</span>
                    </li>
                    <li class="filterclick">
                      <spna datafiltertpe="redevelopment">Redevelopment</spna>
                    </li>
                    <li class="filterclick">
                      <spna datafiltertpe="maintenance">Maintenance</spna>
                    </li>
                    <input
                      id="selType"
                      class="selectedfilter"
                      type="hidden"
                      value
                    />
                  </ul>
                </div>
                <!----------------Tecchnology--------------->
                <div class="dropdown">
                  <div class="drop">
                    Technology
                    <span class="down-caret"></span>
                  </div>
                  <div class="dropdownArrow"></div>
                  <ul class="dropdown-menu two-part-tab">
                    <li class="filterclick">
                      <spna datafiltertpe="analysis">Analysis</spna>
                    </li>
                    <li class="filterclick">
                      <spna datafiltertpe="android">Android</spna>
                    </li>
                    <li class="filterclick">
                      <spna datafiltertpe="angular js">AngularJS</spna>
                    </li>
                    <li class="filterclick">
                      <spna datafiltertpe="back-end">Back End</spna>
                    </li>
                    <li class="filterclick">
                      <spna datafiltertpe="drupal">Drupal</spna>
                    </li>
                    <li class="filterclick">
                      <spna datafiltertpe="front-end">Front-end</spna>
                    </li>
                    <li class="filterclick">
                      <spna datafiltertpe="ios">iOS</spna>
                    </li>
                    <li class="filterclick">
                      <spna datafiltertpe="java">Java</spna>
                    </li>
                    <li class="filterclick">
                      <spna datafiltertpe="laraval">Laravel</spna>
                    </li>
                    <li class="filterclick">
                      <spna datafiltertpe="magento">Magento</spna>
                    </li>
                    <li class="filterclick">
                      <spna datafiltertpe=".net">.NET</spna>
                    </li>
                    <li class="filterclick">
                      <spna datafiltertpe="nodejs">NodeJS</spna>
                    </li>
                    <li class="filterclick">
                      <spna datafiltertpe="other">Other</spna>
                    </li>
                    <li class="filterclick">
                      <spna datafiltertpe="php">PHP</spna>
                    </li>
                    <input
                      id="selTech"
                      class="selectedFilter"
                      type="hidden"
                      value
                    />
                  </ul>
                </div>
                <!----------------icon---------------->
                <div class="reset-icon">
                  <a href="">
                    <span class="fa fa-repeat" aria-hidden="true">
                      <p class="tooltiptext tooltip-top">"Reset Filter"</p>
                    </span>
                  </a>
                </div>
                <div class="mb-filter-close d-none"></div>
              </div>
            </div>
          </div>
          <div class="cs-listing">
            <h3 class="noresult" style="display: none">No Result Found.</h3>
            <div class="row">
              <div
                class="col-12 col-sm-6 col-md-6 col-lg-4 cs-mar-top-60 filter-result new-project nodejs angular education"
              >
                <div class="case-listing-col">
                  <div class="cs-listing-img">
                    <a href="#">
                      <picture>
                        <source
                          type="images/webp"
                          srcset="
                            https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2016/06/Almamapper.webp
                          "
                        />
                        <source
                          srcset="
                            https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2016/06/Almamapper.jpg
                          "
                          type="image/jpg"
                        />
                        <img
                          src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2016/06/Almamapper.jpg"
                          alt="Almamapper"
                        />
                      </picture>
                    </a>
                  </div>
                  <div class="cs-project-title">
                    <p>Education</p>
                    <a href="#" class="text-decoration-none">Almamapper</a>
                    <div class="project-detail">
                      A social learning & networking app on <br />
                      Android & iOS made for students.
                    </div>
                    <div class="cs-technology">
                      <span>NodeJs</span>
                      <span>Angular</span>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="col-12 col-sm-6 col-md-6 col-lg-4 cs-mar-top-60 filter-result new-project nodejs angular education"
              >
                <div class="case-listing-col">
                  <div class="cs-listing-img">
                    <a href="#"></a>
                    <picture>
                      <source
                        type="images/webp"
                        srcset="
                          https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2017/07/aconex.webp
                        "
                      />
                      <source
                        srcset="
                          https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2017/07/aconex.jpg
                        "
                        type="image/jpg"
                      />
                      <img
                        src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2017/07/aconex.jpg"
                        alt="web development service"
                      />
                    </picture>
                  </div>
                  <div class="cs-project-title">
                    <p>Construction</p>
                    <a href="#" class="text-decoration-none">Aconex</a>
                    <div class="project-detail">
                      An enterprise app platform to manage information &
                      processes on projects.
                    </div>
                    <div class="cs-technology">
                      <span>Android</span>
                      <span>iOS</span>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="col-12 col-sm-6 col-md-6 col-lg-4 cs-mar-top-60 filter-result new-project magento ecommerce"
              >
                <div class="case-listing-col">
                  <div class="cs-listing-img">
                    <nuxt-link to="product-landing">
                      <picture>
                        <source
                          type="image/webp"
                          srcset="
                            https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2016/09/Myonsto-1.webp
                          "
                        />
                        <source
                          srcset="
                            https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2016/09/Myonsto-1.jpg
                          "
                        />
                        <img
                          src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2016/09/Myonsto-1.jpg"
                        />
                      </picture>
                    </nuxt-link>
                  </div>
                  <div class="cs-project-title">
                    <p>Ecommerce</p>
                    <a href="#" class="text-decoration-none">Myonsto</a>
                    <div class="project-detail">
                      An online grocery ordering and delivery app for Android &
                      iOS users.
                    </div>
                    <div class="cs-technology">
                      <span>Magento</span>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="col-12 col-sm-6 col-md-6 col-lg-4 cs-mar-top-60 filter-result new-project wordpress government"
              >
                <div class="case-listing-col">
                  <div class="cs-listing-img">
                    <a href="#">
                      <picture>
                        <source
                          type="image/webp"
                          srcset="
                            https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2016/06/Ujwal-Bharat.webp
                          "
                        />
                        <source
                          srcset="
                            https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2016/06/Ujwal-Bharat.jpg
                          "
                        />
                        <img
                          src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2016/06/Ujwal-Bharat.jpg"
                          alt="Ujwal Bharat"
                        />
                      </picture>
                    </a>
                  </div>
                  <div class="cs-project-title">
                    <p>Government</p>
                    <a href="#" class="text-decoration-none">Ujwal Bharat</a>
                    <div class="project-detail">
                      A custom website developed for Indian government on
                      specific project.
                    </div>
                    <div class="cs-technology">
                      <span>Wordpress</span>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="col-12 col-sm-6 col-md-6 col-lg-4 cs-mar-top-60 filter-result new-project redevelopment maintenance android ios media-and-entertainment"
              >
                <div class="case-listing-col">
                  <div class="cs-listing-img">
                    <a href="#">
                      <picture>
                        <source
                          type="image/webp"
                          srcset="
                            https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2016/06/snoopy-whoopy-thumb.webp
                          "
                        />
                        <source
                          srcset="
                            https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2016/06/snoopy-whoopy-thumb.jpg
                          "
                        />
                        <img
                          src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2016/06/snoopy-whoopy-thumb.jpg"
                          alt="Snoopy Woopy"
                        />
                      </picture>
                    </a>
                  </div>
                  <div class="cs-project-title">
                    <p>Media and Entertainment</p>
                    <a class="text-decoration-none">Snoopy Whoopy</a>
                    <div class="project-detail">
                      An Android and iOS game application with appealing UI/UX.
                    </div>
                    <div class="cs-technology">
                      <span>Android</span>
                      <span>iOS</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!--------------Form---------------->
      <div class="portfolio-bottom">
        <div class="grid-section">
          <div class="container">
            <div class="row align-item-center">
              <div class="col-md-5 portfolio-footer-left">
                <h2>Download Our Exclusive Portfolio</h2>
                <p>
                  Receive our portfolio e-book instantly, right in your inbox.
                </p>
                <form
                  class="portfolio-form cd-section thanks-popup ng-untouched ng-pristine ng-invalid"
                >
                  <div class="col-one mr-btm">
                    <input
                      class="form-control d-block mb-4"
                      name="full_name"
                      placeholder="First Name"
                      required
                      type="text"
                    />
                  </div>
                  <div class="col-one">
                    <input
                      class="form-control d-block mb-4"
                      name="email"
                      pattern="/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/"
                      placeholder="Your Email"
                      required
                      type="email"
                    />
                  </div>
                  <div class="col-one">
                    <input
                      class="form-control d-block mb-4"
                      maxlength="15"
                      name="contact_number"
                      placeholder="Phone"
                      required
                      type="tel"
                    />
                  </div>
                  <div class="col-one">
                    <textarea
                      class="form-control d-block mb-4"
                      data-min-rows="3"
                      minlength="15"
                      name="message"
                      placeholder="Message"
                      required
                      rows="3"
                    ></textarea>
                  </div>
                  <div class="captcha-outer clearfix">
                    <div class="col-one mr-top btn-action">
                      <div class="button btn-action captcha-next">
                        <button class="btn rounded-pill" type="button">
                          Submit
                        </button>
                      </div>
                      <div style="clear: both"></div>
                    </div>
                    <div class="copyright-text mt-3">
                      <p>
                        This site is protected by reCAPTCHA and the Google
                        <a href="https://policies.google.com/privacy"
                          >Privacy Policy</a
                        >
                        and
                        <a href="https://policies.google.com/terms"
                          >Terms of Service</a
                        >
                        apply.
                      </p>
                    </div>
                  </div>
                </form>
              </div>
              <!--------Footer right------->
              <div class="col-md-7 portfolio-footer-right">
                <img src="images/our-work-book.png" alt="book" />
              </div>
            </div>
          </div>
          <!----------popup-------------->
          <div class="cd-modal">
            <div class="cd-modal content text-align-left">
              <div class="thankyou-popup d-flex align-item-center"></div>
            </div>
          </div>
        </div>
        <div class="breadcrums-sec">
          <div class="breadcrum-btn d-flex">
            <img
              src="images/navigate-arrow.svg"
              class="navigate-arrow nav-arrow-black"
            />
            <img
              src="images/navigate-arrow-white.svg"
              class="navigate-arrow nav-arrow-white d-none"
            />
            <span class="navigate">Navigate</span>
          </div>
          <div class="breadcrum-list">
            <ul>
              <li class="disable">
                <span class="bullets"></span>
                <span class="page-name">Our Work</span>
              </li>
              <li class="home">
                <a href="">
                  <span class="bullets"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {}
</script>

<style></style>
