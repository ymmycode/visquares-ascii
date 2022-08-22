#include <fog_pars_fragment>

uniform float uTime;
uniform vec3 uWaveDepthColor;
uniform vec3 uWaveSurfaceColor;
uniform float uColorMultiplier;
uniform float uColorOffset;

in vec2 vUV;
in float vElevation;


void main()
{
    float mixedStrength = (vElevation + uColorOffset) * uColorMultiplier ;
    vec3 color = mix(uWaveDepthColor,
                    uWaveSurfaceColor, 
                    mixedStrength);

    // vec3 color = vec3(vUV, vElevation);

    gl_FragColor = vec4(color, 1.0);

    #include <fog_fragment>
}