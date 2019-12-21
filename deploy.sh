#!/bin/bash

# open -a Google\ Chrome "$1"

set -e
if [ "$1" = "push" ]
  then
    echo "\033[35m 开始提交代码 \033[0m"
    git add -A
    git commit -m "🍑 🌴 🍋 —— $(date +%F) $(date +%H:%M:%S)"
    git push origin master
    echo ""
    echo "\033[32m ✔ 代码提交完成... \033[0m"
    echo ""
elif [ "$1" = "build" ]
  then
    # 编译文件
    echo "\033[36m 开始编译... \033[0m"
    npm run build
    echo ""
    echo "\033[32m ✔ 编译完成... \033[0m"
    echo ""

    cd ./dist

    echo ""
    echo "\033[33m 开始部署... \033[0m"
    echo ""

    git init
    git config user.name "听着情歌流泪"
    git config user.email "develop@lingtal.com"
    git add -A
    git commit -m "🌴 🍋 —— $(date +%F) $(date +%H:%M:%S)"
    git push -f https://github.com/speiyouFE/xbk-docs.git master:gh-pages
    echo ""
    echo "\033[32m ✔ 部署完成... \033[0m"
    cd ../
      # cd -
    echo ""
else
  cd ./dist

  echo ""
  echo "\033[33m 开始部署... \033[0m"
  echo ""

  git init
  git config user.name "听着情歌流泪"
  git config user.email "develop@lingtal.com"
  git add -A
  git commit -m "🌴 🍋 —— $(date +%F) $(date +%H:%M:%S)"
  git push -f https://github.com/speiyouFE/xbk-docs.git master:gh-pages
  echo ""
  echo "\033[32m ✔ 部署完成... \033[0m"
  cd ../
    # cd -
  echo ""
fi
