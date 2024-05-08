#!/bin/sh

export HOSTNAME="0.0.0.0"
npm run generate
npm run deploy
if [ "$NODE_ENV" = "production" ]
then
  npm run build
  npm start
elif [ "$NODE_ENV" = "development" ]
then
  npm run seed
  npm run dev
fi