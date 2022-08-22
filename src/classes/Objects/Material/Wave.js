import * as THREE from 'three'
import Experience from '../../Experience'
import fragmentShader from '../Material/Shaders/Wave/fragmentShader.frag'
import vertexShader from '../Material/Shaders/Wave/vertexShader.vert'

export default class Logo 
{
  constructor()
  {
    // experience   
    this.experience = new Experience()
    this.time = this.experience.time
    this.debug = this.experience.debug

    // resources
    this.resources = this.experience.resources

    this.debugProp = {
        // depthColor: `#0051ff` ,
        // surfaceColor:  `#9fd6ff` ,
        depthColor: `#010101` ,
        surfaceColor:  `#545454` ,
    }

    this.uniforms = THREE.UniformsUtils.merge( [
      THREE.UniformsLib[ 'fog' ],
      {
        uTime: {value: 0.0},
        animationMultiplier: {value: 0.0002},
        uBigWaveElevation: { value: 0.001 },
        uBigWaveFrequency: { value: new THREE.Vector2(8.0, 8.0) },
        uBigWaveSpeed: {  value: 3.7 },
  
        uSmallWaveElevation: { value: 0.8 },
        uSmallWaveFrequency: {  value: .34},
        uSmallWaveSpeed: {  value: .5 },
        // u_smallWaveIteration: { value: 3.0 },
  
        uWaveDepthColor: { value: new THREE.Color(this.debugProp.depthColor) },
        uWaveSurfaceColor: { value: new THREE.Color(this.debugProp.surfaceColor) },
        uColorOffset: { value: 0.1},
        uColorMultiplier: { value: 2.8},
      }
    ])

    // color palette
    this.material = new THREE.ShaderMaterial({
        uniforms: this.uniforms,
        fragmentShader: fragmentShader,
        vertexShader: vertexShader,
        transparent: true,
        fog: true,
        wireframe: true,
    })

    this.material.shading = THREE.SmoothShading

    this.debugObjects()
  }

  debugObjects()
  {
      if(this.debug)
      {
          this.debugFolder = this.debug.addFolder('Wave Shader')
          this.debugFolder.add(this.uniforms.animationMultiplier, 'value', -10, 10, 0.0001).name('Animation Multiplier')

          this.debugFolder
          .add(this.uniforms.uBigWaveElevation, `value`)
          .min(0.0001).max(0.5).step(0.001)
          .name(`Wave Elevation`)
              
          this.debugFolder
          .add(this.uniforms.uBigWaveFrequency.value, `x`)
          .min(0.1).max(10).step(0.001)
          .name(`Wave Frequency X`)
              
          this.debugFolder
          .add(this.uniforms.uBigWaveFrequency.value, `y`)
          .min(0.1).max(10).step(0.001)
          .name(`Wave Frequency Y`)
              
          this.debugFolder
          .add(this.uniforms.uBigWaveSpeed, `value`)
          .min(0.1).max(8).step(0.001)
          .name(`Wave Speed`)
              
          this.debugFolder
          .add(this.uniforms.uSmallWaveElevation, `value`)
          .min(0.01).max(1.0).step(0.001)
          .name(`Small Wave Elevation`)
              
          this.debugFolder
          .add(this.uniforms.uSmallWaveFrequency, `value`)
          .min(0.01).max(30.0).step(0.001)
          .name(`Small Wave Frequency`)
              
          this.debugFolder
          .add(this.uniforms.uSmallWaveSpeed, `value`)
          .min(0.01).max(4.0).step(0.001)
          .name(`Small Wave Speed`)
              
          this.debugFolder
          .addColor(this.debugProp, `depthColor`)
          .name(`Depth Color`)
          .onChange(() => { this.uniforms.uWaveDepthColor.value.set(this.debugProp.depthColor) })
              
          this.debugFolder
          .addColor(this.debugProp, `surfaceColor`)
          .name(`Surface Color`)
          .onChange(() => { this.uniforms.uWaveDepthColor.value.set(this.debugProp.surfaceColor) })
              
          this.debugFolder
          .add(this.uniforms.uColorOffset, `value`)
          .min(0.001).max(1.0).step(0.001)
          .name(`Color Offset`)
              
          this.debugFolder
          .add(this.uniforms.uColorMultiplier, `value`)
          .min(0.1).max(10.0).step(0.001)
          .name(`Color Multiplier`)
              

      }
  }
}