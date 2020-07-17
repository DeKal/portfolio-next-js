# Light house
Lighthouse is an open-source, automated tool for improving the quality of web pages. You can run it against any web page, public or requiring authentication.

We can install Light house as a plugin in Chrome with https://developers.google.com/web/tools/lighthouse#devtools.

Currently we are having a pretty nice score in lighthouse.

<img src="/docs/res/light-house-2020-07-17.png?raw=true" width="800px">

## Lighthouse CI
With the support of Github Workflow, we have integrated lighthouse in 2 flows
1) When creating/updating new PR, lighthouse will be running against localhost with the configuration at `.lighthouse/lighthouserc-local.json`.
2) When merging or push commit into master bracnh, ighthouse will be running against https://phatho-folio.now.sh/ with the configuration at `.lighthouse/lighthouserc-prod.json`.


## To be implemented
- Storing lighthouse report for references.
- Running lighthouse against multiple mobile/desktop

## References 
- https://medium.com/@leandroalmeida/performance-tests-in-your-ci-pipeline-with-lighthouse-ci-b4605009d1b2
- https://github.com/GoogleChrome/lighthouse-ci