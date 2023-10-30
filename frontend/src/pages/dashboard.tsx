import { FundoBackground } from "../components/background/fundoPrincipal";
import { FakeTemplatePendente } from '../data/fakeTemplatePendente';
import MainPageDashboard from '../templates/dashboard/dashboard';

const Dashboard = () => {

    const data = [
        {
            month: '123',
            ativos: 50,
            inativos: 20,
        },
        {
            month: 'asd',
            ativos: 50,
            inativos: 20,
        },
        {
            month: 'asld',
            ativos: 50,
            inativos: 20,
        },
        {
            month: 'Janeiro',
            ativos: 50,
            inativos: 20,
        },
        {
            month: 'Fevereiro',
            ativos: 60,
            inativos: 25,
        },
        {
            month: 'Março',
            ativos: 50,
            inativos: 20,
        },
        {
            month: 'Abril',
            ativos: 60,
            inativos: 25,
        },
        {
            month: 'Maio',
            ativos: 50,
            inativos: 20,
        },
        {
            month: 'Junho',
            ativos: 60,
            inativos: 25,
        },
    ];
    const arquivo = {
        aprovado: 40,
        recusado: 20
    }

    const ativo = {
        total: 130,
        value: 102
    }

    const pendente = {
        total: 130,
        value: 18
    }


    return (
        <FundoBackground container>
            <MainPageDashboard arquivo={arquivo} templates={FakeTemplatePendente} cardAtivo={ativo} cardPendente={pendente} templateData={data} />
        </FundoBackground >
    );
}

export default Dashboard;