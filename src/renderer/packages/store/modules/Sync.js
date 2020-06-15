// import { setLocalStorage, getLocalStorage } from "helper/getAppData";
import { diffDocs, loadDocList } from "modules/DocDiff";

// import auth from "helper/auth";
// import { now } from "moment";





// export const types = {
//   SET_TOKEN: 'SET_TOKEN',
// }

export const types = {
  SYNC_DOC: 'SYNC_DOC',
  SET_SYNCHRONIZING: 'SET_SYNCHRONIZING'
}

// export const LayoutType = {
//   FULL: 'Full',
//   FILE: 'File',
//   DOC: 'Doc'
// }



export default {
  namespaced: true,
  state: {
    docs: [],
    tobeSyncDocsId: [],
    synchronizing: false,
    // curLayoutType: LayoutType.FULL,
    // token: getLocalStorage('token') || '',
  },
  getters: {
    // userInfo(state) {
    //   return {
    //     token: state.token,
    //     useranme: state.useranme,
    //   };
    // },

    // isLogin(state) {
    //   return state.token !== '';
    // },
  },
  mutations: {
    [types.SET_SYNCHRONIZING](state, sync) {
      state.synchronizing = sync;
    },
  },
  actions: {
    async [types.SYNC_DOC](context) {
      // const { commit, rootState } = context;
      diffDocs(context);
      // -------  获取远端接口信息  --------
      // commit(types.SET_SYNCHRONIZING, true);


      // 1、遍历新文档列表

      // 


      // let data = await GetUserInfo();
      // if (!data) return;

      // state.curLayoutType = layoutType;
    },
    // async getToken({ commit }) {
    //   // 用户授权登录
    //   let tokenInfo = null
    //   try {
    //     tokenInfo = await auth({
    //       clientId: 'QFghMGtuIwt2ayJKg434',
    //       clientSecret: 'JMVfrgW5u94GbAqnR6Ah4Ptw7cSUOJaAVGkLDO8C',
    //       scope: 'repo,doc,group,artboard',
    //     })
    //     if (tokenInfo) {
    //       console.log('1111111111')
    //       // 把token存到本地存储中，供下次打开应用时读取
    //       setLocalStorage('token', tokenInfo.access_token)
    //       setLocalStorage('tokenTime', now())
    //       commit(types.SET_TOKEN, tokenInfo.access_token)
    //       // 刷新页面
    //       refreshMainWindow();
    //     }
    //   } catch (error) {

    //   }
    // }
  }
};

