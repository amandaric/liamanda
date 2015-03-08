
# amanda & liam's wedding site


### setup

using brew: http://brew.sh
install ruby: `brew install rbenv rbenv-gem-rehash ruby-build`
make sure gems are installed: `bundle install`

helpful reference: https://github.com/jamiehs/bootstrap-sass-middleman

### work

cd /Users/m736119/Desktop/liamanda/liamanda 

`./scripts/server.sh` will render the site locally, and auto reload the page on edits

### deploy

`./scripts/deploy.sh` will deploy to amazon s3. expects a file called `.s3_sync` in the root of this directory, with contents like https://github.com/fredjean/middleman-s3_sync/blob/master/.s3_sync.sample
