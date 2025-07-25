import React from 'react'
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'

export default function ShaderBackground() {
  return (
    <ShaderGradientCanvas
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
      }}
    >
      <ShaderGradient
        control='query'
        urlString='https://www.shadergradient.co/customize?animate=on&axesHelper=on&bgColor1=%23000000&bgColor2=%23000000&brightness=1.6&cAzimuthAngle=60&cDistance=7.1&cPolarAngle=90&cameraZoom=16&color1=%23ff7152&color2=%231f5aff&color3=%23669cff&destination=onCanvas&embedMode=off&envPreset=dawn&format=gif&fov=45&frameRate=10&grain=off&http%3A%2F%2Flocalhost%3A3002%2Fcustomize%3Fanimate=on&lightType=3d&pixelDensity=0.4&positionX=0&positionY=-0.15&positionZ=0&range=disabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=0&rotationY=0&rotationZ=0&shader=defaults&type=sphere&uAmplitude=2&uDensity=1.5&uFrequency=5.5&uSpeed=0.2&uStrength=0.4&uTime=0&wireframe=false&zoomOut=false'
      />
    </ShaderGradientCanvas>
  )
}
