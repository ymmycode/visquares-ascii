import * as THREE from 'three'
import Experience from '../Experience'
import Logo from './Material/Logo'
import Strip from './Material/Strip.js'

export default class VisquareCube {

    constructor()
    {
        this.experience = new Experience()
        this.config = this.experience.config
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.time = this.experience.time
        this.debug = this.experience.debug

        this.materialSetup()
        this.setObject()
        this.debugObjects()
    }
  
    setObject()
    {
        this.cube = this.resources.items.logoModel.scene
        this.scale = .85
        this.cube.scale.set(this.scale, this.scale, this.scale)
        // this.cube.rotation.x =  -Math.PI * .125
        // this.cube.position.y = 7

        // front 
        this.front = this.cube.children.find(child => child.name === `Front`)
        this.front.material = this.frontMaterial.material

        // back
        this.back = this.cube.children.find(child => child.name === `Back`)
        this.back.material = this.stripMaterial.material

        // bottom
        this.bottom = this.cube.children.find(child => child.name === `Bottom`)
        this.bottom.material = this.stripMaterial.material

        // top
        this.top = this.cube.children.find(child => child.name === `Top`)
        this.top.material = this.stripMaterial.material

        // left 
        this.left = this.cube.children.find(child => child.name === `Left`)
        this.left.material = this.stripMaterial.material

        // right
        this.right = this.cube.children.find(child => child.name === `Right`)
        this.right.material = this.stripMaterial.material

        this.scene.add(this.cube)    
        this.debugObjects()
    }

    materialSetup()
    {
        this.frontMaterial = new Logo()
        this.stripMaterial = new Strip()
    }
  
    debugObjects()
    {
        if(this.debug)
        {
            // this.debugFolder = this.debug.addFolder('Cube')
        
            // this.debugFolder
            // .addColor(this.cube.material, 'color' )
        }
      
        
    }
  
    resize()
    {
    }
  
    update()
    {
        if(this.cube)
        {
            // this.cube.rotation.x += this.time.delta * 0.0001
            this.cube.rotation.y += this.time.delta * 0.0003
            this.cube.rotation.x = Math.cos(Math.sin(this.time.elapsed * - Math.PI * .25 *  0.002)) - 1
            this.cube.position.y = Math.cos(Math.sin(this.time.elapsed * 0.002)) + 2
            
            this.stripMaterial.uniforms.uTime.value = this.time.elapsed
        }
    }

}