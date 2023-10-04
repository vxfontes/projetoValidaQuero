import * as React from 'react';
import { ResponsiveBar } from '@nivo/bar';

interface BarChartProps {
    data: {
        month: string;
        ativos: number;
        inativos: number;
    }[];
}

const BarChart: React.FC<BarChartProps> = ({ data }) => {
    const customColors = ['#EA5455', '#213555'];

    return (
        <div style={{ height: '300px', width: '90%' }}>
            <ResponsiveBar
                data={data}
                keys={['ativos', 'inativos']}
                indexBy="month"
                margin={{ top: 50, right: 60, bottom: 50, left: 60 }}
                padding={0.3}
                layout="vertical"
                colors={customColors}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                }}
                labelSkipWidth={12}
                labelSkipHeight={12}
                labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                legends={[
                    {
                        dataFrom: 'keys',
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 120,
                        translateY: 0,
                        itemsSpacing: 2,
                        itemWidth: 100,
                        itemHeight: 20,
                        itemDirection: 'left-to-right',
                        itemOpacity: 0.85,
                        symbolSize: 20,
                    },
                ]}
            />
        </div>
    );
};

export default BarChart;