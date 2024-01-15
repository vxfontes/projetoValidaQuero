import * as React from 'react';
import { ResponsivePie } from '@nivo/pie';

export interface PieChartProps {
    approved: number;
    rejected: number;
}

const PieChart: React.FC<PieChartProps> = ({ approved, rejected }) => {
    const customColors = ['#213555cf', '#ea5454'];
    const data = [
        { id: 'Aprovados', label: 'Aprovados', value: approved },
        { id: 'Reprovados', label: 'Reprovados', value: rejected },
    ];

    return (
        <div style={{ height: 300, marginBottom: -60, marginTop: -20 }}>
            <ResponsivePie
                data={data}
                margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                innerRadius={0.5}
                padAngle={0.7}
                cornerRadius={3}
                borderWidth={1}
                colors={customColors}
                borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
                enableArcLabels
                arcLinkLabelsColor={{ from: 'color' }}
                defs={[
                    {
                        id: 'dots',
                        type: 'patternDots',
                        background: 'inherit',
                        color: 'rgba(0, 0, 0, 0)',
                        size: 4,
                        padding: 1,
                        stagger: true,
                    },
                    {
                        id: 'lines',
                        type: 'patternLines',
                        background: 'inherit',
                        color: 'rgba(0, 0, 0, 0)',
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10,
                    },
                ]}
                fill={[
                    {
                        match: {
                            id: 'Aprovados',
                        },
                        id: 'dots',
                    },
                    {
                        match: {
                            id: 'Reprovados',
                        },
                        id: 'lines',
                    },
                ]}
            />
        </div>
    );
};

export default PieChart;
