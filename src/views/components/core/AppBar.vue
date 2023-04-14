<template>
  <v-app-bar id="app-bar" fixed app flat height="75">
    <v-btn class="mr-3" elevation="1" fab small @click="setDrawer(!drawer)">
      <v-icon v-if="value"> mdi-view-quilt </v-icon>

      <v-icon v-else> mdi-menu </v-icon>
    </v-btn>

    <v-btn
      v-if="$route.path.indexOf('-detail') > 0"
      elevation="1"
      fab
      small
      class="hidden-sm-and-down font-weight-light"
      @click="goBack"
    >
      <v-icon> mdi-arrow-left-bold </v-icon>
    </v-btn>
    <v-toolbar-title
      v-else
      class="hidden-sm-and-down font-weight-light"
      v-text="$route.name"
    />

    <v-spacer />

    <div class="mx-3" />

    <v-btn
      class="ml-2"
      min-width="0"
      text
      rounded
      color="primary"
      @click="openClaimModal"
    >
      <v-icon large> mdi-bitcoin </v-icon>
      <span class="primary--text font-weight-bold">Claim</span>
    </v-btn>

    <v-btn
      v-if="!address"
      class="ml-2"
      min-width="0"
      text
      rounded
      color="primary"
      @click="openWeb3Modal"
    >
      <div class="wallet-icon-wrap">
        <v-icon size="20"> mdi-wallet </v-icon>
      </div>
      <div class="primary--text font-weight-bold address-div">Connect</div>
    </v-btn>

    <v-menu
      v-else
      bottom
      left
      offset-y
      origin="top right"
      transition="scale-transition"
    >
      <template v-slot:activator="{ attrs, on }">
        <v-btn
          class="ml-2"
          text
          rounded
          color="primary"
          v-bind="attrs"
          v-on="on"
        >
          <div class="wallet-icon-wrap">
            <v-icon size="20"> mdi-wallet </v-icon>
          </div>
          <div class="primary--text font-weight-bold overflow-text address-div">
            {{ address }}
          </div>
        </v-btn>
      </template>

      <v-list :tile="false" nav>
        <v-list-item
          v-for="(item, i) in subMenus"
          :key="i"
          @click="menuHandle(item.text)"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon" />
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>
    <claim-modal
      :show-modal="showClaimModal"
      @close-claim-modal="closeClaimModal"
    />
    <login-modal :show-modal="!isDev && !isLoggedIn" />
  </v-app-bar>
</template>

<script>
// Utilities
import { mapState, mapMutations } from 'vuex'
import ClaimModal from '@/components/ClaimModal'
import LoginModal from '@/components/LoginModal'
import { web3modal } from '@/utils/web3ModalConnector'

import { watchAccount, disconnect} from '@wagmi/core'

export default {
  name: 'DashboardCoreAppBar',
  components: {
    ClaimModal,
    LoginModal,
  },
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },

  data: () => ({
    subMenus: [
      {
        icon: 'mdi-store',
        text: 'Deposite',
      },
      {
        icon: 'mdi-logout',
        text: 'Disconnect',
      },
    ],
    showClaimModal: false,
    isDev: process.env.NODE_ENV === 'development',
  }),

  computed: {
    ...mapState(['drawer', 'address', 'isLoggedIn']),
  },
  mounted: function () {
    watchAccount(account => {
      if (account.isConnected) {
        this.setAddress(account.address)
      } else {
        this.setAddress('')
      }
    })
  },
  methods: {
    ...mapMutations({
      setDrawer: 'SET_DRAWER',
      setAddress: 'SET_ADDRESS',
    }),
    goBack() {
      this.$router.go(-1)
    },
    menuHandle(method) {
      if (method === 'Disconnect') {
        disconnect()
        this.setAddress('')
      } else {
        this.$router.push('/launchpad')
      }
    },
    openClaimModal() {
      this.showClaimModal = true
    },
    closeClaimModal() {
      this.showClaimModal = false
    },

    openWeb3Modal() {
      web3modal.openModal()
    },
  },
}

</script>
<style lang="scss" scoped>
.address-div {
  width: 80px;
  text-align: left;
}
.wallet-icon-wrap {
  border-radius: 50%;
  padding: 5px;
  margin-right: 5px;
  border: 2px solid var(--color-primary);
}
</style>
