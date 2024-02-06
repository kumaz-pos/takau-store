/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        GITHUB_APP_CLIENT_ID:"7b24e6c29c91ba7e1b4f",
        GITHUB_APP_CLIENT_SECRET:"a6951a845e6a85e67f471477d85fb6d43869e65a",
        NEXTAUTH_SECRET:"mQ46qpFwfE1BHuqMC+qlm19qBAD9fVPgh28werwe3ASFlAfnKjM="
    },
    experimental: {
        serverActions: true,
      },
      headers: [
        {
          key: 'Cache-Control',
          value: 'no-store',
        },
      ],
};

export default nextConfig;
