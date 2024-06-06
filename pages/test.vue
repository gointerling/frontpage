<template>
  <div class="bg-gray-100 min-h-screen">
    <header class="bg-white shadow">
      <div class="container mx-auto py-4 flex justify-between items-center">
        <div class="flex items-center">
          <img :src="img" alt="Gointerling Logo" class="h-8" />
          <span class="text-lg font-bold ml-2">gointerling</span>
        </div>
        <div class="flex items-center">
          <a href="#" class="text-gray-500 hover:text-gray-700 mr-4"
            >Facillitator List</a
          >
          <a href="#" class="text-gray-500 hover:text-gray-700 mr-4"
            ><i class="fa fa-calendar"></i
          ></a>
          <a href="#" class="text-gray-500 hover:text-gray-700 mr-4"
            ><i class="fa fa-bell"></i
          ></a>
          <div class="relative">
            <img
              :src="img"
              alt="Profile Picture"
              class="rounded-full h-8 w-8"
            />
            <div
              class="absolute top-full right-0 mt-2 bg-white rounded-md shadow-md z-10"
            >
              <a
                href="#"
                class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >Misellia</a
              >
              <a
                href="#"
                class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >Settings</a
              >
              <a
                href="#"
                class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >Logout</a
              >
            </div>
          </div>
        </div>
      </div>
    </header>

    <section class="container mx-auto py-16">
      <div class="text-center">
        <h1 class="text-4xl font-bold text-gray-800 mb-4">GOINTERLING</h1>
        <p class="text-lg text-gray-600">
          "Gointerling is a job seeker and hiring service specifically for
          translators and interpreters."
        </p>
        <p class="text-lg text-gray-600 mt-2">
          Join gointerling now! Get the best deals for your translation or
          interpreter needs!
        </p>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        >
          let's start translation
        </button>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
        <div class="bg-white rounded-lg shadow-md p-6 text-center">
          <i class="fa fa-user-circle text-blue-500 text-3xl mb-4"></i>
          <h3 class="text-xl font-bold text-gray-800 mb-2">500+</h3>
          <p class="text-gray-600">Translators</p>
        </div>
        <div class="bg-white rounded-lg shadow-md p-6 text-center">
          <i class="fa fa-check-circle text-blue-500 text-3xl mb-4"></i>
          <h3 class="text-xl font-bold text-gray-800 mb-2">400+</h3>
          <p class="text-gray-600">Verified Clients</p>
        </div>
        <div class="bg-white rounded-lg shadow-md p-6 text-center">
          <i class="fa fa-file-alt text-blue-500 text-3xl mb-4"></i>
          <h3 class="text-xl font-bold text-gray-800 mb-2">300+</h3>
          <p class="text-gray-600">Secure Transaction</p>
        </div>
        <div class="bg-white rounded-lg shadow-md p-6 text-center">
          <i class="fa fa-hands-helping text-blue-500 text-3xl mb-4"></i>
          <h3 class="text-xl font-bold text-gray-800 mb-2">200+</h3>
          <p class="text-gray-600">Professional Service</p>
        </div>
      </div>

      <div class="mt-16">
        <h2 class="text-2xl font-bold text-gray-800 mb-4 text-center">
          Find 300+ Facilitators for The Language Translator You Need
        </h2>
        <div class="flex justify-center">
          <input
            type="text"
            class="rounded-md border border-gray-300 px-4 py-2 w-full md:w-1/2"
            placeholder="Search"
          />
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4"
          >
            Cari
          </button>
        </div>
      </div>

      <div class="mt-16">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <img :src="img" alt="Hero Image" class="w-full" />
          </div>
          <div>
            <h2 class="text-2xl font-bold text-gray-800 mb-4">
              Welcome to Gointerling
            </h2>
            <p class="text-gray-600">
              Your ultimate destination for all language services. Our platform
              offers two main categories: interpreters for seamless real-time
              spoken language support, and translators for accurate and polished
              written content. Whether you're hosting an international event or
              need precise document translation, our expert professionals are
              ready to elevate your communication.
            </p>
            <div class="flex justify-between mt-8">
              <div class="bg-blue-500 rounded-full p-2 text-white font-bold">
                <i class="fa fa-arrow-right"></i>
                Translator
              </div>
              <div class="bg-blue-500 rounded-full p-2 text-white font-bold">
                <i class="fa fa-arrow-right"></i>
                Interpreting
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-16">
        <h2 class="text-2xl font-bold text-gray-800 mb-4 text-center">
          Partner Collaboration;
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
          <div class="bg-white rounded-lg shadow-md p-6 text-center">
            <img :src="img" alt="Partner Logo" />
          </div>
          <div class="bg-white rounded-lg shadow-md p-6 text-center">
            <img :src="img" alt="Partner Logo" />
          </div>
          <div class="bg-white rounded-lg shadow-md p-6 text-center">
            <img :src="img" alt="Partner Logo" />
          </div>
          <div class="bg-white rounded-lg shadow-md p-6 text-center">
            <img :src="img" alt="Partner Logo" />
          </div>
          <div class="bg-white rounded-lg shadow-md p-6 text-center">
            <img :src="img" alt="Partner Logo" />
          </div>
          <div class="bg-white rounded-lg shadow-md p-6 text-center">
            <img :src="img" alt="Partner Logo" />
          </div>
          <div class="bg-white rounded-lg shadow-md p-6 text-center">
            <img :src="img" alt="Partner Logo" />
          </div>
          <div class="bg-white rounded-lg shadow-md p-6 text-center">
            <img :src="img" alt="Partner Logo" />
          </div>
        </div>
      </div>

      <div class="mt-16">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <img :src="img" alt="Facilitator Image" class="w-full" />
          </div>
          <div>
            <h2 class="text-2xl font-bold text-gray-800 mb-4">
              THESE FACILITATOR
            </h2>
            <p class="text-gray-600">
              Are professional translators. They are certified and recognized as
              experts in their specific fields, ensuring top-quality service and
              reliable results
            </p>
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            >
              let's start translation
            </button>
          </div>
        </div>
      </div>

      <div class="mt-16">
        <h2 class="text-2xl font-bold text-gray-800 mb-4 text-center">
          What Our User Have To Say
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div class="bg-white rounded-lg shadow-md p-6 text-center">
            <blockquote class="italic text-gray-600 mb-4">
              Gointering offers high-quality translation services for Mandarin
              Language. Their professional translators are certified experts in
              their fields, ensuring accurate and reliable results. With
              Gointering, you receive efficient and dependable translation
              services for your business or personal needs.
            </blockquote>
            <div class="flex items-center">
              <img
                :src="img"
                alt="Profile Picture"
                class="rounded-full h-8 w-8 mr-2"
              />
              <p class="text-gray-600">Asiatul Alni Aliyah</p>
              <p class="text-gray-600 ml-2">User - Mandarin</p>
            </div>
          </div>
          <div class="bg-white rounded-lg shadow-md p-6 text-center">
            <blockquote class="italic text-gray-600 mb-4">
              Gointering offers high-quality translation services for Mandarin
              Language. Their professional translators are certified experts in
              their fields, ensuring accurate and reliable results. With
              Gointering, you receive efficient and dependable translation
              services for your business or personal needs.
            </blockquote>
            <div class="flex items-center">
              <img
                :src="img"
                alt="Profile Picture"
                class="rounded-full h-8 w-8 mr-2"
              />
              <p class="text-gray-600">Asiatul Alni Aliyah</p>
              <p class="text-gray-600 ml-2">User - Mandarin</p>
            </div>
          </div>
          <div class="bg-white rounded-lg shadow-md p-6 text-center">
            <blockquote class="italic text-gray-600 mb-4">
              Gointering offers high-quality translation services for Mandarin
              Language. Their professional translators are certified experts in
              their fields, ensuring accurate and reliable results. With
              Gointering, you receive efficient and dependable translation
              services for your business or personal needs.
            </blockquote>
            <div class="flex items-center">
              <img
                :src="img"
                alt="Profile Picture"
                class="rounded-full h-8 w-8 mr-2"
              />
              <p class="text-gray-600">Asiatul Alni Aliyah</p>
              <p class="text-gray-600 ml-2">User - Mandarin</p>
            </div>
          </div>
        </div>
      </div>

      <footer class="bg-gray-900 text-white py-8 mt-16">
        <div class="container mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <img :src="img" alt="Gointerling Logo" class="h-8" />
              <span class="text-lg font-bold ml-2">gointerling</span>
            </div>
            <div>
              <h3 class="text-lg font-bold mb-4">Help</h3>
              <ul>
                <li class="text-gray-400 mb-2"><a href="#">Chat Admin</a></li>
                <li class="text-gray-400 mb-2"><a href="#">Order Status</a></li>
                <li class="text-gray-400 mb-2"><a href="#">Delivery</a></li>
              </ul>
            </div>
            <div>
              <h3 class="text-lg font-bold mb-4">Company</h3>
              <ul>
                <li class="text-gray-400 mb-2"><a href="#">About Us</a></li>
                <li class="text-gray-400 mb-2"><a href="#">News</a></li>
                <li class="text-gray-400 mb-2"><a href="#">Career</a></li>
              </ul>
            </div>
            <div>
              <h3 class="text-lg font-bold mb-4">Customer Care</h3>
              <p class="text-gray-400 mb-2">Phone Number</p>
              <p class="text-gray-400">081568277818</p>
              <p class="text-gray-400 mb-2">Email</p>
              <p class="text-gray-400">gointerling@gmail.com</p>
            </div>
            <div>
              <h3 class="text-lg font-bold mb-4">Our Social Media</h3>
              <a href="#" class="text-gray-400 mr-2"
                ><i class="fa fa-instagram"></i
              ></a>
              <a href="#" class="text-gray-400"
                ><i class="fa fa-facebook"></i
              ></a>
              <h3 class="text-lg font-bold mb-4 mt-4">Location</h3>
              <p class="text-gray-400">
                Jl. Colombo No.1, Karang Malang, Caturtunggal, Kec. Depok,
                Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281
              </p>
            </div>
          </div>
        </div>
      </footer>
    </section>
  </div>
</template>

<script>
export default {
  name: "LandingPage",
  data() {
    return {
      img: "https://fastly.picsum.photos/id/579/200/300.jpg?hmac=9MD8EV4Jl9EqKLkTj5kyNdBUKQWyHk2m4pE4UCBGc8Q",
    };
  },
};
</script>

<style scoped></style>
