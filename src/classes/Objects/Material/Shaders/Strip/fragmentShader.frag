#include <fog_pars_fragment>

uniform float uTime;
uniform float animationMultiplier;
uniform float tiling; 
uniform float direction;

in vec2 vUV;

void main()
{

  // float pos = vUV.x * tiling;
  float pos = mix(vUV.x, vUV.y, direction) * tiling;
  pos += uTime * animationMultiplier;

  gl_FragColor = vec4(floor(fract(pos) + 0.5), floor(fract(pos) + 0.5), floor(fract(pos) + 0.5),1.0);

  #include <fog_fragment>
}