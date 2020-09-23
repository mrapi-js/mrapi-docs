(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{367:function(a,s,t){"use strict";t.r(s);var e=t(43),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"cli"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cli"}},[a._v("#")]),a._v(" CLI")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/mrapi-js/mrapi/tree/master/packages/cli",target:"_blank",rel:"noopener noreferrer"}},[a._v("@mrapi/cli"),t("OutboundLink")],1)]),a._v(" "),t("p",[a._v("用于辅助构建标准化的 mrapi 项目")]),a._v(" "),t("h2",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[a._v("#")]),a._v(" 安装")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" @mrapi/cli --save-dev\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h2",{attrs:{id:"如何使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何使用"}},[a._v("#")]),a._v(" 如何使用")]),a._v(" "),t("p",[t("code",[a._v("@mrapi/cli")]),a._v(" 为 mrapi 项目提供一个命名行界面：")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("npx mrapi -h\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("将打印帮助:")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("Usage: run [options] [command]\n\nOptions:\n  -v, --version       output the version number\n  -h, --help          display help for command\n\nCommands:\n  generate [options]  Generate prisma schema and nexus types\n  help [command]      display help for command\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br")])]),t("h2",{attrs:{id:"配置项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置项"}},[a._v("#")]),a._v(" 配置项")]),a._v(" "),t("p",[a._v("将使用到 "),t("code",[a._v("mrapiConfig")]),a._v(" 中以下属性：")]),a._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" inputSchemaDir"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" schemaDir"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" outputDir"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" managementUrl "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("mrapiConfig\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("参考 "),t("a",{attrs:{href:"https://mrapi-js.github.io/docs/zh/Configuration/Common.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("mrapiConfig"),t("OutboundLink")],1)]),a._v(" "),t("h2",{attrs:{id:"generate"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#generate"}},[a._v("#")]),a._v(" generate")]),a._v(" "),t("p",[a._v("用于初始化多租户管理实例，并生成 "),t("a",{attrs:{href:"https://mrapi-js.github.io/docs/zh/Configuration/DAL.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("DAL"),t("OutboundLink")],1),a._v(" 需要的 "),t("code",[a._v("prisma client")]),a._v(" 、 "),t("code",[a._v("nexus type")]),a._v(" 、 "),t("code",[a._v("oas")]),a._v(" 代码。")]),a._v(" "),t("p",[a._v("此命令大致做了以下几件事：")]),a._v(" "),t("ol",[t("li",[a._v("清除冗余目录或文件；")]),a._v(" "),t("li",[a._v("根据目标文件生成完整的 "),t("code",[a._v("schema.prisma")]),a._v(" ；")]),a._v(" "),t("li",[a._v("初始化多租户实例，根据 "),t("code",[a._v("schema.prisma")]),a._v(" 生成对应的 "),t("code",[a._v("prisma client")]),a._v(" ；")]),a._v(" "),t("li",[a._v("生成对应的 "),t("code",[a._v("nexus CURD")]),a._v(" ；")]),a._v(" "),t("li",[a._v("生成对应的 "),t("code",[a._v("oas CURD")]),a._v(" ；")])]),a._v(" "),t("h3",{attrs:{id:"参数选项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参数选项"}},[a._v("#")]),a._v(" 参数选项")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("npx mrapi generate -h\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("将打印帮助:")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('Usage: run generate [options]\n\nGenerate prisma schema and nexus types\n\nOptions:\n  --env <path>          env filePath (default: "config/.env")\n  --name <name>         Schema client name. If the name is "management", Only generate management client.\n  --cnt <options>       Generate CNT params. whiteList: disableQueries,disableMutations\n  --m <options>         Generate models\n  --em <options>        Exclude generate models\n  --eqm <options>       Exclude Queries and Mutations\n  -h, --help            display help for command\n  --provider <options>  Datasource provider list: sqlite,mysql,postgresql.\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br")])]),t("h4",{attrs:{id:"name"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#name"}},[a._v("#")]),a._v(" --name")]),a._v(" "),t("p",[a._v("对应 "),t("code",[a._v("schema")]),a._v(" 配置的文件名，"),t("code",[a._v("prisma client")]),a._v(" 唯一标识。")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("必填")])]),a._v(" "),t("li",[t("p",[a._v("参数类型："),t("code",[a._v("string")])])]),a._v(" "),t("li",[t("p",[a._v("参考值："),t("code",[a._v('"management"')]),a._v(" 或者 "),t("code",[a._v("schema")]),a._v(" 配置文件名称")])])]),a._v(" "),t("p",[a._v("结合 "),t("code",[a._v("mrapiConfig.inputSchemaDir")]),a._v(" 找到 "),t("code",[a._v("prisma schema")]),a._v(" 配置入口，与 "),t("code",[a._v("mrapiConfig.schemaDir")]),a._v(" 生成 "),t("code",[a._v("schema.prisma")]),a._v(" 出口路径，同时与 "),t("code",[a._v("mrapiConfig.outputDir")]),a._v(" 生成 "),t("code",[a._v("prisma client")]),a._v(" 地址")]),a._v(" "),t("div",{staticClass:"language-ts line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-ts"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" inputSchemaPath "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" path"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("join")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("cwd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" inputSchemaDir"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token template-string"}},[t("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[a._v("`")]),t("span",{pre:!0,attrs:{class:"token interpolation"}},[t("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[a._v("${")]),a._v("name"),t("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[a._v("}")])]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v(".prisma")]),t("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[a._v("`")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" outputSchemaPath "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" path"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("join")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("cwd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" schemaDir"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token template-string"}},[t("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[a._v("`")]),t("span",{pre:!0,attrs:{class:"token interpolation"}},[t("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[a._v("${")]),a._v("name"),t("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[a._v("}")])]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v(".prisma")]),t("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[a._v("`")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" outputPath "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" path"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("join")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("cwd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" outputDir"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("p",[t("strong",[a._v("注意:当值为 "),t("code",[a._v('"management"')]),a._v(" 时，只生成多租户管理的 "),t("code",[a._v("prisma client")]),a._v("。避免值等于 "),t("code",[a._v('"schema"')]),a._v("，因为此值将预留给多租户管理表配置文件。")])]),a._v(" "),t("h4",{attrs:{id:"cnt"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cnt"}},[a._v("#")]),a._v(" --cnt")]),a._v(" "),t("p",[a._v("生成 CURD 的参数")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("非必填")])]),a._v(" "),t("li",[t("p",[a._v("参数类型："),t("code",[a._v("string")]),a._v("（逗号分隔）")])]),a._v(" "),t("li",[t("p",[a._v("参考值："),t("code",[a._v('"disableQueries"')]),a._v(" 、"),t("code",[a._v('"disableMutations"')])])])]),a._v(" "),t("p",[t("code",[a._v('"disableQueries"')]),a._v(" 表示不生成 "),t("code",[a._v("queries")]),a._v("，"),t("code",[a._v('"disableMutations"')]),a._v(" 表示不生成 "),t("code",[a._v("mutations")]),a._v("。")]),a._v(" "),t("h4",{attrs:{id:"m"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#m"}},[a._v("#")]),a._v(" --m")]),a._v(" "),t("p",[a._v("启用配置文件中的哪些 "),t("code",[a._v("model")])]),a._v(" "),t("ul",[t("li",[t("p",[a._v("非必填")])]),a._v(" "),t("li",[t("p",[a._v("参数类型："),t("code",[a._v("string")]),a._v("（逗号分隔）")])])]),a._v(" "),t("p",[a._v("为空表示启用全部 "),t("code",[a._v("model")])]),a._v(" "),t("h4",{attrs:{id:"em"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#em"}},[a._v("#")]),a._v(" --em")]),a._v(" "),t("p",[a._v("与 "),t("code",[a._v("--m")]),a._v(" 相反且互斥，表示忽略哪些 "),t("code",[a._v("model")])]),a._v(" "),t("ul",[t("li",[t("p",[a._v("非必填")])]),a._v(" "),t("li",[t("p",[a._v("参数类型："),t("code",[a._v("string")]),a._v("（逗号分隔）")])])]),a._v(" "),t("p",[a._v("为空表示不忽略任何 "),t("code",[a._v("model")])]),a._v(" "),t("h4",{attrs:{id:"eqm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#eqm"}},[a._v("#")]),a._v(" --eqm")]),a._v(" "),t("p",[a._v("哪些 "),t("code",[a._v("model")]),a._v(" 同时忽略 "),t("code",[a._v("queries")]),a._v(" 和 "),t("code",[a._v("mutations")])]),a._v(" "),t("ul",[t("li",[t("p",[a._v("非必填")])]),a._v(" "),t("li",[t("p",[a._v("参数类型："),t("code",[a._v("string")]),a._v("（逗号分隔）")])])]),a._v(" "),t("p",[a._v("为空表示不忽略任何 "),t("code",[a._v("model")])]),a._v(" "),t("h4",{attrs:{id:"provider"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#provider"}},[a._v("#")]),a._v(" --provider")]),a._v(" "),t("p",[t("code",[a._v("--name")]),a._v("对应的"),t("code",[a._v("schema")]),a._v("配置的datasource provider。")]),a._v(" "),t("ul",[t("li",[a._v("非必填")]),a._v(" "),t("li",[a._v("参数类型："),t("code",[a._v("string")]),a._v("（逗号分隔）")]),a._v(" "),t("li",[a._v("参考值："),t("code",[a._v("mysql, postgresql")]),a._v(" 或 "),t("code",[a._v("sqllite")])])]),a._v(" "),t("h3",{attrs:{id:"示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[a._v("#")]),a._v(" 示例")]),a._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 一般用法，初始化 schema-xxx 配置文件")]),a._v("\nnpx mrapi generate --name schema-xxx\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# OR")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 仅初始化多租户管理（需要 prisma/schema.prisma 文件）")]),a._v("\nnpx mrapi generate --name management\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);