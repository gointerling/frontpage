// stores/chat.js
import { set } from '@vueuse/core';
import { defineStore } from 'pinia';

export const useChatStore = defineStore('chat', {
  state: () => ({
    isChatOpen: false,
    isChatLoading: false,
    owner: null,
    recipient: null,
    unreadMessages: 0,
  }),
  actions: {
    toggleChat() {
      this.isChatOpen = !this.isChatOpen;
    },

    openChat() {
      this.isChatOpen = true;
    },

    closeChat() { 
      this.isChatOpen = false;
    },

    setChatOwner(owner) {
      this.owner = owner;
    },

    setChatRecipient(recipient) {
      this.recipient = recipient;
    }
  },
});
