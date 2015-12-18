## Contributing

1. Fork the repo and clone your version
  1. Set it as upstream ```git remote add upstream https://github.com/networkFlambe/neuralquest.git```
1. Create a feature branch ```git checkout -b featureBranch```
  1. Make  changes
1. Rebase before pushing up to origin using ```github pull --rebase upstream master```
1. Push up changes to origin, the forked version
1. Create a pull request with a clear description of what the changes.
1. Squash commits down to one ```git rebase -i upstream/master```