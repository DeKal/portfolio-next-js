# Deployments

For the **Continuous Deployment** of the project, we are using [Vercel](https://vercel.com/dashboard). Vercel offers us many nice features.

## Review app
For each Pull Request (PR), Vercel builds and deploys for us a review app for that particular PR. This is one of the extremely strong point why we decided to go with Vercel. With the review app, we are easy to testing out new changes or having our QA engineers tested out the new feature on the fly. No need for complicated setup in our local env, no need for running the code to see if it's worked out.

<img src="/docs/res/vercel-preview.png?raw=true" width="600px">

## Production
After everything is perfect, we can easily merge the PR and everything is deployed to the production page in the blink of the eye. Usually, it takes 1 or 2 seconds for vercel to do the deployment, which is crazily good.

<img src="/docs/res/vercel-prod.png?raw=true" width="600px">