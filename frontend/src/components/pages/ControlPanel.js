import React from 'react'
import ProjectDelete from '../auth/ProjectDelete'
import ProjectUpload from '../auth/ProjectUpload'

export default function ControlPanel() {
    return (
        <div>
    <ProjectUpload />
    <ProjectDelete />
        </div>
    )
}
