<template>
  <div class="min-h-screen flex flex-col">
    <PageLoader v-if="isPageLoading" />
    <div v-else class="flex flex-col h-screen">
      <!-- Navbar Component -->
      <Navbar :user="user" @logout="logout" />
      
      <!-- Content Section with added padding -->
      <div class="flex-grow px-6 py-10 sm:px-10 lg:px-20 pt-24">
        <!-- Instructions Section -->
        <ol class="list-decimal list-inside text-lg space-y-4">
          <b style="font-size: 32px;">Cara membeli dan membayar fasilitator</b>
          <!-- <li>Kunjungi laman Gointerling di <a href="https://www.gointerling.com/" target="_blank" class="text-blue-500 underline">gointerling.com</a>.</li> -->
          <li>
            Klik tombol <span class="font-bold">"Let's Start Translation"</span> pada halaman utama.
            <!-- Image under step 2 -->
            <div class="mt-4 flex justify-center">
              <img src="@/assets/images/translate.png" alt="Sign In Image" class="rounded-lg shadow-lg" style="width: 750px; height: auto;">
            </div>
          </li>
          <li>
            Pilih salah satu translator yang diinginkan pada menu translation dan pilih order now.
            <!-- Image under step 3 -->
            <div class="mt-4 flex justify-center">
              <img src="@/assets/images/order.png" alt="Register Image" class="rounded-lg shadow-lg" style="width: 750px; height: auto;">
            </div>
          </li>
          <li>
            Setelah itu muncul menu untuk pemilihan bahasa yang ingin di translate.
            <!-- Image under step 4 -->
            <div class="mt-4 flex justify-center">
              <img src="@/assets/images/your.png" alt="Email and Password Image" class="rounded-lg shadow-lg" style="width: 750px; height: auto;">
            </div>
          </li>
          <li>
            Setelah melakukan transfer ke rekening yang tercantum, pastikan berikan bukti pembayaran, baik dalam bentuk screenshot atau foto.
            <!-- Image under step 4 -->
            <div class="mt-4 flex justify-center">
              <img src="@/assets/images/proff.png" alt="Email and Password Image" class="rounded-lg shadow-lg" style="width: 750px; height: auto;">
            </div>
          </li>
          <li>
            Klik tombol <span class="font-bold">"Upload Proof of Payment" </span> yang ada di bagian bawah informasi pembayaran. 
          </li>
          <li>
            Setelah selesai status pembelian akan berubah, klik pada menu order history pada navbar di atas untuk melihat status pembayaran .
            <!-- Image under step 4 -->
            <div class="mt-4 flex justify-center">
              <img src="@/assets/images/list.png" alt="Email and Password Image" class="rounded-lg shadow-lg" style="width: 750px; height: auto;">
            </div>
          </li>
          <li>
           Tunggu konfirmasi dari admin untuk informasi lebih lengkapnya. 
          </li>
        </ol>

        <!-- Image Section -->
        <!-- <div class="mt-8 flex justify-center">
          <img src="@/assets/images/logo.png" alt="Tutorial Image" class="rounded-lg shadow-lg">
        </div> -->
      </div>
    </div>
  </div>
</template>

<script setup>
// services
import PageLoader from "~/components/PageLoader.vue";
import Navbar from "~/components/Navbar.vue";

const router = useRouter();
const route = useRoute();
const toast = useToast();

const id = ref(route.params.id);

// state
const isPageLoading = ref(true);

// data
const user = ref(null);

// Fetch user data function
const fetchUser = async () => {
  try {
    user.value = useCookie("token").value.user || null;
  } catch (error) {
    console.error("Fetching user failed:", error);
  }
};

// Logout function
const logout = () => {
  useCookie("token").value = null;
  user.value = null;
};

// Mounted lifecycle hook
onMounted(async () => {
  // Fetch user data
  if (useCookie("token").value) {
    await fetchUser();
  }
  isPageLoading.value = false;
});
</script>

<style>
/* Custom styles */
.list-decimal > li {
  margin-bottom: 1rem;
}

.text-lg {
  font-size: 1.125rem;
}

/* Add padding at the top to ensure content starts below the navbar */
.pt-24 {
  padding-top: 6rem; /* Adjust this value if needed */
}
</style>
