<template>
  <div class="min-h-screen flex flex-col">
    <PageLoader v-if="isPageLoading" />
    <div v-else class="flex flex-col h-screen">
      <!-- Navbar Component -->
      <Navbar :user="user" @logout="logout" />
      
      <!-- Content Section with added padding -->
      <div class="flex-grow px-6 py-10 sm:px-10 lg:px-20 pt-24">
        <!-- Instructions Section -->
        <ol class="list-decimal list-inside text-lg space-y-6">
          <b style="font-size: 32px;">Cara bergabung sebagai user</b>
          <li>Kunjungi laman Gointerling di <a href="https://www.gointerling.com/" target="_blank" class="text-blue-500 underline">gointerling.com</a>.</li>
          <li>
            Klik tombol <span class="font-bold">"Sign in as User"</span> yang berada di pojok kanan atas.
            <!-- Image under step 2 -->
            <div class="mt-4 flex justify-center">
              <img src="@/assets/images/signin.png" alt="Sign In Image" class="rounded-lg shadow-lg" style="width: 750px; height: auto;">
            </div>
          </li>
          <li>
            Klik pada register untuk mendaftarkan akun gointerling.
            <!-- Image under step 3 -->
            <div class="mt-4 flex justify-center">
              <img src="@/assets/images/register.png" alt="Register Image" class="rounded-lg shadow-lg" style="width: 750px; height: auto;">
            </div>
          </li>
          <li>
            Buat email dan password.
            <!-- Image under step 4 -->
            <div class="mt-4 flex justify-center">
              <img src="@/assets/images/email.png" alt="Email and Password Image" class="rounded-lg shadow-lg" style="width: 750px; height: auto;">
            </div>
          </li>
          <li>
            Setelah register kembali pada menu awal klik tombol <span class="font-bold">"Let's Start Translation"</span>.
            <!-- Image under step 2 -->
            <div class="mt-4 flex justify-center">
              <img src="@/assets/images/translate.png" alt="Sign In Image" class="rounded-lg shadow-lg" style="width: 750px; height: auto;">
            </div>
          </li>
          <li>
            Pilih translator yang diinginkan pada menu translation.
            <!-- Image under step 3 -->
            <div class="mt-4 flex justify-center">
              <img src="@/assets/images/menu.png" alt="Register Image" class="rounded-lg shadow-lg" style="width: 750px; height: auto;">
            </div>
          </li>
          <!-- <li>
            Buat email dan password.
            <div class="mt-4 flex justify-center">
              <img src="@/assets/images/email.png" alt="Email and Password Image" class="rounded-lg shadow-lg" style="width: 750px; height: auto;">
            </div>
          </li> -->
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
