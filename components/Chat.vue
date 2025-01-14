<template>
  <div
    v-show="isChatShow"
    class="fixed bottom-5 right-5 flex items-end space-x-2"
  >
    <!-- Chat Button Loading Animation -->
    <div>
      <div
        v-show="chatStore.isChatLoading && chatStore.isChatOpen"
        class="absolute bottom-5 right-5 px-4 pb-2 flex gap-2 align-middle items-center text-sm bg-primary text-accent hover:bg-blue-900 rounded-full"
      >
        <span class="text-xl text-white dot-animation">.</span>
        <span class="text-xl text-white dot-animation">.</span>
        <span class="text-xl text-white dot-animation">.</span>
      </div>
    </div>

    <!-- Chat Windows -->
    <div
      v-if="!chatStore.isChatLoading && selectedContact"
      class="w-full border rounded-lg flex flex-col font-sans"
    >
      <div
        class="flex items-center justify-between p-3 bg-gray-100 border-b rounded-t-md"
      >
        <div class="flex gap-2 items-center">
          <div>
            <button
              class="text-xl font-bold text-gray-500 hover:text-black"
              @click="backChat"
            >
              <nuxt-icon name="back" class="text-2xl" filled />
            </button>
          </div>
          <div class="flex items-center">
            <UAvatar
              size="xl"
              :alt="selectedContact.recipient_name"
              :src="selectedContact.recipient_picture"
              imgClass="rounded-full object-cover"
            />
            <div class="ml-1">
              <span class="block font-bold">{{
                selectedContact.recipient_name
              }}</span>
              <span class="text-sm text-gray-500">{{ userStatus }}</span>
            </div>
          </div>
        </div>
        <button
          class="text-xl font-bold text-gray-500 hover:text-black"
          @click="closeChat"
        >
          ×
        </button>
      </div>

      <div class="flex-1 p-3 overflow-y-auto bg-white">
        <!-- Loading indicator for messages -->
        <div v-if="isLoadingMessages" class="text-center py-2">
          <span class="text-gray-400 text-sm">Loading messages...</span>
        </div>

        <div
          v-if="messages.length === 0 && !isLoadingMessages"
          class="text-center py-2"
        >
          <span class="text-gray-400 text-sm">
            Start a conversation with {{ selectedContact.recipient_name }}
          </span>
        </div>

        <div
          v-if="messages.length !== 0 && !isLoadingMessages"
          class="max-h-[200px] overflow-y-auto pr-2"
          id="chat-window"
        >
          <div
            v-for="message in messages"
            :key="message.id"
            :class="{
              'text-right': message.sender_id === chatOwnerId,
              'text-left': message.sender_id !== chatOwnerId,
            }"
            class="my-2"
          >
            <span
              class="inline-block px-3 py-2 rounded-lg bg-accent text-white"
              :class="{
                'bg-primary text-white': message.sender_id === chatOwnerId,
              }"
            >
              {{ message.message }}
            </span>
          </div>
        </div>
      </div>

      <div class="flex items-center p-3 bg-gray-100 border-t rounded-b-md">
        <input
          v-model="newMessage"
          @keyup.enter="sendMessage"
          type="text"
          placeholder="Type your message"
          class="flex-1 border rounded-md px-3 py-2 mr-2"
        />
        <button
          @click="sendMessage"
          class="bg-primary text-white px-3 py-2 rounded-md hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>

    <!-- Chat Contact List -->
    <div
      v-if="!chatStore.isChatLoading && !selectedContact"
      class="w-full border rounded-lg flex flex-col font-sans"
    >
      <div
        class="flex justify-between items-center p-3 bg-primary rounded-t-md"
      >
        <span class="block font-bold text-white flex gap-2">
          <nuxt-icon name="chat" class="text-2xl text-white" />
          Live Chat</span
        >
        <button
          class="text-xl font-bold text-gray-500 hover:text-black"
          @click="closeChat"
        >
          ×
        </button>
      </div>
      <div class="flex items-center p-3 bg-white rounded-t-md">
        <div class="flex items-center flex-1 border rounded-md bg-gray-100">
          <input
            v-model="searchKey"
            type="text"
            placeholder="Search"
            class="flex-1 px-3 py-2 bg-transparent outline-none"
          />
          <UIcon
            name="i-heroicons-magnifying-glass"
            class="w-5 h-5 mr-3 text-gray-600"
          />
        </div>
      </div>

      <div class="flex-1 px-3 overflow-y-auto bg-white rounded-b-md pb-3">
        <!-- Loading indicator for contacts -->

        <div
          v-if="filteredContactList.length === 0 && !isLoadingContacts"
          class="text-center text-gray-400 flex flex-col items-center justify-center py-4"
        >
          <div v-if="!searchKey" class="flex flex-col items-center">
            <span class="text-gray-400 text-sm">No contacts found</span>
            <button
              @click="startConversation"
              class="bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-600 text-sm mt-2"
            >
              Start Conversation
            </button>
          </div>
          <span v-else class="text-gray-400 text-sm">No results found</span>
        </div>
        <div v-else class="max-h-[200px]">
          <div
            v-for="contact in filteredContactList"
            :key="contact.recipient_id"
            class="flex items-center justify-between p-3 w-full cursor-pointer hover:bg-gray-100"
            @click="selectContact(contact)"
            :class="{
              'border-b':
                contact !== filteredContactList[filteredContactList.length - 1],
              'rounded-t-md': contact === filteredContactList[0],
              'rounded-b-md':
                contact === filteredContactList[filteredContactList.length - 1],
            }"
          >
            <!-- card contact list -->
            <div class="flex items-center w-full">
              <UAvatar
                :alt="contact.recipient_name"
                :src="contact.recipient_picture"
                imgClass=" rounded-full object-cover"
                class="w-10 h-10"
              />
              <div class="flex flex-col flex-grow pl-3">
                <div class="flex justify-between items-center flex-grow">
                  <span class="font-bold flex items-center">
                    {{ contact.recipient_name }}

                    <!-- Badge -->
                    <span
                      v-if="contact.recipient_unread_count > 0"
                      class="bg-red-600 text-white text-xs px-2 ml-1 rounded-full"
                    >
                      {{
                        contact.recipient_unread_count > 10
                          ? 'New'
                          : contact.recipient_unread_count
                      }}
                    </span>
                  </span>
                  <span class="text-gray-300 text-sm">
                    {{
                      contact.recipient_last_chat_datetime !== ''
                        ? convertDatetime(contact.recipient_last_chat_datetime)
                        : 'New'
                    }}
                  </span>
                </div>
                <span
                  class="text-sm"
                  :class="
                    !contact.recipient_is_open
                      ? 'font-semibold text-gray-800'
                      : 'text-gray-400'
                  "
                >
                  {{
                    contact.recipient_last_chat !== ''
                      ? ellipsis(contact.recipient_last_chat)
                      : 'No messages yet'
                  }}
                </span>
                <span
                  v-if="contact.is_active"
                  class="text-xs text-green-500 mt-1"
                >
                  Online
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useCookie } from 'nuxt/app'
const { $supabase } = useNuxtApp()

// Props
defineProps({
  username: {
    type: String,
    default: 'Indah Risky',
  },
  userAvatar: {
    type: String,
    default: 'https://via.placeholder.com/50',
  },
  isChatShow: {
    type: Boolean,
    default: false,
  },
})

// store
import { useChatStore } from '~/stores/chat'
const chatStore = useChatStore()

// route
const route = useRoute()
const router = useRouter()

// Reactive state
const searchKey = ref('')
const contactList = ref([])
const messages = ref([])
const newMessage = ref('')
const selectedContact = ref(null)
const userStatus = ref('Available') // track user status
const isLoadingContacts = ref(false)
const isLoadingMessages = ref(false)

// Subscriptions references
let contactsSubscription = null
let chatsSubscription = null

// Get chat owner ID from cookie
let chatOwnerId = null
const tokenCookie = useCookie('token')
if (tokenCookie.value) {
  try {
    chatOwnerId = tokenCookie.value?.user?.chat_owner_id || null
  } catch (error) {
    console.error('Error parsing token:', error)
  }
}

const filteredContactList = computed(() => {
  // Sort the contact list by recipient_last_chat_datetime, ignoring empty or invalid datetimes
  const list = contactList.value.sort((a, b) => {
    const dateA = a.recipient_last_chat_datetime
      ? new Date(a.recipient_last_chat_datetime)
      : new Date(0)
    const dateB = b.recipient_last_chat_datetime
      ? new Date(b.recipient_last_chat_datetime)
      : new Date(0)

    // Sort in descending order (most recent date first)
    return dateB - dateA
  })

  // Filter contacts by recipient name
  return list.filter((contact) =>
    contact.recipient_name.toLowerCase().includes(searchKey.value.toLowerCase())
  )
})

// Methods
const fetchContacts = async () => {
  isLoadingContacts.value = true
  const { data, error } = await $supabase
    .from('contacts')
    .select('*')
    .eq('owner_id', chatOwnerId)

  if (error) {
    console.error('Error fetching contacts:', error)
  } else {
    contactList.value = data[0]?.contacts || []
    contactList.value.forEach((contact) => {
      contact.is_active = contact.recipient_id === chatOwnerId ? true : false
    })
    localStorage.setItem('chat-cache', JSON.stringify(contactList.value))

    // set unread count
    const unreadCount = contactList.value.reduce((acc, contact) => {
      return acc + contact.recipient_unread_count
    }, 0)

    chatStore.unreadMessages = unreadCount

    isLoadingContacts.value = false
  }
}

const fetchMessages = async () => {
  try {
    const { data, error } = await $supabase
      .from('chats')
      .select('*')
      .or(
        `and(sender_id.eq.${chatOwnerId},recipient_id.eq.${selectedContact.value.recipient_id}),` +
          `and(sender_id.eq.${selectedContact.value.recipient_id},recipient_id.eq.${chatOwnerId})`
      )
      .order('id', { ascending: true })

    if (error) throw error
    messages.value = data || []

    nextTick(() => {
      const chatWindow = document.querySelector('#chat-window')
      if (chatWindow) {
        chatWindow.scrollTop = chatWindow.scrollHeight
      }
    })

    // if selected contact is not empty, update the contact list to mark the messages as read
    if (selectedContact.value) {
      const contacts = contactList.value.map((contact) => {
        if (contact.recipient_id === selectedContact.value.recipient_id) {
          return {
            ...contact,
            recipient_unread_count: 0,
            recipient_is_open: true,
          }
        }
        return contact
      })

      const { error: errorContactsUpdate } = await $supabase
        .from('contacts')
        .update({
          contacts,
        })
        .eq('owner_id', chatOwnerId)

      if (errorContactsUpdate) {
        console.error('Error updating contact:', errorContactsUpdate)
      }
    }
  } catch (error) {
    console.error('Error fetching messages:', error)
  }
}

const sendMessage = async () => {
  if (!newMessage.value.trim()) {
    console.log('Message is empty, not sending.')
    return
  }

  const message = {
    message: newMessage.value,
    sender_id: chatOwnerId,
    sender_name: tokenCookie.value?.user.fullname,
    sender_picture: tokenCookie.value?.user.photo,
    recipient_id: selectedContact.value.recipient_id,
    recipient_name: selectedContact.value.recipient_name,
    recipient_picture: selectedContact.value.recipient_picture,
    is_read: false,
    created_at: new Date(),
  }

  // Insert message into 'chats' table
  const { error } = await $supabase.from('chats').insert([message])
  if (error) {
    console.error('Error sending message:', error)
    return
  }

  // Update sender's contact list
  messages.value.push(message)
  newMessage.value = ''

  const contacts = contactList.value.map((contact) => {
    if (contact.recipient_id === selectedContact.value.recipient_id) {
      return {
        ...contact,
        recipient_last_chat: message.message,
        recipient_last_chat_datetime: message.created_at,
        recipient_is_open: true,
        recipient_unread_count: 0,
      }
    }
    return contact
  })

  const { error: errorContactsUpdate } = await $supabase
    .from('contacts')
    .update({
      contacts,
    })
    .eq('owner_id', message.sender_id)

  if (errorContactsUpdate) {
    console.error('Error updating sender contact:', errorContactsUpdate)
  }

  // Update recipient's contact list
  const { data: recipientContact, error: errorRecipientContact } =
    await $supabase
      .from('contacts')
      .select('*')
      .eq('owner_id', message.recipient_id)

  if (errorRecipientContact) {
    console.error('Error fetching recipient contact:', errorRecipientContact)
  }

  if (recipientContact && recipientContact[0]) {
    const recipientContacts = recipientContact[0].contacts || []
    const recipientContactsUpdated = recipientContacts.map((contact) => {
      if (contact.recipient_id === message.sender_id) {
        return {
          ...contact,
          recipient_last_chat: message.message,
          recipient_last_chat_datetime: message.created_at,
          recipient_is_open: false,
          recipient_unread_count: contact.recipient_unread_count + 1,
        }
      }
      return contact
    })

    const { error: errorRecipient } = await $supabase
      .from('contacts')
      .update({
        contacts: recipientContactsUpdated,
      })
      .eq('owner_id', message.recipient_id)

    if (errorRecipient) {
      console.error('Error updating recipient contact:', errorRecipient)
    }
  }

  // Scroll to the bottom of the chat window
  nextTick(() => {
    const chatWindow = document.querySelector('#chat-window')
    if (chatWindow) {
      chatWindow.scrollTop = chatWindow.scrollHeight
    }
  })
}

const selectContact = (contact) => {
  selectedContact.value = contact
  fetchMessages()
}

const closeChat = () => {
  selectedContact.value = null
  chatStore.closeChat()
}

const backChat = async () => {
  // refresh contact last chat and unread count
  const contacts = contactList.value.map((contact) => {
    if (contact.recipient_id === selectedContact.value.recipient_id) {
      return {
        ...contact,
        recipient_last_chat: messages.value[messages.value.length - 1].message,
        recipient_last_chat_datetime:
          messages.value[messages.value.length - 1].created_at,
        recipient_is_open: true,
        recipient_unread_count: 0,
      }
    }
    return contact
  })

  const { error } = await $supabase
    .from('contacts')
    .update({
      contacts,
    })
    .eq('owner_id', chatOwnerId)

  if (error) {
    console.error('Error updating contact:', error)
  }

  // close chat
  selectedContact.value = null
}

const startConversation = () => {
  router.push({ name: 'facilitators' })
}

const convertDatetime = (datetime) => {
  const inputDate = new Date(datetime)
  const currentDate = new Date()

  // Check if the input date is today
  const isSameDay = inputDate.toDateString() === currentDate.toDateString()

  // Calculate the difference in days
  const dayDifference = Math.floor(
    (currentDate - inputDate) / (1000 * 60 * 60 * 24)
  )

  if (isSameDay) {
    // If it's the same day, return only the time HH:MM
    return inputDate.toLocaleTimeString(undefined, {
      hour: '2-digit',
      minute: '2-digit',
    })
  } else if (dayDifference === 1) {
    // If it's yesterday
    return 'Yesterday'
  } else if (dayDifference < 7) {
    // If it's within the past week, return the day of the week
    return inputDate.toLocaleDateString(undefined, { weekday: 'long' })
  } else {
    // For dates older than a week, return the full date
    return inputDate.toLocaleDateString()
  }
}

const ellipsis = (str) => {
  return str.length > 30 ? str.substring(0, 30) + '...' : str
}

// Real-time subscriptions
const subscribeToContacts = () => {
  contactsSubscription = $supabase
    .channel('contacts-changes')
    .on(
      'postgres_changes',
      {
        event: '*',
        schema: 'public',
        table: 'contacts',
        filter: `owner_id=eq.${chatOwnerId}`,
      },
      (payload) => {
        fetchContacts() // Refresh contact list
      }
    )
    .subscribe()
}

const subscribeToChats = () => {
  chatsSubscription = $supabase
    .channel('chats-changes')
    .on(
      'postgres_changes',
      {
        event: '*',
        schema: 'public',
        table: 'chats',
      },
      (payload) => {
        fetchMessages() // Refresh messages if the recipient or sender matches
      }
    )
    .subscribe()
}

// Watchers
// watch if pinia chat recipient is not null
watch(
  () => chatStore.recipient,
  (recipient) => {
    if (recipient) {
      selectedContact.value = contactList.value.find(
        (contact) => contact.recipient_id === recipient.id
      )
      fetchMessages()
    }
  }
)

onMounted(() => {
  fetchContacts()
  subscribeToContacts()
  subscribeToChats()
})

onUnmounted(() => {
  if (contactsSubscription) {
    $supabase.removeChannel(contactsSubscription)
  }
  if (chatsSubscription) {
    $supabase.removeChannel(chatsSubscription)
  }
})
</script>

<style scoped>
@keyframes blink {
  0%,
  100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}

.dot-animation {
  animation: blink 1.4s infinite;
}

.dot-animation:nth-child(2) {
  animation-delay: 0.2s;
}

.dot-animation:nth-child(3) {
  animation-delay: 0.4s;
}
</style>
