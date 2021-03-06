# renovate-csproj

reproduction repo for https://github.com/renovatebot/renovate/issues/13591

## contents

- a csproj file with a few random dependencies incl. lockfile
- no nuget.config
- a config.js file that defines a second repository source

## current behaviour

- when working on a branch, renovate will try to run "nuget restore" on the project, but will only run 
- "nuget add source" for the default public feed.

- nuget feeds specified in config.js are omitted during that step.

## desired behaviour

- renovate will not ignore nuget feeds from config.js when a lockfile exists
- it will run "nuget add source" for all nuget feeds specified in config, resulting in a fully working nuget.conf that gets fed into "nuget restore"
- if hostrules specify authentication, it will add it accordingly (just as it does when it parses a nuget.config file).

the example config.js specifies a dummy feed on https://www.example.com - in the debug log, it could look like this:

```text
DEBUG: dotnet command (repository=horihel/renovate-csproj, branch=renovate/microsoft.codeanalysis.csharp-4.x)
       "cmd": [
         "dotnet nuget add source https://api.nuget.org/v3/index.json --configfile /tmp/renovate/cache/others/nuget/bc90858cad547141/nuget.config",
         "dotnet nuget add source https://www.example.com/myexamplerepo --username "apikey" --password "my-secret" --configfile /tmp/renovate/cache/others/nuget/bc90858cad547141/nuget.config",
         "dotnet restore Minimal.csproj --force-evaluate --configfile /tmp/renovate/cache/others/nuget/bc90858cad547141/nuget.config"
       ]
```