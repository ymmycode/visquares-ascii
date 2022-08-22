import * as THREE from 'three'
import Experience from '../../Experience'
import fragmentShader from '../Material/Shaders/Strip/fragmentShader.frag'
import vertexShader from '../Material/Shaders/Strip/vertexShader.vert'

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

    this.uniforms = THREE.UniformsUtils.merge( [
      THREE.UniformsLib[ 'fog' ],
      {
        uTime: {value: 0.0},
        animationMultiplier: {value: 0.002},
        tiling: {value: 1.1},
        direction: {value: 3.0}
      }
    ])

    // color palette
    this.material = new THREE.ShaderMaterial({
        uniforms: this.uniforms,
        fragmentShader: fragmentShader,
        vertexShader: vertexShader,
        fog: true, 
        transparent: true,
    })

    this.debugObjects()
  }

  debugObjects()
    {
        if(this.debug)
        {
            this.debugFolder = this.debug.addFolder('Strip Shader')
            this.debugFolder.add(this.uniforms.animationMultiplier, 'value', -10, 10, 0.0001).name('Animation Multiplier')
            this.debugFolder.add(this.uniforms.tiling, 'value', -10, 10, 0.0001).name('Tiling')
            this.debugFolder.add(this.uniforms.direction, 'value', -10, 10, 0.0001).name('Direction')
        }
      
        
    }
}