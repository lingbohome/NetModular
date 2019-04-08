/** 页面信息 */
const page = new function () {
  this.title = '模块管理'
  this.name = 'admin_moduleinfo'
  this.path = '/admin/moduleinfo'
  this.buttons = {
    add: {
      text: '添加',
      code: `${this.name}_add`
    },
    edit: {
      text: '编辑',
      code: `${this.name}_edit`
    },
    del: {
      text: '删除',
      code: `${this.name}_del`
    }
  }
}()

/** 路由信息 */
export const route = {
  page,
  component: () => import(/* webpackChunkName: "admin.moduleinfo" */ './index')
}

export default page
