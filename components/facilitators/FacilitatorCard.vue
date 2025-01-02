<template>
  <nuxt-link>
    <UCard
      :ui="{
        rounded: 'rounded-xl',
        body: {
          base: '',
          background: '',
          padding: '',
        },
      }"
    >
      <div class="flex flex-col items-center">
        <!-- img banner -->
        <img
          :src="bannerImage"
          alt="Facilitator Banner"
          class="w-full h-24 object-cover rounded-t-xl"
        />

        <UAvatar
          size="3xl"
          :alt="props.data.merchants[0].users[0].fullname"
          :src="props.data.merchants[0].users[0].photo"
          imgClass="object-cover"
          class="-mt-10"
        />
        <h2 class="font-semibold py-2 capitalize text-center">
          {{ props.data.merchants[0].users[0].fullname }}
        </h2>

        <UBadge
          variant="soft"
          size="sm"
          :color="
            props.data.merchants[0].type === 'interpreter' ? 'orange' : 'green'
          "
          class="text-sm uppercase"
        >
          {{ props.data.merchants[0].type }}
        </UBadge>

        <!-- hide this on hover -->
        <div
          class="flex flex-col lg:flex-row gap-4 items-center py-2 text-center sm:text-left"
        >
          <div v-if="props.data.languages.length === 0" class="flex gap-2">
            <span class="text-sm"> No Language </span>
          </div>

          <div v-else-if="props.data.languages.length <= 2" class="flex gap-2">
            <span
              v-for="(language, index) in props.data.languages"
              :key="index"
              class="text-sm"
            >
              {{ language.name }}
            </span>
          </div>

          <div v-else class="flex gap-2">
            <UTooltip>
              <span class="text-sm cursor-pointer">
                {{ props.data.languages.length }} Languages
              </span>

              <template #text>
                <span
                  v-for="(language, index) in props.data.languages"
                  :key="index"
                >
                  {{ `${language.name} ` }}
                </span>
              </template>
            </UTooltip>
          </div>

          <div class="flex gap-2 items-center lg:border-x border-gray-900 px-6">
            <nuxt-icon name="star" class="text-2xl" filled />
            <strong>
              {{ props.data.merchants[0].rating }}
            </strong>
          </div>

          <div>
            <strong>{{ formatPrice(props.data.price) }}</strong>
          </div>
        </div>

        <!--  -->
        <div
          class="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 py-2 pb-6 px-8"
        >
          <UButton
            block
            variant="outline"
            color="orange"
            class="rounded-full"
            :class="
              disabledRule('order', props.data)
                ? 'cursor-not-allowed'
                : 'hover:bg-accent hover:text-white'
            "
            :disabled="disabledRule('order', props.data)"
            @click="openOrderSidebar"
          >
            <span>Order </span>
          </UButton>
          <UButton
            block
            variant="outline"
            color="orange"
            class="rounded-full hover:bg-accent hover:text-white"
            @click="
              navigateTo({
                name: 'facilitators-id',
                params: { id: props.data.merchants[0].id },
              })
            "
          >
            <span> Profile</span>
          </UButton>
          <UButton
            block
            variant="outline"
            color="orange"
            class="rounded-full"
            :class="
              disabledRule('chat', props.data)
                ? 'cursor-not-allowed'
                : 'hover:bg-accent hover:text-white'
            "
            :disabled="disabledRule('chat', props.data)"
            @click="startChat"
          >
            <span>Chat</span>
          </UButton>
        </div>
      </div>
    </UCard>
  </nuxt-link>
</template>

<script setup>
import bannerImage from '/assets/images/facilitators-blue-bg.png'
import { useCookie } from 'nuxt/app'
const { $supabase } = useNuxtApp()

// store
import { useChatStore } from '~/stores/chat'
const chatStore = useChatStore()

// route
const route = useRoute()
const router = useRouter()

const emit = defineEmits(['order'])

// data
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
  callback: {
    type: Function,
    required: true,
  },
})

const disabledRule = (type, object) => {
  if (type === 'order') {
    if (!object.language_sources) {
      return true
    }

    if (object.language_sources.length === 0) {
      return true
    }
  }

  if (type === 'chat') {
    if (object.merchants[0].users[0].id === chatOwnerId) {
      return true
    }
  }

  return false
}

const navigateTo = (route) => {
  router.push(route)
}

const openOrderSidebar = () => {
  emit('order')
}

const formatPrice = (price) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(price)
}

let chatOwnerId = null
const tokenCookie = useCookie('token')
if (tokenCookie.value) {
  try {
    chatOwnerId = tokenCookie.value?.user?.chat_owner_id || null
  } catch (error) {
    console.error('Error parsing token:', error)
  }
}

const startChat = async () => {
  const owner = {
    id: tokenCookie.value?.user?.chat_owner_id,
    fullname: tokenCookie.value.user.fullname,
    photo: tokenCookie.value.user.photo,
  }
  const recipient = {
    id: props.data.merchants[0].users[0].id,
    fullname: props.data.merchants[0].users[0].fullname,
    photo: props.data.merchants[0].users[0].photo,
  }

  chatStore.openChat()
  chatStore.isChatLoading = true

  // Add chat contact for owner
  const { data: ownerContact, error: errorOwnerContact } = await $supabase
    .from('contacts')
    .select('*')
    .eq('owner_id', owner.id)

  if (errorOwnerContact) {
    console.error('Error fetching owner contact:', errorOwnerContact)
  }

  // If owner contact not found, create new contact
  if (ownerContact.length === 0) {
    const { data: newOwnerContact, error: errorNewOwnerContact } =
      await $supabase.from('contacts').insert([
        {
          owner_id: owner.id,
          contacts: [
            {
              is_read: false,
              is_active: true,
              recipient_id: recipient.id,
              recipient_name: recipient.fullname,
              recipient_picture: recipient.photo,
              recipient_last_chat: '',
              recipient_last_chat_datetime: '',
              recipient_is_open: false,
              recipient_unread_count: 0,
            },
          ],
        },
      ])

    if (errorNewOwnerContact) {
      console.error('Error creating new owner contact:', errorNewOwnerContact)
    }
  } else {
    // If owner contact found, check if recipient already exists
    const recipientExist = ownerContact[0].contacts.find(
      (contact) => contact.recipient_id === recipient.id
    )

    if (!recipientExist) {
      const { data: newRecipientContact, error: errorNewRecipientContact } =
        await $supabase
          .from('contacts')
          .update({
            contacts: [
              ...ownerContact[0].contacts,
              {
                is_read: false,
                is_active: true,
                recipient_id: recipient.id,
                recipient_name: recipient.fullname,
                recipient_picture: recipient.photo,
                recipient_last_chat: '',
                recipient_last_chat_datetime: '',
                recipient_is_open: false,
              },
            ],
          })
          .eq('owner_id', owner.id)

      if (errorNewRecipientContact) {
        console.error(
          'Error creating new recipient contact:',
          errorNewRecipientContact
        )
      }
    } else {
      // If recipient already exists, update last chat datetime
      const {
        data: updateRecipientContact,
        error: errorUpdateRecipientContact,
      } = await $supabase
        .from('contacts')
        .update({
          contacts: ownerContact[0].contacts.map((contact) =>
            contact.recipient_id === recipient.id
              ? {
                  ...contact,
                  recipient_last_chat_datetime: new Date().toISOString(),
                  recipient_is_open: false,
                }
              : contact
          ),
        })
        .eq('owner_id', owner.id)

      if (errorUpdateRecipientContact) {
        console.error(
          'Error updating recipient contact:',
          errorUpdateRecipientContact
        )
      }
    }
  }

  // Add chat contact for recipient
  const { data: recipientContact, error: errorRecipientContact } =
    await $supabase.from('contacts').select('*').eq('owner_id', recipient.id)

  if (errorRecipientContact) {
    console.error('Error fetching recipient contact:', errorRecipientContact)
  }

  // If recipient contact not found, create new contact
  if (recipientContact.length === 0) {
    const { data: newRecipientContact, error: errorNewRecipientContact } =
      await $supabase.from('contacts').insert([
        {
          owner_id: recipient.id,
          contacts: [
            {
              is_read: false,
              is_active: true,
              recipient_id: owner.id,
              recipient_name: owner.fullname,
              recipient_picture: owner.photo,
              recipient_last_chat: '',
              recipient_last_chat_datetime: '',
              recipient_is_open: false,
              recipient_unread_count: 0,
            },
          ],
        },
      ])

    if (errorNewRecipientContact) {
      console.error(
        'Error creating new recipient contact:',
        errorNewRecipientContact
      )
    }
  } else {
    // If recipient contact found, check if owner already exists
    const ownerExist = recipientContact[0].contacts.find(
      (contact) => contact.recipient_id === owner.id
    )

    if (!ownerExist) {
      const { data: newOwnerContact, error: errorNewOwnerContact } =
        await $supabase
          .from('contacts')
          .update({
            contacts: [
              ...recipientContact[0].contacts,
              {
                is_read: false,
                is_active: true,
                recipient_id: owner.id,
                recipient_name: owner.fullname,
                recipient_picture: owner.photo,
                recipient_last_chat: '',
                recipient_last_chat_datetime: '',
                recipient_is_open: false,
              },
            ],
          })
          .eq('owner_id', recipient.id)

      if (errorNewOwnerContact) {
        console.error('Error creating new owner contact:', errorNewOwnerContact)
      }
    } else {
      // If owner already exists, update last chat datetime
      const { data: updateOwnerContact, error: errorUpdateOwnerContact } =
        await $supabase
          .from('contacts')
          .update({
            contacts: recipientContact[0].contacts.map((contact) =>
              contact.recipient_id === owner.id
                ? {
                    ...contact,
                    recipient_last_chat_datetime: new Date().toISOString(),
                    recipient_is_open: false,
                  }
                : contact
            ),
          })
          .eq('owner_id', recipient.id)

      if (errorUpdateOwnerContact) {
        console.error('Error updating owner contact:', errorUpdateOwnerContact)
      }
    }
  }

  // Open chat that already exists on navbar component

  chatStore.setChatRecipient(recipient)
  chatStore.setChatOwner(owner)
  chatStore.isChatLoading = false
}
</script>
