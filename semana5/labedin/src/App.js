import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import evai from './evai.jpg'
import sandech from './sandech.jpg'
import disys from './disys.jpg'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={evai} 
          nome="Evai" 
          descricao="Oi, eu sou o Evaí um profissional com Vivencia no setor, de logística, responsável por gerar e disponibilizar em rede relatórios sobre o fluxo de criação e modificação da base de dados.
           Responsável pela criação de rotas e itinerários via sistema. Monitoramento de toda a operação logística, analise documental, lançamento via sistema SAP MM, SAP PM e BPM. Gerenciamento dos relatórios de produtividade (KPI). Conhecimentos em linguagens de desenvolvimento na Web (HTML, JavaScript, e CSS).."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={sandech} 
          nome="sandech" 
          descricao="Atender as demandas da área nas rotinas administrativas, montar pasta de processos, manter documentos de prestadores atualizados,
           realizar negociação junto ao prestador, emitir correspondências, memorandos, relatórios e outros documentos,
            realizar fechamento mensal do sistema de contratos, receber, registrar e encaminhar as solicitações de serviços,
             efetuar cadastro em sistema, emitir pedidos, realizar cotações." 
        />
        
        <CardGrande 
          imagem={disys} 
          nome="Disys tecnologia" 
          descricao="Cadastro de materiais clientes e fornecedores no SAP. Criar rotas e itinerários no sistema para circulação da frota de veículos. 
          Gerar e disponibilizar relatórios sobre o fluxo de criação e modificação na base de dados. Inseri e atualizar dados bancários. " 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
