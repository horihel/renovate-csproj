module.exports = {
  token: process.env.TOKEN,
  repositories: ["horihel/renovate-csproj"],
  nuget: {
    registryUrls: [
      "https://api.nuget.org/v3/index.json",
      "https://www.example.com/myexamplerepo"
    ],
  },
}