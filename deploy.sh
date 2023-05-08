# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vitepress/dist

git init
git add -A
git commit -m 'Selector添加完毕功能正常'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f https://gitee.com/tow-youngui/tsheep-ui.git master:gh-pages

# 退出当前dist目录
cd -

# 删除dist目录
rm -rf docs/.vitepress/dist