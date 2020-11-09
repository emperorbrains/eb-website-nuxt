<template>
  <div>
    <Header />
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-10">
          <div class="client-logo">
            <h4>Trusted by</h4>
            <div class="client-image client-logo">
              <img src="/assets/images/inquiry-brand-logo-img.svg" alt="" />
            </div>
          </div>
          <!----------Company map----------->
          <div class="card" style="height: 40%; width: 100%">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3895.264100974316!2d78.36093853447211!3d17.44553392282797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93e98c875f7d%3A0x8bb5d43c2cca2c5c!2sEmperor%20Brains!5e0!3m2!1sen!2sin!4v1599800077487!5m2!1sen!2sin"
              width="550"
              height="450"
              frameborder="0"
              style="border: 0"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </div>
          <div class="inquiry d-flex justify-content-between">
            <p>All projects secured by NDA & IP is your's</p>
            <p class="float-right">100% Secure. Zero Spam.</p>
          </div>
          <div class="copyright-recaptcha">
            <p class="pt-3">
              This site is protected by reCAPTCHA and the Google
              <a href="https://policies.google.com/privacy">Privacy Policy</a>
              and
              <a href="https://policies.google.com/terms">Terms of Service</a>
              apply.
            </p>
          </div>
        </div>
        <!------------------Form------------------------>
        <div class="col-lg-6 col-md-10">
          <div class="form">
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputName">Name</label>
                <input
                  id="inputName"
                  type="text"
                  class="form-control"
                  placeholder="FirstName"
                />
              </div>
              <div class="form-group col-md-6">
                <label for="inputName" class="mt-3"></label>
                <input
                  id="inputName"
                  type="text"
                  class="form-control"
                  placeholder="LastName"
                />
              </div>
            </div>
            <div class="form-group">
              <label for="inputEmail">Email</label>
              <input type="email" class="form-control" placeholder="Email" />
            </div>

            <div class="form-group">
              <label for="contact_number">Mobile Phone</label>
              <div
                class="intl-tel-input allow-dropdown separate-dial-code iti-sdc-3"
              >
                <div class="flag-container">
                  <div class="selected-flag" tabindex="0" title="India: +91">
                    <div class="iti-flag in"></div>
                    <div class="selected-dial-code">+91</div>
                    <div class="iti-arrow"></div>
                  </div>
                  <ul class="country-list hide">
                    <li
                      class="country preferred"
                      data-dial-code="1"
                      data-country-code="us"
                    >
                      <div class="flag-box">
                        <div class="iti-flag us"></div>
                      </div>
                      <span class="country-name">United State</span>
                      <span class="dial-code">+1</span>
                    </li>
                  </ul>
                </div>
                <input
                  id="contact_number"
                  class="contact-number contact-number-footer ng-untouched ng-pristine ng-invalid"
                  data-ref="contact_number"
                  maxlength="15"
                  name="contact_number"
                  placeholder="81234 56789"
                  required=""
                  type="tel"
                  autocomplete="off"
                />
              </div>
            </div>

            <div class="form-group">
              <label for="formControlSelect1">Select a Service</label>
              <select id="formControlSelect1" class="form-control">
                <option>Select</option>
                <option>Mobile Application Development</option>
                <option>Web Development</option>
                <option>UX/UI Design</option>
                <option>Mobile Games Development</option>
                <option>QA Services</option>
                <option>Other</option>
              </select>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputBudget">Budget</label>
                <select id="inputBudget" class="form-control">
                  <option>Select</option>
                  <option>$5k</option>
                  <option>$10k+</option>
                  <option>$25k+</option>
                  <option>$50k+</option>
                  <option>$100k+</option>
                  <option>Not Sure</option>
                </select>
              </div>
              <div class="form-group col-md-6">
                <label for="inputStart">How soon you want to start?</label>
                <select id="inputStart" class="form-control">
                  <option>Select</option>
                  <option>Right Now</option>
                  <option>In few week</option>
                  <option>In few months</option>
                  <option>Not sure</option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <label for="inputRequirement">Requriment</label>
              <select id="inputRequirement" class="form-control">
                <option>Select</option>
                <option>Higher Dedicated Team</option>
                <option>New Project</option>
                <option>Existig Project</option>
                <option>Support- Mainteance</option>
              </select>
            </div>
            <div class="form-group">
              <label for="textareaDescription">Brief about the project</label>
              <textarea
                id="textareaDescription"
                class="form-control"
                rows="3"
              ></textarea>
            </div>
            <div class="form-group">
              <div class="group file-upload-sec">
                <label for="file">Have a file to share?</label>
                <div class="projectfileupload">
                  <input
                    id="inputfile"
                    type="file"
                    class="form-control-file text-danger font-weight-bold"
                  />
                  <p id="inputfiledetail">Select or Drop your file here</p>
                </div>
                <p class="upload-file-size">
                  Only Document, Image or ZIP file. Max size 8MB
                </p>
              </div>
            </div>
            <button class="btn rounded-pill" type="button">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
