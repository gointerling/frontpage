<template>
  <UModal
    v-model="internalIsOpen"
    fullscreen
    prevent-close
    :ui="{
      base: '!w-full sm:!w-[600px] absolute top-0 right-0 h-screen bg-white dark:bg-gray-800 rounded-l-3xl',
      rounded: 'rounded-l-3xl rounded-r-0',
    }"
  >
    <UCard
      :ui="{
        base: 'h-full',
        ring: '',
        divide: 'divide-y divide-gray-100 dark:divide-gray-800',
        rounded: 'rounded-l-3xl rounded-r-0',
        body: {
          base: 'flex flex-col justify-between h-full',
          padding: 'px-6 py-5 sm:p-10',
        },
        header: {
          padding: 'px-6 py-5 sm:px-8',
        },
        footer: {
          padding: 'px-6 py-4 sm:px-10',
        },
      }"
    >
      <div
        class="flex justify-between items-center w-full border-b border-1 pb-4"
      >
        <button @click="hideSidebar">
          <nuxt-icon
            name="back"
            class="text-2xl text-primary dark:text-gray-300"
          />
        </button>
        <h3
          class="text-lg font-semibold w-full flex justify-center text-primary"
        >
          Discussions
        </h3>
      </div>

      <div class="flex flex-col items-center justify-between w-full h-full">
        <div v-if="props.data.comments.total === 0" class="py-4 text-gray-400">
          Start Discussion
        </div>
        <UButton
          v-if="commentlimit < props.data.comments.total"
          block
          color="primary"
          variant="soft"
          class="my-4 bg-blue-100 hover:bg-blue-200"
          @click="commentlimit = props.data.comments.total"
        >
          <UIcon name="i-heroicons-chat-bubble-oval-left-ellipsis" />
          Load Previous Comments
        </UButton>

        <div
          id="comment-section"
          class="w-full h-full max-h-[550px] overflow-auto px-2 py-1"
        >
          <div
            v-for="comment in filteredComments"
            :key="comment"
            class="w-full"
          >
            <!-- You -->
            <div v-if="comment.is_facilitator" class="pb-4">
              <UCard
                :ui="{
                  body: {
                    base: 'w-full',
                    padding: 'p-4 sm:p-4',
                  },
                }"
                class="flex gap-4 items-center w-ful bg-gray-100"
              >
                <!-- Your content here -->
              </UCard>
            </div>

            <!-- Others -->
            <div v-else class="pb-4">
              <UCard
                :ui="{
                  body: {
                    base: 'w-full',
                    padding: 'p-4 sm:p-4',
                  },
                }"
                class="flex gap-4 items-center w-full"
              >
                <!-- Others content here -->
              </UCard>
            </div>
          </div>
        </div>
      </div>

      <UCard
        :ui="{
          body: {
            base: 'w-full',
            padding: 'p-4 sm:p-2',
          },
        }"
        class="flex gap-4 items-center w-full"
      >
        <UTextarea
          v-model="userComment.message"
          class="w-full mb-2"
          placeholder="Add Comment..."
          variant="none"
        />
        <div class="flex justify-end border-t border-1 pt-2 gap-2">
          <FileUpload
            :is-display-file="false"
            accept="*"
            max-size="6291456"
            @file-uploaded="setCommentFileUrl"
          />

          <UButton color="primary" @click="updateComment(userComment)">
            <UIcon name="i-heroicons-paper-airplane" />
            Send
          </UButton>
        </div>
      </UCard>
    </UCard>
  </UModal>
</template>

<script setup>
import { ref, watch } from "vue";

import { useOrderService } from "~/composables/useOrderService";
const { updateMerchantOrder } = useOrderService();

const route = useRoute();
const router = useRouter();
const toast = useToast();

// define props
const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
  data: {
    type: Object,
    default: () => ({
      id: 0,
      price: 0,
      comments: {
        data: [],
        total: 0,
      },
      callback: () => {},
    }),
  },
});

// emit event to update the prop value
const emit = defineEmits(["update:isOpen", "hide", "refresh"]);

const commentlimit = ref(3);
const user = useCookie("token").value.user;
const userComment = ref({
  user: {
    fullname: user.fullname,
    photo: user.photo,
  },
  message: "",
  time: new Date().toISOString(),
  file_url: "",
  other_link: "",
  is_facilitator: true,
});

const filteredComments = computed(() => {
  return props.data.comments.data.slice(0, commentlimit.value);
});

// internal state to handle the modal visibility
const internalIsOpen = ref(props.isOpen);

// watch for changes in the prop to update the internal state
watch(
  () => props.isOpen,
  (newVal) => {
    internalIsOpen.value = newVal;

    if (!newVal) {
      hideSidebar();
    }
  }
);

// watch for changes in the internal state to emit the event
watch(internalIsOpen, (newVal) => {
  emit("update:isOpen", newVal);
});

const hideSidebar = () => {
  internalIsOpen.value = false;

  emit("hide");
};

const formatDistanceToNow = (date) => {
  const now = new Date();
  const past = new Date(date);
  const diffInSeconds = Math.floor((now - past) / 1000);

  const intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1,
  };

  for (const interval in intervals) {
    const value = Math.floor(diffInSeconds / intervals[interval]);
    if (value >= 1) {
      return value === 1
        ? `${value} ${interval} ago`
        : `${value} ${interval}s ago`;
    }
  }
  return "just now";
};

const formatPrice = (price) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(price);
};

const setCommentFileUrl = (file) => {
  userComment.value.file_url = file;
};

const openNewTab = (url) => {
  window.open(url, "_blank");
};

const updatePropsComments = (comments) => {
  props.data.comments.data = comments;

  // emit event to update the prop value
  emit("refresh", props.data);
};

const updateComment = async (payload) => {
  const orderId = props.data.actions.id;
  const comment_payload = props.data.comments.data ?? [];

  if (!payload.message && payload.file_url) {
    payload.message = "Here I attached a file.";
  }

  if (!payload.message && !payload.file_url) {
    toast.add({
      title: "Failed!",
      color: "red",
      icon: "i-heroicons-x-circle",
      description: "Comment message is required!",
    });
    return;
  }

  comment_payload.push(payload);

  try {
    const { data } = await updateMerchantOrder(orderId, {
      comment_json: comment_payload,
    });
    // Show toast
    toast.add({
      title: "Success!",
      color: "green",
      icon: "i-heroicons-check-circle",
      description: "Order updated successfully!",
    });
    // fetch updated order

    // set props.data.comments.data with updated data
    updatePropsComments(comment_payload);

    // set comment limit
    commentlimit.value = comment_payload.length;

    // scroll to bottom of comment section and delay after 2ms
    setTimeout(() => {
      const commentSection = document.getElementById("comment-section");
      commentSection.scrollTop = commentSection.scrollHeight;
    }, 2);

    // reset comment
    userComment.value = {
      user: {
        fullname: user.fullname,
        photo: user.photo,
      },
      message: "",
      time: new Date().toISOString(),
      file_url: "",
      other_link: "",
      is_facilitator: true,
    };
  } catch (error) {
    console.error("Updating order failed:", error);
    // Show toast
    toast.add({
      title: "Failed!",
      color: "red",
      icon: "i-heroicons-x-circle",
      description: "Failed to update order!",
    });
  }
};
</script>
