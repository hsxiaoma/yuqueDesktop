<template>
  <div :class="$style.wrap">
    <Top :class="$style.top" />
    <GroupList :class="$style.groupCategory"/>
  </div>
</template>

<script>
import Top from "./components/Top";
import GroupList from "./components/GroupList";
export default {
  name: 'GroupArea',
  components: {
    Top, GroupList
  },
  data() {
    return {

    };
  },
  computed: {

  },
  methods: {

  },
}
</script>

<style lang='scss' module>
.wrap {
  display: flex;
  flex-direction: column;
  user-select: none;
  height: 100%;
}
.top {
  height: 60px;
}
.groupCategory {
  flex: 1;
  // overflow:hidden;
  overflow-y: auto;
}
</style>