#!/bin/sh

bundle exec middleman build
bundle exec middleman s3_sync
