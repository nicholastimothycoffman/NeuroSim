import React from 'react'
import NodeLink from './NodeLink'
import RadialConnectome from './RadialConnectome'
import HeatmapSilhouette from './HeatmapSilhouette'
import LayeredNetwork from './LayeredNetwork'
import CortexSheet from './CortexSheet'

const AISystemDiagram = ({ data }) => {
        if (!data || !data.ai_modules) {
                return <div>Loading AI visualizations...</div>
        }

        return (
                <div className="bg-zinc-800 p-4 rounded-xl">
                        <h2 className="text-xl font-bold mb-4">AI System Representations</h2>

                        <div className="space-y-6">
                                <section>
                                        <h3 className="text-lg font-semibold mb-2">Node-Link Network</h3>
                                        <NodeLink modules={data.ai_modules} />
                                </section>

                               {/* <section>
                                        <h3 className="text-lg font-semibold mb-2">Radial Connectome</h3>
                                        <RadialConnectome modules={data.ai_modules} />
                                </section> */}

                              {/* <section>
                                        <h3 className="text-lg font-semibold mb-2">Heatmap over Silhouette</h3>
                                        <HeatmapSilhouette modules={data.ai_modules} />
                                </section> */}

                              {/* <section>
                                        <h3 className="text-lg font-semibold mb-2">Layered Neural Model</h3>
                                        <LayeredNetwork modules={data.ai_modules} />
                                </section> */}

                               {/* <section>
                                        <h3 className="text-lg font-semibold mb-2">Cortex-Like Folded Sheet</h3>
                                        <CortexSheet modules={data.ai_modules} />
                                </section> */}
                        </div>
                </div>
        )
}

export default AISystemDiagram
