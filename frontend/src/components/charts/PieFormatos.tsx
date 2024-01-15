import { ResponsivePie } from '@nivo/pie';


export interface PieChartProps {
    formato: string;
    quantidade: number;
}


const PieChartFormato = ({ data }: { data: PieChartProps[] }) => {
    const customColors = ['#213555cf', '#ea5454', '#4F709C'];
    const formattedData = data.map(item => ({
        id: item.formato,
        label: item.formato,
        value: item.quantidade,
    }));

    return (
        <div style={{ height: 300, marginBottom: -60, marginTop: -20 }}>
            <ResponsivePie
                data={formattedData}
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
            />
        </div>
    );
};

export default PieChartFormato;