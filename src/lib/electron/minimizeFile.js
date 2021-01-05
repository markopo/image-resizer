const gm = require("gm").subClass({imageMagick: true});
const path = require('path');


module.exports = {
        minimizeFile: function (file) {
               console.log('minimizefile: ', file);

                // gm("sample_image.jpg")
                //     .resize(100, 100, ">")
                //     .write('resized_img_greater_than_100x100.jpg', function (err) {
                //         if(err) console.log(err);
                //         console.log("Done!")
                //     });

        }
};