module.exports = {
  //可选类型
  types: [{
      value: 'feat',
      name: 'feat:   新功能'
    },
    {
      value: 'fix',
      name: 'fix:   修复'
    },
    {
      value: 'docs',
      name: 'docs:   文档变更'
    },
    {
      value: 'style',
      name: 'style:   代码格式(不影响代码运行的变动)'
    },
    {
      value: 'refactor',
      name: 'refactor:重构(既不是增加feature)，也不是修复bug'
    },
    {
      value: 'perf',
      name: 'perf:   性能优化'
    },
    {
      value: 'test',
      name: 'test:   增加测试'
    },
    {
      value: 'chore',
      name: 'chore:   构建过程或辅助功能的变动'
    },
    {
      value: 'revert',
      name: 'revert:   回退'
    },
    {
      value: 'build',
      name: 'build:   打包'
    },
    {
      value: 'revert',
      name: 'revert:   回退'
    }
  ],
  //消息步骤
  messages: {
    type: '请选择提交类型',
    customScope: '请输入修改范围(可选)',
    subject: '请简要描述提交(必填)',
    body: '请输入详细描述(可选)',
    footer: '请输入要关闭的issue(可选)',
    confirmCommit: '确认以上信息提交?(y/n)'
  },
  //跳过问题
  skipQuestion: ['body', 'footer'],
  //subject文字长度默认是
  subjectLimit: 72
}

// module.exports = {
//   types: [{
//       value: 'feat',
//       name: 'feat:      新功能',
//     },
//     {
//       value: 'fix',
//       name: 'fix:       修复Bug',
//     },
//     {
//       value: 'docs',
//       name: 'docs:      文档变动',
//     },
//     {
//       value: 'style',
//       name: 'style:     不影响代码含义的变化(空白、格式化、缺少分号等)',
//     },
//     {
//       value: 'refactor',
//       name: 'refactor:  重构代码，既不修复错误也不添加功能',
//     },
//     {
//       value: 'perf',
//       name: 'perf:      性能优化',
//     },
//     {
//       value: 'test',
//       name: 'test:      测试相关',
//     },
//     {
//       value: 'build',
//       name: 'build:     影响构建系统或外部依赖关系的更改',
//     },
//     {
//       value: 'ci',
//       name: 'ci:        更改持续集成文件和脚本',
//     },
//     {
//       value: 'chore',
//       name: 'chore:     重新打包或更新依赖工具等杂活',
//     },
//     {
//       value: 'revert',
//       name: 'revert:    Revert to a commit',
//     },
//     {
//       value: 'wip',
//       name: 'wip:       Work in progress',
//     },
//   ],
//   // override the messages, defaults are as follows
//   messages: {
//     type: '请选择 Commit 类型:',
//     scope: '请选择影响范围 (Scope) (可选):',
//     customScope: '请选择影响范围 (Scope) (可选):',
//     subject: '请提供一段简要的 Commit 信息:\n',
//     body: '请提供一段详细的信息来描述此次更改 (可选). 使用 "|" 来另起一行:\n',
//     breaking: '是否有任何 BREAKING CHANGES (可选):\n',
//     footer: '是否有任何 ISSUE 可以被此次 Commit 关闭 (可选). E.g.: #31, #34:\n',
//     confirmCommit: '是否确认提交上述 Commit 信息?',
//   },

//   allowCustomScopes: true,
//   allowBreakingChanges: ['feat', 'fix', 'refactor'],

//   // limit subject length
//   subjectLimit: 100,
// };