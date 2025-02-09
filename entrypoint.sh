#!/bin/bash

sleep 5
# Modify environment.js with the correct URLs
chmod -x /usr/share/nginx/html/assets/environment.js.template
envsubst <  /usr/share/nginx/html/assets/environment.js.template >  /usr/share/nginx/html/assets/environment.js

# Start NGINX
nginx -g 'daemon off;'