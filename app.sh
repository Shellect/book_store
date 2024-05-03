#!/bin/sh

export HOSTNAME="0.0.0.0"
npm run generate
npm run deploy
npm run build
npm start