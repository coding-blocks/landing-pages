<template>
  <div>
    <div class="c-testimonial-video">
      <div class="back-div bg-gradient-black-lr"></div>
      <h2 class="white">What our students say about us</h2>
      <h2 class="yellow semi-bold">Rashid Saifi shares his experience of Machine Learning Course</h2>
      <div class="video-container">
        <iframe :src="videoLink" frameborder="0" loading="lazy"></iframe>
      </div>
    </div>
    <div class="container mt-5">
      <div class="row mb-5 pb-5 justify-content-center">
        <div class="c-testimonial col-12 flex-col col-md-4 mb-5">
          <div class="dialog mb-2">
            <div
              class="content"
            >Coding Blocks helped in gaining enough experience to get internships at giants like Google and Rubrik.</div>
            <div class="footer bold">
              Placed at:
              <div class="img-container">
                <img
                  src="https://minio.codingblocks.com/codingblocks-assets/google.png"
                  alt
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div class="round mb-3 mt-4 s-100x100">
            <img
              src="https://minio.codingblocks.com/codingblocks-assets/1536154281747.jpeg"
              alt
              loading="lazy"
            />
          </div>
          <div class="extra-bold font-sm">ANSHUL MITTAL</div>
          <div class="semi-bold font-sm">Android Development Course</div>
        </div>

        <div class="c-testimonial col-12 flex-col col-md-4 mb-5">
          <div class="dialog mb-2">
            <div class="content">
              My journey in the world of Competitive Programming started with the Bootcamp at Coding Blocks, which turned out to be a
              changing point in my life. The immense amount of knowledge I got during the course did not only develop my interest but
              also made me pursue this field later. A special thanks to Shubham bhaiya, Mayank bhaiya and Prateek bhaiya for being the
              guiding lights in my journey and always motivating us to follow our passion!
            </div>
            <div class="footer bold">
              Placed at:
              <div class="img-container">
                <img
                  src="https://minio.codingblocks.com/codingblocks-assets/uber.png"
                  alt
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div class="round mb-3 mt-4 s-100x100">
            <img
              src="https://minio.codingblocks.com/codingblocks-assets/1538401462569.jpeg"
              alt
              loading="lazy"
            />
          </div>
          <div class="extra-bold font-sm">SAMARTH JAIN</div>
          <div class="semi-bold font-sm">Competitive Programming</div>
        </div>

        <div class="c-testimonial col-12 flex-col col-md-4 mb-5">
          <div class="dialog mb-2">
            <div class="content">
              Hii I am Sidharth Bansal from Delhi technology university. I have done competitive boot camp from coding blocks. This
              gave me a great exposure to problem solving mindset.
            </div>
            <div class="footer bold">
              Placed at:
              <div class="img-container">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Amazon_logo_plain.svg/1280px-Amazon_logo_plain.svg.png"
                  alt
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div class="round mb-3 mt-4 s-100x100">
            <img
              src="https://minio.codingblocks.com/codingblocks-assets/1537792831355.jpeg"
              alt
              loading="lazy"
            />
          </div>
          <div class="extra-bold font-sm">SIDHARTH BANSAL</div>
          <div class="semi-bold font-sm">Web Development</div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: ['videoLink']
}
</script>