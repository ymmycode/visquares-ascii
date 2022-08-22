import * as THREE from 'three'
import Experience from './Experience.js'
import VisquareCube from './Objects/VisquareCube.js'
import Ocean from './Objects/Ocean.js'

export default class World
{
    constructor(_options)
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.config = this.experience.config
        this.resources = this.experience.resources

        this.scene.background = new THREE.Color(0,0,0)

        this.resources.on('groupEnd', (_group) =>
        {
            if(_group.name === 'base')
            {
                this.setFog()
                this.visCube = new VisquareCube()
                this.ocean = new Ocean()
            }
        })
    }

    setFog()
    {
        this.scene.fog = new THREE.Fog(0x000000, 8, 28)
    }

    resize()
    {
    }

    update()
    {
        if(this.visCube) this.visCube.update()
        if(this.ocean) this.ocean.update()
    }

    destroy()
    {
    }
}