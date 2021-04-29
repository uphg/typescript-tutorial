## Could not read source map for xxx

在给 VSCode 配置 `launch.json` 文件后，运行终端后提示以下报错

```
Could not read source map for xxx/xxx.js
```

给 `launch.json` 添加以下配置即可

```bash
"resolveSourceMapLocations": [
  "${workspaceFolder}/**",
  "!**/node_modules/**"
]
```