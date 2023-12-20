#!/bin/sh

yarn env:local

npx prisma generate

npx prisma migrate dev

yarn dev