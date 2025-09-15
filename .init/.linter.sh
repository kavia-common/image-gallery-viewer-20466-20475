#!/bin/bash
cd /home/kavia/workspace/code-generation/image-gallery-viewer-20466-20475/image_gallery_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

