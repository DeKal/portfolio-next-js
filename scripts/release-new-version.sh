set -e
npm version patch
npx auto-changelog -p --sort-commits date && git add CHANGELOG.md
git commit -m "Add CHANGELOG to new Release"
git push origin master && git push origin master --tag