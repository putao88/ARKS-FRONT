<template>
  <div>
    <v-dialog v-model="showModal" width="450" :persistent="true">
      <v-card>
        <v-card-title class="text-left white--text primary pb-4">
          <span class="text-h3"> Input invite code </span>
        </v-card-title>

        <v-card-text>
          <div class="mb-4">
            <div class="text-h4">
              We are still in beta, please enter the invitation code
            </div>
            <div class="d-flex mt-8">
              <div class="wp-50 mr-8">
                <v-text-field
                  v-model="inviteCode"
                  class="mb-4 mt-4"
                  persistent-hint
                />
              </div>
              <v-btn
                class="mt-4"
                color="primary"
                rounded
                v-on:click="checkInviteCode"
              >
                deposit
              </v-btn>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'LoginModal',
  props: {
    showModal: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      inviteCode: '',
    }
  },
  methods: {
    ...mapMutations({
      SET_IS_LOGGED_IN: 'SET_IS_LOGGED_IN',
    }),
    checkInviteCode() {
      if (this.inviteCode === 'arkstothemoon') {
        this.SET_IS_LOGGED_IN(true)
      } else {
        alert('wrong invite code')
      }
    }
  },
}
</script>
