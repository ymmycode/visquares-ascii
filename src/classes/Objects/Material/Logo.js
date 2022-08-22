import * as THREE from 'three'
import Experience from '../../Experience'

export default class Logo 
{
  constructor()
  {
    // experience   
    this.experience = new Experience()

    // resources
    this.resources = this.experience.resources

    // color palette
    this.visLogo = this.resources.items.logoVis
    this.visLogo.flipY = false
    this.visLogo.flipY = false
    this.visLogo.encoding = THREE.sRGBEncoding
    this.material = new THREE.MeshBasicMaterial({
        map: this.visLogo,
        alphaMap: this.visLogo,
        transparent: true,
        fog: true,
    })

    // this.material = new THREE.MeshStandardMaterial({
    //     map: this.visLogo,
    //     transparent: true,
    // })
  }
}