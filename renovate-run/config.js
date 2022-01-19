module.exports = {
  token: process.env.TOKEN,
  repositories: ["horihel/renovate-csproj"],
  hostRules: [
    {
      hostType: "nuget",
      matchHost: "www.example.com",
      username: "apikey",
      password: "mysecret",
    },
  ],
  nuget: {
    registryUrls: [
      "https://api.nuget.org/v3/index.json",
      "https://www.example.com/myexamplerepo",
    ],
  },
};
