#!/bin/bash
mv dist gh-pages
git add gh-pages
git -c user.name=$CIRCLE_PROJECT_USERNAME -c user.email=$GITHUB_USER_EMAIL commit -m "[ci skip] Auto Deployment"
git subtree split --branch gh-pages --prefix gh-pages
git push -q https://$GITHUB_ACCESS_TOKEN@github.com/$CIRCLE_PROJECT_USERNAME/$CIRCLE_PROJECT_USERNAME gh-pages:gh-pages -f
