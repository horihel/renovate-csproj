# renovate-csproj

reproduction repo for https://github.com/renovatebot/renovate/issues/13591

## contents

- a csproj file with a few random dependencies incl. lockfile
- no nuget.config
- a config.js file that defines a second repository source

## current behaviour

when working on a branch, renovate will try to run "nuget restore" on the project, but will only run 
"nuget add source" for the default public feed.

nuget feeds specified in config.js are ignored.

## desired behaviour

renovate will not ignore nuget feeds from config.js when a lockfile exists
it will run "nuget add source" for all nuget feeds specified in config (with authentication where necessary)