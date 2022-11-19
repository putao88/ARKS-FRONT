<template>
  <v-app-bar
    id="app-bar"
    absolute
    app
    color="transparent"
    flat
    height="75"
  >
    <v-btn
      class="mr-3"
      elevation="1"
      fab
      small
      @click="setDrawer(!drawer)"
    >
      <v-icon v-if="value">
        mdi-view-quilt
      </v-icon>

      <v-icon v-else>
        mdi-dots-vertical
      </v-icon>
    </v-btn>

    <v-toolbar-title
      class="hidden-sm-and-down font-weight-light"
      v-text="$route.name"
    />

    <v-spacer />

    <div class="mx-3" />

    <v-btn
      class="ml-2"
      min-width="0"
      large
      text
      color="primary"
      @click="openClaimModal"
    >
      <v-icon large>
        mdi-bitcoin
      </v-icon>
      <span class="primary--text font-weight-bold">Claim</span>
    </v-btn>

    <v-btn
      v-if="!connected"
      class="ml-2"
      min-width="0"
      large
      text
      color="primary"
      @click="setConnected(!connected)"
    >
      <v-icon large>
        mdi-wallet
      </v-icon>
      <span class="primary--text font-weight-bold">Connect</span>
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
          large
          color="primary"
          v-bind="attrs"
          v-on="on"
        >
          <v-icon large>
            mdi-wallet
          </v-icon>
          <div
            class="primary--text font-weight-bold overflow-text address-div"
          >
            {{ address }}
          </div>
        </v-btn>
      </template>

      <v-list
        :tile="false"
        nav
      >
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
  </v-app-bar>
</template>

<script>
  // Utilities
  import { mapState, mapMutations } from 'vuex'
  import ClaimModal from '@/components/ClaimModal'

  export default {
    name: 'DashboardCoreAppBar',
    components: {
      ClaimModal,
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
    }),

    computed: {
      ...mapState(['drawer', 'connected', 'address']),
    },

    methods: {
      ...mapMutations({
        setDrawer: 'SET_DRAWER',
        setConnected: 'SET_CONNECTED',
      }),
      menuHandle (method) {
        if (method === 'Disconnect') {
          this.setConnected(false)
        } else {
          this.$router.push('/launchpad')
        }
      },
      openClaimModal () {
        this.showClaimModal = true
      },
      closeClaimModal () {
        this.showClaimModal = false
      },
    },
  }
</script>
<style lang="scss" scoped>
.address-div {
  max-width: 80px;
}
</style>
