// to add: ripple: https://www.shadertoy.com/view/4djGzz
// mask
// convolution
// basic sdf shapes
// repeat
// iq color palletes
var glsl = require('glslify')

module.exports = {
  sharpen: {
    type: 'renderpass',
    inputs: [],
    frag: glsl('./shaders/sharpen.frag')
  }
}
