<template>
  <div :class="$style.wrap" v-loading="isLoading" element-loading-text="拼命加载中">
    <webview  ref="webview" id="foo" :src="docUrl" :class="$style.webview">
    </webview>
  </div>
</template>

<script>

export default {
  name: 'WebView',
  components: {

  },
  data() {
    return {
      webview: null,
      isLoading: false,
    };
  },
  props: {
    groupID: {
      type: String,
      default: ''
    },
    reopID: {
      type: String,
      default: ''
    },
    docID: {
      type: String,
      default: ''
    }
  },
  watch: {
    // docID(val) {
    //   if (!val) {
    //     return;
    //   }

    // }
  },
  computed: {
    docUrl() {
      if (this.docID) {
        return `https://www.yuque.com/${this.groupID}/${this.reopID}/${this.docID}/edit`
      } else {
        return 'about:blank'
      }
    },
  },
  mounted() {
    this.isLoading = true;
    this.initWebview();
    console.log(this.docUrl)
    // this.webview.loadURL(this.docUrl);
  },
  methods: {
    initWebview() {
      this.webview = this.$refs.webview;
      this.webview.addEventListener('dom-ready', (a, b, c, d) => {
        console.log(a, b, c, d)
        console.log('加载完成')
        this.isLoading = false;
        const viewCss = `
          /* 浏览模式 */
          .comment___1P9VX { display: none; }    /* 隐藏评论区域 */
          .footer { display: none; }            /* 隐藏页尾区域 */ 
          .entry___P-H5Q { display: none; }     /* 隐藏右下角功能按钮 */
          .entry___odTWc { display: none; }     /* 右下角功能按钮 */
          .wrapper___8HhiZ { display: none!important; }   /* 隐藏上一篇下一篇区域 */
          .header-crumb { padding:0; }          /* 左上角距离清零 */
          .lark-breadcrumb-logo { display: none; }     /* 隐藏左上角logo */
          .header-action { display: flex!important; }  /* 右上角功能显示 */
          .wrapper___2FZde { box-shadow: 0 0 0 0!important; border-bottom: 1px solid #e1e0e5; height: 61px!important; }  /* 头部阴影、边框、高度 */
        
          /*  编辑模式 */
          .lake-content-editor { margin: 0!important; width: 100%!important; }   /* 编辑区域宽度 */
          .lake-toolbar-content { height: auto!important; }  .lake-toolbar { height: auto!important; }   /* 头部工具栏高度自适应 */
          .lark-editor-header { border-color: #E1E0E5!important; height: 61px!important;}  /* 头部横栏高度、边框 */
          .lake-toolbar-content-plugins { text-align: left!important; }    /* 插件左对齐 */
          .lake-sidebar-active { display: none!important; }  /* 隐藏大纲 */
          .lark-editor-lake { min-width: auto!important; }  /* 整页宽度 */
          .lake-max-editor { min-width:auto!important; }    /* 整页宽度 */
          .lake-max-editor-content { padding: 0!important; }  /* 编辑区padding */
          .lark-editor-header-back { display: none!important; } /* 删除左上角功能按钮 */
          .lark-editor-header-title { margin-left: 20px!important; } /* 上横栏面包屑 左距离 */
        `

        this.webview.insertCSS(viewCss)
        // this.webview.openDevTools()
        // console.log(webview.getURL())

      })
    },
  },
}
</script>

<style lang='scss' module>
// ！为了使用 rem 单位每个vue组件都要导入 begin
// $page-width: 375;
// @import '~style/tool';
.wrap {
  height: 100%;
  width: 100%;
  :global(.el-loading-mask) {
    left: 1px;
  }

  .webview {
    height: 100%;
    width: 100%;
  }
}

// .loadingWrap {
//   position: absolute;
//   left: 0;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   background: white;
//   z-index: 2;
// }
</style>