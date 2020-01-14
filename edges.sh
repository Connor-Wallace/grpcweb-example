#! /bin/bash

# runs the pachyderm tutorial

pachctl create repo images

pachctl put file images@master:liberty.png -f http://imgur.com/46Q8nDz.png

pachctl create pipeline -f https://raw.githubusercontent.com/pachyderm/pachyderm/master/examples/opencv/edges.json

pachctl put file images@master:AT-AT.png -f http://imgur.com/8MN9Kg0.png
pachctl put file images@master:kitten.png -f http://imgur.com/g2QnNqa.png

pachctl create pipeline -f https://raw.githubusercontent.com/pachyderm/pachyderm/master/examples/opencv/montage.json