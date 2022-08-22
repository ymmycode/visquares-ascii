#include <fog_pars_vertex>

uniform float uTime;
uniform float animationMultiplier;

out vec2 vUV;

void main()
{
    #include <begin_vertex>
    #include <project_vertex>
    #include <fog_vertex>

    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

    gl_Position = projectedPosition;

    vUV = uv;
}