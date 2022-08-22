import * as THREE from 'three'
import Experience from '../Experience'
import Wave from './Material/Wave.js'

export default class Ocean {

    constructor()
    {
        this.experience = new Experience()
        this.config = this.experience.config
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.time = this.experience.time
        this.debug = this.experience.debug

        this.materialSetup()
        this.objectSetup()
    }
  
    objectSetup()
    {
        this.oceanPlaneGeom = new THREE.PlaneBufferGeometry(50, 50, 50, 50)
        this.oceanPlaneGeom.computeVertexNormals(true)

        this.oceanPlaneMat = this.waveMaterial.material
        this.oceanPlaneMesh = new THREE.Mesh(this.oceanPlaneGeom, this.oceanPlaneMat)

        // rotation
        this.oceanPlaneMesh.rotation.x = - Math.PI / 2
        this.oceanPlaneMesh.rotation.z = Math.PI * 0.125


        this.scene.add(this.oceanPlaneMesh)
        
        this.debugObjects()
    }

    materialSetup()
    {
        this.waveMaterial = new Wave()
    }
  
    debugObjects()
    {
        if(this.debug)
        {
            
        }
      
        
    }
  
    resize()
    {
    }
  
    update()
    {
        if(this.oceanPlaneMesh) 
        {
            this.waveMaterial.uniforms.uTime.value = this.time.elapsed
        }
    }

}