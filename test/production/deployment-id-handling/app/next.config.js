/** @type {import('next').NextConfig} */
module.exports = {
  deploymentId:
    process.env.ASSET_DEPLOYMENT_ID ?? process.env.CUSTOM_DEPLOYMENT_ID,
  experimental: {
    useSkewCookie: Boolean(process.env.COOKIE_SKEW),
    assetDeploymentId: process.env.ASSET_DEPLOYMENT_ID
      ? `static-${process.env.ASSET_DEPLOYMENT_ID}`
      : undefined,
  },
}
