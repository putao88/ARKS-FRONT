<!--
 * @Author: Daisy 15773281560@163.com
 * @Date: 2023-04-13 23:51:13
 * @LastEditors: Daisy 15773281560@163.com
 * @LastEditTime: 2023-04-14 00:16:05
 * @FilePath: /ARKS-FRONT/src/views/components/Snackbar.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="text-center">
    <v-snackbar
      v-model="snackbar.visible"
      :timeout="snackbar.timeout"
      :color="snackbar.color"
      :top="snackbar.top"
    >
      {{ snackbar.text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="white"
          text
          v-bind="attrs"
          @click="setVisible"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

  export default {
    name: 'SnackbarModal',
    data: () => ({
    }),
    computed: {
      ...mapState(['snackbar']),
    },
    methods: {
      ...mapMutations({
        setSnackbar: 'SET_SNACKBAR',
      }),
      setVisible () {
        this.setSnackbar({
          visible: false,
        })
      }
    }
  }
</script>