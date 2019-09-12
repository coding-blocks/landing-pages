<template>
  <div>
    <div class="container mt-5">
      <div class="c-summary row mb-5">
        <div class="col-12 col-md-7 pr-md-5">
          <div class="img-desc no-gutters mb-3">
            <div class="col-3 col-sm-2 pr-4">
              <img
                class="round"
                src="https://minio.codingblocks.com/amoeba/1008db10-135f-4b2b-a65a-5eee36be2171.svg"
                alt
              />
            </div>
            <div class="description col-9 col-sm-7 pl-3">
              <div>
                <h2 class="mb-2"> {{ course.title }} </h2>
                <div class="grey font-mds mb-2">
                  {{ course.subtitle }}
                </div>
                <div class="font-mds bold mb-3">
                  Taught By:
                  <span class="grey">
                    <span v-for="instructor in course.instructors" :key="instructor.id">
                      {{ /* instructor.name */}} 
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="mb-5">
            <div class="d-flex badge" v-if="!course.organization">
              <h3 class="white col-10 col-sm-8">
                Get Certified & Win Goodies.
                <br />
                <span class="red">with this course</span>
              </h3>
              <img src="/images/stamp.png" alt="Coding Blocks Pvt Ltd" />
            </div>

            <h3 class="mt-5" v-if="course.language">
              Language
            </h3>
            <div class="font-mds grey" v-if="course.language">
              All course contents will be in 
              <span class="black">
                {{course.language}}
              </span>
            </div>

            <h3 class="mb-3 mt-5">Summary</h3>

            <div class="para summary grey">
              {{ course.summary }}
            </div>

            <p class="mt-5">Major Topics Covered</p>

            <div v-if="course.topRun && course.topRun.tags">
              <span class="pill m-1" v-for="tag in course.topRun.tags" :key="tag.id">
                {{ tag.name }}
              </span>
            </div>
          </div>

          <h3 class="mb-4" v-hide="getRatingStats.isRunning">Student Feedback</h3>

          <div class="row c-rating-stats no-gutters" v-hide="getRatingStats.isRunning">
            <div class="col-4 score">
              <span class="font-lg bold">{{ course.rating }}</span>
              <span class="bold font-md">out of 5</span>

              <div class="rating">
                <span class="pos-rating pr-2">
                  <i class="fas fa-star"></i>
                </span>
                <span class="pos-rating pr-2">
                  <i class="fas fa-star"></i>
                </span>
                <span class="pos-rating pr-2">
                  <i class="fas fa-star"></i>
                </span>
                <span class="pos-rating pr-2">
                  <i class="fas fa-star"></i>
                </span>
                <span class="neg-rating">
                  <i class="fas fa-star"></i>
                </span>
              </div>

              <div class="font-md extra-bold">
                {{course.reviewCount}} Ratings
              </div>
            </div>
            <div class="col-8 stats">
              <div class="row">
                <div class="col-12 col-sm-7">
                  <progress value="0.7"></progress>
                </div>
                <div class="col-5 rating">
                  <span class="pos-rating">
                    <i class="fas fa-star"></i>
                  </span>
                  <span class="pos-rating">
                    <i class="fas fa-star"></i>
                  </span>
                  <span class="pos-rating">
                    <i class="fas fa-star"></i>
                  </span>
                  <span class="pos-rating">
                    <i class="fas fa-star"></i>
                  </span>
                  <span class="pos-rating">
                    <i class="fas fa-star"></i>
                  </span>
                </div>
              </div>

              <div class="row">
                <div class="col-12 col-sm-7">
                  <progress value="0.4"></progress>
                </div>
                <div class="col-5 rating">
                  <span class="pos-rating">
                    <i class="fas fa-star"></i>
                  </span>
                  <span class="pos-rating">
                    <i class="fas fa-star"></i>
                  </span>
                  <span class="pos-rating">
                    <i class="fas fa-star"></i>
                  </span>
                  <span class="pos-rating">
                    <i class="fas fa-star"></i>
                  </span>
                </div>
              </div>

              <div class="row">
                <div class="col-12 col-sm-7">
                  <progress value="0.8"></progress>
                </div>
                <div class="col-5 rating">
                  <span class="pos-rating">
                    <i class="fas fa-star"></i>
                  </span>
                  <span class="pos-rating">
                    <i class="fas fa-star"></i>
                  </span>
                  <span class="pos-rating">
                    <i class="fas fa-star"></i>
                  </span>
                </div>
              </div>

              <div class="row">
                <div class="col-12 col-sm-7">
                  <progress value="0.3"></progress>
                </div>
                <div class="col-5 rating">
                  <span class="pos-rating">
                    <i class="fas fa-star"></i>
                  </span>
                  <span class="pos-rating">
                    <i class="fas fa-star"></i>
                  </span>
                </div>
              </div>

              <div class="row">
                <div class="col-12 col-sm-7">
                  <progress value="0.5"></progress>
                </div>
                <div class="col-5 rating">
                  <span class="pos-rating">
                    <i class="fas fa-star"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div class="col-12 col-md-5 pr-md-0">
          <div class="c-buy-right">
            <div class="border-card">
              <div class="card-video">
                <iframe
                  class="video"
                  :src="course.promoVideo"
                  controls
                  allowfullscreen
                ></iframe>
              </div>
              <div class="button-container row justify-content-center">
                <button class="button-solid col-5">BUY NOW TO ENROLL</button>
                <button class="button-dashed col-5">ENROLL VIA OTP</button>
              </div>

              <div class="course-features" v-if="course.coursefeatures">
                <div class="row justify-content-center">
                  <div class="col-6 d-flex align-items-center mb-5" v-for="feature in course.coursefeatures" :key="feature.id">
                    <div class="col-5 pl-0">
                      <img
                        :src="feature.icon"
                        alt
                      />
                    </div>
                    <div class="col-7 align-self-center font-sm pr-0">{{ feature.text }}</div>
                  </div>
                </div>
              </div>

              <div class="footer" v-if="!course.organization">
                <img class="floating-img" src="/images/free.png" alt="free" />
                <div class="row red">
                  <div class="col-8">
                    Get a
                    <span class="white">Wildcraft Backpack</span> and
                    lots of goodies with this course!
                  </div>
                  <div class="col-4">
                    <img src="/images/wildcraft.png" alt="wildcraft" />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

        <div class="border-card mt-4" v-if="course.faq">
          <h3>Frequently Asked Questions</h3>
          <hr>
          <div>
            {{course.faq}} 
          </div>
        </div>

      <div class="row c-card-carousel pb-3">
        <div class="col-8 col-md-4 col-lg-3">
          <div class="border-card round c-rating-card">
            <div class="row justify-content-between no-gutters">
              <div class="bold card-md">Sid_90</div>
              <div class="grey card-md">8 hours ago</div>
            </div>

            <div
              class="heading text-ellipses"
            >Great Experience! fantastic experience! Had a great time learning from the fantastic teachers.</div>

            <div class="rating">
              <span class="pos-rating">
                <i class="fas fa-star"></i>
              </span>
              <span class="pos-rating">
                <i class="fas fa-star"></i>
              </span>
              <span class="pos-rating">
                <i class="fas fa-star"></i>
              </span>
              <span class="pos-rating">
                <i class="fas fa-star"></i>
              </span>
              <span class="neg-rating">
                <i class="fas fa-star"></i>
              </span>
            </div>

            <div class="review grey">
              The course was pretty basic but good. The teacher was clear while speakin so I definitely reccomend
              this
              to start and get an idea about how Shopify works.
            </div>
          </div>
        </div>
        <div class="col-8 col-md-4 col-lg-3">
          <div class="border-card round c-rating-card">
            <div class="row justify-content-between no-gutters">
              <div class="bold font-sm">Sid_90</div>
              <div class="grey card-md">8 hours ago</div>
            </div>

            <div
              class="heading text-ellipses"
            >Great Experience! fantastic experience! Had a great time learning from the fantastic teachers.</div>

            <div class="rating">
              <span class="pos-rating">
                <i class="fas fa-star"></i>
              </span>
              <span class="pos-rating">
                <i class="fas fa-star"></i>
              </span>
              <span class="pos-rating">
                <i class="fas fa-star"></i>
              </span>
              <span class="pos-rating">
                <i class="fas fa-star"></i>
              </span>
              <span class="neg-rating">
                <i class="fas fa-star"></i>
              </span>
            </div>

            <div class="review grey">
              The course was pretty basic but good. The teacher was clear while speakin so I definitely reccomend
              this
              to start and get an idea about how Shopify works.
            </div>
          </div>
        </div>

        <div class="col-8 col-md-4 col-lg-3">
          <div class="border-card round c-rating-card">
            <div class="row justify-content-between no-gutters">
              <div class="bold font-sm">Sid_90</div>
              <div class="grey card-md">8 hours ago</div>
            </div>

            <div
              class="heading text-ellipses"
            >Great Experience! fantastic experience! Had a great time learning from the fantastic teachers.</div>

            <div class="rating">
              <span class="pos-rating">
                <i class="fas fa-star"></i>
              </span>
              <span class="pos-rating">
                <i class="fas fa-star"></i>
              </span>
              <span class="pos-rating">
                <i class="fas fa-star"></i>
              </span>
              <span class="pos-rating">
                <i class="fas fa-star"></i>
              </span>
              <span class="neg-rating">
                <i class="fas fa-star"></i>
              </span>
            </div>

            <div class="review grey">
              The course was pretty basic but good. The teacher was clear while speakin so I definitely reccomend
              this
              to start and get an idea about how Shopify works.
            </div>
          </div>
        </div>

        <div class="col-8 col-md-4 col-lg-3">
          <div class="border-card round c-rating-card">
            <div class="row justify-content-between no-gutters">
              <div class="bold font-sm">Sid_90</div>
              <div class="grey card-md">8 hours ago</div>
            </div>

            <div class="heading text-ellipses">Great Experience</div>

            <div class="rating">
              <span class="pos-rating">
                <i class="fas fa-star"></i>
              </span>
              <span class="pos-rating">
                <i class="fas fa-star"></i>
              </span>
              <span class="pos-rating">
                <i class="fas fa-star"></i>
              </span>
              <span class="pos-rating">
                <i class="fas fa-star"></i>
              </span>
              <span class="neg-rating">
                <i class="fas fa-star"></i>
              </span>
            </div>

            <div class="review grey">
              The course was pretty basic but good. The teacher was clear while speakin so I definitely reccomend
              this
              to start and get an idea about how Shopify works.
            </div>
          </div>
        </div>

        <div class="col-8 col-md-4 col-lg-3">
          <div class="border-card round c-rating-card">
            <div class="row justify-content-between no-gutters">
              <div class="bold font-sm">Sid_90</div>
              <div class="grey card-md">8 hours ago</div>
            </div>

            <div class="heading text-ellipses">Great Experience</div>

            <div class="rating">
              <span class="pos-rating">
                <i class="fas fa-star"></i>
              </span>
              <span class="pos-rating">
                <i class="fas fa-star"></i>
              </span>
              <span class="pos-rating">
                <i class="fas fa-star"></i>
              </span>
              <span class="pos-rating">
                <i class="fas fa-star"></i>
              </span>
              <span class="neg-rating">
                <i class="fas fa-star"></i>
              </span>
            </div>

            <div class="review grey">
              The course was pretty basic but good. The teacher was clear while speakin so I definitely reccomend
              this
              to start and get an idea about how Shopify works.
              The course was pretty basic but good. The teacher was clear while speakin so I definitely reccomend
              this
              to start and get an idea about how Shopify works.
              The course was pretty basic but good. The teacher was clear while speakin so I definitely reccomend
              this
              to start and get an idea about how Shopify works.
              The course was pretty basic but good. The teacher was clear while speakin so I definitely reccomend
              this
              to start and get an idea about how Shopify works.
              The course was pretty basic but good. The teacher was clear while speakin so I definitely reccomend
              this
              to start and get an idea about how Shopify works.
            </div>
          </div>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-12 col-md-9">
          <h3 class="mb-5">What will you learn?</h3>
          <div class="border-card c-accordion-card">
            <div class="c-accordion c-about-accordion">
              <div class="list-divided border-none">
                <div class="list-divided border-none">
                  <div class="row no-gutters pointer">
                    <div class="li-left col-12 col-sm-8">
                      <div class="col-1">-</div>
                      <div class="col-10">Mathematics 1.0</div>
                    </div>
                    <div class="li-right col-4 dsp-none-xs">
                      <div>4 Lectures</div>
                      <div>03:34</div>
                    </div>
                  </div>
                  <div class="pb-4 pt-4">
                    <div class="row red no-gutters pointer">
                      <div class="li-left col-12 col-sm-8">
                        <div class="col-1 code-icon-red content-icon"></div>
                        <div class="col-10">Chewbacca and Number, HackerBlocks Tutorial</div>
                      </div>
                      <div class="li-right dsp-none-xs col-4">
                        <div>Preview</div>
                        <div class="grey">03:34</div>
                      </div>
                    </div>

                    <div class="row red no-gutters pointer">
                      <div class="li-left col-12 col-sm-8">
                        <div class="col-1 play-icon-red content-icon"></div>
                        <div class="col-10">Tavas and SaDDas, Codeforces 535-B</div>
                      </div>
                      <div class="li-right no-gutters dsp-none-xs col-4">
                        <div class="col-6">Preview</div>
                        <div class="grey col-6">03:34</div>
                      </div>
                    </div>

                    <div class="row grey no-gutters pointer">
                      <div class="li-left col-12 col-sm-8">
                        <div class="col-1 play-icon-red content-icon"></div>
                        <div class="col-10">Fast Exponentiation</div>
                      </div>
                      <div class="li-right dsp-none-xs col-4">
                        <div class="t-align-c">
                          <i class="fas fa-lock"></i>
                        </div>
                        <div class="grey">03:34</div>
                      </div>
                    </div>

                    <div class="row grey no-gutters pointer">
                      <div class="li-left col-12 col-sm-8">
                        <div class="col-1 play-icon-red content-icon"></div>
                        <div class="col-10">Unique Number-III, Hackerblocks, Bitmasking</div>
                      </div>
                      <div class="li-right dsp-none-xs col-4">
                        <div class="t-align-c">
                          <i class="fas fa-lock"></i>
                        </div>
                        <div class="grey">03:34</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="list-divided border-none">
                  <div class="row no-gutters pointer">
                    <div class="li-left col-12 col-sm-8">
                      <div class="col-1">-</div>
                      <div class="col-10">Mathematics 1.0</div>
                    </div>
                    <div class="li-right col-4 dsp-none-xs">
                      <div>4 Lectures</div>
                      <div>03:34</div>
                    </div>
                  </div>
                </div>

                <div class="list-divided border-none">
                  <div class="row no-gutters pointer">
                    <div class="li-left col-12 col-sm-8">
                      <div class="col-1">-</div>
                      <div class="col-10">Mathematics 1.0</div>
                    </div>
                    <div class="li-right col-4 dsp-none-xs">
                      <div>4 Lectures</div>
                      <div>03:34</div>
                    </div>
                  </div>
                </div>

                <div class="list-divided border-none">
                  <div class="row no-gutters pointer">
                    <div class="li-left col-12 col-sm-8">
                      <div class="col-1">-</div>
                      <div class="col-10">Mathematics 1.0</div>
                    </div>
                    <div class="li-right col-4 dsp-none-xs">
                      <div>4 Lectures</div>
                      <div>03:34</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-3">
          <h3 class="mb-5">Projects</h3>
          <div class="row">
            <div class="col-12 mb-4">
              <div class="img-card">
                <div class="head">
                  <img class="back-img" src="images/android.svg" />
                  <div class="content white">
                    <h4>Project 1</h4>
                  </div>
                </div>
                <div class="foot">
                  <h4>Log Analysis</h4>
                  <div class="card-md">
                    Analyze data from the logs of a web service to answer questions such as "What is the
                    most popular page?" and "When was
                    the error rate high?" using advanced SQL queries
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 mb-4">
              <div class="img-card">
                <div class="head">
                  <img class="back-img" src="images/android.svg" />
                  <div class="content white">
                    <h4>Project 1</h4>
                  </div>
                </div>
                <div class="foot">
                  <h4>Log Analysis</h4>
                  <div class="card-md">
                    Analyze data from the logs of a web service to answer questions such as "What is the
                    most popular page?" and "When was
                    the error rate high?" using advanced SQL queries
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 mb-4">
              <div class="img-card">
                <div class="head">
                  <img class="back-img" src="images/android.svg" />
                  <div class="content white">
                    <h4>Project 1</h4>
                  </div>
                </div>
                <div class="foot">
                  <h4>Log Analysis</h4>
                  <div class="card-md">
                    Analyze data from the logs of a web service to answer questions such as "What is the
                    most popular page?" and "When was
                    the error rate high?" using advanced SQL queries
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { Deserializer } from 'jsonapi-serializer'

export default {
  async asyncData ({ params, $axios }) {
    const res = await $axios.get(`/courses/${params.id}`)
    return  {
      course: await (new Deserializer()).deserialize(res.data)
    }
  },
  data() {
    return {
      course: {
        instructors: [{ id: 2 }]
      },
      session: {
        isAuthenticated: false
      }
    }
  },
  methods: {
    logIn() {}
  }
}
</script>