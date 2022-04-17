<template>
  <q-header class="bg-white text-grey-8 header-border" height-hint="58">
    <q-toolbar>
      <div
        class="flex flex-row flex-nowrap justify-center"
        style="width: 178px; border-right: 1px solid #f5f5f5"
      >
        <!-- <q-icon name="fact_check" style="color: #1c6dd0" size="28px" /> -->
        <q-toolbar-title shrink class="text-weight-bold">
          纵横管理助手
        </q-toolbar-title>
      </div>
      <q-btn @click="_showLeft" flat dense aria-label="Menu" icon="menu" />
      <q-space />
      <div class="q-gutter-sm row items-center no-wrap">
        <q-btn round flat>
          <q-avatar size="26px">
            <img src="@/assets/images/default.png" />
          </q-avatar>
          <q-menu transition-show="flip-right" transition-hide="flip-left">
            <q-list style="min-width: 100px">
              <q-item>
                <q-item-section>admin</q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable>
                <q-item-section @click="loginOut">注销</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </div>
    </q-toolbar>
  </q-header>
</template>

<script setup>
import { ref } from "vue";
const emit = defineEmits(['emitShowMenu','emitHandleMenu'])

const _showLeft  = () => {
    emit('emitShowMenu')
}

const _triggerData = () => {
    emit('emitHandleMenu',1)
}
</script>